import React from 'react';
import PalaceCard from './PalaceCard';
import { TuViChart } from '../types/tuvi';

interface CircularChartProps {
  chart: TuViChart;
}

export default function CircularChart({ chart }: CircularChartProps) {
  return (
    <div className="relative w-[600px] h-[600px] rounded-full border-2 border-amber-500/20 bg-slate-900/40 p-4">
      {/* 12 Cung sắp xếp theo vòng tròn */}
      {chart.palaces.map((palace, index) => {
        const angle = (index * 30) - 90; // Chia 360 độ cho 12 cung
        return (
          <div 
            key={palace.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            style={{
              transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`
            }}
          >
            <PalaceCard palace={palace} />
          </div>
        );
      })}

      {/* Tâm lá số - Hiển thị thông tin chính */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-slate-900 border-4 border-amber-600/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,119,6,0.2)]">
        <h3 className="text-xl font-serif text-amber-200">{chart.metadata.name}</h3>
        <p className="text-xs text-slate-400 mt-2">{chart.metadata.element}</p>
        <div className="mt-4 w-12 h-12 border border-amber-500/30 rounded-full flex items-center justify-center animate-spin-slow">
          <span className="text-amber-500 text-lg">卍</span>
        </div>
      </div>
    </div>
  );
}