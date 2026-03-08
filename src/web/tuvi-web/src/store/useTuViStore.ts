import { create } from 'zustand';
import { TuViChart } from '../types/tuvi';

interface TuViState {
  currentChart: TuViChart | null;
  setChart: (chart: TuViChart) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useTuViStore = create<TuViState>((set) => ({
  currentChart: null,
  setChart: (chart) => set({ currentChart: chart }),
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }),
}));