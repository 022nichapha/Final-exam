import React from 'react';
import { Eye, Edit2, Trash2, BookOpen, FileText, BookMarked } from 'lucide-react';
import { ItemTypes, ItemStatus } from '../constants/constants';

export default function ItemCard({ item, type, onView, onEdit, onDelete }) {
  const getTypeIcon = (type) => {
    switch(type) {
      case ItemTypes.BOOK: return <BookOpen className="w-6 h-6" />;
      case ItemTypes.JOURNAL: return <FileText className="w-6 h-6" />;
      case ItemTypes.COMIC: return <BookMarked className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case ItemStatus.AVAILABLE: return 'bg-gradient-to-br from-emerald-400 via-green-400 to-teal-500 text-white';
      case ItemStatus.BORROWED: return 'bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 text-white';
      case ItemStatus.RESERVED: return 'bg-gradient-to-br from-blue-400 via-cyan-400 to-sky-500 text-white';
      case ItemStatus.MAINTENANCE: return 'bg-gradient-to-br from-rose-400 via-pink-400 to-red-500 text-white';
      default: return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100">
      <div className="h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4 flex-1">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              {getTypeIcon(type)}
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 line-clamp-2">{item.title}</h3>
          </div>
        </div>

        <div className="space-y-3 mb-5 bg-gray-50 rounded-2xl p-4">
          <p className="text-gray-700 text-sm flex items-center gap-2 font-semibold">👤 {item.author || '-'}</p>
          <p className="text-gray-600 text-sm flex items-center gap-2 font-semibold">📚 {item.category || '-'}</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wide ${getStatusColor(item.status)}`}>
            {item.status}
          </span>
          <span className="text-gray-600 text-sm font-bold bg-gray-100 px-4 py-2 rounded-xl">📅 {item.publishYear}</span>
        </div>

        <div className="flex gap-3">
          <button onClick={() => onView(item)} className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-2xl">ดู</button>
          <button onClick={() => onEdit(item)} className="flex-1 bg-orange-500 text-white px-4 py-3 rounded-2xl">แก้ไข</button>
          <button onClick={() => onDelete(item.itemId)} className="flex-1 bg-red-500 text-white px-4 py-3 rounded-2xl">ลบ</button>
        </div>
      </div>
    </div>
  );
}
