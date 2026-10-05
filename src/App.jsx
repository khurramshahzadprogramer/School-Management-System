import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, GraduationCap, DollarSign, 
  BookOpen, Calendar, Bell, Settings, LogOut, 
  Search, Plus, CheckCircle, Clock, AlertCircle, 
  FileText, ShieldCheck, Bus, Library
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans">
      
      {/* Sidebar - Light & Professional */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo Area */}
          <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-100">
              ME
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">M.E Foundations</h1>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">School ERP v3.0</span>
            </div>
          </div>

          {/* Navigation Links */}
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              AK
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-slate-900 truncate">Admin Khurram</p>
              <p className="text-xs text-slate-500 truncate">admin@meschool.edu</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center space-x-4 w-96">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search students, teachers, fees..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-100 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all">
              <Plus className="w-4 h-4" />
              <span>Quick Admission</span>
            </button>
          </div>
        </header>

        {/* Dashboard Dynamic View */}
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="space-y-2 z-10">
              <span className="text-xs font-semibold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/20">
                Academic Year 2026-2027
              </span>
              <h2 className="text-3xl font-bold tracking-tight">Welcome back, Administrator 👋</h2>
              <p className="text-slate-300 text-sm max-w-2xl">
                Here is your institutional overview for today. All student attendance logs, fee gateways, transport GPS trackers, and examination portals are fully operational.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 z-10">
              <div className="flex items-center space-x-6 text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Today's Attendance</span>
                  <span className="font-bold text-emerald-400 text-base">96.4% Present</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <span className="text-slate-400 block text-xs">Pending Fee Dues</span>
                  <span className="font-bold text-amber-400 text-base">$4,250</span>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
                <div className="hidden sm:block">
                  <span className="text-slate-400 block text-xs">Active Transport Buses</span>
                  <span className="font-bold text-indigo-300 text-base">14 Routes Live</span>
                </div>
              </div>
              <button className="bg-white text-slate-900 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm hover:bg-slate-100 transition-all">
                Generate Full Audit Report
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Total Students Enrolled', value: '2,840', change: '+14% this month', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { title: 'Active Faculty Members', value: '148', change: 'Fully Verified', icon: GraduationCap, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'Monthly Fee Collection', value: '$92,450', change: '94% Collected', icon: DollarSign, color: 'text-amber-600', bg: 'bg-amber-50' },
              { title: 'System Security Status', value: 'Secure', change: 'SSL & Firewall Active', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">{stat.title}</span>
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {stat.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Campus Feed */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Real-Time Campus Activity</h3>
                  <p className="text-xs text-slate-500">Live event stream across admissions, finance, and exams</p>
                </div>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-all">
                  View All Logs
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'New student admission: Sarah Jenkins (Grade 10-A)', time: '10 mins ago', status: 'Success', color: 'bg-emerald-50 text-emerald-600' },
                  { title: 'Monthly Tuition Fee submitted by Roll #412', time: '25 mins ago', status: 'Verified', color: 'bg-indigo-50 text-indigo-600' },
                  { title: 'Biology Mid-Term Question Paper uploaded by Dr. Aris', time: '1 hour ago', status: 'Pending Review', color: 'bg-amber-50 text-amber-600' },
                  { title: 'Bus Route #4 arrived safely at North Campus terminal', time: '2 hours ago', status: 'Completed', color: 'bg-blue-50 text-blue-600' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100/50 transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-800">{activity.title}</h4>
                        <span className="text-xs text-slate-400">{activity.time}</span>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${activity.color}`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events & Calendar Widget */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Academic Calendar</h3>
                <p className="text-xs text-slate-500 mb-6">Upcoming institutional milestones</p>

                <div className="space-y-4">
                  {[
                    { date: 'OCT 12', title: 'Science Exhibition 2026', desc: 'Main Auditorium • 10:00 AM' },
                    { date: 'OCT 18', title: 'Parent-Teacher Meeting', desc: 'All Grade Sections • 2:00 PM' },
                    { date: 'OCT 25', title: 'First Term Examinations Begin', desc: 'Examination Halls A & B' },
                  ].map((evt, i) => (
                    <div key={i} className="flex items-start space-x-4 p-3 rounded-xl border border-slate-100 bg-slate-50">
                      <div className="bg-indigo-600 text-white font-bold text-xs p-2 rounded-lg text-center min-w-[50px]">
                        {evt.date}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{evt.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{evt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <span className="text-xs text-slate-400">M.E Foundations ERP System • Enterprise Edition</span>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}