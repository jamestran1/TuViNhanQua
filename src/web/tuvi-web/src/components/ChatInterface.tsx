'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInterface() {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: 'ai', text: 'Chào bạn, tôi là AI Tử Vi Nhân Quả. Hãy cho tôi biết thắc mắc của bạn về mệnh bàn?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    // Giả lập AI trả lời sau 1 giây
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: 'Dựa trên triết lý nhân quả, tôi thấy rằng...' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-xl bg-slate-900/80 rounded-2xl border border-purple-500/20 overflow-hidden">
      <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-500">
        {messages.map((m, i) => (
          <motion.div 
            initial={{ opacity: 0, x: m.role === 'ai' ? -10 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-xl ${m.role === 'ai' ? 'bg-purple-900/40 text-purple-100 border border-purple-800' : 'bg-amber-600/20 text-amber-100 border border-amber-800'}`}>
              <p className="text-sm leading-relaxed">{m.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="p-4 bg-slate-950 border-t border-purple-900/30 flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Hỏi về nghiệp quả, cách cải mệnh..." 
          className="flex-grow bg-slate-800 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-purple-500"
        />
        <button onClick={handleSend} className="bg-purple-600 p-2 rounded-full hover:bg-purple-500 transition-all">
          <span className="text-white text-xs">Gửi</span>
        </button>
      </div>
    </div>
  );
}