/**
 * Types and interfaces for the PMP Exam Prep Simulator.
 */

export interface Question {
  id: number;
  domain: 'People' | 'Process' | 'Business Environment';
  task: string;
  question: string;
  options: string[];
  answerIndex: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
  methodology: 'Agile' | 'Predictive' | 'Hybrid';
  clue?: string;
}

export interface DomainInfo {
  name: 'People' | 'Process' | 'Business Environment';
  percentage: number;
  tasksCount: number;
  description: string;
}

export interface ExamSession {
  questions: Question[];
  userAnswers: Record<number, number>; // questionId -> selectedOptionIndex
  flaggedQuestions: Record<number, boolean>; // questionId -> isFlagged
  isCompleted: boolean;
  timeRemaining: number; // in seconds
  startTime: number; // timestamp
  sectionsSeen: boolean[]; // standard PMP exam is divided into 3 chunks of 60 questions
}

export interface HistoryRecord {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  correctCount: number;
  domainBreakdown: {
    People: string;
    Process: string;
    'Business Environment': string;
  };
  timeSpent: string;
}
