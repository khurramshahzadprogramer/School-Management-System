import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Mail, Lock, Sparkles, Chrome, Globe } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('admin@esylearning.com');
  const [password, setPassword] = useState('ChangeMe123!');
  const [role, setRole] = useState('Super Admin');
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  // Jab bhi login page khule, purana session clear kar dein taake direct login page hi dikhe
  useEffect(() => {
    if (typeof logout === 'function') {
      logout();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, role, name: role === 'Student' ? 'Sarah Jenkins' : role === 'Teacher' ? 'Dr. Robert Smith' : 'System Administrator' });
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    login({ email: `user@${provider.toLowerCase()}.com`, role: 'Student', name: `Google User (${provider})` });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-md w-full p-8 shadow-2xl border border-white/20 relative z-10 animate-fadeIn">
        
        <div className="text-center space-y-3 mb-8">
          <div className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-2xl mx-auto flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-emerald-600/30">
            ME
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">M.E Foundations School</h1>
            <p className="text-slate-500 text-xs font-medium mt-0.5">School Management ERP • Enterprise Portal</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm cursor-pointer"
          >
            <Chrome className="w-4 h-4 text-blue-600" />
            <span>Google SSO</span>
          </button>
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Microsoft')}
            className="flex items-center justify-center gap-2.5 py-2.5 px-4 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm cursor-pointer"
          >
            <Globe className="w-4 h-4 text-sky-600" />
            <span>Microsoft</span>
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs uppercase font-bold tracking-wider">Or sign in with email</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email / Username</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Select Role & Access</label>
            <div className="relative">
              <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select 
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition appearance-none cursor-pointer"
              >
                <option value="Super Admin">Super Admin (Full Access)</option>
                <option value="Teacher">Teacher Portal</option>
                <option value="Student">Student Portal (Grade & Attendance)</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3.5 px-4 rounded-xl text-sm shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Sign In to Portal</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs">
            Demo Access Credentials:<br />
            <span className="font-semibold text-slate-600">admin@esylearning.com / ChangeMe123!</span>
          </p>
        </div>

      </div>
    </div>
  );
};