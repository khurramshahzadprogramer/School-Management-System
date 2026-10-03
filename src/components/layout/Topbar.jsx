import React from 'react';
import { Menu, Bell, Search, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Topbar = ({ setSidebarOpen }) => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(prev => !prev)} className="md:hidden text-slate-600 hover:text-slate-900">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200">
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span>Academic Year: 2026–2027</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input type="text" placeholder="Global search students, teachers..." className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="relative p-2 text-slate-600 hover:text-slate-900 bg-slate-50 rounded-xl border border-slate-200">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-600 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="w-9 h-9 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
            {user?.name ? user.name.charAt(0) : 'A'}
          </div>
          <div className="hidden sm:block text-left text-xs">
            <p className="font-bold text-slate-800">{user?.name || 'Administrator'}</p>
            <p className="text-emerald-600 font-semibold">{user?.role || 'Super Admin'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};
