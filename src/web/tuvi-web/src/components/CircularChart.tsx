'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
        const angle = (index * 30) - 90; 
        return (
          <motion.div 
            key={palace.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(217,119,6,0.5)" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            style={{
              transform: `rotate(${angle}deg) translate(220px) rotate(-${angle}deg)`
            }}
          >
            <PalaceCard palace={palace} />
          </motion.div>
        );
      })}

      {/* Tâm lá số */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-slate-900 border-4 border-amber-600/40 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(217,119,6,0.3)]"
      >
        <h3 className="text-xl font-serif text-amber-200 z-10">{chart.metadata.name}</h3>
        <p className="text-xs text-slate-400 mt-2 z-10">{chart.metadata.element}</p>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-amber-500/20 text-9xl">卍</span>
        </div>
      </motion.div>
    </div>
  );
}