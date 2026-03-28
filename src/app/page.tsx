import Link from 'next/link';

const features = [
  {
    href: '/teoria',
    title: 'Teoria',
    description: 'Estudia las reglas de tráfico suizas por módulos',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    href: '/fichas',
    title: 'Fichas de Estudio',
    description: 'Tarjetas de memoria para señales y reglas',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    href: '/quiz',
    title: 'Quiz de Práctica',
    description: 'Preguntas por tema con retroalimentación inmediata',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-green-50 text-green-600',
  },
  {
    href: '/examen',
    title: 'Simulacro de Examen',
    description: '50 preguntas, 60 minutos, máx. 15 puntos de error',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'bg-red-50 text-red-600',
  },
];

export default function HomePage() {
  return (
    <div className="p-4">
      <div className="mb-8 pt-4">
        <h1 className="text-2xl font-bold text-foreground">SwissDrive</h1>
        <p className="text-muted mt-1">Examen teórico categoría B - Suiza</p>
      </div>

      <div className="space-y-3">
        {features.map(f => (
          <Link
            key={f.href}
            href={f.href}
            className="flex items-start gap-4 p-4 rounded-xl border border-border hover:bg-card-hover transition-colors"
          >
            <div className={`p-3 rounded-lg ${f.color}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{f.title}</h2>
              <p className="text-sm text-muted mt-0.5">{f.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-primary-light border border-red-200">
        <p className="text-sm text-red-800">
          <strong>Consejo:</strong> El examen oficial ASA tiene 50 preguntas en 60 minutos.
          Se permiten máximo 15 puntos de error. Enfócate en las reglas de prioridad
          (<em>Rechtsvortritt</em>) y percepción de peligros.
        </p>
      </div>
    </div>
  );
}
