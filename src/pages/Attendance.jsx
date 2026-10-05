import React from 'react';
import { useSchool } from '../context/AuthContext';
import { CheckSquare, Users, Calendar } from 'lucide-react';

export const Attendance = () => {
  const { students } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Attendance Management</h1>
          <p className="text-slate-400 text-sm">Track and monitor student daily attendance records.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-slate-300 text-sm">
          <Calendar className="w-4 h-4 text-emerald-500" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Total Students</h3>
            <Users className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-white">{students?.length || 0}</p>
        </div>
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Present Today</h3>
            <CheckSquare className="w-5 h-5 text-teal-500" />
          </div>
          <p className="text-3xl font-bold text-white">{students?.length ? students.length - 1 : 0}</p>
        </div>
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-900 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">Absent Today</h3>
            <Users className="w-5 h-5 text-rose-500" />
          </div>
          <p className="text-3xl font-bold text-white">1</p>
        </div>
      </div>

      <div className="bg-slate-950 rounded-2xl border border-slate-900 p-6">
        <h3 className="text-white font-bold mb-4">Student Attendance List</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900 text-slate-400 uppercase text-xs">
              <tr>
                <th className="p-3 rounded-l-xl">Name</th>
                <th className="p-3">Roll No</th>
                <th className="p-3">Class</th>
                <th className="p-3 rounded-r-xl">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900">
              {students?.map((student, idx) => (
                <tr key={idx} className="hover:bg-slate-900/50">
                  <td className="p-3 font-medium text-white">{student.name || student.fullName || 'Student'}</td>
                  <td className="p-3 text-slate-400">{student.rollNo || `#STD-00${idx+1}`}</td>
                  <td className="p-3 text-slate-400">{student.class || '10th'}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Present
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