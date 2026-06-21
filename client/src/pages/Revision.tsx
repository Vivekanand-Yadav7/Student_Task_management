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
  Plus,
  Calendar,
  Clock,
  Settings,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';

export default function Revision() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Revision Scheduling</h1>
            <p className="text-sm text-gray-500">Master topics using spaced repetition</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 py-2 px-4 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors">
              <Settings size={18} />
              Interval Settings
            </button>
            <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg text-sm font-medium shadow-sm transition-colors">
              <Plus size={18} />
              Add Revision
            </button>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Add Revision Form */}
          <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900 mb-4">New Revision Topic</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Topic Name</label>
                <input type="text" placeholder="e.g. Graph Algorithms" className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full p-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500">
                  <option>DSA</option>
                  <option>System Design</option>
                  <option>Web Dev</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-2">Revision Pattern</label>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 px-3 border border-gray-200 rounded-lg text-xs font-medium bg-blue-50 border-blue-200 text-blue-700">Next Day</button>
                  <button className="py-2 px-3 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50">After 3 Days</button>
                  <button className="py-2 px-3 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50">After 1 Week</button>
                  <button className="py-2 px-3 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50">Custom</button>
                </div>
              </div>
              <button className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg mt-2 transition-colors">
                Schedule Topic
              </button>
            </div>
          </div>

          {/* Upcoming Revisions */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex gap-4">
                <button className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 pb-1">Due Today (3)</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-1">Upcoming</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-1">Missed</button>
              </div>
              <span className="text-xs text-gray-500">Missed revisions auto-move to backlog</span>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex flex-col gap-2">
              <div className="p-3 border border-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <RefreshCcw size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">React Hooks Deep Dive</h4>
                    <div className="flex gap-2 text-xs text-gray-500 mt-1">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded">Web Dev</span>
                      <span>• Cycle 2 (3 Days)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-md">Due Today</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-md text-xs font-medium transition-colors">
                    <CheckCircle2 size={14} /> Mark Done
                  </button>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
              </div>

              <div className="p-3 border border-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <RefreshCcw size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Dynamic Programming Intro</h4>
                    <div className="flex gap-2 text-xs text-gray-500 mt-1">
                      <span className="px-1.5 py-0.5 bg-gray-100 rounded">DSA Practice</span>
                      <span>• Cycle 3 (1 Week)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-md">Due Today</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-md text-xs font-medium transition-colors">
                    <CheckCircle2 size={14} /> Mark Done
                  </button>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
