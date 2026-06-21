import React from 'react';
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
  Target,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area
} from 'recharts';

const completionData = [
  { name: 'Mon', tasks: 6, completion: 85 },
  { name: 'Tue', tasks: 8, completion: 92 },
  { name: 'Wed', tasks: 5, completion: 70 },
  { name: 'Thu', tasks: 9, completion: 100 },
  { name: 'Fri', tasks: 7, completion: 80 },
  { name: 'Sat', tasks: 4, completion: 60 },
  { name: 'Sun', tasks: 8, completion: 90 }
];

export default function Analytics() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto min-w-0 bg-gray-50">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Progress Analytics</h1>
            <p className="text-sm text-gray-500">Track your productivity and learning metrics</p>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-md text-sm font-medium">This Week</button>
            <button className="px-4 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">This Month</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Weekly Completion</span>
              <Target size={18} className="text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">82%</div>
            <span className="text-xs text-emerald-500 font-medium">↑ +5% vs last week</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Revision Success</span>
              <TrendingUp size={18} className="text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">94%</div>
            <span className="text-xs text-emerald-500 font-medium">↑ +2% vs last week</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Backlog Cleared</span>
              <Award size={18} className="text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
            <span className="text-xs text-emerald-500 font-medium">Tasks resolved</span>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-500">Current Streak</span>
              <Zap size={18} className="text-orange-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">14</div>
            <span className="text-xs text-gray-500 font-medium">Days in a row!</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Chart 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-6">Task Completion Trend</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={completionData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                  <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="tasks" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-6">Productivity Heatmap (%)</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={completionData}>
                  <defs>
                    <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#6b7280'}} />
                  <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Area type="monotone" dataKey="completion" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorComp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
