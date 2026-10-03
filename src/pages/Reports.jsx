import React from 'react';
import { useSchool } from '../context/AuthContext';
import { BarChart3 } from 'lucide-react';

export const Reports = () => {
  const { activities } = useSchool();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Reports & Audit Logs</h2>
        <p className="text-xs text-slate-500">Institutional analytics, attendance summaries, and administrative audit trails.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider"><BarChart3 className="w-4 h-4 text-emerald-600" /> Audit Log Trail</h3>
        <div className="space-y-3">
          {activities.map(a => (
            <div key={a.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center text-xs">
              <div>
                <p className="font-bold text-slate-800">{a.action}</p>
                <p className="text-slate-500 text-[10px]">User: {a.user}</p>
              </div>
              <span className="text-slate-400">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
