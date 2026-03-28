import Link from 'next/link';

const modules = [
  {
    id: 'priority',
    title: 'Prioridad e Intersecciones',
    description: 'Rechtsvortritt, rotondas, giros, semáforos, señales de policía',
    icon: '🔀',
    color: 'bg-red-50 border-red-200',
  },
  {
    id: 'speed-overtaking',
    title: 'Velocidad y Adelantamiento',
    description: 'Límites de velocidad, distancias de frenado, reglas de adelantamiento',
    icon: '⚡',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    id: 'traffic-signs',
    title: 'Señales de Tráfico',
    description: 'Señales de advertencia, regulación, prioridad e informativas',
    icon: '🪧',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'special-rules',
    title: 'Reglas Especiales Suizas',
    description: 'Tranvías, túneles, Zonas Azules, Bergpoststrassen, estacionamiento',
    icon: '🇨🇭',
    color: 'bg-green-50 border-green-200',
  },
];

export default function TeoriaPage() {
  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Teoria</h1>
        <p className="text-muted text-sm mt-1">Selecciona un módulo para estudiar</p>
      </div>

      <div className="space-y-3">
        {modules.map(m => (
          <Link
            key={m.id}
            href={`/teoria/${m.id}`}
            className={`block p-4 rounded-xl border ${m.color} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{m.icon}</span>
              <div>
                <h2 className="font-semibold">{m.title}</h2>
                <p className="text-sm text-muted mt-0.5">{m.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
