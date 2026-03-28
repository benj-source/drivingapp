'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { allDecks } from '@/data/flashcards';
import { useProgress } from '@/hooks/useProgress';
import { cn } from '@/lib/utils';

export default function FlashcardSessionPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const deck = allDecks.find(d => d.id === deckId);
  const { markFlashcard } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const flip = useCallback(() => setIsFlipped(f => !f), []);

  const next = useCallback((confidence: 1 | 2 | 3) => {
    if (!deck) return;
    markFlashcard(deck.cards[currentIndex].id, confidence);
    setIsFlipped(false);
    if (currentIndex + 1 >= deck.cards.length) {
      setCompleted(true);
    } else {
      setCurrentIndex(i => i + 1);
    }
  }, [deck, currentIndex, markFlashcard]);

  if (!deck) {
    return (
      <div className="p-4 pt-8 text-center">
        <p className="text-muted">Mazo no encontrado</p>
        <Link href="/fichas" className="text-accent mt-2 inline-block">Volver</Link>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="p-4 pt-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-xl font-bold mb-2">¡Mazo completado!</h2>
        <p className="text-muted mb-6">Has revisado las {deck.cards.length} fichas</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => { setCurrentIndex(0); setCompleted(false); setIsFlipped(false); }}
            className="px-4 py-2 bg-primary text-white rounded-lg font-medium"
          >
            Repetir
          </button>
          <Link href="/fichas" className="px-4 py-2 border border-border rounded-lg font-medium">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  const card = deck.cards[currentIndex];

  return (
    <div className="p-4">
      <div className="pt-4 mb-4">
        <Link href="/fichas" className="text-accent text-sm">&larr; Fichas</Link>
        <div className="flex items-center justify-between mt-2">
          <h1 className="text-lg font-bold">{deck.title}</h1>
          <span className="text-sm text-muted">{currentIndex + 1} / {deck.cards.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / deck.cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective cursor-pointer" onClick={flip}>
        <div className={cn(
          'relative w-full min-h-[300px] transition-transform duration-500 preserve-3d',
          isFlipped && 'rotate-y-180'
        )}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white border-2 border-border rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm">
            <span className="text-xs uppercase tracking-wider text-muted mb-3">
              {card.front.type === 'sign' ? 'Señal' : card.front.type === 'situation' ? 'Situación' : 'Regla'}
            </span>
            <p className="text-lg font-medium leading-relaxed">{card.front.text}</p>
            <p className="text-xs text-muted mt-4">Toca para voltear</p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-accent-light border-2 border-accent rounded-2xl p-6 flex flex-col justify-center shadow-sm">
            <p className="text-base leading-relaxed">{card.back.rule}</p>
            {card.back.germanName && (
              <p className="text-sm text-muted mt-3 italic">Término: {card.back.germanName}</p>
            )}
            {card.back.legalConsequence && (
              <p className="text-sm text-red-600 mt-2 font-medium">⚠️ {card.back.legalConsequence}</p>
            )}
          </div>
        </div>
      </div>

      {/* Confidence buttons - only show when flipped */}
      {isFlipped && (
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => next(1)}
            className="flex-1 py-3 rounded-xl bg-red-50 text-red-700 font-medium border border-red-200 hover:bg-red-100"
          >
            Difícil
          </button>
          <button
            onClick={() => next(2)}
            className="flex-1 py-3 rounded-xl bg-amber-50 text-amber-700 font-medium border border-amber-200 hover:bg-amber-100"
          >
            Normal
          </button>
          <button
            onClick={() => next(3)}
            className="flex-1 py-3 rounded-xl bg-green-50 text-green-700 font-medium border border-green-200 hover:bg-green-100"
          >
            Fácil
          </button>
        </div>
      )}
    </div>
  );
}
