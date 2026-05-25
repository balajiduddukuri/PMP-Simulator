import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Question, HistoryRecord } from '../types';
import { allQuestions } from '../data/questions';
import { Award, CheckCircle, XCircle, ChevronRight, HelpCircle, RefreshCw, Layers, Compass, Star } from 'lucide-react';

interface PracticeModeProps {
  onSaveToHistory: (record: HistoryRecord) => void;
  onNavigateHome: () => void;
}

export default function PracticeMode({ onSaveToHistory, onNavigateHome }: PracticeModeProps) {
  // Filters
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [selectedMethodology, setSelectedMethodology] = useState<string>('All');
  const [practiceLength, setPracticeLength] = useState<number>(10);

  // Practice state
  const [practiceQuestions, setPracticeQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // index -> selectedOption
  const [isPracticeStarted, setIsPracticeStarted] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Clear error message when filters change
  useEffect(() => {
    setErrorMessage(null);
  }, [selectedDomain, selectedMethodology, practiceLength]);

  // Initialize practice set
  const startPractice = () => {
    let filtered = [...allQuestions];

    if (selectedDomain !== 'All') {
      filtered = filtered.filter((q) => q.domain === selectedDomain);
    }
    if (selectedMethodology !== 'All') {
      filtered = filtered.filter((q) => q.methodology === selectedMethodology);
    }

    // Shuffle questions
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(practiceLength, shuffled.length));

    if (selected.length === 0) {
      setErrorMessage(`No questions matched the selected combination of filters (${selectedDomain} / ${selectedMethodology}). Please adjust and try again.`);
      return;
    }

    setPracticeQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setStartTime(Date.now());
    setIsCompleted(false);
    setIsPracticeStarted(true);
  };

  const currentQuestion = practiceQuestions[currentIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: selectedOption }));
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < practiceQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(userAnswers[currentIndex + 1] !== undefined ? userAnswers[currentIndex + 1] : null);
      setIsAnswerSubmitted(userAnswers[currentIndex + 1] !== undefined);
    } else {
      // Completed!
      setIsCompleted(true);
      savePracticeResults();
    }
  };

  const savePracticeResults = () => {
    const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    const timeSpentStr = `${minutes}m ${seconds}s`;

    let correctCount = 0;
    const domainCounts = { People: 0, Process: 0, 'Business Environment': 0 };
    const domainCorrects = { People: 0, Process: 0, 'Business Environment': 0 };

    practiceQuestions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      const isCorrect = userAns === q.answerIndex;
      if (isCorrect) correctCount++;

      domainCounts[q.domain]++;
      if (isCorrect) domainCorrects[q.domain]++;
    });

    const getBreakdownStr = (domain: keyof typeof domainCounts) => {
      if (domainCounts[domain] === 0) return 'N/A';
      return `${domainCorrects[domain]}/${domainCounts[domain]} (${Math.round((domainCorrects[domain] / domainCounts[domain]) * 100)}%)`;
    };

    const finalScorePerc = Math.round((correctCount / practiceQuestions.length) * 100);

    const historyRecord: HistoryRecord = {
      id: `practice-${Date.now()}`,
      date: new Date().toISOString(),
      score: finalScorePerc,
      totalQuestions: practiceQuestions.length,
      correctCount: correctCount,
      domainBreakdown: {
        People: getBreakdownStr('People'),
        Process: getBreakdownStr('Process'),
        'Business Environment': getBreakdownStr('Business Environment')
      },
      timeSpent: timeSpentStr
    };

    onSaveToHistory(historyRecord);
  };

  const getOptionLetter = (idx: number) => {
    return ['A', 'B', 'C', 'D'][idx];
  };

  return (
    <div className="space-y-8" id="practice-mode-view">
      {!isPracticeStarted ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-8 max-w-2xl mx-auto shadow-sm space-y-8 animate-fade-in">
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 tracking-wider">Targeted Training</span>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 font-sans">
              Dynamic Practice Engine
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tailor a practice session by filtering targeted sub-sections. Practice sessions display instantaneous results and justifications for rapid knowledge acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <label className="text-xs font-mono font-semibold text-slate-700 block uppercase tracking-wider">Review Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">All Domains (Process, People, Business)</option>
                <option value="People">People (42% focus)</option>
                <option value="Process">Process (50% focus)</option>
                <option value="Business Environment">Business Environment (8% focus)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-semibold text-slate-700 block uppercase tracking-wider">Methodology Framework</label>
              <select
                value={selectedMethodology}
                onChange={(e) => setSelectedMethodology(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">All Methodologies</option>
                <option value="Agile">Agile (Adaptive)</option>
                <option value="Predictive">Predictive (Waterfall)</option>
                <option value="Hybrid">Hybrid Models</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-mono font-semibold text-slate-700 block uppercase tracking-wider">Practice Set Length</label>
              <div className="grid grid-cols-5 gap-3">
                {[5, 10, 15, 20, 30].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPracticeLength(num)}
                    className={`border font-mono text-sm py-2.5 rounded-xl transition-all font-semibold cursor-pointer ${
                      practiceLength === num
                        ? 'bg-blue-600 border-blue-700 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {num} Qs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-xs text-red-800 font-sans leading-relaxed animate-fade-in flex items-start gap-2.5">
              <span className="font-bold shrink-0 bg-red-850 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] select-none">!</span>
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-2xl p-4">
            <span className="text-xs text-slate-600 font-sans flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-500 shrink-0" /> Local study bank contains 180 curated questions.
            </span>
            <button
              onClick={startPractice}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs font-mono uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Initialize Set
            </button>
          </div>
        </div>
      ) : isCompleted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-slate-100 rounded-3xl p-8 max-w-xl mx-auto shadow-sm text-center space-y-8"
        >
          <div className="space-y-3">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-blue-100">
              <Award className="h-10 w-10" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-950 font-sans">
              Practice Complete!
            </h1>
            <p className="text-slate-500 text-sm">
              Your results are parsed and archived in the Performance Center log. Here is your quick score report.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 font-sans">
            <div>
              <span className="text-xs text-slate-500 block">Correct Choices</span>
              <span className="text-2xl font-bold text-slate-950">
                {Object.keys(userAnswers).filter((idx) => userAnswers[Number(idx)] === practiceQuestions[Number(idx)].answerIndex).length} / {practiceQuestions.length}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Mock Percentile</span>
              <span className="text-2xl font-bold text-blue-600">
                {Math.round(
                  (Object.keys(userAnswers).filter((idx) => userAnswers[Number(idx)] === practiceQuestions[Number(idx)].answerIndex).length / practiceQuestions.length) * 100
                )}%
              </span>
            </div>
          </div>

          <div className="flex gap-4 font-mono text-xs pt-4 border-t border-slate-100">
            <button
              onClick={() => setIsPracticeStarted(false)}
              className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-slate-200 py-3 rounded-xl transition-all cursor-pointer"
            >
              Configure New Set
            </button>
            <button
              onClick={onNavigateHome}
              className="flex-1 bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition-all cursor-pointer"
            >
              Return to Portal
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question core card */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl shadow-sm p-6 lg:p-8 space-y-6 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex gap-2">
                <span className="bg-slate-100 text-slate-850 px-3 py-1 rounded-lg text-xs font-mono font-semibold">
                  {currentQuestion.domain}
                </span>
                <span className="bg-blue-50 text-blue-700 border border-blue-100/50 px-3 py-1 rounded-lg text-xs font-mono font-semibold">
                  {currentQuestion.methodology}
                </span>
              </div>
              <span className="text-slate-500 text-xs font-mono font-medium">
                Question {currentIndex + 1} of {practiceQuestions.length}
              </span>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-400 block tracking-wider uppercase">
                {currentQuestion.task}
              </span>
              <h2 className="text-base font-medium text-slate-900 leading-relaxed font-sans">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-3 font-sans pt-4">
              {currentQuestion.options.map((opt, optIdx) => {
                const isSelected = selectedOption === optIdx;
                const isCorrect = currentQuestion.answerIndex === optIdx;

                let btnStyles = 'border-slate-200 hover:border-blue-200 bg-white text-slate-800';
                let dotStyles = 'border-slate-300 bg-white text-slate-500';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyles = 'border-emerald-200 bg-emerald-50/50 text-emerald-950 shadow-sm';
                    dotStyles = 'border-emerald-500 bg-emerald-500 text-white';
                  } else if (isSelected) {
                    btnStyles = 'border-rose-200 bg-rose-50/50 text-rose-950 shadow-sm';
                    dotStyles = 'border-rose-500 bg-rose-500 text-white';
                  } else {
                    btnStyles = 'border-slate-100 bg-slate-50 text-slate-400 opacity-60';
                    dotStyles = 'border-slate-200 bg-slate-100 text-slate-400';
                  }
                } else if (isSelected) {
                  btnStyles = 'border-blue-600 bg-blue-50/20 text-blue-900 shadow-sm';
                  dotStyles = 'border-blue-600 bg-blue-600 text-white font-bold';
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-xl border flex gap-4 transition-all text-sm leading-relaxed items-start cursor-pointer ${btnStyles}`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-xs font-mono shrink-0 flex items-center justify-center border font-semibold ${dotStyles}`}>
                      {isAnswerSubmitted && isCorrect ? <CheckCircle className="h-4 w-4" /> : isAnswerSubmitted && isSelected ? <XCircle className="h-4 w-4" /> : getOptionLetter(optIdx)}
                    </span>
                    <span className="text-slate-800 font-sans mt-0.5">{opt}</span>
                  </button>
                );
              })}
            </div>

            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-3 font-sans"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    PMP Explainer Log ({currentQuestion.task})
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-slate-100 font-mono text-xs">
              <button
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex((prev) => prev - 1);
                  setSelectedOption(userAnswers[currentIndex - 1]);
                  setIsAnswerSubmitted(true); // Backwards is always submitted
                }}
                className={`flex items-center gap-1 border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-3 rounded-xl transition-all font-semibold cursor-pointer ${
                  currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''
                }`}
              >
                Prev Question
              </button>

              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className={`bg-slate-950 hover:bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer ${
                    selectedOption === null ? 'opacity-40 cursor-not-allowed' : ''
                  }`}
                >
                  Verify Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                >
                  {currentIndex === practiceQuestions.length - 1 ? 'Finish review' : 'Next Question'} <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick tracker panel */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-6">
            <h3 className="text-sm font-semibold text-slate-950 font-sans">Progress Matrix</h3>
            <div className="grid grid-cols-5 gap-2">
              {practiceQuestions.map((_, idx) => {
                const isAnswered = userAnswers[idx] !== undefined;
                const isCorrect = isAnswered && userAnswers[idx] === practiceQuestions[idx].answerIndex;
                const isActive = currentIndex === idx;

                let styles = 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
                if (isActive) {
                  styles = 'bg-slate-950 border-slate-950 text-white ring-2 ring-blue-500';
                } else if (isAnswered) {
                  styles = isCorrect
                    ? 'bg-emerald-100/80 border-emerald-300 text-emerald-800 font-semibold'
                    : 'bg-rose-100/80 border-rose-300 text-rose-800 font-semibold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setSelectedOption(userAnswers[idx] !== undefined ? userAnswers[idx] : null);
                      setIsAnswerSubmitted(userAnswers[idx] !== undefined);
                    }}
                    className={`h-10 text-xs font-mono font-semibold rounded-xl border flex items-center justify-center transition-all cursor-pointer ${styles}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-4 text-xs space-y-3 font-sans">
              <div className="flex justify-between text-slate-600">
                <span>Completed:</span>
                <span className="font-mono font-bold text-slate-900">
                  {Object.keys(userAnswers).length} / {practiceQuestions.length}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Total Correct:</span>
                <span className="font-mono font-bold text-blue-600">
                  {Object.keys(userAnswers).filter((idx) => userAnswers[Number(idx)] === practiceQuestions[Number(idx)].answerIndex).length}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (confirm('Are you sure you want to quit this practice set? Current progress will not be logged.')) {
                  setIsPracticeStarted(false);
                }
              }}
              className="w-full text-center text-rose-600 bg-rose-50 border border-rose-100/60 rounded-xl py-2.5 hover:bg-rose-100 transition-colors text-xs font-mono font-medium cursor-pointer"
            >
              Quit Session
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
