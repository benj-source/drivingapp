'use client';

import Link from 'next/link';
import { useProgress } from '@/hooks/useProgress';

export default function ProgresoPage() {
  const { progress, loaded } = useProgress();

  if (!loaded) {
    return <div className="p-4 pt-8 text-center text-muted">Cargando...</div>;
  }

  const flashcardCount = Object.keys(progress.flashcardsReviewed).length;
  const quizCount = progress.quizResults.length;
  const examCount = progress.examResults.length;
  const examsPassed = progress.examResults.filter(e => e.passed).length;
  const avgQuizScore = quizCount > 0
    ? Math.round(progress.quizResults.reduce((s, r) => s + (r.score / r.total) * 100, 0) / quizCount)
    : 0;

  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Progreso</h1>
        <p className="text-muted text-sm mt-1">Tu historial de estudio</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="p-4 rounded-xl border border-border text-center">
          <p className="text-3xl font-bold text-accent">{flashcardCount}</p>
          <p className="text-sm text-muted">Fichas revisadas</p>
        </div>
        <div className="p-4 rounded-xl border border-border text-center">
          <p className="text-3xl font-bold text-amber-600">{quizCount}</p>
          <p className="text-sm text-muted">Quizzes realizados</p>
        </div>
        <div className="p-4 rounded-xl border border-border text-center">
          <p className="text-3xl font-bold text-green-600">{avgQuizScore}%</p>
          <p className="text-sm text-muted">Promedio quiz</p>
        </div>
        <div className="p-4 rounded-xl border border-border text-center">
          <p className="text-3xl font-bold text-primary">{examsPassed}/{examCount}</p>
          <p className="text-sm text-muted">Exámenes aprobados</p>
        </div>
      </div>

      {examCount > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-3">Historial de Exámenes</h2>
          <div className="space-y-2">
            {progress.examResults.slice().reverse().map((exam, i) => (
              <div key={i} className="p-3 rounded-lg border border-border flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {new Date(exam.date).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <p className="text-xs text-muted">
                    {exam.score}/50 correctas &middot; {exam.errorPoints} pts error &middot;{' '}
                    {Math.floor(exam.timeUsedSeconds / 60)}min
                  </p>
                </div>
                <span className={`text-sm font-bold ${exam.passed ? 'text-green-600' : 'text-red-600'}`}>
                  {exam.passed ? 'Aprobado' : 'No aprobado'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {quizCount > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-3">Historial de Quizzes</h2>
          <div className="space-y-2">
            {progress.quizResults.slice().reverse().slice(0, 10).map((quiz, i) => (
              <div key={i} className="p-3 rounded-lg border border-border flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {new Date(quiz.date).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                  <p className="text-xs text-muted">{quiz.moduleId === 'all' ? 'Todos los temas' : quiz.moduleId}</p>
                </div>
                <span className="text-sm font-bold">{quiz.score}/{quiz.total}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {examCount === 0 && quizCount === 0 && (
        <div className="text-center py-8">
          <p className="text-muted mb-4">Aún no hay datos de estudio</p>
          <Link href="/quiz" className="text-accent font-medium">Comienza un quiz</Link>
        </div>
      )}
    </div>
  );
}
