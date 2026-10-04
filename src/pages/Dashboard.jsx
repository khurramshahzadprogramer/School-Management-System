import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  DollarSign, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Calendar, 
  Award, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  // Stats data with modern gradients & icons
  const stats = [
    {
      title: 'Total Students',
      value: '2,450',
      change: '+12% from last month',
      isPositive: true,
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-700',
      lightBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Faculty Members',
      value: '142',
      change: '+4 new joined',
      isPositive: true,
      icon: Users,
      color: 'from-emerald-600 to-teal-700',
      lightBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Fee Collection',
      value: '$84,200',
      change: '+94% collected',
      isPositive: true,
      icon: DollarSign,
      color: 'from-amber-500 to-orange-600',
      lightBg: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Active Courses',
      value: '38',
      change: '100% operational',
      isPositive: true,
      icon: BookOpen,
      color: 'from-violet-600 to-purple-700',
      lightBg: 'bg-violet-50 text-violet-600',
    },
  ];

  const recentActivities = [
    { id: 1, title: 'New student admission: Sarah Jenkins (Grade 10)', time: '10 mins ago', type: 'student', status: 'Success' },
    { id: 2, title: 'Monthly tuition fee submitted for Class 8B', time: '45 mins ago', type: 'fee', status: 'Completed' },
    { id: 3, title: 'Physics Mid-Term Exam schedule published', time: '2 hours ago', type: 'exam', status: 'Notice' },
    { id: 4, title: 'Teacher attendance verified for morning shift', time: '3 hours ago', type: 'staff', status: 'Verified' },
  ];

  const upcomingEvents = [
    { title: 'Annual Science Exhibition 2026', date: 'Oct 15, 2026', badge: 'Important', color: 'bg-indigo-100 text-indigo-700' },
    { title: 'Parent-Teacher Sports Meeting', date: 'Oct 22, 2026', badge: 'Meeting', color: 'bg-emerald-100 text-emerald-700' },
    { title: 'Mid-Term Examinations Begin', date: 'Nov 05, 2026', badge: 'Exam', color: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
      
      {/* Welcome Banner with Glassmorphism & Gradient */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 shadow-2xl border border-slate-800">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-1/3 top-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" /> School ERP Portal • v2.5
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Administrator</span> 👋
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl">
              Here is your institutional overview for today. All systems, attendance logs, and fee gateways are fully operational.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-slate-800/80 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition shadow-inner"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Academic Year</option>
            </select>
            <button className="bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2">
              <span>Generate Report</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className={`p-3.5 rounded-2xl ${stat.lightBg} shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </span>
              </div>

              <div className="relative z-10 space-y-1">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{stat.title}</p>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout: Recent Activities & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activities (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Recent Campus Activity</h3>
                <p className="text-slate-500 text-xs mt-0.5">Real-time log of student registrations, fees, and updates</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold flex items-center gap-1 group">
                View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm shadow-sm">
                      {act.title.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{act.title}</h4>
                      <p className="text-slate-500 text-xs flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-400" /> {act.time}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                    {act.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>🟢 All database triggers active</span>
            <span className="font-semibold text-slate-700">Secured via Vercel Edge</span>
          </div>
        </div>

        {/* Upcoming Events / Announcements */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Upcoming Events</h3>
              <p className="text-slate-500 text-xs mt-0.5">Key dates in academic calendar</p>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${event.color}`}>
                      {event.badge}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {event.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">{event.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-900 text-xs space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-600" /> Need Help or Customization?
              </p>
              <p className="text-indigo-700">All features are fully responsive & ready for presentation.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};