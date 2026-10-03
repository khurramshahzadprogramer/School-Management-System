import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, BookOpen, Calendar, CheckSquare, Award, CreditCard, Bell, BarChart3, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard },
    { label: 'Students', path: '/students', icon: Users },
    { label: 'Teachers', path: '/teachers', icon: GraduationCap },
    { label: 'Classes & Sections', path: '/classes', icon: BookOpen },
    { label: 'Timetable', path: '/timetable', icon: Calendar },
    { label: 'Attendance', path: '/attendance', icon: CheckSquare },
    { label: 'Exams & Results', path: '/exams', icon: Award },
    { label: 'Fee Management', path: '/fees', icon: CreditCard },
    { label: 'Notices & Events', path: '/notices', icon: Bell },
    { label: 'Reports & Audit', path: '/reports', icon: BarChart3 },
    { label: 'School Profile', path: '/settings', icon: Settings }
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">ME</div>
          <div>
            <h2 className="font-bold text-white text-sm">M.E Foundations</h2>
            <p className="text-[11px] text-emerald-400 font-medium">School ERP • {user?.role || 'Admin'}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto text-sm">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition font-medium ${isActive ? 'bg-emerald-600 text-white shadow-sm' : 'hover:bg-slate-800 hover:text-white text-slate-400'}`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800 flex items-center justify-between">
        <div className="text-xs truncate">
          <p className="font-bold text-white">{user?.name || 'Administrator'}</p>
          <p className="text-slate-400 text-[11px]">{user?.email || 'admin@esylearning.com'}</p>
        </div>
        <button onClick={logout} title="Logout" className="p-2 hover:bg-slate-800 rounded-lg text-rose-400 transition"><LogOut className="w-4 h-4" /></button>
      </div>
    </aside>
  );
};
