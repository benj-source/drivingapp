'use client';
import { useLocalStorage } from './useLocalStorage';
import type { StudyProgress, QuizResult, ExamResult } from '@/data/types';

const defaultProgress: StudyProgress = {
  flashcardsReviewed: {},
  quizResults: [],
  examResults: [],
};

export function useProgress() {
  const [progress, setProgress, loaded] = useLocalStorage<StudyProgress>('swissdrive-progress', defaultProgress);

  const markFlashcard = (cardId: string, confidence: 1 | 2 | 3) => {
    setProgress(prev => ({
      ...prev,
      flashcardsReviewed: {
        ...prev.flashcardsReviewed,
        [cardId]: { lastSeen: new Date().toISOString(), confidence },
      },
    }));
  };

  const addQuizResult = (result: QuizResult) => {
    setProgress(prev => ({
      ...prev,
      quizResults: [...prev.quizResults, result],
    }));
  };

  const addExamResult = (result: ExamResult) => {
    setProgress(prev => ({
      ...prev,
      examResults: [...prev.examResults, result],
    }));
  };

  return { progress, loaded, markFlashcard, addQuizResult, addExamResult };
}
