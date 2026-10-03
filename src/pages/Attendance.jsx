import React from 'react';
import { useSchool } from '../context/AuthContext';
import { CheckSquare } from 'lucide-react';

export const Attendance = () => {
  const { students } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Student Attendance</h2>
          <p className="text-xs text-slate-500">Mark daily attendance and track absence reports.</p>
        </div>
        <button onClick={() => alert('Attendance saved successfully!')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xs flex items-center gap-2">
          <CheckSquare className="w-4 h-4" /> Save Attendance
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-6">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold">Roll</th>
              <th className="p-4 font-semibold">Student Name</th>
              <th className="p-4 font-semibold">Present</th>
              <th className="p-4 font-semibold">Absent</th>
              <th className="p-4 font-semibold">Late</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((s, idx) => (
              <tr key={s.id}>
                <td className="p-4 font-medium">#{s.roll}</td>
                <td className="p-4 font-bold text-slate-900">{s.firstName} {s.lastName}</td>
                <td className="p-4"><input type="radio" name={`att_${idx}`} defaultChecked className="text-emerald-600" /></td>
                <td className="p-4"><input type="radio" name={`att_${idx}`} className="text-rose-600" /></td>
                <td className="p-4"><input type="radio" name={`att_${idx}`} className="text-amber-500" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
