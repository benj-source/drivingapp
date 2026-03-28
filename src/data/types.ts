export type ModuleId = 'priority' | 'speed-overtaking' | 'traffic-signs' | 'special-rules';

export interface TheorySection {
  id: string;
  title: string;
  germanTerm?: string;
  content: string; // markdown
  keyRules: string[];
}

export interface TheoryModule {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
  sections: TheorySection[];
}

export interface Flashcard {
  id: string;
  front: {
    type: 'sign' | 'situation' | 'rule';
    text: string;
    imageUrl?: string;
  };
  back: {
    rule: string;
    germanName?: string;
    legalConsequence?: string;
  };
}

export interface FlashcardDeck {
  id: string;
  moduleId: ModuleId;
  title: string;
  cards: Flashcard[];
}

export interface Question {
  id: string;
  moduleId: ModuleId;
  difficulty: 1 | 2 | 3;
  errorPoints: 1 | 2 | 3;
  text: string;
  imageUrl?: string;
  options: {
    id: 'a' | 'b' | 'c';
    text: string;
  }[];
  correctOptionId: 'a' | 'b' | 'c';
  explanation: string;
}

export interface QuizResult {
  moduleId: ModuleId | 'all';
  date: string;
  score: number;
  total: number;
}

export interface ExamResult {
  date: string;
  score: number;
  errorPoints: number;
  passed: boolean;
  timeUsedSeconds: number;
  answers: Record<string, string>;
}

export interface StudyProgress {
  flashcardsReviewed: Record<string, {
    lastSeen: string;
    confidence: 1 | 2 | 3;
  }>;
  quizResults: QuizResult[];
  examResults: ExamResult[];
}
