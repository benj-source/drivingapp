'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo, Suspense } from 'react';
import { allQuestions } from '@/data/questions';
import { useProgress } from '@/hooks/useProgress';
import { shuffle } from '@/lib/utils';
import { cn } from '@/lib/utils';
import type { Question, ModuleId } from '@/data/types';

function QuizContent() {
  const searchParams = useSearchParams();
  const moduleFilter = searchParams.get('module') || 'all';
  const count = parseInt(searchParams.get('count') || '10', 10);
  const { addQuizResult } = useProgress();

  const questions = useMemo(() => {
    let pool = allQuestions;
    if (moduleFilter !== 'all') {
      pool = pool.filter(q => q.moduleId === moduleFilter);
    }
    return shuffle(pool).slice(0, count);
  }, [moduleFilter, count]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ question: Question; selected: string }[]>([]);

  if (questions.length === 0) {
    return (
      <div className="p-4 pt-8 text-center">
        <p className="text-muted">No hay preguntas disponibles para este tema</p>
        <Link href="/quiz" className="text-accent mt-2 inline-block">Volver</Link>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="p-4">
        <div className="pt-4 text-center mb-6">
          <div className="text-4xl mb-3">{score / questions.length >= 0.8 ? '🎉' : score / questions.length >= 0.6 ? '💪' : '📚'}</div>
          <h2 className="text-2xl font-bold">Resultado</h2>
          <p className="text-4xl font-bold mt-2 text-primary">{score} / {questions.length}</p>
          <p className="text-muted mt-1">{Math.round((score / questions.length) * 100)}% correcto</p>
        </div>

        {wrongAnswers.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Respuestas incorrectas:</h3>
            <div className="space-y-3">
              {wrongAnswers.map(({ question, selected }) => (
                <div key={question.id} className="p-3 rounded-lg border border-red-200 bg-red-50">
                  <p className="font-medium text-sm">{question.text}</p>
                  <p className="text-sm text-red-600 mt-1">
                    Tu respuesta: {question.options.find(o => o.id === selected)?.text}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Correcta: {question.options.find(o => o.id === question.correctOptionId)?.text}
                  </p>
                  <p className="text-sm text-muted mt-2 italic">{question.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Link href="/quiz" className="flex-1 py-3 text-center border border-border rounded-xl font-medium">
            Nuevo Quiz
          </Link>
          <Link href="/" className="flex-1 py-3 text-center bg-primary text-white rounded-xl font-medium">
            Inicio
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];

  const handleAnswer = (optionId: string) => {
    if (isRevealed) return;
    setSelectedAnswer(optionId);
    setIsRevealed(true);
    if (optionId === question.correctOptionId) {
      setScore(s => s + 1);
    } else {
      setWrongAnswers(prev => [...prev, { question, selected: optionId }]);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      addQuizResult({
        moduleId: (moduleFilter === 'all' ? 'all' : moduleFilter) as ModuleId | 'all',
        date: new Date().toISOString(),
        score: score + (selectedAnswer === question.correctOptionId ? 0 : 0),
        total: questions.length,
      });
      setFinished(true);
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setIsRevealed(false);
    }
  };

  return (
    <div className="p-4">
      <div className="pt-4 mb-4">
        <Link href="/quiz" className="text-accent text-sm">&larr; Quiz</Link>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-muted">Pregunta {currentIndex + 1} de {questions.length}</span>
          <span className="text-sm font-medium text-success">{score} correctas</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        {question.imageUrl && (
          <div className="flex justify-center mb-3">
            <Image
              src={question.imageUrl}
              alt={question.text}
              width={160}
              height={160}
              className="object-contain rounded-lg"
            />
          </div>
        )}
        <p className="text-lg font-medium leading-relaxed">{question.text}</p>
      </div>

      <div className="space-y-2">
        {question.options.map(option => {
          let style = 'border-border hover:bg-card-hover';
          if (isRevealed) {
            if (option.id === question.correctOptionId) {
              style = 'border-green-500 bg-green-50 text-green-800';
            } else if (option.id === selectedAnswer) {
              style = 'border-red-500 bg-red-50 text-red-800';
            } else {
              style = 'border-border opacity-50';
            }
          } else if (option.id === selectedAnswer) {
            style = 'border-primary bg-primary-light';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              disabled={isRevealed}
              className={cn(
                'w-full text-left p-4 rounded-xl border transition-all',
                style
              )}
            >
              <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
              {option.text}
            </button>
          );
        })}
      </div>

      {isRevealed && (
        <div className="mt-4">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-4">
            <p className="text-sm text-blue-800">{question.explanation}</p>
          </div>
          <button
            onClick={handleNext}
            className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
          >
            {currentIndex + 1 >= questions.length ? 'Ver Resultados' : 'Siguiente'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function QuizSessionPage() {
  return (
    <Suspense fallback={<div className="p-4 pt-8 text-center text-muted">Cargando...</div>}>
      <QuizContent />
    </Suspense>
  );
}
