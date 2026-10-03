import React, { useState } from 'react';
import { useSchool, useAuth } from '../context/AuthContext';
import { Users, UserPlus, Search, Trash2 } from 'lucide-react';

export const Students = () => {
  const { students, updateStudents, addActivity } = useSchool();
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', roll: '', cls: 'Class 10', parent: '', phone: '' });

  const filteredStudents = students.filter(s => s.firstName.toLowerCase().includes(search.toLowerCase()) || s.roll.includes(search));

  const handleAdd = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      admNo: `ME-2026-00${students.length + 1}`,
      roll: formData.roll || '106',
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: 'Male',
      dob: '2010-01-01',
      bloodGroup: 'B+',
      class: formData.cls,
      section: 'Section A',
      parentName: formData.parent,
      phone: formData.phone || '+92 300 0000000',
      email: 'student@gmail.com',
      address: 'Islamabad, Pakistan',
      attendance: '100%',
      feeStatus: 'Pending',
      status: 'Active'
    };
    updateStudents([...students, newStudent]);
    addActivity(`Added Student: ${formData.firstName} ${formData.lastName}`, user?.name || 'Admin');
    setModalOpen(false);
    setFormData({ firstName: '', lastName: '', roll: '', cls: 'Class 10', parent: '', phone: '' });
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this student record?')) {
      updateStudents(students.filter(s => s.id !== id));
      addActivity(`Deleted student record`, user?.name || 'Admin');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Student Directory</h2>
          <p className="text-xs text-slate-500">Manage enrolled students, profiles, and class assignments.</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xs flex items-center gap-2">
          <UserPlus className="w-4 h-4" /> Add New Student
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input type="text" placeholder="Search student name or roll..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="p-4 font-semibold">Roll</th>
                <th className="p-4 font-semibold">Student Name</th>
                <th className="p-4 font-semibold">Class / Section</th>
                <th className="p-4 font-semibold">Guardian</th>
                <th className="p-4 font-semibold">Phone</th>
                <th className="p-4 font-semibold">Attendance</th>
                <th className="p-4 font-semibold">Fee Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map(s => (
                <tr key={s.id} className="hover:bg-slate-50/50">
                  <td className="p-4 font-medium text-slate-800">#{s.roll}</td>
                  <td className="p-4 font-bold text-slate-900">{s.firstName} {s.lastName}</td>
                  <td className="p-4 text-slate-600">{s.class} ({s.section})</td>
                  <td className="p-4 text-slate-600">{s.parentName}</td>
                  <td className="p-4 text-slate-600">{s.phone}</td>
                  <td className="p-4"><span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">{s.attendance}</span></td>
                  <td className="p-4"><span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${s.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : s.feeStatus === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>{s.feeStatus}</span></td>
                  <td className="p-4 text-right">
                    <button onClick={() => handleDelete(s.id)} className="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg transition"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Student</h3>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First Name" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
                <input type="text" placeholder="Last Name" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
              </div>
              <input type="text" placeholder="Roll Number (e.g. 106)" required value={formData.roll} onChange={e => setFormData({...formData, roll: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
              <select value={formData.cls} onChange={e => setFormData({...formData, cls: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white">
                <option value="Class 10">Class 10</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 8">Class 8</option>
              </select>
              <input type="text" placeholder="Guardian Name" required value={formData.parent} onChange={e => setFormData({...formData, parent: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
              <input type="text" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100">Cancel</button>
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-xs">Save Student</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
