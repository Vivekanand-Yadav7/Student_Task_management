import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import TaskCompletion from './pages/TaskCompletion';
import Backlog from './pages/Backlog';
import Revision from './pages/Revision';
import SlotPlanner from './pages/SlotPlanner';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="daily-tasks" element={<Task />} />
          <Route path="task-tracker" element={<TaskCompletion />} />
          <Route path="backlog" element={<Backlog />} />
          <Route path="revision" element={<Revision />} />
          <Route path="time-planner" element={<SlotPlanner />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
