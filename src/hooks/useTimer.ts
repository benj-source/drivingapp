'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export function useTimer(totalSeconds: number, onExpire?: () => void) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (!isRunning || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(id);
          setIsRunning(false);
          onExpireRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning, remaining]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setRemaining(totalSeconds);
    setIsRunning(false);
  }, [totalSeconds]);

  const elapsed = totalSeconds - remaining;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  return { remaining, elapsed, isRunning, start, pause, reset, display, minutes, seconds };
}
