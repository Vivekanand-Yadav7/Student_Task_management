import React, { useState } from 'react';
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
  MoreVertical,
  ChevronDown,
  Clock,
  AlertCircle,
  Flame,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export default function Task() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Daily Tasks</h1>
            <p className="text-sm text-gray-500">8 tasks today • 4 pending</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-50"></span>
            </div>
            <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg text-sm font-medium cursor-pointer transition-colors">
              <Plus size={18} />
              Create Task
            </button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-full">All Tasks</button>
            <button className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50">Today</button>
            <button className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50">This Week</button>
            <button className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50">High Priority</button>
            <button className="px-4 py-1.5 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50">Completed</button>
          </div>
          <div>
            <button className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              Sort by: Priority <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Create Task Form */}
        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              <Plus size={18} />
            </div>
            <h2 className="text-base font-semibold text-gray-900">Create New Task</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Task title" className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option>DSA Practice</option>
                  <option>College Work</option>
                  <option>Revision</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-2">
              <input type="text" placeholder="Select date" className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
              <input type="text" placeholder="Time slot" className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>

            <div className="flex gap-3 mt-2">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">Add Task</button>
              <button className="px-5 py-2 bg-transparent text-gray-500 hover:text-gray-700 text-sm font-medium rounded-lg transition-colors">Cancel</button>
            </div>
          </div>
        </section>

        {/* Active Tasks */}
        <section className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Active Tasks</h2>
          
          <div className="flex flex-col gap-3">
            {/* Task 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 border-l-4 border-l-purple-500">
              <div className="mt-1">
                <div className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 transition-colors"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-900">DSA Practice - Array Problems</h4>
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded-full">DSA Practice</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>7:00-8:00 AM</span>
                  </div>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">High Priority</span>
                </div>
              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 border-l-4 border-l-blue-500">
              <div className="mt-1">
                <div className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 transition-colors"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-900">Complete Database Assignment</h4>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded-full">College Work</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>8:00-9:00 AM</span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-full">Medium Priority</span>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 border-l-4 border-l-emerald-500">
              <div className="mt-1">
                <div className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 transition-colors"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-900">Review Lecture Notes</h4>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-medium rounded-full">Revision</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>5:00-6:00 PM</span>
                  </div>
                  <span className="px-2 py-0.5 bg-orange-50 text-amber-600 text-[11px] font-medium rounded-full">Low Priority</span>
                </div>
              </div>
            </div>

            {/* Task 4 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 border-l-4 border-l-blue-500">
              <div className="mt-1">
                <div className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 transition-colors"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-sm font-medium text-gray-900">Project Documentation</h4>
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded-full">College Work</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>8:00-9:00 PM</span>
                  </div>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-full">Medium Priority</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Completed Tasks */}
        <section>
          <div className="flex items-center gap-2 mb-4 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
            <h2 className="text-sm font-semibold">4 Completed Tasks</h2>
            <ChevronDown size={16} />
          </div>

          <div className="flex flex-col gap-3 opacity-60">
            {/* Completed Task 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <div>
                <h4 className="text-sm font-medium text-gray-500 line-through mb-0.5">Morning Exercise Routine</h4>
                <p className="text-xs text-gray-400">6:00-7:00 AM</p>
              </div>
            </div>

            {/* Completed Task 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <div>
                <h4 className="text-sm font-medium text-gray-500 line-through mb-0.5">Read Chapter 5 - Operating Systems</h4>
                <p className="text-xs text-gray-400">9:00-10:00 AM</p>
              </div>
            </div>

            {/* Completed Task 3 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <div>
                <h4 className="text-sm font-medium text-gray-500 line-through mb-0.5">Code Review for Team Project</h4>
                <p className="text-xs text-gray-400">2:00-3:00 PM</p>
              </div>
            </div>

            {/* Completed Task 4 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
              <CheckCircle2 size={18} className="text-emerald-500" />
              <div>
                <h4 className="text-sm font-medium text-gray-500 line-through mb-0.5">Study Group Meeting</h4>
                <p className="text-xs text-gray-400">3:00-4:00 PM</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-[320px] bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto shrink-0">
        
        {/* Today's Progress */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-gray-900 w-full mb-6 text-left">Today's Progress</h3>
          <div className="relative flex justify-center items-center w-24 h-24 rounded-full mb-4" style={{ background: 'conic-gradient(#3b82f6 67%, #e5e7eb 0)' }}>
            <div className="w-[84px] h-[84px] bg-white rounded-full flex justify-center items-center text-xl font-bold text-gray-900">
              67%
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">4 of 8 tasks completed</p>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`w-6 h-6 rounded ${i <= 4 ? 'bg-blue-500' : 'bg-blue-100'}`}></div>
            ))}
          </div>
        </section>

        {/* Upcoming Deadlines */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Upcoming Deadlines</h3>
            <AlertCircle size={16} className="text-red-500" />
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex gap-3">
              <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-0.5">Algorithm Assignment</h4>
                <p className="text-xs text-red-500 font-medium">Today, 11:59 PM</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex gap-3">
              <Clock size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-0.5">Database Project Submission</h4>
                <p className="text-xs text-red-500 font-medium">Tomorrow, 5:00 PM</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex gap-3">
              <Clock size={16} className="text-gray-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-0.5">Weekly Quiz - Data Structures</h4>
                <p className="text-xs text-gray-500">Jan 18, 9:00 AM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Task Categories */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Task Categories</h3>
          
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">DSA Practice</span>
                </div>
                <span className="text-xs font-medium text-gray-900">3 tasks</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[40%] rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-600">College Work</span>
                </div>
                <span className="text-xs font-medium text-gray-900">2 tasks</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[25%] rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-gray-600">Revision</span>
                </div>
                <span className="text-xs font-medium text-gray-900">2 tasks</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[25%] rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Others</span>
                </div>
                <span className="text-xs font-medium text-gray-900">1 tasks</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[10%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Small Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Flame size={16} className="text-orange-500" />
              <span className="text-xs text-gray-500">Longest Streak</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">12</span>
              <span className="text-xs text-gray-500 ml-1">days</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-blue-500" />
              <span className="text-xs text-gray-500">Tasks This Week</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 block">24</span>
              <span className="text-xs text-gray-500">completed</span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}
