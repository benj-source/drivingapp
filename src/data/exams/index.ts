import {
  priorityQuestions,
  speedQuestions,
  signsQuestions,
  specialQuestions,
  allQuestions,
} from '../questions';
import type { Question } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function pickRandom<T>(array: T[], count: number): T[] {
  return shuffleArray(array).slice(0, count);
}

/**
 * Genera un examen de 50 preguntas con la distribucion correcta:
 * ~20 prioridad, ~12 velocidad, ~10 senales, ~8 especiales
 */
export function generateExam(): Question[] {
  const priority = pickRandom(priorityQuestions, 20);
  const speed = pickRandom(speedQuestions, 12);
  const signs = pickRandom(signsQuestions, 10);
  const special = pickRandom(specialQuestions, 8);

  return shuffleArray([...priority, ...speed, ...signs, ...special]);
}

// Pre-built exam sets con IDs de preguntas fijas para reproducibilidad
export const exam1: string[] = [
  // 20 prioridad
  'q-pri-01', 'q-pri-02', 'q-pri-03', 'q-pri-04', 'q-pri-07',
  'q-pri-08', 'q-pri-09', 'q-pri-11', 'q-pri-14', 'q-pri-15',
  'q-pri-16', 'q-pri-19', 'q-pri-20', 'q-pri-25', 'q-pri-27',
  'q-pri-30', 'q-pri-36', 'q-pri-44', 'q-pri-49', 'q-pri-59',
  // 12 velocidad
  'q-spd-01', 'q-spd-02', 'q-spd-05', 'q-spd-07', 'q-spd-12',
  'q-spd-14', 'q-spd-16', 'q-spd-19', 'q-spd-20', 'q-spd-29',
  'q-spd-31', 'q-spd-45',
  // 10 senales
  'q-sgn-01', 'q-sgn-02', 'q-sgn-03', 'q-sgn-06', 'q-sgn-09',
  'q-sgn-11', 'q-sgn-14', 'q-sgn-19', 'q-sgn-27', 'q-sgn-32',
  // 8 especiales
  'q-spc-01', 'q-spc-02', 'q-spc-06', 'q-spc-07', 'q-spc-13',
  'q-spc-16', 'q-spc-19', 'q-spc-24',
];

export const exam2: string[] = [
  // 20 prioridad
  'q-pri-05', 'q-pri-06', 'q-pri-10', 'q-pri-12', 'q-pri-13',
  'q-pri-17', 'q-pri-18', 'q-pri-21', 'q-pri-22', 'q-pri-23',
  'q-pri-24', 'q-pri-26', 'q-pri-28', 'q-pri-31', 'q-pri-32',
  'q-pri-37', 'q-pri-38', 'q-pri-39', 'q-pri-45', 'q-pri-50',
  // 12 velocidad
  'q-spd-03', 'q-spd-04', 'q-spd-06', 'q-spd-08', 'q-spd-09',
  'q-spd-10', 'q-spd-11', 'q-spd-13', 'q-spd-15', 'q-spd-17',
  'q-spd-21', 'q-spd-32',
  // 10 senales
  'q-sgn-04', 'q-sgn-05', 'q-sgn-07', 'q-sgn-08', 'q-sgn-10',
  'q-sgn-12', 'q-sgn-13', 'q-sgn-20', 'q-sgn-22', 'q-sgn-34',
  // 8 especiales
  'q-spc-03', 'q-spc-04', 'q-spc-05', 'q-spc-10', 'q-spc-11',
  'q-spc-14', 'q-spc-17', 'q-spc-22',
];

export const exam3: string[] = [
  // 20 prioridad
  'q-pri-29', 'q-pri-33', 'q-pri-34', 'q-pri-35', 'q-pri-40',
  'q-pri-41', 'q-pri-42', 'q-pri-43', 'q-pri-46', 'q-pri-47',
  'q-pri-48', 'q-pri-51', 'q-pri-52', 'q-pri-53', 'q-pri-54',
  'q-pri-55', 'q-pri-56', 'q-pri-57', 'q-pri-58', 'q-pri-60',
  // 12 velocidad
  'q-spd-18', 'q-spd-22', 'q-spd-23', 'q-spd-24', 'q-spd-25',
  'q-spd-26', 'q-spd-27', 'q-spd-28', 'q-spd-33', 'q-spd-34',
  'q-spd-36', 'q-spd-38',
  // 10 senales
  'q-sgn-15', 'q-sgn-16', 'q-sgn-17', 'q-sgn-18', 'q-sgn-23',
  'q-sgn-24', 'q-sgn-25', 'q-sgn-26', 'q-sgn-28', 'q-sgn-30',
  // 8 especiales
  'q-spc-08', 'q-spc-09', 'q-spc-12', 'q-spc-15', 'q-spc-18',
  'q-spc-20', 'q-spc-21', 'q-spc-25',
];

const questionMap = new Map<string, Question>(
  allQuestions.map((q) => [q.id, q])
);

/**
 * Obtiene las preguntas de un examen predefinido por su ID.
 * @param examId - 'exam1', 'exam2', o 'exam3'
 * @returns Array de Question correspondientes al examen, o un examen generado si el ID no es valido
 */
export function getExamQuestions(examId: string): Question[] {
  const examMap: Record<string, string[]> = {
    exam1,
    exam2,
    exam3,
  };

  const questionIds = examMap[examId];
  if (!questionIds) {
    return generateExam();
  }

  return questionIds
    .map((id) => questionMap.get(id))
    .filter((q): q is Question => q !== undefined);
}
