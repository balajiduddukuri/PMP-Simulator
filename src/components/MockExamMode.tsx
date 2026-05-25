import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, ExamSession, HistoryRecord } from '../types';
import { allQuestions } from '../data/questions';
import { Clock, Play, Pause, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, CheckSquare, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';

interface MockExamModeProps {
  onSaveToHistory: (record: HistoryRecord) => void;
  onNavigateHome: () => void;
}

const TOTAL_MOCK_QUESTIONS = 180;
const EXAM_TIMEOUT_SECONDS = 230 * 60; // 230 minutes in seconds

export default function MockExamMode({ onSaveToHistory, onNavigateHome }: MockExamModeProps) {
  const [session, setSession] = useState<ExamSession | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'flagged' | 'unanswered' | 'answered'>('all');
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);

  // Break states (PMP contains 10-min breaks after Q60 and Q120)
  const [breakTimer, setBreakTimer] = useState<number>(0); // active break remaining seconds
  const [isBreakActive, setIsBreakActive] = useState<boolean>(false);
  const breakIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Timer reference
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start a new mock exam
  const handleStartExam = () => {
    // Standard PMP mock pulls exactly 180 questions (shuffled, but structured by domain counts: 76 People, 90 Process, 14 Business to match ECO)
    // In our database structure we have exactly 76 People questions, 90 Process, and 14 Business.
    // So allQuestions is already exactly 180 questions representing the ECO breakdown! We can shuffle it to make it organic.
    const shuffledExam = [...allQuestions].sort(() => 0.5 - Math.random());

    const initialSession: ExamSession = {
      questions: shuffledExam,
      userAnswers: {},
      flaggedQuestions: {},
      isCompleted: false,
      timeRemaining: EXAM_TIMEOUT_SECONDS,
      startTime: Date.now(),
      sectionsSeen: [false, false, false] // Section 1: 0-60, Section 2: 60-120, Section 3: 120-180
    };

    setSession(initialSession);
    setCurrentIndex(0);
    setIsTimerActive(true);
    setBreakTimer(0);
    setIsBreakActive(false);
  };

  // Main countdown timer effect
  useEffect(() => {
    if (isTimerActive && session && !session.isCompleted && !isBreakActive) {
      timerRef.current = setInterval(() => {
        setSession((prev) => {
          if (!prev) return null;
          if (prev.timeRemaining <= 1) {
            clearInterval(timerRef.current!);
            setIsTimerActive(false);
            handleSubmitExamExternal(prev);
            return { ...prev, timeRemaining: 0, isCompleted: true };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerActive, session?.isCompleted, isBreakActive]);

  // HandleBreak check on transitions
  // Breaks happen after processing question 60 and question 120 in the actual PMP exam
  const checkBreakTrigger = (targetIndex: number) => {
    if (!session) return false;

    // Trigger after crossing Q60 (actual index 60 represents question 61)
    if (currentIndex === 59 && targetIndex === 60 && !session.sectionsSeen[0]) {
      triggerBreak(0);
      return true;
    }
    // Trigger after crossing Q120
    if (currentIndex === 119 && targetIndex === 120 && !session.sectionsSeen[1]) {
      triggerBreak(1);
      return true;
    }

    return false;
  };

  const triggerBreak = (sectionIndex: number) => {
    setIsTimerActive(false);
    setIsBreakActive(true);
    setBreakTimer(10 * 60); // 10 minutes break

    setSession((prev) => {
      if (!prev) return null;
      const updatedSeen = [...prev.sectionsSeen];
      updatedSeen[sectionIndex] = true;
      return { ...prev, sectionsSeen: updatedSeen };
    });

    // Start break countdown
    breakIntervalRef.current = setInterval(() => {
      setBreakTimer((prev) => {
        if (prev <= 1) {
          endBreak();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const endBreak = () => {
    if (breakIntervalRef.current) clearInterval(breakIntervalRef.current);
    setIsBreakActive(false);
    setIsTimerActive(true);
    // Proceed to next question index
    setCurrentIndex((prev) => prev + 1);
  };

  const forceSkipBreak = () => {
    endBreak();
  };

  const handleSelectOption = (optIndex: number) => {
    if (!session || session.isCompleted || isBreakActive) return;
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: { ...prev.userAnswers, [currentIndex]: optIndex }
      };
    });
  };

  const handleToggleFlag = () => {
    if (!session || session.isCompleted || isBreakActive) return;
    setSession((prev) => {
      if (!prev) return null;
      const isFlagged = !prev.flaggedQuestions[currentIndex];
      return {
        ...prev,
        flaggedQuestions: { ...prev.flaggedQuestions, [currentIndex]: isFlagged }
      };
    });
  };

  const handleNavigateQuestion = (targetIndex: number) => {
    if (targetIndex < 0 || targetIndex >= TOTAL_MOCK_QUESTIONS) return;

    // Check for break transition
    const didTriggerBreak = checkBreakTrigger(targetIndex);
    if (didTriggerBreak) return;

    setCurrentIndex(targetIndex);
  };

  // Standard submit logic
  const handleSubmitConfirmTrigger = () => {
    setShowSubmitConfirm(true);
  };

  const handleSubmitExamExternal = (currentSession: ExamSession) => {
    // Process core scoring
    const elapsedSeconds = EXAM_TIMEOUT_SECONDS - currentSession.timeRemaining;
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    const timeSpentStr = `${hours}h ${minutes}m ${seconds}s`;

    let correctCount = 0;
    const domainCounts = { People: 0, Process: 0, 'Business Environment': 0 };
    const domainCorrects = { People: 0, Process: 0, 'Business Environment': 0 };

    currentSession.questions.forEach((q, idx) => {
      const userAns = currentSession.userAnswers[idx];
      const isCorrect = userAns === q.answerIndex;
      if (isCorrect) correctCount++;

      domainCounts[q.domain]++;
      if (isCorrect) domainCorrects[q.domain]++;
    });

    const getBreakdownStr = (domain: keyof typeof domainCounts) => {
      return `${domainCorrects[domain]}/${domainCounts[domain]} (${Math.round((domainCorrects[domain] / domainCounts[domain]) * 100)}%)`;
    };

    const finalScorePerc = Math.round((correctCount / TOTAL_MOCK_QUESTIONS) * 105) / 105; // standard scaling helper
    const roundedScore = Math.round((correctCount / TOTAL_MOCK_QUESTIONS) * 100);

    const historyRecord: HistoryRecord = {
      id: `mock-${Date.now()}`,
      date: new Date().toISOString(),
      score: roundedScore,
      totalQuestions: TOTAL_MOCK_QUESTIONS,
      correctCount: correctCount,
      domainBreakdown: {
        People: getBreakdownStr('People'),
        Process: getBreakdownStr('Process'),
        'Business Environment': getBreakdownStr('Business Environment')
      },
      timeSpent: timeSpentStr
    };

    // Save
    onSaveToHistory(historyRecord);
    setSession((prev) => {
      if (!prev) return null;
      return { ...prev, isCompleted: true };
    });
    setIsTimerActive(false);
  };

  const getOptionLetter = (idx: number) => {
    return ['A', 'B', 'C', 'D'][idx];
  };

  const formatTime = (secondsTotal: number) => {
    const hours = Math.floor(secondsTotal / 3600);
    const mins = Math.floor((secondsTotal % 3600) / 60);
    const secs = secondsTotal % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Filtering visible questions in grid lookup
  const getFilteredQuestionIndices = () => {
    if (!session) return [];
    const indices: number[] = [];
    for (let i = 0; i < TOTAL_MOCK_QUESTIONS; i++) {
      const isAnswered = session.userAnswers[i] !== undefined;
      const isFlagged = session.flaggedQuestions[i] === true;

      if (activeTab === 'all') indices.push(i);
      else if (activeTab === 'flagged' && isFlagged) indices.push(i);
      else if (activeTab === 'unanswered' && !isAnswered) indices.push(i);
      else if (activeTab === 'answered' && isAnswered) indices.push(i);
    }
    return indices;
  };

  return (
    <div className="space-y-8" id="mock-exam-mode-view">
      {!session ? (
        // Start Panel Screen
        <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-3xl mx-auto shadow-sm space-y-8" id="exam-dashboard-pre">
          <div className="border-b border-slate-50 pb-6 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Official Testing Hall</span>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 font-sans">
              180-Question Mock Exam Simulator
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              This simulator replicates the certified PMP examination constraints. Testing parameters include <strong>230-minute timer limit, 180 questions across all domains, and 2 structural breaks of 10 minutes</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">Structure Bounds</span>
                <h3 className="text-sm font-semibold text-slate-950 font-sans mb-1">180 Questions</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Proportionally weighted: Process (50%), People (42%), Business Environment (8%) to perfectly mimic actual exam sheets.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">Duration Rules</span>
                <h3 className="text-sm font-semibold text-slate-950 font-sans mb-1">230 Minutes Limit</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  A strict countdown timer of 3 hours and 50 minutes monitors your pacing. Supports full pause option.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100/80 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">Break Rules</span>
                <h3 className="text-sm font-semibold text-slate-950 font-sans mb-1">10-Min Breaks</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Sub-divided into 3 sessions of 60 questions. The simulator pauses and prompts you for rest periods.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100/80 rounded-2xl p-5 flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-blue-950 uppercase tracking-widest">Verification Integrity Checked</h4>
              <p className="text-blue-900/90 text-xs leading-relaxed font-normal">
                Starting this mock requires dedicated workspace commitment. We recommend minimizing distractions to build real-exam endurance.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-between items-center font-mono text-xs">
            <button
              onClick={onNavigateHome}
              className="text-slate-600 border border-slate-200 hover:bg-slate-50 font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              Back to Portal
            </button>
            <button
              onClick={handleStartExam}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
              id="start-mock-btn"
            >
              Acknowledge & Launch
            </button>
          </div>
        </div>
      ) : session.isCompleted ? (
        // Score Report Screen
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white border border-slate-100 rounded-3xl p-8 max-w-2xl mx-auto shadow-sm space-y-8"
          id="mock-exam-results-screen"
        >
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-inner border border-blue-750">
              <CheckSquare className="h-8 w-8" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-950 font-sans">
              Exam Submission Finalized
            </h1>
            <p className="text-slate-500 text-sm">
              Congratulations! Your attempt has been processed. Here is your official PMI benchmark score.
            </p>
          </div>

          {/* Large diagnostic scores */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="text-center border-r border-slate-200">
              <span className="text-xs text-slate-500 uppercase font-mono tracking-wider block">Raw Score</span>
              <span className="text-2xl font-bold font-sans text-slate-900">
                {Object.keys(session.userAnswers).filter((idx) => session.userAnswers[Number(idx)] === session.questions[Number(idx)].answerIndex).length} / 180
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs text-slate-500 uppercase font-mono tracking-wider block">Benchmark Percent</span>
              <span className={`text-2xl font-bold font-sans ${
                Math.round((Object.keys(session.userAnswers).filter((idx) => session.userAnswers[Number(idx)] === session.questions[Number(idx)].answerIndex).length / 180) * 100) >= 70
                  ? 'text-emerald-600'
                  : 'text-amber-600'
              }`}>
                {Math.round(
                  (Object.keys(session.userAnswers).filter((idx) => session.userAnswers[Number(idx)] === session.questions[Number(idx)].answerIndex).length / 180) * 100
                )}%
              </span>
            </div>
          </div>

          {/* Domain Breakdown reports */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 px-1">Domain Proficiency Metrics</h3>
            <div className="space-y-2 font-sans">
              {['People', 'Process', 'Business Environment'].map((domain) => {
                const domainQuestions = session.questions.filter((q) => q.domain === domain);
                const domainCorrect = domainQuestions.filter((q) => {
                  const originalIndex = session.questions.indexOf(q);
                  return session.userAnswers[originalIndex] === q.answerIndex;
                });
                const percentage = Math.round((domainCorrect.length / domainQuestions.length) * 100);

                let level = 'Needs Improvement';
                let progressColor = 'bg-rose-500';
                if (percentage >= 80) {
                  level = 'Above Target';
                  progressColor = 'bg-emerald-500';
                } else if (percentage >= 70) {
                  level = 'Target';
                  progressColor = 'bg-indigo-500';
                } else if (percentage >= 60) {
                  level = 'Below Target';
                  progressColor = 'bg-amber-500';
                }

                return (
                  <div key={domain} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between items-center gap-4 text-sm">
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-900">{domain}</span>
                        <span className="text-slate-600 font-mono text-xs">{percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className={`h-full ${progressColor}`} style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">Verdict</span>
                      <span className="font-semibold text-slate-800 text-xs">{level}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-semibold text-slate-950 font-sans">Full Question Explanatory Audit</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Below is the comprehensive list of 180 questions with your selected keys. Correct keys are highlighted in emerald. Take time to study custom justifications for missed questions!
            </p>

            <div className="space-y-6 max-h-[450px] overflow-y-auto border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
              {session.questions.map((q, idx) => {
                const userChoice = session.userAnswers[idx];
                const isCorrect = userChoice === q.answerIndex;

                return (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 space-y-3" id={`review-card-${idx}`}>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-slate-500">Q{idx + 1} - {q.domain}</span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-rose-100 text-rose-800 border border-rose-200'
                      }`}>
                        {isCorrect ? 'Correct' : 'Missed'}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-slate-900 leading-relaxed font-semibold">
                      {q.question}
                    </p>
                    <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`p-2 rounded-md ${
                            q.answerIndex === oIdx
                              ? 'bg-emerald-50 text-emerald-950 font-semibold border-l-4 border-emerald-500'
                              : userChoice === oIdx
                              ? 'bg-rose-50 text-rose-950 border-l-4 border-rose-500'
                              : 'bg-slate-50'
                          }`}
                        >
                          {getOptionLetter(oIdx)}. {opt}
                        </div>
                      ))}
                    </div>
                    <div className="bg-emerald-50/50 p-3 rounded-lg border border-emerald-100 text-[11px] text-slate-700 leading-relaxed">
                      <span className="font-bold text-emerald-900 tracking-wide uppercase text-[9px] block mb-1">PMP Justification:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 font-mono text-xs pt-4 border-t border-slate-100">
            <button
              onClick={handleStartExam}
              className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200 py-3 rounded-xl transition-all"
            >
              Restart Mock Exam
            </button>
            <button
              onClick={onNavigateHome}
              className="flex-1 bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition-all"
            >
              Return Home
            </button>
          </div>
        </motion.div>
      ) : isBreakActive ? (
        // Standard PMP break period (locks inputs and counts down)
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 text-white rounded-3xl p-8 max-w-xl mx-auto shadow-xl text-center space-y-6 border border-slate-800"
          id="pmp-break-panel"
        >
          <div className="w-16 h-16 bg-slate-850 text-blue-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-slate-850">
            <Clock className="h-8 w-8 animate-pulse" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-blue-400 tracking-widest uppercase">Official Exam Break</span>
            <h2 className="text-xl font-semibold tracking-tight font-sans">10-Minute Intermission Period</h2>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto font-normal">
              You’ve reached a milestone section boundary. This break period halts your main countdown timer. Take a moment to stretch, step away, or relax.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 max-w-xs mx-auto text-center border border-slate-705">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">Returning in</span>
            <span className="text-3xl font-bold font-mono text-blue-300">
              {Math.floor(breakTimer / 60)}:{(breakTimer % 60).toString().padStart(2, '0')}
            </span>
          </div>

          <div className="flex justify-center pt-4 border-t border-slate-800">
            <button
              onClick={forceSkipBreak}
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-semibold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Skip Break & Resume
            </button>
          </div>
        </motion.div>
      ) : (
        // Live Exam Taking Screen
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Question Interface */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl shadow-sm p-6 lg:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="bg-slate-950 text-white px-3 py-1 rounded-lg text-xs font-mono font-semibold">
                  Section Question {currentIndex + 1}
                </span>
                <span className="text-xs text-slate-500 font-mono font-medium">
                  {session.questions[currentIndex].domain} / {session.questions[currentIndex].methodology}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <button
                  onClick={handleToggleFlag}
                  className={`flex items-center gap-1.5 font-semibold cursor-pointer ${
                    session.flaggedQuestions[currentIndex] ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {session.flaggedQuestions[currentIndex] ? (
                    <>
                      <BookmarkCheck className="h-4 w-4 text-blue-600 fill-blue-600" /> Flagged
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-4 w-4" /> Flag for Review
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 block tracking-wider uppercase">
                {session.questions[currentIndex].task}
              </span>
              <h2 className="text-base font-medium text-slate-900 leading-relaxed font-sans">
                {session.questions[currentIndex].question}
              </h2>
            </div>

            <div className="space-y-3 font-sans pt-4">
              {session.questions[currentIndex].options.map((opt, optIdx) => {
                const isSelected = session.userAnswers[currentIndex] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border flex gap-4 transition-all text-sm leading-relaxed items-start cursor-pointer ${
                      isSelected
                        ? 'border-blue-650 bg-blue-50/20 text-slate-900 font-semibold'
                        : 'border-slate-200 hover:border-blue-250 bg-white text-slate-800'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-xs font-mono shrink-0 flex items-center justify-center border font-semibold ${
                      isSelected ? 'border-blue-600 bg-blue-600 text-white font-bold' : 'border-slate-300 bg-white text-slate-400'
                    }`}>
                      {getOptionLetter(optIdx)}
                    </span>
                    <span className="text-slate-800 font-sans mt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-slate-100 font-mono text-xs">
              <button
                disabled={currentIndex === 0}
                onClick={() => handleNavigateQuestion(currentIndex - 1)}
                className={`flex items-center gap-1 border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-3 rounded-xl transition-all font-semibold ${
                  currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>

              <button
                onClick={() => {
                  if (currentIndex === TOTAL_MOCK_QUESTIONS - 1) {
                    handleSubmitConfirmTrigger();
                  } else {
                    handleNavigateQuestion(currentIndex + 1);
                  }
                }}
                className="bg-slate-950 hover:bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
              >
                {currentIndex === TOTAL_MOCK_QUESTIONS - 1 ? 'Finish review & Submit' : 'Next'} <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Interactive sidebar grid navigation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm space-y-4 border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span className="text-xs font-mono text-slate-300">Time Remaining</span>
                </div>
                <button
                  onClick={() => setIsTimerActive(!isTimerActive)}
                  className="bg-slate-800 hover:bg-slate-750 p-2 rounded-xl border border-slate-700 text-slate-200 select-none cursor-pointer"
                  title={isTimerActive ? 'Pause Timer' : 'Resume Timer'}
                  type="button"
                >
                  {isTimerActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
              </div>
              <div className="text-2xl font-bold font-mono tracking-wider text-blue-300">
                {formatTime(session.timeRemaining)}
              </div>
              {!isTimerActive && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex gap-2 text-xs text-amber-250">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  <span>The test controls are paused. Resume timer to interact.</span>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-950 font-sans">Exam Sheet Map</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Completed answers are saved in real-time. Navigate dynamically across all 180 questions. This maps directly to certification software.
                </p>
              </div>

              {/* Navigation Filters */}
              <div className="flex border-b border-slate-100 pb-2 gap-2 text-[10px] font-mono font-semibold">
                {(['all', 'flagged', 'unanswered', 'answered'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-1 px-1 border-b-2 capitalize transition-all cursor-pointer ${
                      activeTab === tab ? 'border-blue-600 text-slate-950 font-bold' : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-1.5 max-h-[250px] overflow-y-auto pr-1">
                {getFilteredQuestionIndices().map((idx) => {
                  const isAnswered = session.userAnswers[idx] !== undefined;
                  const isFlagged = session.flaggedQuestions[idx] === true;
                  const isActive = currentIndex === idx;

                  let borderStyles = 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50';
                  if (isActive) {
                    borderStyles = 'bg-slate-950 border-slate-950 text-white font-bold ring-2 ring-blue-500';
                  } else if (isFlagged) {
                    borderStyles = 'bg-orange-50 border-orange-250 text-orange-900 font-semibold';
                  } else if (isAnswered) {
                    borderStyles = 'bg-blue-50/40 border-blue-200/60 text-blue-900 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavigateQuestion(idx)}
                      disabled={!isTimerActive}
                      title={`Question ${idx + 1}`}
                      className={`h-9 text-[11px] font-mono rounded-lg border flex items-center justify-center transition-all cursor-pointer ${borderStyles}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-3 text-[11px] text-slate-500 font-sans">
                <div className="flex justify-between">
                  <span>Progress Checked:</span>
                  <span className="font-mono font-bold text-slate-900">{Object.keys(session.userAnswers).length} / 180</span>
                </div>
                <div className="flex justify-between">
                  <span>Flagged items:</span>
                  <span className="font-mono font-bold text-blue-600">
                    {Object.keys(session.flaggedQuestions).filter((k) => session.flaggedQuestions[Number(k)]).length}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs pt-2">
                <button
                  onClick={handleSubmitConfirmTrigger}
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Submit Final Exam
                </button>
                <button
                  onClick={() => setShowExitConfirm(true)}
                  className="w-full text-center bg-slate-50 border border-slate-150 hover:bg-slate-100 text-slate-700 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Exit Exam Center
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exit confirmation modal */}
      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-100 shadow-xl space-y-6 text-center font-sans"
            >
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-950">Confirm Early Execution Exit</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Exiting the exam center now terminates your current test instance. Unfinished attempts are not captured in the study logs.
                </p>
              </div>
              <div className="flex gap-3 font-mono text-xs">
                <button
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 border border-slate-200 py-2.5 rounded-xl transition-all font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowExitConfirm(false);
                    setSession(null);
                  }}
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Confirm Exit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Submit confirmation modal */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in-backdrop">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 max-w-sm w-full border border-slate-100 shadow-xl space-y-6 text-center font-sans"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto border border-blue-100/50">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-950">Confirm Final Exam Submission</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  You have completed <strong>{Object.keys(session?.userAnswers || {}).length} out of 180 questions</strong>. Are you fully prepared to lock in and review your diagnostic report?
                </p>
              </div>
              <div className="flex gap-3 font-mono text-xs">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 border border-slate-200 py-2.5 rounded-xl transition-all font-semibold cursor-pointer"
                >
                  Review Questions
                </button>
                <button
                  onClick={() => {
                    setShowSubmitConfirm(false);
                    if (session) handleSubmitExamExternal(session);
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
                >
                  Lock & Submit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
