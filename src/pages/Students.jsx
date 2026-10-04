import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Mail, 
  Phone, 
  Award, 
  ChevronRight,
  UserCheck,
  Sparkles,
  X
} from 'lucide-react';

export const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Local state for students list
  const [studentsList, setStudentsList] = useState([
    { id: 1, name: 'Sarah Jenkins', grade: 'Grade 10-A', roll: 'ST-2026-01', email: 'sarah.j@school.edu', phone: '+1 234 567 890', attendance: '98%', status: 'Active' },
    { id: 2, name: 'Alex Rivera', grade: 'Grade 9-B', roll: 'ST-2026-02', email: 'alex.r@school.edu', phone: '+1 234 567 891', attendance: '92%', status: 'Active' },
    { id: 3, name: 'Ayesha Khan', grade: 'Grade 10-B', roll: 'ST-2026-03', email: 'ayesha.k@school.edu', phone: '+1 234 567 892', attendance: '95%', status: 'Active' },
    { id: 4, name: 'Liam Chen', grade: 'Grade 8-A', roll: 'ST-2026-04', email: 'liam.c@school.edu', phone: '+1 234 567 893', attendance: '88%', status: 'Inactive' },
    { id: 5, name: 'Bilal Ahmed', grade: 'Grade 10-A', roll: 'ST-2026-05', email: 'bilal.a@school.edu', phone: '+1 234 567 894', attendance: '97%', status: 'Active' },
  ]);

  const [newStudent, setNewStudent] = useState({ name: '', grade: 'Grade 10-A', email: '', phone: '' });

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name) return;
    const studentObj = {
      id: studentsList.length + 1,
      name: newStudent.name,
      grade: newStudent.grade,
      roll: `ST-2026-0${studentsList.length + 1}`,
      email: newStudent.email || 'student@school.edu',
      phone: newStudent.phone || '+1 234 567 000',
      attendance: '100%',
      status: 'Active'
    };
    setStudentsList([studentObj, ...studentsList]);
    setNewStudent({ name: '', grade: 'Grade 10-A', email: '', phone: '' });
    setIsModalOpen(false);
  };

  const filteredStudents = studentsList.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.roll.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'All' || student.grade.includes(selectedClass);
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" /> Directory Management
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Students Management</h1>
          <p className="text-slate-500 text-sm mt-1">Manage enrollments, track academic standings, and view profiles.</p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-5 py-3 rounded-2xl text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Student</span>
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Search by student name or roll number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-full md:w-48"
          >
            <option value="All">All Classes</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 8">Grade 8</option>
          </select>
        </div>
      </div>

      {/* Students Grid / Table */}
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Student Name</th>
                <th className="py-4 px-6">Roll Number</th>
                <th className="py-4 px-6">Class / Grade</th>
                <th className="py-4 px-6">Contact Info</th>
                <th className="py-4 px-6">Attendance</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/60 transition group">
                  <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p>{student.name}</p>
                      <p className="text-xs text-slate-400 font-normal">{student.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-mono text-xs font-semibold text-indigo-600 bg-indigo-50/50 rounded-lg w-max px-2 py-1 my-auto">
                    {student.roll}
                  </td>
                  <td className="py-4 px-6 font-medium text-slate-700">{student.grade}</td>
                  <td className="py-4 px-6 text-slate-500 text-xs">
                    <div className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-slate-400" /> {student.phone}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full text-xs">
                      {student.attendance}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${student.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-100 animate-scaleUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Add New Student</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Doe"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Grade / Class</label>
                <select 
                  value={newStudent.grade}
                  onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Grade 8-A</option>
                  <option>Grade 9-B</option>
                  <option>Grade 10-A</option>
                  <option>Grade 10-B</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="student@school.edu"
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+1 234 567 890"
                  value={newStudent.phone}
                  onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition"
                >
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};