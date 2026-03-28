'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { allModules } from '@/data/modules';
import { cn } from '@/lib/utils';

export default function TheoryModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const mod = allModules.find(m => m.id === moduleId);
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (!mod) {
    return (
      <div className="p-4 pt-8 text-center">
        <p className="text-muted">Módulo no encontrado</p>
        <Link href="/teoria" className="text-accent mt-2 inline-block">Volver a Teoria</Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="pt-4 mb-6">
        <Link href="/teoria" className="text-accent text-sm">&larr; Teoria</Link>
        <h1 className="text-2xl font-bold mt-2">{mod.title}</h1>
        <p className="text-muted text-sm mt-1">{mod.description}</p>
      </div>

      <div className="space-y-2">
        {mod.sections.map(section => {
          const isOpen = openSection === section.id;
          return (
            <div key={section.id} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenSection(isOpen ? null : section.id)}
                className="w-full text-left p-4 flex items-center justify-between hover:bg-card-hover transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{section.title}</h3>
                  {section.germanTerm && (
                    <span className="text-xs text-muted italic">{section.germanTerm}</span>
                  )}
                </div>
                <svg
                  className={cn('w-5 h-5 text-muted transition-transform', isOpen && 'rotate-180')}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 border-t border-border">
                  <div className="prose prose-sm mt-3 max-w-none">
                    {section.content.split('\n\n').map((p, i) => (
                      <p key={i} className="mb-3 text-sm leading-relaxed">{p}</p>
                    ))}
                  </div>

                  {section.keyRules.length > 0 && (
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-sm text-amber-800 mb-2">Reglas clave:</h4>
                      <ul className="space-y-1">
                        {section.keyRules.map((rule, i) => (
                          <li key={i} className="text-sm text-amber-900 flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5">&#9679;</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
