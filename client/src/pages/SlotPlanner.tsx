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
  ChevronLeft,
  ChevronRight,
  Clock,
  MoreVertical
} from 'lucide-react';

export default function SlotPlanner() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200 bg-white">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Time Planner</h1>
            <div className="flex items-center bg-gray-100 p-1 rounded-lg ml-4">
              <button className="px-3 py-1 bg-white shadow-sm rounded-md text-sm font-medium">Daily</button>
              <button className="px-3 py-1 text-gray-600 hover:text-gray-900 text-sm font-medium">Weekly</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-100"><ChevronLeft size={20} /></button>
              <span className="text-sm font-medium">Today, Jan 15</span>
              <button className="p-1.5 rounded-md hover:bg-gray-100"><ChevronRight size={20} /></button>
            </div>
            <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg text-sm font-medium shadow-sm transition-colors">
              <Plus size={18} /> Schedule Slot
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Unscheduled Tasks */}
          <div className="w-[300px] border-r border-gray-200 bg-gray-50 p-4 overflow-y-auto shrink-0 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Unscheduled Activities</h3>
            
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-blue-500 cursor-grab active:cursor-grabbing">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Database Assignment</h4>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-medium rounded">Today's Task</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-purple-500 cursor-grab active:cursor-grabbing">
              <h4 className="text-sm font-medium text-gray-900 mb-1">React Router Revision</h4>
              <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-medium rounded">Revision</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-red-500 cursor-grab active:cursor-grabbing">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Clear API Integration Backlog</h4>
              <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-medium rounded">Backlog</span>
            </div>
          </div>

          {/* Time Grid */}
          <div className="flex-1 bg-white overflow-y-auto relative p-6">
            <div className="flex flex-col gap-6">
              {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
                <div key={hour} className="flex gap-4 group">
                  <div className="w-16 text-right shrink-0 text-xs text-gray-500 mt-[-6px]">
                    {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                  </div>
                  <div className="flex-1 border-t border-gray-100 relative min-h-[60px]">
                    {/* Simulated scheduled items */}
                    {hour === 7 && (
                      <div className="absolute top-2 left-2 right-4 bg-purple-50 border border-purple-200 rounded-lg p-2 border-l-4 border-l-purple-500 flex justify-between items-center shadow-sm z-10 hover:shadow-md transition-shadow cursor-pointer">
                        <div>
                          <h4 className="text-sm font-medium text-purple-900">DSA Practice - Arrays</h4>
                          <p className="text-xs text-purple-600 font-medium">7:00 AM - 8:00 AM</p>
                        </div>
                        <MoreVertical size={16} className="text-purple-400" />
                      </div>
                    )}
                    {hour === 8 && (
                      <div className="absolute top-2 left-2 right-4 bg-blue-50 border border-blue-200 rounded-lg p-2 border-l-4 border-l-blue-500 flex justify-between items-center shadow-sm z-10 hover:shadow-md transition-shadow cursor-pointer min-h-[100px]">
                        <div>
                          <h4 className="text-sm font-medium text-blue-900">College Lectures</h4>
                          <p className="text-xs text-blue-600 font-medium">8:00 AM - 10:00 AM</p>
                        </div>
                        <MoreVertical size={16} className="text-blue-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
