'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExamenPage() {
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Simulacro de Examen</h1>
        <p className="text-muted text-sm mt-1">Simula el examen oficial ASA</p>
      </div>

      <div className="p-5 rounded-xl border border-border bg-white space-y-4">
        <h2 className="font-bold text-lg">Reglas del Examen</h2>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">50</p>
            <p className="text-xs text-muted">Preguntas</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg">
            <p className="text-2xl font-bold text-amber-600">60</p>
            <p className="text-xs text-muted">Minutos</p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="text-2xl font-bold text-red-600">15</p>
            <p className="text-xs text-muted">Máx. errores</p>
          </div>
        </div>

        <ul className="text-sm space-y-2 text-muted">
          <li className="flex gap-2">
            <span>&#8226;</span>
            <span>Cada pregunta tiene 1-3 puntos de error según su importancia</span>
          </li>
          <li className="flex gap-2">
            <span>&#8226;</span>
            <span>Puedes navegar libremente entre preguntas</span>
          </li>
          <li className="flex gap-2">
            <span>&#8226;</span>
            <span>No se muestra retroalimentación hasta entregar el examen</span>
          </li>
          <li className="flex gap-2">
            <span>&#8226;</span>
            <span>Las preguntas sin responder cuentan como error</span>
          </li>
          <li className="flex gap-2">
            <span>&#8226;</span>
            <span>El examen se envía automáticamente al acabarse el tiempo</span>
          </li>
        </ul>
      </div>

      <div className="mt-4 space-y-3">
        <button
          onClick={() => router.push('/examen/simulacro?type=random')}
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
        >
          Comenzar Examen
        </button>

        <Link
          href="/progreso"
          className="block w-full py-3 text-center border border-border rounded-xl font-medium text-muted hover:bg-card-hover transition-colors"
        >
          Ver historial de exámenes
        </Link>
      </div>
    </div>
  );
}
