import React from 'react';
import { useSchool } from '../context/AuthContext';
import { Users, GraduationCap, UserCheck, CheckSquare, CreditCard, AlertCircle, Bell, ArrowUpRight } from 'lucide-react';

export const Dashboard = () => {
  const { students, teachers, fees, notices } = useSchool();

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">M.E Foundations School Portal</h2>
          <p className="text-emerald-100 text-sm mt-1">Official Digital Management System • www.esylearning.com</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold border border-white/20">Academic Session: 2026–2027</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Students</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{students.length}50+</h3>
            <span className="text-xs text-emerald-600 font-semibold mt-1 inline-flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Active Enrollment</span>
          </div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center"><Users className="w-6 h-6" /></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Teachers</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{teachers.length}2+</h3>
            <span className="text-xs text-emerald-600 font-semibold mt-1 inline-flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Verified Faculty</span>
          </div>
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><GraduationCap className="w-6 h-6" /></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Attendance Today</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">94.8%</h3>
            <span className="text-xs text-emerald-600 font-semibold mt-1 inline-flex items-center gap-1"><CheckSquare className="w-3 h-3" /> Normal Status</span>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center"><UserCheck className="w-6 h-6" /></div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Fee Collection</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">PKR 1.28M</h3>
            <span className="text-xs text-rose-500 font-semibold mt-1 inline-flex items-center gap-1"><AlertCircle className="w-3 h-3" /> 346K Pending</span>
          </div>
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center"><CreditCard className="w-6 h-6" /></div>
        </div>
      </div>

      {/* Notices & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider"><Bell className="w-4 h-4 text-emerald-600" /> Recent School Notices</h3>
          <div className="space-y-3">
            {notices.map(n => (
              <div key={n.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-slate-800 text-sm">{n.title}</h4>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-semibold">{n.priority}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{n.content}</p>
                <div className="text-[10px] text-slate-400 mt-2">{n.date} • By {n.author}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider"><Users className="w-4 h-4 text-emerald-600" /> Enrolled Students Summary</h3>
          <div className="space-y-3">
            {students.slice(0, 4).map(s => (
              <div key={s.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-800">{s.firstName} {s.lastName} (#{s.roll})</p>
                  <p className="text-slate-400 text-[10px]">{s.class} • Guardian: {s.parentName}</p>
                </div>
                <span className={`px-2 py-1 rounded font-semibold ${s.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{s.feeStatus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
