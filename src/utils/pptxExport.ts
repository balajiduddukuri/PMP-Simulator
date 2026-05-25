import pptxgen from 'pptxgenjs';
import { Question } from '../types';

/**
 * Maps the domain to the specified Python code label structure
 */
const getDomainLabel = (domain: 'People' | 'Process' | 'Business Environment', isAnswerKey = false) => {
  const labelMap = {
    'People': 'PEOPLE (Situational / Conflict)',
    'Process': 'PROCESS (Agile / Hybrid Lifecycle)',
    'Business Environment': 'BUSINESS ENVIRONMENT (Compliance / Value)'
  };
  const baseLabel = labelMap[domain] || domain.toUpperCase();
  return isAnswerKey ? `${baseLabel} — ANSWER KEY` : `DOMAIN: ${baseLabel}`;
};

/**
 * Builds the PPTX Presentation slide deck on the client-side
 * and saves it directly to the user's browser storage.
 */
export async function generatePmpPresentation(
  allQuestions: Question[],
  onProgress: (current: number, total: number) => void
): Promise<void> {
  const pptx = new pptxgen();
  
  // Set to standard 16:9 widescreen layout (equivalent to Inches(13.333), Inches(7.5))
  pptx.layout = 'LAYOUT_16x9';

  // 1. ADD TITLE SLIDE
  const titleSlide = pptx.addSlide();
  
  // Slide Title (centered)
  titleSlide.addText('PMP® MOCK EXAM MASTERCLASS', {
    x: 1.0,
    y: 2.5,
    w: 11.3,
    h: 1.5,
    fontSize: 44,
    bold: true,
    color: '0C2340', // Deep Indigo Blue
    align: 'center',
    fontFace: 'Arial'
  });

  // Slide Subtitle (centered)
  titleSlide.addText('Full-Length Simulation: 180 Realistic Questions & Answers', {
    x: 1.0,
    y: 4.0,
    w: 11.3,
    h: 1.0,
    fontSize: 22,
    color: '505050', // Slate Gray
    align: 'center',
    fontFace: 'Arial'
  });

  const totalQuestions = Math.min(allQuestions.length, 180);
  const letters = ['A', 'B', 'C', 'D'];

  // 2. ITERATELY GENERATE ALL QUESTION & ANSWER SLIDES
  // We process in small timeouts to keep the browser responsive
  for (let i = 0; i < totalQuestions; i++) {
    const item = allQuestions[i];
    const num = i + 1;

    // Report Progress
    onProgress(num, totalQuestions);

    // Give a brief breath to the JS engine every 15 slides to prevent browser stutter
    if (i > 0 && i % 15 === 0) {
      await new Promise<void>((resolve) => setTimeout(resolve, 0));
    }

    // --- QUESTION SLIDE ---
    const qSlide = pptx.addSlide();
    
    // Domain label
    qSlide.addText(getDomainLabel(item.domain, false), {
      x: 0.8,
      y: 0.4,
      w: 11.7,
      h: 0.5,
      fontSize: 14,
      bold: true,
      color: 'E67E22', // Orange Accent
      fontFace: 'Arial'
    });

    // Question number & text body
    qSlide.addText(`Question ${num} of 180\n\n${item.question}`, {
      x: 0.8,
      y: 1.0,
      w: 11.7,
      h: 2.3,
      fontSize: 22,
      bold: true,
      color: '0C2340', // Deep Indigo
      fontFace: 'Arial',
      valign: 'top'
    });

    // Format options matching standard PMP letter prefixes (A, B, C, D)
    const formattedOptions = item.options.map((opt, idx) => `${letters[idx]}. ${opt}`).join('\n\n');

    // Options container text
    qSlide.addText(formattedOptions, {
      x: 1.2,
      y: 3.6,
      w: 11.0,
      h: 3.2,
      fontSize: 18,
      color: '3C3C3C', // Charcoal Dark Text
      fontFace: 'Arial',
      valign: 'top'
    });

    // --- ANSWER SLIDE ---
    const aSlide = pptx.addSlide();

    // Domain answer key header
    aSlide.addText(getDomainLabel(item.domain, true), {
      x: 0.8,
      y: 0.4,
      w: 11.7,
      h: 0.5,
      fontSize: 14,
      bold: true,
      color: '2ECC71', // Bright Green Positive
      fontFace: 'Arial'
    });

    // Sub-title
    aSlide.addText(`Question ${num} Resolution`, {
      x: 0.8,
      y: 1.0,
      w: 11.7,
      h: 0.8,
      fontSize: 20,
      bold: true,
      color: '0C2340', // Deep Indigo
      fontFace: 'Arial'
    });

    // Correct Answer index block
    const correctLetter = letters[item.answerIndex];
    const correctValText = item.options[item.answerIndex];
    const fullAnsStr = `${correctLetter}. ${correctValText}`;

    aSlide.addText(`Correct Answer: ${fullAnsStr}`, {
      x: 0.8,
      y: 2.0,
      w: 11.7,
      h: 0.8,
      fontSize: 24,
      bold: true,
      color: '2ECC71', // Perfect Green Highlight
      fontFace: 'Arial'
    });

    // Explanation text body
    aSlide.addText(`Explanation:\n${item.explanation}`, {
      x: 0.8,
      y: 3.2,
      w: 11.7,
      h: 3.5,
      fontSize: 18,
      color: '3C3C3C', // Charcoal body text
      fontFace: 'Arial',
      valign: 'top'
    });
  }

  // Save the PPTX file triggers standard browser native download file prompt
  await pptx.writeFile({ fileName: 'PMP_180_Question_Mock_Exam.pptx' });
}
