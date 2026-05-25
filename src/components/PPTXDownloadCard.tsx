import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Presentation, Loader2, CheckCircle2, FileDown, Sparkles } from 'lucide-react';
import { allQuestions } from '../data/questions';
import { generatePmpPresentation } from '../utils/pptxExport';

export default function PPTXDownloadCard() {
  const [status, setStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState({ current: 0, total: 180 });
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
    try {
      setStatus('generating');
      setProgress({ current: 0, total: 180 });
      setErrorMessage('');

      // Generate the presentation dynamically using our helper utility
      await generatePmpPresentation(allQuestions, (current, total) => {
        setProgress({ current, total });
      });

      setStatus('success');
      
      // Auto-reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    } catch (err: any) {
      console.error('Failed to generate PMP Presentation:', err);
      setErrorMessage(err?.message || 'Unknown generation failure.');
      setStatus('error');
    }
  };

  const percentComplete = Math.round((progress.current / progress.total) * 100);

  return (
    <div 
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-980 text-white rounded-3xl p-6 shadow-md border border-slate-800/80 hover:border-blue-900/40 transition-all flex flex-col md:flex-row items-center justify-between gap-6"
      id="pmp-slides-downloader-widget"
    >
      <div className="flex items-center gap-4.5">
        <div className="w-13 h-13 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-blue-500/45">
          <Presentation className="h-6 w-6 font-semibold" />
        </div>
        <div className="space-y-1.5 text-left">
          <div className="flex items-center gap-2">
            <span className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-2 py-0.5 rounded-md text-[10px] font-mono font-medium uppercase tracking-wide">
              PowerPoint Export
            </span>
            <span className="text-[10px] text-slate-400 font-mono">361 Slides Deck</span>
          </div>
          <h2 className="text-base font-semibold tracking-tight text-slate-100 font-sans">
            Offline PMP® Masterclass Slides Deck
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans font-normal">
            Download the complete 180-Question and Answer layout built to PMP ECO standards. Perfect for offline training, study groups, or tutoring projections.
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto shrink-0 font-mono" id="pptx-action-section">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.button
              key="btn-idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={handleDownload}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-blue-950/20 uppercase tracking-wider"
              id="download-pptx-deck-btn"
            >
              <FileDown className="h-4 w-4" /> Download Slide Deck (.pptx)
            </motion.button>
          )}

          {status === 'generating' && (
            <motion.div
              key="generating-ui"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full md:w-72 space-y-2 bg-slate-900/60 p-4 rounded-2xl border border-slate-800"
            >
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-300">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-400" />
                  Generating Slides...
                </span>
                <span className="text-[11px] font-bold">{progress.current}/{progress.total} Qs</span>
              </div>
              
              {/* Progress meter bar */}
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-100" 
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
              <div className="text-[10px] text-slate-500 text-right uppercase tracking-wider">
                {percentComplete}% compiled
              </div>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key="success-ui"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full md:w-auto bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl p-3.5 flex items-center justify-center gap-2 text-xs font-semibold"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>PMP Slide Deck Created Successfully!</span>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              key="error-ui"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full md:w-72 space-y-2 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl p-4 text-xs"
            >
              <div className="font-bold uppercase tracking-wider text-rose-300">Generation Error</div>
              <p className="text-[11px] text-rose-200/95 leading-relaxed font-sans">{errorMessage}</p>
              <button 
                onClick={handleDownload}
                className="text-[10px] text-white bg-rose-600 hover:bg-rose-700 px-3 py-1.5 rounded-lg w-full font-mono uppercase cursor-pointer transition-colors"
              >
                Retry Download
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
