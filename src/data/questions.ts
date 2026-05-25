import { Question } from '../types';
import { peopleQuestions } from './peopleQuestions';
import { processQuestions } from './processQuestions';
import { businessQuestions } from './businessQuestions';

export const allQuestions: Question[] = [
  ...peopleQuestions,
  ...processQuestions,
  ...businessQuestions
];

// Group questions by domain
export const questionsByDomain = {
  People: peopleQuestions,
  Process: processQuestions,
  'Business Environment': businessQuestions
};

// Help map task counts and questions counts
export const pmpEcoOutline = [
  {
    name: 'People' as const,
    percentage: 42,
    tasksCount: 14,
    questionsCount: peopleQuestions.length,
    description: 'Focuses on the skills and activities associated with effectively leading a project team and supporting individuals in a modern collaborative context.'
  },
  {
    name: 'Process' as const,
    percentage: 50,
    tasksCount: 17,
    questionsCount: processQuestions.length,
    description: 'Focuses on the technical, procedural, and administrative aspects of executing projects, managing quality, schedule, risks, and changes.'
  },
  {
    name: 'Business Environment' as const,
    percentage: 8,
    tasksCount: 4,
    questionsCount: businessQuestions.length,
    description: 'Focuses on structural organizational alignment, enterprise regulatory compliance, benefits management, and managing organizational change.'
  }
];
