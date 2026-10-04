import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle, XCircle, Clock, Award } from 'lucide-react';

export const Attendance = () => {
  const [classesAttendance, setClassesAttendance] = useState([
    { id: 1, grade: 'Grade 10-A', total: 45, present: 43, absent: 2, percentage: '95.5%' },
    { id: 2, grade: 'Grade 10-B', total: 42, present: 40, absent: 2, percentage: '95.2%' },
    { id: 3, grade: 'Grade 9-A', total: 48, present: 44, absent: 4, percentage: '91.6%' },
    { id: 4, grade: 'Grade 9-B', total: 40, present: 39, absent: 1, percentage: '97.5%' },
    { id: 5, grade: 'Grade 8-A', total: 46, present: 42, absent: 4, percentage: '91.3%' },
  ]);

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-2">
            <CalendarIcon className="w-3.5 h-3.5" /> Daily Logs
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Attendance Management</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor daily student attendance, logs, and class summaries.</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-4 py-2.5 rounded-2xl">
            📅 Today: October 4, 2026
          </span>
        </div>
      </div>

      {/* Attendance Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Overall Present</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">2,380</h3>
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-2">94.8% Average</span>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600">
            <CheckCircle className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Absent</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">70</h3>
            <span className="text-xs text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-full inline-block mt-2">Excused & Unexcused</span>
          </div>
          <div className="p-4 rounded-2xl bg-rose-50 text-rose-600">
            <XCircle className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Late Arrivals</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">12</h3>
            <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-2">Morning Shift</span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 text-amber-600">
            <Clock className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Classwise Attendance Table */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Class-wise Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Class Section</th>
                <th className="py-4 px-6">Total Students</th>
                <th className="py-4 px-6">Present</th>
                <th className="py-4 px-6">Absent</th>
                <th className="py-4 px-6">Attendance Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {classesAttendance.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-4 px-6 font-semibold text-slate-900">{item.grade}</td>
                  <td className="py-4 px-6 text-slate-600 font-medium">{item.total}</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">{item.present}</td>
                  <td className="py-4 px-6 text-rose-600 font-bold">{item.absent}</td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs">
                      {item.percentage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};