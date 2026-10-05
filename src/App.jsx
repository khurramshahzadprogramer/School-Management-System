import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, GraduationCap, DollarSign, 
  BookOpen, Calendar, Bell, Search, Plus, CheckCircle, 
  ShieldCheck, Bus, Library, UserPlus, Lock, Mail, ArrowRight, LogOut, X 
} from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('admin@meschool.edu');
  const [password, setPassword] = useState('admin123');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Students with LocalStorage Persistence
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('meschool_students_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [
      { id: 'REG-2026-01', name: 'Ali Ahmed', grade: 'Grade 10 - A', status: 'Paid', contact: '+92 300 1234567' },
      { id: 'REG-2026-02', name: 'Fatima Noor', grade: 'Grade 10 - B', status: 'Pending', contact: '+92 321 9876543' },
      { id: 'REG-2026-03', name: 'Zainab Khan', grade: 'Grade 9 - A', status: 'Paid', contact: '+92 333 5554433' },
      { id: 'REG-2026-04', name: 'Bilal Raza', grade: 'Grade 8 - C', status: 'Paid', contact: '+92 312 4455667' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('meschool_students_v2', JSON.stringify(students));
  }, [students]);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentGrade, setNewStudentGrade] = useState('Grade 10 - A');
  const [newStudentContact, setNewStudentContact] = useState('');
  const [newStudentStatus, setNewStudentStatus] = useState('Paid');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Please enter valid credentials.');
    }
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudentName && newStudentContact) {
      const newEntry = {
        id: `REG-2026-0${students.length + 1}`,
        name: newStudentName,
        grade: newStudentGrade,
        status: newStudentStatus,
        contact: newStudentContact
      };
      setStudents([newEntry, ...students]);
      setNewStudentName('');
      setNewStudentContact('');
      setIsModalOpen(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-indigo-200">
              ME
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">M.E Foundations</h1>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mt-1">School Management ERP v3.0</p>
            </div>
            <p className="text-sm text-slate-500">Sign in to access your administrative dashboard</p>
          </div>

          {loginError && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-xl text-center font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Email Address</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium text-slate-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium text-slate-800"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2"
            >
              <span>Access Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-2 z-10">
                <span className="text-xs font-semibold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/20">
                  Academic Year 2026-2027
                </span>
                <h2 className="text-3xl font-bold tracking-tight">Welcome back, Administrator 👋</h2>
                <p className="text-slate-300 text-sm max-w-2xl">
                  Total active student profiles registered in system: <strong className="text-white">{students.length}</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Total Students', value: students.length + 2830, change: 'Live Synced', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { title: 'Active Faculty', value: '148', change: 'Verified', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { title: 'Fee Collection', value: '$92,450', change: '94%', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
                { title: 'Security Status', value: 'Secure', change: 'Active', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">{stat.title}</span>
                      <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">{stat.change}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Students Directory</h3>
                <p className="text-xs text-slate-500">Manage enrolled students, grades, and parent details</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Add New Student</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="p-4">Roll No</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Grade & Section</th>
                    <th className="p-4">Fee Status</th>
                    <th className="p-4">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map((stu, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-all">
                      <td className="p-4 font-semibold text-slate-900">{stu.id}</td>
                      <td className="p-4 font-medium text-slate-800">{stu.name}</td>
                      <td className="p-4">{stu.grade}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${stu.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {stu.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500">{stu.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'teachers':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Faculty Management</h3>
            <p className="text-sm text-slate-500">Active teachers, department assignments, and schedules.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {['Sir Kamran Ahmed (Mathematics)', 'Madam Ayesha Khan (Physics)', 'Sir Tariq Jamil (Computer Science)'].map((t, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-sm">{t}</h4>
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded mt-2 inline-block">Active Duty</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'fees':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Fee Collection & Vouchers</h3>
            <p className="text-sm text-slate-500">Track monthly tuitions, pending dues, and issue payment reminders.</p>
            <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase">Total Collected This Month</span>
                <h4 className="text-2xl font-bold text-slate-900">$92,450</h4>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow">Generate Report</button>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Attendance Logs</h3>
            <p className="text-sm text-slate-500">Daily student and staff attendance overview.</p>
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-medium">
              ✅ Today's Overall School Attendance: <strong>96.4%</strong> (Present: 2,840 | Absent: 104)
            </div>
          </div>
        );

      case 'academics':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Academics & Term Exams</h3>
            <p className="text-sm text-slate-500">Syllabus tracking, grading sheets, and examination timetables for 2026.</p>
          </div>
        );

      case 'transport':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Transport & Fleet Management</h3>
            <p className="text-sm text-slate-500">School bus routes, driver contacts, and live GPS tracking status.</p>
          </div>
        );

      case 'library':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Library System & Books</h3>
            <p className="text-sm text-slate-500">Book inventory, issued copies, and student checkouts.</p>
          </div>
        );

      case 'notices':
        return (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Notices & Circulars</h3>
            <p className="text-sm text-slate-500">Broadcast official announcements to parents and teachers.</p>
          </div>
        );

      default:
        return <div>Select tab</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-100">
              ME
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">M.E Foundations</h1>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">School ERP v3.0</span>
            </div>
          </div>

          <nav className="p-4 space-y-1.5">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'students', label: 'Students Directory', icon: Users },
              { id: 'teachers', label: 'Faculty Management', icon: GraduationCap },
              { id: 'fees', label: 'Fee Collection', icon: DollarSign },
              { id: 'attendance', label: 'Attendance Logs', icon: CheckCircle },
              { id: 'academics', label: 'Academics & Exams', icon: BookOpen },
              { id: 'transport', label: 'Transport & Fleet', icon: Bus },
              { id: 'library', label: 'Library System', icon: Library },
              { id: 'notices', label: 'Notices & Events', icon: Calendar },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 space-y-3">
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center justify-center space-x-2 text-rose-600 hover:bg-rose-50 py-2.5 rounded-xl text-xs font-bold transition-all border border-rose-100 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-4 w-96">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search students, teachers, fees..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Quick Admission</span>
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full">
          {renderContent()}
        </div>
      </main>

      {/* Quick Admission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Quick Student Admission</h3>
                <p className="text-xs text-slate-500">Enter details to register a new student</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Student Full Name</label>
                <input 
                  type="text"
                  placeholder="e.g. Daniyal Khan"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Grade & Section</label>
                <select 
                  value={newStudentGrade}
                  onChange={(e) => setNewStudentGrade(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                >
                  <option value="Grade 10 - A">Grade 10 - A</option>
                  <option value="Grade 10 - B">Grade 10 - B</option>
                  <option value="Grade 9 - A">Grade 9 - A</option>
                  <option value="Grade 8 - C">Grade 8 - C</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Parent Contact</label>
                <input 
                  type="text"
                  placeholder="+92 300 0000000"
                  value={newStudentContact}
                  onChange={(e) => setNewStudentContact(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Fee Status</label>
                <select 
                  value={newStudentStatus}
                  onChange={(e) => setNewStudentStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                >
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end space-x-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 cursor-pointer"
                >
                  Save Admission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}