import Link from 'next/link';

const decks = [
  { id: 'priority', title: 'Prioridad e Intersecciones', count: '~30 fichas', icon: '🔀', color: 'bg-red-50 border-red-200' },
  { id: 'speed', title: 'Velocidad y Adelantamiento', count: '~20 fichas', icon: '⚡', color: 'bg-blue-50 border-blue-200' },
  { id: 'signs', title: 'Señales de Tráfico', count: '~40 fichas', icon: '🪧', color: 'bg-amber-50 border-amber-200' },
  { id: 'special', title: 'Reglas Especiales', count: '~20 fichas', icon: '🇨🇭', color: 'bg-green-50 border-green-200' },
];

export default function FichasPage() {
  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Fichas de Estudio</h1>
        <p className="text-muted text-sm mt-1">Toca una ficha para voltearla y ver la respuesta</p>
      </div>

      <div className="space-y-3">
        {decks.map(d => (
          <Link
            key={d.id}
            href={`/fichas/${d.id}`}
            className={`block p-4 rounded-xl border ${d.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{d.icon}</span>
                <div>
                  <h2 className="font-semibold">{d.title}</h2>
                  <p className="text-sm text-muted">{d.count}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
