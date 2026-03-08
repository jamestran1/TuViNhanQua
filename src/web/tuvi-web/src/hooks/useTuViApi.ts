'use client';

import { useState } from 'react';
import { TuViChart } from '../types/tuvi';

export function useGenerateChart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (name: string, gender: string, birthDate: string): Promise<TuViChart | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/tuvi/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gender, birthDate })
      });
      if (!response.ok) throw new Error('Không thể kết nối với máy chủ.');
      return await response.json();
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generate, loading, error };
}