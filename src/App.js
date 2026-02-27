import React, { useState } from 'react';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Giao diện Lịch giả lập (giống hình bạn gửi)
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <p className="text-gray-400 text-sm">Xin chào, Quản lý</p>
        <div className="flex justify-between items-center">
          <h1 className="text-[#FFD700] text-2xl font-bold tracking-wider">HUNGKA WEDDING</h1>
          <button className="bg-gray-700 p-2 rounded-full">🔄</button>
        </div>
      </div>

      {/* Điều hướng Tháng */}
      <div className="p-4 flex justify-between items-center">
        <button className="bg-gray-800 px-4 py-2 rounded-lg text-sm">Lọc</button>
        <h2 className="text-lg font-semibold">Tháng {currentDate.getMonth() + 1} Năm {currentDate.getFullYear()}</h2>
        <div className="flex gap-2">
          <button className="bg-gray-800 px-3 py-1 rounded">&lt;</button>
          <button className="bg-gray-800 px-3 py-1 rounded">&gt;</button>
        </div>
      </div>

      {/* Bảng Lịch */}
      <div className="px-2 flex-grow">
        <div className="grid grid-cols-7 text-center text-xs font-bold mb-2">
          {['Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'CN'].map(day => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>
        
        {/* Lưới ngày (Mẫu 1 vài ngày như hình) */}
        <div className="grid grid-cols-7 gap-1">
          {[...Array(28)].map((_, i) => (
            <div key={i} className="aspect-square border border-gray-900 bg-[#1e1e1e] p-1 flex flex-col justify-between items-center relative">
              <span className="text-sm font-bold">{i + 1}</span>
              <span className="text-[10px] text-red-500 font-medium">{i + 14}/12</span>
              {i === 24 || i === 27 ? <div className="w-1.5 h-1.5 bg-green-500 rounded-full mb-1"></div> : null}
              {i === 25 ? <div className="w-5 h-5 bg-green-600 rounded-full text-[10px] flex items-center justify-center mb-1">3</div> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Menu dưới (Tab Bar) */}
      <div className="bg-[#1e1e1e] border-t border-gray-800 flex justify-around py-3">
        <div className="flex flex-col items-center text-[#FFD700]">
          <span className="text-xl">📅</span>
          <span className="text-[10px]">Lịch</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-xl">🔍</span>
          <span className="text-[10px]">Tìm kiếm</span>
        </div>
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-xl">📈</span>
          <span className="text-[10px]">Thống kê</span>
        </div>
      </div>
    </div>
  );
};

export default App;
