'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ModuleId } from '@/data/types';

const modules: { id: ModuleId | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos los temas' },
  { id: 'priority', label: 'Prioridad e Intersecciones' },
  { id: 'speed-overtaking', label: 'Velocidad y Adelantamiento' },
  { id: 'traffic-signs', label: 'Señales de Tráfico' },
  { id: 'special-rules', label: 'Reglas Especiales' },
];

const counts = [10, 20, 30];

export default function QuizSetupPage() {
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [questionCount, setQuestionCount] = useState(10);

  const startQuiz = () => {
    const params = new URLSearchParams({
      module: selectedModule,
      count: questionCount.toString(),
    });
    router.push(`/quiz/sesion?${params}`);
  };

  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Quiz de Práctica</h1>
        <p className="text-muted text-sm mt-1">Configura tu sesión de práctica</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="font-semibold text-sm block mb-2">Tema</label>
          <div className="space-y-2">
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => setSelectedModule(m.id)}
                className={`w-full text-left p-3 rounded-lg border transition-colors ${
                  selectedModule === m.id
                    ? 'border-primary bg-primary-light text-primary font-medium'
                    : 'border-border hover:bg-card-hover'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-semibold text-sm block mb-2">Número de preguntas</label>
          <div className="flex gap-2">
            {counts.map(c => (
              <button
                key={c}
                onClick={() => setQuestionCount(c)}
                className={`flex-1 py-3 rounded-lg border font-medium transition-colors ${
                  questionCount === c
                    ? 'border-primary bg-primary-light text-primary'
                    : 'border-border hover:bg-card-hover'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={startQuiz}
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
        >
          Comenzar Quiz
        </button>
      </div>
    </div>
  );
}
