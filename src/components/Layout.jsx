import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  FileText, 
  CreditCard, 
  Bell, 
  BarChart3, 
  Building2,
  LogOut 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { title: 'Students', icon: Users, path: '/students' },
    { title: 'Teachers', icon: GraduationCap, path: '/teachers' },
    { title: 'Classes & Sections', icon: BookOpen, path: '/classes' },
    { title: 'Timetable', icon: Calendar, path: '/timetable' },
    { title: 'Attendance', icon: CheckSquare, path: '/attendance' },
    { title: 'Exams & Results', icon: FileText, path: '/exams' },
    { title: 'Fee Management', icon: CreditCard, path: '/fees' },
    { title: 'Notices & Events', icon: Bell, path: '/notices' },
    { title: 'Reports & Audit', icon: BarChart3, path: '/reports' },
    { title: 'School Profile', icon: Building2, path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo / Header */}
        <div className="p-5 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-emerald-600 text-white font-bold p-2.5 rounded-xl text-lg shadow-lg">
            ME
          </div>
          <div>
            <h1 className="text-white font-bold text-base leading-tight">M.E Foundations</h1>
            <p className="text-xs text-slate-400 mt-0.5">School ERP • {user?.role || 'Admin'}</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                // Yahan onClick par sidebar ko automatically band kar rahe hain mobile par
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30' 
                    : 'hover:bg-slate-800/70 text-slate-300 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer / User info & Logout */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/30 flex items-center justify-between">
          <div className="overflow-hidden pr-2">
            <p className="text-xs font-semibold text-white truncate">{user?.name || 'System Administrator'}</p>
            <p className="text-[11px] text-slate-400 truncate">{user?.email || 'admin@esylearning.com'}</p>
          </div>
          <button 
            onClick={logout}
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>
    </>
  );
};