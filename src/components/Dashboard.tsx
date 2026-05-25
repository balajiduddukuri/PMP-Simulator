import { motion } from 'motion/react';
import { DomainInfo, HistoryRecord } from '../types';
import { pmpEcoOutline } from '../data/questions';
import { Award, Layers, Users, Briefcase, ChevronRight, CheckCircle2, TrendingUp, BookOpen, ShieldAlert, Star, GraduationCap } from 'lucide-react';
import PPTXDownloadCard from './PPTXDownloadCard';

interface DashboardProps {
  history: HistoryRecord[];
  onNavigate: (tab: 'dashboard' | 'practice' | 'mock' | 'knowledge' | 'history' | 'study') => void;
}

export default function Dashboard({ history, onNavigate }: DashboardProps) {
  // Aggregate statistics
  const totalAttempts = history.length;
  const averageScore = totalAttempts > 0
    ? Math.round(history.reduce((sum, item) => sum + item.score, 0) / totalAttempts)
    : 0;

  const mockExamAttempts = history.filter((r) => r.totalQuestions === 180);
  const highestMockScore = mockExamAttempts.length > 0
    ? Math.max(...mockExamAttempts.map((r) => r.score))
    : null;

  // Domain icon resolver
  const getDomainIcon = (name: string) => {
    switch (name) {
      case 'People':
        return <Users className="h-5 w-5 text-indigo-600 font-medium" />;
      case 'Process':
        return <Layers className="h-5 w-5 text-blue-600 font-medium" />;
      default:
        return <Briefcase className="h-5 w-5 text-violet-600 font-medium" />;
    }
  };

  const getDomainTheme = (name: string) => {
    switch (name) {
      case 'People':
        return 'border-indigo-100/80 bg-indigo-50/30 text-indigo-950';
      case 'Process':
        return 'border-blue-100/80 bg-blue-50/30 text-slate-950';
      default:
        return 'border-violet-100/80 bg-violet-50/30 text-violet-950';
    }
  };

  // High-yield study tips
  const pmpCheatSheet = [
    { text: 'Assess options privately first. The Project Manager must always investigate root causes of conflicts directly before looking to external sponsors.', category: 'People' },
    { text: 'Analyze cost/schedule/quality impacts first whenever a change is proposed, before submitting requests to the Change Control Board (CCB).', category: 'Process' },
    { text: 'Servant Leadership. In adaptive frameworks, the PM/Scrum Master removes impediments, protects sustainable pacing, and supports team-led estimations.', category: 'People' },
    { text: 'GDPR, PCI-DSS, and safety compliance policies must be logged, translated to requirements (Definition of Done), and audited continuously.', category: 'Business' }
  ];

  return (
    <div className="space-y-8" id="portal-dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/25 rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm border border-slate-800">
        <div className="space-y-3 max-w-xl">
          <span className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
            Exam Prep Engine Live
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight font-sans">
            Scale the PMP Exam Content Outline
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Test your project management endurance with our <strong>180-Question Mock Simulator</strong> or isolate knowledge deficits with adaptive practice logs. Fully aligned with PMBOK 7th edition guide terms.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 font-mono text-xs w-full md:w-auto self-stretch md:self-auto uppercase">
          <button
            onClick={() => onNavigate('practice')}
            className="flex-1 bg-white hover:bg-slate-100 text-slate-950 font-bold px-5 py-4 rounded-xl transition-colors shadow-sm text-center cursor-pointer"
          >
            Target Practice
          </button>
          <button
            onClick={() => onNavigate('study')}
            className="flex-1 bg-slate-800/50 hover:bg-slate-800/80 text-white border border-slate-700/60 px-5 py-4 rounded-xl transition-colors shadow-sm text-center cursor-pointer"
          >
            Study Answers & Feedback
          </button>
          <button
            onClick={() => onNavigate('mock')}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-sm text-center cursor-pointer"
            id="quick-start-mock"
          >
            180q Mock Exam
          </button>
        </div>
      </div>

      {/* Dynamic Slide Deck Exporter */}
      <PPTXDownloadCard />

      {/* Diagnostics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Assessed sets</span>
            <span className="text-xl font-bold font-sans text-slate-950">{totalAttempts} reviews</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-100/50">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Average accuracy</span>
            <span className="text-xl font-bold font-sans text-slate-950">{averageScore}%</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100/50">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Mock High</span>
            <span className="text-xl font-bold font-sans text-slate-950">
              {highestMockScore !== null ? `${highestMockScore}%` : 'N/A'}
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
          <div className="w-11 h-11 bg-slate-50 text-slate-800 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Exam Readiness</span>
            <span className="text-xl font-bold font-sans text-slate-950">
              {averageScore >= 80 ? 'Excellent' : averageScore >= 70 ? 'Target Ready' : 'Studying'}
            </span>
          </div>
        </div>
      </div>

      {/* Main split: Domain breakdown & certified cheat list */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Domain core map */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-slate-950 font-sans">PMI ECO Domain weighting map</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              The PMP syllabus targets three discrete domains. Below is the question count packaged in your local study bank. Click Navigator to read PMP-specific operational advice for each domain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pmpEcoOutline.map((domain, index) => {
              const theme = getDomainTheme(domain.name);
              const icon = getDomainIcon(domain.name);

              return (
                <div
                  key={domain.name}
                  className={`border rounded-2xl p-5 flex flex-col justify-between space-y-4 ${theme}`}
                  id={`domain-overview-${index}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm shrink-0">
                        {icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">
                        {domain.percentage}% weight
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900 font-sans">{domain.name}</h3>
                      <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
                        {domain.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-slate-200/40 pt-3 text-[10px] font-mono flex justify-between uppercase">
                    <span>Tasks: {domain.tasksCount}</span>
                    <span className="font-bold text-slate-700">{domain.questionsCount} questions</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={() => onNavigate('knowledge')}
              className="text-blue-600 hover:text-blue-700 font-mono text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              Examine ECO Navigator <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* High yield tips */}
        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-5">
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-950 font-sans">Certified Study Cheat Sheet</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              High-impact situational rules. On the PMP exam, these principles are often direct discriminators.
            </p>
          </div>

          <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
            {pmpCheatSheet.map((tip, idx) => {
              let tagColor = 'bg-indigo-50 text-indigo-700 border-indigo-100/60';
              if (tip.category === 'Process') tagColor = 'bg-blue-50 text-blue-700 border-blue-100/60';
              if (tip.category === 'Business') tagColor = 'bg-violet-50 text-violet-700 border-violet-100/60';

              return (
                <div key={idx} className="bg-slate-50/50 p-4 border border-slate-100 rounded-xl space-y-2 font-sans" id={`cheat-tip-${idx}`}>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase tracking-wider border ${tagColor}`}>
                      {tip.category} Core
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-medium">Rule #{idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans">
                    {tip.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
