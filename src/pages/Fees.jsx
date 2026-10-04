import React, { useState } from 'react';
import { DollarSign, CheckCircle2, Clock, AlertCircle, Download, Plus, Search } from 'lucide-react';

export const Fees = () => {
  const [feesList, setFeesList] = useState([
    { id: 1, student: 'Sarah Jenkins', grade: 'Grade 10-A', amount: '$450', dueDate: 'Oct 10, 2026', status: 'Paid', method: 'Credit Card' },
    { id: 2, student: 'Alex Rivera', grade: 'Grade 9-B', amount: '$450', dueDate: 'Oct 12, 2026', status: 'Pending', method: '-' },
    { id: 3, student: 'Ayesha Khan', grade: 'Grade 10-B', amount: '$450', dueDate: 'Oct 05, 2026', status: 'Paid', method: 'Bank Transfer' },
    { id: 4, student: 'Liam Chen', grade: 'Grade 8-A', amount: '$400', dueDate: 'Sep 28, 2026', status: 'Overdue', method: '-' },
    { id: 5, student: 'Bilal Ahmed', grade: 'Grade 10-A', amount: '$450', dueDate: 'Oct 15, 2026', status: 'Paid', method: 'Cash' },
  ]);

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
            <DollarSign className="w-3.5 h-3.5" /> Finance & Accounts
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Fee Management</h1>
          <p className="text-slate-500 text-sm mt-1">Track tuition payments, generate invoices, and view financial stats.</p>
        </div>

        <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold px-5 py-3 rounded-2xl text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          <span>Download Statements</span>
        </button>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Collected</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">$78,450</h3>
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-2">92% Collection Rate</span>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Pending Dues</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">$5,750</h3>
            <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full inline-block mt-2">14 Students Remaining</span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 text-amber-600">
            <Clock className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Overdue Payments</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">$1,200</h3>
            <span className="text-xs text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-full inline-block mt-2">Action Required</span>
          </div>
          <div className="p-4 rounded-2xl bg-rose-50 text-rose-600">
            <AlertCircle className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Fee Table */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Recent Fee Transactions</h3>
          <span className="text-xs text-slate-400 font-medium">Updated 5 mins ago</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-6">Grade</th>
                <th className="py-4 px-6">Amount</th>
                <th className="py-4 px-6">Due Date</th>
                <th className="py-4 px-6">Method</th>
                <th className="py-4 px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {feesList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition">
                  <td className="py-4 px-6 font-semibold text-slate-900">{item.student}</td>
                  <td className="py-4 px-6 text-slate-600">{item.grade}</td>
                  <td className="py-4 px-6 font-bold text-slate-900">{item.amount}</td>
                  <td className="py-4 px-6 text-slate-500">{item.dueDate}</td>
                  <td className="py-4 px-6 text-slate-500 font-medium">{item.method}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' :
                      item.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {item.status}
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