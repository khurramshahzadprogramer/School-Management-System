import React from 'react';
import { useSchool } from '../context/AuthContext';
import { Settings as SettingsIcon } from 'lucide-react';

export const Settings = () => {
  const { students, teachers, fees } = useSchool();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">School Profile & System Settings</h2>
        <p className="text-xs text-slate-500">Institutional branding, academic sessions, and portal configuration.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <h3 className="font-bold text-slate-900 flex items-center gap-2"><SettingsIcon className="w-4 h-4 text-emerald-600" /> Institutional Profile</h3>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">School Name</label>
            <input type="text" readOnly value="M.E Foundations School" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Reference Website</label>
            <input type="text" readOnly value="www.esylearning.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50" />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Active Academic Session</label>
            <input type="text" readOnly value="2026–2027" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <h3 className="font-bold text-slate-900">System Statistics</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-600">Total Enrolled Students</span>
              <span className="font-bold text-slate-900">{students.length}</span>
            </div>
            <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-600">Registered Faculty</span>
              <span className="font-bold text-slate-900">{teachers.length}</span>
            </div>
            <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-600">Total Fee Invoices</span>
              <span className="font-bold text-slate-900">{fees.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
