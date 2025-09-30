import React from 'react';

export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-4">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 font-semibold">{title}</p>
        <p className="text-2xl font-extrabold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

