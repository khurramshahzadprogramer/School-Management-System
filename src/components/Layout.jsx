import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from './layout/Sidebar';
import { Topbar } from './layout/Topbar';

export const Layout = () => {
  const { user, toast } = useAuth();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Background scroll lock when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-slate-100 relative">
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-xl text-white font-medium text-sm flex items-center gap-3 animate-bounce ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-slate-900'}`}>
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};