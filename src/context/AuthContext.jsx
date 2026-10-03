import React, { createContext, useContext, useState } from 'react';
import { getStorage, setStorage } from '../utils/storage';
import { initialStudents, initialTeachers, initialFees, initialNotices, initialActivities } from '../data/students';

const AuthContext = createContext();
const SchoolContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStorage('auth_user', null));
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const login = (email, password, role) => {
    const loggedUser = { name: role === 'Super Admin' ? 'System Administrator' : role === 'Teacher' ? 'Dr. Salman Akram' : 'Ahmed Khan', email, role };
    setUser(loggedUser);
    setStorage('auth_user', loggedUser);
    showToast(`Welcome back, ${loggedUser.name} (${role})!`, 'success');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('me_school_auth_user');
    showToast('Logged out successfully.', 'info');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, toast, showToast }}>
      {children}
    </AuthContext.Provider>
  );
};

export const SchoolProvider = ({ children }) => {
  const [students, setStudents] = useState(() => getStorage('students', initialStudents));
  const [teachers, setTeachers] = useState(() => getStorage('teachers', initialTeachers));
  const [fees, setFees] = useState(() => getStorage('fees', initialFees));
  const [notices, setNotices] = useState(() => getStorage('notices', initialNotices));
  const [activities, setActivities] = useState(() => getStorage('activities', initialActivities));

  const updateStudents = (newStudents) => {
    setStudents(newStudents);
    setStorage('students', newStudents);
  };

  const updateTeachers = (newTeachers) => {
    setTeachers(newTeachers);
    setStorage('teachers', newTeachers);
  };

  const updateFees = (newFees) => {
    setFees(newFees);
    setStorage('fees', newFees);
  };

  const updateNotices = (newNotices) => {
    setNotices(newNotices);
    setStorage('notices', newNotices);
  };

  const addActivity = (action, user) => {
    const newAct = { id: Date.now(), action, user, time: 'Just now' };
    const updated = [newAct, ...activities];
    setActivities(updated);
    setStorage('activities', updated);
  };

  return (
    <SchoolContext.Provider value={{ students, updateStudents, teachers, updateTeachers, fees, updateFees, notices, updateNotices, activities, addActivity }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const useSchool = () => useContext(SchoolContext);
