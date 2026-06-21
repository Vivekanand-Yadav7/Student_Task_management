import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  CheckSquare,
  LayoutGrid,
  Inbox,
  RefreshCcw,
  CalendarDays,
  BarChart2,
  User
} from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Daily Tasks', path: '/daily-tasks', icon: <CheckSquare size={20} /> },
    { name: 'Task Tracker', path: '/task-tracker', icon: <LayoutGrid size={20} /> },
    { name: 'Backlog', path: '/backlog', icon: <Inbox size={20} /> },
    { name: 'Revision', path: '/revision', icon: <RefreshCcw size={20} /> },
    { name: 'Time Planner', path: '/time-planner', icon: <CalendarDays size={20} /> },
    { name: 'Analytics', path: '/analytics', icon: <BarChart2 size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
  ];

  return (
    <aside className="hidden md:flex w-[260px] bg-gray-50 border-r border-gray-200 flex-col py-6 px-4 shrink-0">
      <div className="text-lg font-bold text-gray-900 mb-6 px-3">StudyFlow</div>
      
      <div className="flex items-center gap-3 p-3 bg-white rounded-xl mb-6 border border-gray-200 shadow-sm">
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        <div className="overflow-hidden">
          <h3 className="text-sm font-semibold text-gray-900 truncate">Sarah Johnson</h3>
          <p className="text-xs text-gray-500 truncate">sarah.j@university....</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="mb-2">
          <span className="text-sm font-semibold text-gray-900">Daily Goal</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">6/8 hours</div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full w-3/4"></div>
        </div>
      </div>
    </aside>
  );
}
