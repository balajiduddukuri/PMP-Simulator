import { useState, useEffect } from 'react';
import { HistoryRecord } from './types';
import Dashboard from './components/Dashboard';
import PracticeMode from './components/PracticeMode';
import MockExamMode from './components/MockExamMode';
import KnowledgeBase from './components/KnowledgeBase';
import HistoryLogs from './components/HistoryLogs';
import StudyMode from './components/StudyMode';
import { Award, BookOpen, Layers, History, LayoutDashboard, GraduationCap, ClipboardList, BookMarked } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'practice' | 'mock' | 'knowledge' | 'history' | 'study'>('dashboard');
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pmp_exam_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse history logs:', err);
      }
    }
  }, []);

  const handleSaveToHistory = (record: HistoryRecord) => {
    setHistory((prev) => {
      const updated = [record, ...prev];
      localStorage.setItem('pmp_exam_history', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to delete all historical logs? This action is irreversible.')) {
      localStorage.removeItem('pmp_exam_history');
      setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans antialiased text-slate-800" id="main-applet">
      {/* Sticky Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 backdrop-blur-md/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setCurrentView('dashboard')} id="header-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-400 font-bold shrink-0 shadow-sm border border-slate-800">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase leading-none">
                SIMULATOR
              </span>
              <h1 className="text-base font-bold text-slate-900 tracking-tight font-sans">
                PMP Exam Prep Portal
              </h1>
            </div>
          </div>

          {/* Interactive tabs */}
          <nav className="hidden md:flex items-center gap-1 font-sans text-xs font-semibold" id="desktop-navbar">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'dashboard' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" /> Dashboard
            </button>
            <button
              onClick={() => setCurrentView('practice')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'practice' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <BookOpen className="h-4 w-4" /> Practice Sets
            </button>
            <button
              onClick={() => setCurrentView('mock')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'mock' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
              id="top-mock-button"
            >
              <ClipboardList className="h-4 w-4" /> 180q Simulator
            </button>
            <button
              onClick={() => setCurrentView('study')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'study' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <BookMarked className="h-4 w-4" /> Study Portal
            </button>
            <button
              onClick={() => setCurrentView('knowledge')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'knowledge' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <Layers className="h-4 w-4" /> ECO Navigator
            </button>
            <button
              onClick={() => setCurrentView('history')}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all ${
                currentView === 'history' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
              }`}
            >
              <History className="h-4 w-4" /> Study Logs
            </button>
          </nav>

          {/* User target ready score indicator tag in header */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-3.5 py-1.5 hidden lg:flex items-center gap-2">
            <Award className="h-4 w-4 text-emerald-800" />
            <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wide">
              MOCK BENCHMARK: PASS &gt;= 70%
            </span>
          </div>
        </div>

        {/* Mobile View Tab bar */}
        <div className="md:hidden border-t border-slate-100 px-4 py-2 bg-white flex justify-around font-sans text-[10px] font-semibold text-slate-600 overflow-x-auto gap-2" id="mobile-navbar">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'dashboard' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" /> Dashboard
          </button>
          <button
            onClick={() => setCurrentView('practice')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'practice' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" /> Practice
          </button>
          <button
            onClick={() => setCurrentView('mock')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'mock' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <ClipboardList className="h-3.5 w-3.5" /> Simulation
          </button>
          <button
            onClick={() => setCurrentView('study')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'study' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <BookMarked className="h-3.5 w-3.5" /> Study
          </button>
          <button
            onClick={() => setCurrentView('knowledge')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'knowledge' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <Layers className="h-3.5 w-3.5" /> Navigator
          </button>
          <button
            onClick={() => setCurrentView('history')}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
              currentView === 'history' ? 'text-slate-950 bg-slate-50' : 'text-slate-500 hover:text-slate-950'
            }`}
          >
            <History className="h-3.5 w-3.5" /> Logs
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {currentView === 'dashboard' && (
          <Dashboard history={history} onNavigate={setCurrentView} />
        )}
        {currentView === 'practice' && (
          <PracticeMode onSaveToHistory={handleSaveToHistory} onNavigateHome={() => setCurrentView('dashboard')} />
        )}
        {currentView === 'mock' && (
          <MockExamMode onSaveToHistory={handleSaveToHistory} onNavigateHome={() => setCurrentView('dashboard')} />
        )}
        {currentView === 'knowledge' && (
          <KnowledgeBase />
        )}
        {currentView === 'study' && (
          <StudyMode />
        )}
        {currentView === 'history' && (
          <HistoryLogs
            history={history}
            onClearHistory={handleClearHistory}
            onNavigateToPractice={() => setCurrentView('practice')}
            onNavigateToMock={() => setCurrentView('mock')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] font-mono text-slate-400">
          PMP® is a registered mark of the Project Management Institute, Inc. This application is designed solely for certification training.
        </div>
      </footer>
    </div>
  );
}
