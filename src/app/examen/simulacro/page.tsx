'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { generateExam } from '@/data/exams';
import { useTimer } from '@/hooks/useTimer';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';
import type { Question } from '@/data/types';

function ExamContent() {
  const router = useRouter();
  const { addExamResult } = useProgress();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const submitExam = useCallback(() => {
    const totalErrorPoints = questions.reduce((sum, q) => {
      if (!answers[q.id] || answers[q.id] !== q.correctOptionId) {
        return sum + q.errorPoints;
      }
      return sum;
    }, 0);

    const correctCount = questions.filter(q => answers[q.id] === q.correctOptionId).length;

    addExamResult({
      date: new Date().toISOString(),
      score: correctCount,
      errorPoints: totalErrorPoints,
      passed: totalErrorPoints <= 15,
      timeUsedSeconds: timer.elapsed,
      answers,
    });

    setFinished(true);
  }, [questions, answers]);

  const timer = useTimer(60 * 60, submitExam);

  useEffect(() => {
    setQuestions(generateExam());
    timer.start();
  }, []);

  const selectAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  if (questions.length === 0) {
    return <div className="p-4 pt-8 text-center text-muted">Preparando examen...</div>;
  }

  if (finished) {
    const totalErrorPoints = questions.reduce((sum, q) => {
      if (!answers[q.id] || answers[q.id] !== q.correctOptionId) {
        return sum + q.errorPoints;
      }
      return sum;
    }, 0);
    const correctCount = questions.filter(q => answers[q.id] === q.correctOptionId).length;
    const passed = totalErrorPoints <= 15;

    return <ExamResults
      questions={questions}
      answers={answers}
      correctCount={correctCount}
      totalErrorPoints={totalErrorPoints}
      passed={passed}
      timeUsed={timer.elapsed}
    />;
  }

  const question = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="p-4">
      {/* Timer bar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-border z-40 px-4 py-2">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <span className={cn(
            'font-mono text-lg font-bold',
            timer.remaining < 300 ? 'text-red-600' : timer.remaining < 600 ? 'text-amber-600' : 'text-foreground'
          )}>
            {timer.display}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">{answeredCount}/50</span>
            <button
              onClick={() => setShowNav(!showNav)}
              className="p-2 rounded-lg border border-border hover:bg-card-hover"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Question navigation grid */}
      {showNav && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center" onClick={() => setShowNav(false)}>
          <div className="bg-white rounded-t-2xl p-4 w-full max-w-lg max-h-[60vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold mb-3">Navegación de Preguntas</h3>
            <div className="grid grid-cols-10 gap-1.5">
              {questions.map((q, i) => {
                const answered = !!answers[q.id];
                return (
                  <button
                    key={i}
                    onClick={() => { setCurrentIndex(i); setShowNav(false); }}
                    className={cn(
                      'w-full aspect-square rounded-lg text-xs font-medium flex items-center justify-center',
                      i === currentIndex ? 'bg-primary text-white' :
                      answered ? 'bg-green-100 text-green-800 border border-green-300' :
                      'bg-gray-100 text-gray-600 border border-gray-200'
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setShowNav(false)}
              className="w-full mt-4 py-2 border border-border rounded-lg font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Confirm dialog */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowConfirm(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-lg mb-2">¿Entregar examen?</h3>
            <p className="text-sm text-muted mb-1">
              Has respondido {answeredCount} de 50 preguntas.
            </p>
            {answeredCount < 50 && (
              <p className="text-sm text-red-600 mb-4">
                Las {50 - answeredCount} preguntas sin responder contarán como error.
              </p>
            )}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-2 border border-border rounded-lg font-medium"
              >
                Seguir
              </button>
              <button
                onClick={() => { setShowConfirm(false); submitExam(); }}
                className="flex-1 py-2 bg-primary text-white rounded-lg font-medium"
              >
                Entregar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="pt-16">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Pregunta {currentIndex + 1} de 50</span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-muted">
            {question.errorPoints} pt{question.errorPoints > 1 ? 's' : ''} error
          </span>
        </div>

        {question.imageUrl && (
          <div className="flex justify-center mb-3">
            <img
              src={question.imageUrl}
              alt={question.text}
              className="w-40 h-40 object-contain rounded-lg"
            />
          </div>
        )}
        <p className="text-lg font-medium leading-relaxed mb-4">{question.text}</p>

        <div className="space-y-2">
          {question.options.map(option => (
            <button
              key={option.id}
              onClick={() => selectAnswer(question.id, option.id)}
              className={cn(
                'w-full text-left p-4 rounded-xl border transition-all',
                answers[question.id] === option.id
                  ? 'border-primary bg-primary-light font-medium'
                  : 'border-border hover:bg-card-hover'
              )}
            >
              <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
              {option.text}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="flex-1 py-3 border border-border rounded-xl font-medium disabled:opacity-30"
          >
            Anterior
          </button>
          {currentIndex < 49 ? (
            <button
              onClick={() => setCurrentIndex(i => Math.min(49, i + 1))}
              className="flex-1 py-3 bg-primary text-white rounded-xl font-medium"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              className="flex-1 py-3 bg-green-600 text-white rounded-xl font-medium"
            >
              Entregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExamResults({
  questions,
  answers,
  correctCount,
  totalErrorPoints,
  passed,
  timeUsed,
}: {
  questions: Question[];
  answers: Record<string, string>;
  correctCount: number;
  totalErrorPoints: number;
  passed: boolean;
  timeUsed: number;
}) {
  const [showReview, setShowReview] = useState(false);
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  const wrongQuestions = questions.filter(q => !answers[q.id] || answers[q.id] !== q.correctOptionId);

  return (
    <div className="p-4">
      <div className="pt-4 text-center mb-6">
        <div className={cn(
          'inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl mb-3',
          passed ? 'bg-green-100' : 'bg-red-100'
        )}>
          {passed ? '✅' : '❌'}
        </div>
        <h2 className="text-2xl font-bold">{passed ? '¡Aprobado!' : 'No aprobado'}</h2>
        <p className={cn('text-lg font-semibold mt-1', passed ? 'text-green-600' : 'text-red-600')}>
          {totalErrorPoints} puntos de error {passed ? '≤' : '>'} 15
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3 rounded-lg bg-blue-50 text-center">
          <p className="text-xl font-bold text-blue-600">{correctCount}/50</p>
          <p className="text-xs text-muted">Correctas</p>
        </div>
        <div className="p-3 rounded-lg bg-amber-50 text-center">
          <p className="text-xl font-bold text-amber-600">{totalErrorPoints}</p>
          <p className="text-xs text-muted">Pts. Error</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 text-center">
          <p className="text-xl font-bold">{minutes}:{seconds.toString().padStart(2, '0')}</p>
          <p className="text-xs text-muted">Tiempo</p>
        </div>
      </div>

      {wrongQuestions.length > 0 && (
        <div className="mb-6">
          <button
            onClick={() => setShowReview(!showReview)}
            className="w-full py-3 border border-border rounded-xl font-medium flex items-center justify-center gap-2"
          >
            {showReview ? 'Ocultar' : 'Ver'} respuestas incorrectas ({wrongQuestions.length})
            <svg className={cn('w-4 h-4 transition-transform', showReview && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showReview && (
            <div className="space-y-3 mt-3">
              {wrongQuestions.map((q, i) => (
                <div key={q.id} className="p-3 rounded-lg border border-red-200 bg-red-50">
                  <p className="font-medium text-sm">
                    <span className="text-muted">#{questions.indexOf(q) + 1}</span> {q.text}
                  </p>
                  {answers[q.id] ? (
                    <p className="text-sm text-red-600 mt-1">
                      Tu respuesta: {q.options.find(o => o.id === answers[q.id])?.text}
                    </p>
                  ) : (
                    <p className="text-sm text-red-600 mt-1">Sin respuesta</p>
                  )}
                  <p className="text-sm text-green-700 mt-1">
                    Correcta: {q.options.find(o => o.id === q.correctOptionId)?.text}
                  </p>
                  <p className="text-sm text-muted mt-2 italic">{q.explanation}</p>
                  <span className="inline-block mt-1 text-xs px-2 py-0.5 bg-red-100 rounded-full text-red-700">
                    {q.errorPoints} pt{q.errorPoints > 1 ? 's' : ''} error
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        <a href="/examen" className="flex-1 py-3 text-center border border-border rounded-xl font-medium">
          Nuevo Examen
        </a>
        <a href="/" className="flex-1 py-3 text-center bg-primary text-white rounded-xl font-medium">
          Inicio
        </a>
      </div>
    </div>
  );
}

export default function ExamSimulacroPage() {
  return (
    <Suspense fallback={<div className="p-4 pt-8 text-center text-muted">Preparando examen...</div>}>
      <ExamContent />
    </Suspense>
  );
}
