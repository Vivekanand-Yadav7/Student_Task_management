import React, { useState, useEffect } from 'react';
import {
  Home,
  CheckSquare,
  LayoutGrid,
  Inbox,
  RefreshCcw,
  CalendarDays,
  BarChart2,
  User,
  Bell,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  RotateCcw,
  FolderOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const productivityData = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 78 },
  { name: 'Wed', value: 70 },
  { name: 'Thu', value: 82 },
  { name: 'Fri', value: 75 },
  { name: 'Sat', value: 68 },
  { name: 'Sun', value: 80 }
];

const slotTypeStyles: Record<string, { border: string; badge: string; badgeText: string; label: string }> = {
  revision:         { border: 'border-l-purple-500', badge: 'bg-purple-100', badgeText: 'text-purple-700', label: 'Revision' },
  new_task:         { border: 'border-l-blue-500',   badge: 'bg-blue-100',   badgeText: 'text-blue-700',   label: 'New Task' },
  backlog:          { border: 'border-l-red-500',    badge: 'bg-red-100',    badgeText: 'text-red-700',    label: 'Backlog' },
  extra_curicullar: { border: 'border-l-emerald-500',badge: 'bg-emerald-100',badgeText: 'text-emerald-700',label: 'Extra Curricular' },
};

export default function Dashboard() {
  const [slots, setSlots] = useState<any[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    fetch('/api/slots', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : [])
      .then(data => setSlots(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);

  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-sm text-gray-500">Monday, January 15, 2024</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-50"></span>
            </div>
            <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg text-sm font-medium cursor-pointer transition-colors">
              <Plus size={18} />
              New Task
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Total Tasks</span>
              <Calendar size={20} className="text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Completed</span>
              <CheckCircle2 size={20} className="text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-emerald-500">8</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Pending</span>
              <Clock size={20} className="text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-amber-500">4</div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">Progress</span>
            </div>
            <div className="flex justify-center items-center h-12">
              <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center" style={{ background: 'conic-gradient(#3b82f6 67%, #e5e7eb 0)' }}>
                <span className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-sm font-bold">67%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
            <a href="/time-planner" className="text-sm text-blue-500 font-medium hover:underline">View All</a>
          </div>
          
          <div className="flex flex-col border-t border-gray-100">
            {slots.length === 0 ? (
              <div className="py-8 text-center text-sm text-gray-400">
                No slots booked yet. <a href="/time-planner" className="text-blue-500 hover:underline">Create one →</a>
              </div>
            ) : (
              slots.map((slot, idx) => {
                const style = slotTypeStyles[slot.slot_type] ?? { border: 'border-l-gray-400', badge: 'bg-gray-100', badgeText: 'text-gray-700', label: slot.slot_type };
                const isLast = idx === slots.length - 1;
                return (
                  <div
                    key={slot.id}
                    className={`flex justify-between items-center bg-white py-4 border-l-4 pl-3 ${style.border} ${isLast ? '' : 'border-b border-gray-100'}`}
                  >
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{style.label}</h4>
                      <p className="text-xs text-gray-500">{slot.start_time} – {slot.end_time}</p>
                    </div>
                    <span className={`px-3 py-1 ${style.badge} ${style.badgeText} rounded-full text-xs font-medium`}>
                      {style.label}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-[320px] bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto shrink-0">
        <section className="mb-8">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <Link to="/daily-tasks" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50 text-left w-full shadow-sm">
              <Plus size={18} className="text-gray-500" />
              <span>Create Task</span>
            </Link>
            <Link to="/revision" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50 text-left w-full shadow-sm">
              <RotateCcw size={18} className="text-gray-500" />
              <span>Add Revision</span>
            </Link>
            <Link to="/time-planner" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50 text-left w-full shadow-sm">
              <Clock size={18} className="text-gray-500" />
              <span>Create Time Slot</span>
            </Link>
            <Link to="/backlog" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg text-gray-900 text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50 text-left w-full shadow-sm">
              <FolderOpen size={18} className="text-gray-500" />
              <span>Open Backlog</span>
            </Link>
          </div>
        </section>

        <section className="mb-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-900">7-Day Productivity</h3>
            <span className="text-xs text-blue-500 font-medium">74% avg</span>
          </div>
          <div className="mt-2">
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={productivityData} margin={{ top: 5, right: 0, left: -25, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#9ca3af'}} dx={-10} ticks={[0, 25, 50, 75, 100]} />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{r: 4, fill: '#3b82f6'}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-gray-900">Notifications</h3>
            <span className="bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-xs font-semibold">3</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 text-amber-500">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Upcoming: DSA Practice in 30 mins</p>
                <span className="text-xs text-gray-500">2m ago</span>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 text-red-500">
                <AlertCircle size={16} />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Pending: 2 revisions due today</p>
                <span className="text-xs text-gray-500">5m ago</span>
              </div>
            </div>
            
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 text-blue-500">
                <Info size={16} />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">Reminder: 4 unfinished tasks</p>
                <span className="text-xs text-gray-500">10m ago</span>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </>
  );
}

const AlertCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);
const Info = ({ size, className }: { size: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);
