import { priorityQuestions } from './priority';
import { speedQuestions } from './speed';
import { signsQuestions } from './signs';
import { specialQuestions } from './special';

export { priorityQuestions, speedQuestions, signsQuestions, specialQuestions };

export const allQuestions = [
  ...priorityQuestions,
  ...speedQuestions,
  ...signsQuestions,
  ...specialQuestions,
];
