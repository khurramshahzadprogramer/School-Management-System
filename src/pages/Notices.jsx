import React from 'react';
import { useSchool } from '../context/AuthContext';
import { Bell } from 'lucide-react';

export const Notices = () => {
  const { notices } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Notices & Announcements</h2>
          <p className="text-xs text-slate-500">Official communication broadcasts for students, parents, and faculty.</p>
        </div>
      </div>

      <div className="space-y-4">
        {notices.map(n => (
          <div key={n.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2"><Bell className="w-4 h-4 text-emerald-600" /> {n.title}</h3>
              <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-semibold">{n.priority} Priority</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">{n.content}</p>
            <div className="text-xs text-slate-400">Published on {n.date} by {n.author} ({n.audience})</div>
          </div>
        ))}
      </div>
    </div>
  );
};
