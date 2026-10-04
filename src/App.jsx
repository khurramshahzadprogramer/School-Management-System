import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, SchoolProvider, useAuth } from './context/AuthContext';
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

// Protected Route Component jo check karega ke user login hai ya nahi
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  // Agar user login nahi hai, toh foran /login par redirect kar do
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <SchoolProvider>
        <Routes>
          {/* Public Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes (Link kholte hi agar login nahi hoga toh /login khulega) */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
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

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SchoolProvider>
    </AuthProvider>
  );
}