import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-purple-100 flex flex-col items-center justify-center p-4">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #4c1d95 0%, transparent 70%)" }}></div>
      
      <div className="z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-amber-500 tracking-wide">
          Tử Vi Nhân Quả
        </h1>
        
        <p className="text-lg md:text-xl italic text-slate-400 mb-12 max-w-2xl px-4">
          "Thấu hiểu nghiệp lực - Gieo nhân lành - Chuyển hóa mệnh vận"
        </p>

        {/* Form nhập liệu lá số (Draft) */}
        <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-md border border-purple-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(88,28,135,0.3)]">
          <h2 className="text-2xl font-semibold mb-6 text-amber-200/90 font-serif">Lập Lá Số Mới</h2>
          
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Họ và tên..." 
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-all appearance-none">
                <option value="Male">Nam mệnh</option>
                <option value="Female">Nữ mệnh</option>
              </select>
              <input 
                type="date" 
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 text-amber-100 font-medium py-3 rounded-lg shadow-lg shadow-purple-900/50 transition-all active:scale-[0.98]">
              Khởi Tạo Mệnh Bàn
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}