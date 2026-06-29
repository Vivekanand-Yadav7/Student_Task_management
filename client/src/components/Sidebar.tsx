import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  CheckSquare,
  LayoutGrid,
  Inbox,
  RefreshCcw,
  CalendarDays,
  BarChart2,
  User,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error('Failed to parse user from local storage');
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
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
      
      <div className="relative" ref={menuRef}>
        <div 
          className="flex items-center gap-3 p-3 bg-white rounded-xl mb-6 border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=random`} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div className="overflow-hidden">
            <h3 className="text-sm font-semibold text-gray-900 truncate">{user?.name || 'Loading...'}</h3>
            <p className="text-xs text-gray-500 truncate">{user?.email || 'Loading...'}</p>
          </div>
        </div>

        {showProfileMenu && (
          <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            <div className="p-2">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
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
