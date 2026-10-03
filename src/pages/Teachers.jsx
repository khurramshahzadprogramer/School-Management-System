import React from 'react';
import { useSchool } from '../context/AuthContext';
import { GraduationCap } from 'lucide-react';

export const Teachers = () => {
  const { teachers } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Faculty Management</h2>
          <p className="text-xs text-slate-500">Verified teachers, assigned subjects, and professional profiles.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teachers.map(t => (
          <div key={t.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold">{t.subject}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-2">Department: <span className="font-medium text-slate-700">{t.department}</span></p>
              <p className="text-xs text-slate-500 mb-2">Assigned Classes: <span className="font-medium text-slate-700">{t.classes}</span></p>
              <p className="text-xs text-slate-500">Email: <span className="font-medium text-slate-700">{t.email}</span></p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-semibold">{t.status}</span>
              <span className="text-slate-500">Attendance: {t.attendance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
