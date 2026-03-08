import React from 'react';
import { Palace, Star } from '../types/tuvi';

interface PalaceCardProps {
  palace: Palace;
}

export default function PalaceCard({ palace }: PalaceCardProps) {
  // Lọc chính tinh và phụ tinh
  const majorStars = palace.stars.filter(s => s.isMajor);
  const minorStars = palace.stars.filter(s => !s.isMajor);

  return (
    <div className="border border-purple-500/30 bg-slate-900/60 backdrop-blur-md p-3 rounded-lg flex flex-col h-40 shadow-sm hover:shadow-purple-500/20 transition-all cursor-pointer">
      <div className="flex justify-between items-center border-b border-purple-800/50 pb-1 mb-2">
        <span className="font-bold text-amber-300 text-sm">{palace.name}</span>
        <span className="text-xs text-slate-400">{palace.zodiacSign}</span>
      </div>
      
      {/* Chính Tinh */}
      <div className="flex flex-col space-y-1 mb-2 flex-grow">
        {majorStars.map((star, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-red-400 font-semibold text-sm">{star.name}</span>
            <span className="text-xs text-slate-500">({star.status})</span>
          </div>
        ))}
      </div>

      {/* Phụ Tinh (rút gọn) */}
      <div className="text-xs text-slate-400 truncate mt-auto">
        {minorStars.map(s => s.name).join(', ')}
      </div>
    </div>
  );
}