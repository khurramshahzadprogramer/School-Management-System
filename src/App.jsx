import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, SchoolProvider } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Students } from './pages/Students';
import { Teachers } from './pages/Teachers';
import { Attendance } from './pages/Attendance';
import { Fees } from './pages/Fees';
import { Notices } from './pages/Notices';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

export default function App() {
  return (
    <AuthProvider>
      <SchoolProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="classes" element={<Dashboard />} />
            <Route path="timetable" element={<Dashboard />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="exams" element={<Dashboard />} />
            <Route path="fees" element={<Fees />} />
            <Route path="notices" element={<Notices />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SchoolProvider>
    </AuthProvider>
  );
}
