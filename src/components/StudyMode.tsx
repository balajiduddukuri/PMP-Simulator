import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  Users,
  Briefcase,
  HelpCircle,
  Award,
  BookMarked,
  Sparkles,
  LayoutGrid,
  List,
  Compass
} from 'lucide-react';
import { Question } from '../types';
import { allQuestions } from '../data/questions';

export default function StudyMode() {
  // Questions array
  const questions: Question[] = useMemo(() => allQuestions, []);

  // UI State
  const [viewType, setViewType] = useState<'focused' | 'list'>('focused');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [selectedMethodology, setSelectedMethodology] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0); // For focused view

  // Progress/Mastery tracking
  const [masteredIds, setMasteredIds] = useState<number[]>([]);

  // Load mastered questions on mount
  useEffect(() => {
    const saved = localStorage.getItem('pmp_mastered_questions');
    if (saved) {
      try {
        setMasteredIds(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse mastered questions:', err);
      }
    }
  }, []);

  const toggleMastered = (id: number) => {
    setMasteredIds((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      localStorage.setItem('pmp_mastered_questions', JSON.stringify(updated));
      return updated;
    });
  };

  // Filter questions dynamically
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch =
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.options.some((opt) => opt.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDomain = selectedDomain === 'all' || q.domain === selectedDomain;
      const matchesMethodology = selectedMethodology === 'all' || q.methodology === selectedMethodology;

      return matchesSearch && matchesDomain && matchesMethodology;
    });
  }, [questions, searchTerm, selectedDomain, selectedMethodology]);

  // Adjust current index if it goes out of bounds after filtering
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions, currentIndex]);

  const activeQuestion = filteredQuestions[currentIndex] || null;

  // Statistics trackers
  const stats = useMemo(() => {
    const totalCount = questions.length;
    const masteredCount = masteredIds.length;
    const peopleCount = questions.filter(q => q.domain === 'People').length;
    const processCount = questions.filter(q => q.domain === 'Process').length;
    const businessCount = questions.filter(q => q.domain === 'Business Environment').length;

    const peopleMastered = questions.filter(q => q.domain === 'People' && masteredIds.includes(q.id)).length;
    const processMastered = questions.filter(q => q.domain === 'Process' && masteredIds.includes(q.id)).length;
    const businessMastered = questions.filter(q => q.domain === 'Business Environment' && masteredIds.includes(q.id)).length;

    return {
      totalCount,
      masteredCount,
      masteryPercent: totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0,
      domains: {
        People: { total: peopleCount, mastered: peopleMastered },
        Process: { total: processCount, mastered: processMastered },
        'Business Environment': { total: businessCount, mastered: businessMastered }
      }
    };
  }, [questions, masteredIds]);

  // Helpers
  const getOptionLetter = (idx: number) => {
    return ['A', 'B', 'C', 'D'][idx];
  };

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'People':
        return <Users className="h-4 w-4 text-indigo-500 shrink-0" />;
      case 'Process':
        return <Layers className="h-4 w-4 text-blue-500 shrink-0" />;
      case 'Business Environment':
        return <Briefcase className="h-4 w-4 text-violet-500 shrink-0" />;
      default:
        return <Compass className="h-4 w-4 text-slate-500 shrink-0" />;
    }
  };

  const handleNextFocused = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevFocused = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-8" id="study-explanations-portal">
      {/* 1. Welcoming Title Header Banner */}
      <div className="border border-slate-100 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-8 w-8 text-blue-600 shrink-0" />
              <div className="bg-blue-500/10 border border-blue-400/20 text-blue-700 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                Full 180q Answer Sheet Mode
              </div>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
              Study & Explanations Portal
            </h1>
            <p className="text-slate-500 max-w-3xl leading-relaxed text-sm">
              Explore the entire 180-question mock exam bank with complete transparency. Every correct answer is pre-highlighted with the certified operational reasoning and domain mappings made visible instantly. Excellent for targeted review and build-up.
            </p>
          </div>

          {/* Mastered Progress Dial Banner */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-2xl text-white font-mono shrink-0 shadow-sm border border-slate-800 w-full md:w-auto text-left min-w-56 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-semibold">Mastery Scorecard</span>
              <BookMarked className="h-4 w-4 text-blue-400 shrink-0" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-slate-50">{stats.masteredCount}</span>
              <span className="text-slate-500 text-xs">/ {stats.totalCount} mastered</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${stats.masteryPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] text-slate-500 font-semibold uppercase tracking-wider">
                <span>{stats.masteryPercent}% Complete</span>
                <span>Active Study logs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Search, Filtration, and Layout Control Toolbar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search phrase */}
          <div className="relative w-full lg:w-96 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.value ?? e.target.value)}
              placeholder="Search concepts, explanations, keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/80 bg-slate-50/30 text-xs text-slate-800 outline-none focus:border-blue-500 focus:bg-white transition-all font-sans"
              id="study-keyword-search"
            />
          </div>

          {/* Filtration select tabs */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Domain Filter */}
            <div className="flex items-center gap-1.5 shrink-0 bg-slate-50 border border-slate-100 rounded-xl px-2.5 py-1">
              <Filter className="h-3 w-3 text-slate-500" />
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="text-xs bg-transparent border-none outline-none text-slate-700 font-semibold py-1 cursor-pointer pr-1"
              >
                <option value="all">All Domains</option>
                <option value="People">People</option>
                <option value="Process">Process</option>
                <option value="Business Environment">Business Environment</option>
              </select>
            </div>

            {/* Methodology Filter */}
            <div className="flex items-center gap-1.5 shrink-0 bg-slate-50 border border-slate-100 rounded-xl px-2.5 py-1">
              <Sparkles className="h-3 w-3 text-slate-500" />
              <select
                value={selectedMethodology}
                onChange={(e) => setSelectedMethodology(e.target.value)}
                className="text-xs bg-transparent border-none outline-none text-slate-700 font-semibold py-1 cursor-pointer pr-1"
              >
                <option value="all">All Lifecycles</option>
                <option value="Agile">Agile</option>
                <option value="Predictive">Predictive</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Active matched flag status count */}
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest ml-auto lg:ml-0 self-center">
              Matched: {filteredQuestions.length} / 180 Qs
            </span>
          </div>

          {/* Layout type picker (Focused Card vs Full Catalog List) */}
          <div className="bg-slate-50 border border-slate-150 p-1 rounded-xl flex items-center shrink-0 w-full md:w-auto" id="layout-view-buttons">
            <button
              onClick={() => setViewType('focused')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewType === 'focused'
                  ? 'bg-slate-950 text-white shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" /> Focused Card
            </button>
            <button
              onClick={() => setViewType('list')}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                viewType === 'list'
                  ? 'bg-slate-950 text-white shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              <List className="h-3.5 w-3.5" /> Catalog List
            </button>
          </div>

        </div>
      </div>

      {/* 3. Primary Display Content Grid */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm space-y-4">
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto border border-slate-100/85 text-slate-400">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-950 font-sans">No matching question records</h3>
            <p className="text-slate-500 text-xs leading-relaxed font-sans">
              There are no training items matched with search term <strong className="text-blue-600">"{searchTerm}"</strong> and selections. Reset filters to study again.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedDomain('all');
              setSelectedMethodology('all');
            }}
            className="bg-slate-950 hover:bg-slate-900 text-white font-mono text-xs font-semibold py-2.5 px-6 rounded-xl transition-all cursor-pointer shadow-sm"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Question Display Column (Spans 8 on desktop) */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              {viewType === 'focused' ? (
                // --- FOCUSED SINGLE VIEW ---
                <motion.div
                  key={`focused-card-${activeQuestion?.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
                >
                  {/* Top line domain details */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="bg-slate-950 text-white px-3 py-1 rounded-lg text-xs font-mono font-semibold">
                        ID #{activeQuestion?.id ?? 0}
                      </span>
                      <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">
                        {getDomainIcon(activeQuestion?.domain ?? '')}
                        <span className="text-[10px] text-slate-600 font-mono font-medium leading-none">
                          {activeQuestion?.domain}
                        </span>
                      </div>
                      <span className="bg-blue-50 border border-blue-100/80 text-blue-800 text-[10px] font-mono font-semibold py-1 px-2.5 rounded-lg shrink-0">
                        {activeQuestion?.methodology} Lifecycle
                      </span>
                    </div>

                    {/* Mastered status state indicator */}
                    <button
                      onClick={() => activeQuestion && toggleMastered(activeQuestion.id)}
                      className={`flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        masteredIds.includes(activeQuestion?.id ?? 0)
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <CheckCircle2 className={`h-3.5 w-3.5 ${masteredIds.includes(activeQuestion?.id ?? 0) ? 'text-emerald-600' : 'text-slate-450'}`} />
                      {masteredIds.includes(activeQuestion?.id ?? 0) ? 'Mastered' : 'Mark Mastered'}
                    </button>
                  </div>

                  {/* Question Stem block */}
                  <div className="space-y-3">
                    <span className="text-[10px] text-slate-400 font-mono block uppercase tracking-wider">
                      PMI Task alignment: {activeQuestion?.task}
                    </span>
                    <h2 className="text-base font-semibold text-slate-905 leading-relaxed font-sans">
                      {activeQuestion?.question}
                    </h2>
                  </div>

                  {/* Options blocks highlighting correct choice in full green */}
                  <div className="space-y-3">
                    {activeQuestion?.options.map((option, optIdx) => {
                      const isCorrect = optIdx === activeQuestion.answerIndex;
                      return (
                        <div
                          key={optIdx}
                          className={`p-4 rounded-xl border flex gap-4 text-sm leading-relaxed items-start transition-all ${
                            isCorrect
                              ? 'border-emerald-300 bg-emerald-50/20 text-slate-900 font-semibold shadow-sm'
                              : 'border-slate-100 bg-slate-50/10 text-slate-500/80 select-none'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg text-xs font-mono shrink-0 flex items-center justify-center border font-bold ${
                            isCorrect
                              ? 'border-emerald-500 bg-emerald-500 text-white'
                              : 'border-slate-300 bg-white text-slate-400/80'
                          }`}>
                            {getOptionLetter(optIdx)}
                          </span>
                          <span className="font-sans text-xs">
                            {option}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Highlighted explanation focus box */}
                  <div className="bg-blue-50 border border-blue-100/70 rounded-2xl p-5 md:p-6 space-y-3">
                    <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
                      <Award className="h-5 w-5 text-blue-600 shrink-0" />
                      <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider font-sans">
                        PMP Certified Decider Explanation
                      </h4>
                    </div>
                    <p className="text-blue-900 text-xs leading-relaxed font-sans font-normal">
                      {activeQuestion?.explanation}
                    </p>
                    {activeQuestion?.clue && (
                      <div className="pt-2 text-[11px] text-blue-700/80 font-mono italic">
                        <span className="font-semibold text-blue-800">Study Keyword Clue:</span> {activeQuestion.clue}
                      </div>
                    )}
                  </div>

                  {/* Previous-Next Navigation panel */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono">
                    <button
                      onClick={handlePrevFocused}
                      disabled={currentIndex === 0}
                      className="flex items-center gap-1 text-slate-600 border border-slate-200/90 rounded-xl px-4 py-2.5 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white cursor-pointer transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" /> Previous
                    </button>

                    <span className="text-slate-500 text-[10px] font-semibold">
                      Matched Item {currentIndex + 1} of {filteredQuestions.length}
                    </span>

                    <button
                      onClick={handleNextFocused}
                      disabled={currentIndex === filteredQuestions.length - 1}
                      className="flex items-center gap-1 bg-slate-950 text-white rounded-xl px-5 py-2.5 hover:bg-slate-900 disabled:opacity-45 disabled:hover:bg-slate-950 cursor-pointer transition-colors"
                    >
                      Next <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                </motion.div>
              ) : (
                // --- FULL CATALOG SCROLL LIST VIEW ---
                <div className="space-y-6">
                  {filteredQuestions.map((q, qIndex) => (
                    <div
                      key={q.id}
                      className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 shadow-sm space-y-4"
                      id={`study-item-${q.id}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-50 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="bg-slate-950 text-white px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold">
                            #{q.id}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {q.domain}
                          </span>
                          <span className="bg-slate-50 text-[10px] font-mono px-2 py-0.5 rounded text-slate-500">
                            {q.methodology}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => toggleMastered(q.id)}
                          className={`text-[9px] font-mono uppercase tracking-wide px-2.5 py-1 rounded transition-colors ${
                            masteredIds.includes(q.id)
                              ? 'bg-emerald-50 text-emerald-850 font-bold'
                              : 'bg-slate-50 text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          {masteredIds.includes(q.id) ? '✓ Mastered' : '+ Mastered'}
                        </button>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-400 font-mono block leading-none">{q.task}</span>
                        <h3 className="text-sm font-semibold text-slate-950 font-sans">{q.question}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const isCorrect = oIdx === q.answerIndex;
                          return (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg border text-left flex gap-2 items-start ${
                                isCorrect
                                  ? 'border-emerald-250 bg-emerald-50/10 text-emerald-950 font-semibold'
                                  : 'border-slate-50 bg-slate-50/10 text-slate-400'
                              }`}
                            >
                              <span className={`w-5 h-5 rounded text-[10px] font-mono shrink-0 flex items-center justify-center border font-bold ${
                                isCorrect ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-200 bg-white text-slate-400'
                              }`}>
                                {getOptionLetter(oIdx)}
                              </span>
                              <span className="text-[11px] leading-relaxed select-none">{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-blue-50/60 border border-blue-100 text-blue-900 rounded-xl p-3.5 space-y-1 text-xs">
                        <div className="font-mono font-bold text-[9px] text-blue-950 uppercase tracking-widest flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 text-blue-600 shrink-0" /> Rationalization
                        </div>
                        <p className="text-[11.5px] leading-relaxed font-sans">{q.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Navigation Grid Indicator Index (Spans 4 on desktop) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Interactive Domain Legend Panel */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-slate-950 font-sans">Domain Progress Tracking</h3>
              <div className="space-y-3 font-sans text-xs">
                {(Object.keys(stats.domains) as Array<keyof typeof stats.domains>).map((domain) => {
                  const data = stats.domains[domain];
                  return (
                    <div key={domain} className="space-y-1">
                      <div className="flex justify-between text-slate-700">
                        <span className="flex items-center gap-1.5 font-medium">
                          {getDomainIcon(domain as string)}
                          {String(domain)}
                        </span>
                        <span className="font-mono font-semibold">{data.mastered} / {data.total}</span>
                      </div>
                      <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{ width: `${data.total > 0 ? (data.mastered / data.total) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Questions Jump-map grid (180 numbered items) */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-950 font-sans">Exam Sheet Catalog Map</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  Quick Jump dynamically lists all 180 questions available in the mock data bank. Dark filled buttons indicate mastered items. Unmatched filters are automatically greyed out.
                </p>
              </div>

              {/* 180 Qs interactive buttons grid */}
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-5 gap-1.5 pr-1 max-h-72 overflow-y-auto" id="study-index-grid-sheet mb-2">
                {questions.map((q, idx) => {
                  const isMastered = masteredIds.includes(q.id);
                  const isFilteredMatch = filteredQuestions.some((fq) => fq.id === q.id);
                  const isActive = activeQuestion?.id === q.id && viewType === 'focused';

                  let classes = 'border-slate-100 text-slate-400 bg-slate-50/50';
                  if (isActive) {
                    classes = 'bg-slate-950 border-slate-950 text-white font-bold ring-2 ring-blue-500';
                  } else if (isMastered) {
                    classes = 'bg-emerald-500/10 border-emerald-300/65 text-emerald-800 font-bold hover:bg-emerald-500/20';
                  } else if (isFilteredMatch) {
                    classes = 'border-slate-200 bg-white text-slate-650 hover:bg-slate-50 hover:border-slate-300 font-medium';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        if (isFilteredMatch) {
                          const targetIdx = filteredQuestions.findIndex((fq) => fq.id === q.id);
                          if (targetIdx !== -1) {
                            setCurrentIndex(targetIdx);
                            setViewType('focused');
                          }
                        } else {
                          // If current questions are filtered out, reset filters first
                          setSearchTerm('');
                          setSelectedDomain('all');
                          setSelectedMethodology('all');
                          setTimeout(() => {
                            const newIdx = questions.findIndex(item => item.id === q.id);
                            if (newIdx !== -1) {
                              setCurrentIndex(newIdx);
                              setViewType('focused');
                            }
                          }, 10);
                        }
                      }}
                      title={`${q.domain} - Q${q.id} (${isMastered ? 'Mastered' : 'Unmastered'})`}
                      className={`h-8 text-[11px] font-mono rounded-lg border flex items-center justify-center transition-all cursor-pointer ${classes}`}
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-3 flex flex-wrap gap-2.5 text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-slate-950" />
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300" />
                  <span>Mastered</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-white border border-slate-200" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1 opacity-55">
                  <div className="w-3 h-3 rounded bg-slate-50 border border-slate-100" />
                  <span>Excluded</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
