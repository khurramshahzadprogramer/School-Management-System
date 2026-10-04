import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  FileText, 
  DollarSign, 
  Bell, 
  Settings,
  X
} from 'lucide-react';

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { user } = useAuth();
  const userRole = user?.role || 'Super Admin';

  // Role based menu items filtering
  const allMenuItems = [
    { title: 'Dashboard', path: '/', icon: LayoutDashboard, roles: ['Super Admin', 'Teacher', 'Student'] },
    { title: 'Students', path: '/students', icon: Users, roles: ['Super Admin', 'Teacher'] },
    { title: 'Teachers', path: '/teachers', icon: GraduationCap, roles: ['Super Admin'] },
    { title: 'Classes & Sections', path: '/classes', icon: BookOpen, roles: ['Super Admin', 'Teacher'] },
    { title: 'Timetable', path: '/timetable', icon: Calendar, roles: ['Super Admin', 'Teacher', 'Student'] },
    { title: 'Attendance', path: '/attendance', icon: CheckSquare, roles: ['Super Admin', 'Teacher', 'Student'] },
    { title: 'Fee Management', path: '/fees', icon: DollarSign, roles: ['Super Admin', 'Student'] },
    { title: 'Notices & Events', path: '/notices', icon: Bell, roles: ['Super Admin', 'Teacher', 'Student'] },
    { title: 'Reports & Audit', path: '/reports', icon: FileText, roles: ['Super Admin'] },
    { title: 'School Profile', path: '/settings', icon: Settings, roles: ['Super Admin'] },
  ];

  const menuItems = allMenuItems.filter(item => item.roles.includes(userRole));

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-72 bg-slate-950 text-slate-300 flex flex-col border-r border-slate-900 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Brand Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              ME
            </div>
            <div>
              <h2 className="text-white font-bold text-sm tracking-wide">M.E Foundations</h2>
              <p className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">ERP • {userRole}</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/40 font-semibold' 
                    : 'hover:bg-slate-900/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* User Footer Profile */}
        <div className="p-4 m-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div className="overflow-hidden">
            <h4 className="text-white text-xs font-bold truncate">{user?.name || 'Administrator'}</h4>
            <p className="text-slate-400 text-[10px] truncate">{user?.email || 'admin@esylearning.com'}</p>
          </div>
        </div>
      </aside>
    </>
  );
};