'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palace } from '../types/tuvi';

interface PalaceModalProps {
  palace: Palace | null;
  onClose: () => void;
}

export default function PalaceModal({ palace, onClose }: PalaceModalProps) {
  if (!palace) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-slate-900 border border-purple-500/50 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif text-amber-300">Cung {palace.name}</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">✕</button>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <h4 className="text-amber-100 font-semibold mb-2">Lời khuyên Nhân Quả:</h4>
                <p className="text-slate-300 italic text-sm">
                  "Hết thảy vạn sự trên lá số này đều là biểu hiện của nghiệp lực. Khi gặp khó khăn ở cung này, hãy lấy sự nhẫn nhục làm gốc, lấy sự bố thí làm phương tiện để chuyển hóa hung thành cát."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/40 p-3 rounded-lg">
                  <span className="text-xs text-slate-500 uppercase">Chính Tinh</span>
                  <div className="text-red-400 mt-1 font-medium">{palace.stars.filter(s => s.isMajor).map(s => s.name).join(', ') || 'Vô Chính Diệu'}</div>
                </div>
                <div className="bg-slate-800/40 p-3 rounded-lg">
                  <span className="text-xs text-slate-500 uppercase">Địa Chi</span>
                  <div className="text-amber-200 mt-1">{palace.zodiacSign}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-4 flex justify-end border-t border-purple-900/30">
            <button onClick={onClose} className="px-6 py-2 bg-purple-800 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors">
              Đóng lại
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}