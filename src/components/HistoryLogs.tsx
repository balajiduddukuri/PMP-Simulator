import { motion } from 'motion/react';
import { HistoryRecord } from '../types';
import { ClipboardList, Calendar, Award, Trash2, Clock, CheckCircle, BrainCircuit } from 'lucide-react';

interface HistoryLogsProps {
  history: HistoryRecord[];
  onClearHistory: () => void;
  onNavigateToPractice: () => void;
  onNavigateToMock: () => void;
}

export default function HistoryLogs({
  history,
  onClearHistory,
  onNavigateToPractice,
  onNavigateToMock
}: HistoryLogsProps) {
  const getScoreVerdict = (score: number) => {
    if (score >= 80) return { label: 'Above Target', color: 'text-emerald-700 bg-emerald-50 border-emerald-100' };
    if (score >= 70) return { label: 'Target', color: 'text-blue-750 bg-blue-50 border-blue-100' };
    if (score >= 60) return { label: 'Below Target', color: 'text-amber-700 bg-amber-50 border-amber-100/70' };
    return { label: 'Needs Improvement', color: 'text-rose-700 bg-rose-55 border-rose-100' };
  };

  return (
    <div className="space-y-8" id="history-logs-view">
      <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 font-sans">
              Performance Center & Logs
            </h1>
          </div>
          <p className="text-slate-500 max-w-2xl leading-relaxed text-sm">
            Review detailed reports of your finished training attempts. Accuracy reports are automatically organized into standard PMI certification benchmarks.
          </p>
        </div>
        {history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="flex items-center gap-2 text-rose-600 hover:text-rose-700 text-xs font-mono font-semibold border border-rose-100 rounded-xl px-4 py-2 hover:bg-rose-50 transition-colors cursor-pointer"
          >
            <Trash2 className="h-4 w-4" /> Clear Logs
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center max-w-lg mx-auto shadow-sm space-y-6">
          <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100/50">
            <BrainCircuit className="h-8 w-8 text-slate-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-950 font-sans">No exam attempts found yet</h3>
            <p className="text-slate-500 text-xs leading-relaxed font-normal">
              Start with diagnostic practice sets or load our comprehensive 180-question mock exam to test your project management skills!
            </p>
          </div>
          <div className="flex justify-center gap-3 font-mono text-xs">
            <button
              onClick={onNavigateToPractice}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors cursor-pointer"
            >
              Start Practice Set
            </button>
            <button
              onClick={onNavigateToMock}
              className="bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors cursor-pointer"
            >
              Start 180q Mock Exam
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Completed sets</span>
                <span className="text-2xl font-bold font-sans text-slate-950">{history.length} attempts</span>
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Average accuracy</span>
                <span className="text-2xl font-bold font-sans text-slate-950">
                  {Math.round(history.reduce((sum, item) => sum + item.score, 0) / history.length)}%
                </span>
              </div>
            </div>

            <div className="bg-white p-6 border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-605 flex items-center justify-center shrink-0 border border-slate-100/80">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Last attempt</span>
                <span className="text-sm font-semibold font-sans text-slate-800 block truncate">
                  {new Date(history[0].date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-slate-950 font-sans px-1">Study Log History</h2>
            {history.map((record, index) => {
              const verdict = getScoreVerdict(record.score);
              return (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6"
                  id={`history-row-${record.id}`}
                >
                  <div className="space-y-2 lg:max-w-xs">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(record.date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 font-sans">
                      {record.totalQuestions === 180 ? 'Full Mock Exam (180 questions)' : `Custom Practice Set (${record.totalQuestions} questions)`}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <Clock className="h-3.5 w-3.5" /> Time Spent: {record.timeSpent}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1 max-w-xl">
                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Score</span>
                      <span className="text-lg font-bold font-sans text-slate-900">{record.correctCount}/{record.totalQuestions}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">People</span>
                      <span className="text-sm font-bold font-mono text-slate-800">{record.domainBreakdown.People}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Process</span>
                      <span className="text-sm font-bold font-mono text-slate-800">{record.domainBreakdown.Process}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl text-center">
                      <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Business Env</span>
                      <span className="text-sm font-bold font-mono text-slate-800">{record.domainBreakdown['Business Environment']}</span>
                    </div>
                  </div>

                  <div className="flex items-center lg:justify-end shrink-0">
                    <div className={`px-4 py-2 rounded-xl text-xs font-semibold border ${verdict.color}`}>
                      {verdict.label} ({record.score}%)
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
