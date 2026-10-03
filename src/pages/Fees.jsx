import React from 'react';
import { useSchool } from '../context/AuthContext';
import { CreditCard } from 'lucide-react';

export const Fees = () => {
  const { fees } = useSchool();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Fee Management & Billing</h2>
          <p className="text-xs text-slate-500">Track student tuition fee structures, payment receipts, and dues.</p>
        </div>
        <button onClick={() => alert('New invoice created')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xs flex items-center gap-2">
          <CreditCard className="w-4 h-4" /> Create Invoice
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold">Invoice ID</th>
              <th className="p-4 font-semibold">Student Name</th>
              <th className="p-4 font-semibold">Class</th>
              <th className="p-4 font-semibold">Fee Type</th>
              <th className="p-4 font-semibold">Amount</th>
              <th className="p-4 font-semibold">Due Date</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {fees.map(f => (
              <tr key={f.id}>
                <td className="p-4 font-medium text-slate-800">{f.invoiceId}</td>
                <td className="p-4 font-bold text-slate-900">{f.student}</td>
                <td className="p-4 text-slate-600">{f.class}</td>
                <td className="p-4 text-slate-600">{f.type}</td>
                <td className="p-4 font-semibold text-slate-800">{f.amount}</td>
                <td className="p-4 text-slate-600">{f.dueDate}</td>
                <td className="p-4"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${f.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : f.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>{f.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
