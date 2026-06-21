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
  Search,
  Filter,
  ArrowUpDown,
  List,
  Calendar,
  Clock,
  PauseCircle,
  PlayCircle,
  CheckCircle2
} from 'lucide-react';

export default function TaskCompletion() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0 flex flex-col">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Task Tracker</h1>
            <p className="text-sm text-gray-500">Managing 24 tasks across 6 categories</p>
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

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm">
              <LayoutGrid size={16} /> Board View
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-md transition-colors">
              <List size={16} /> List View
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-md transition-colors">
              <Calendar size={16} /> Calendar View
            </button>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
              <input type="text" placeholder="Search tasks..." className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm w-[200px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
              <Filter size={16} /> All Categories
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50">
              <ArrowUpDown size={16} /> By Priority
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 flex-1 overflow-x-auto pb-4">
          
          {/* TO DO COLUMN */}
          <div className="flex flex-col w-[300px] shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">To Do</h3>
              <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">5 tasks</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-purple-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Complete Algorithm Assignment</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded">DSA Practice</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Today, 11:59 PM</span>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704a" className="w-6 h-6 rounded-full" alt="avatar" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-blue-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Database Project Documentation</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">College Work</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded">Medium</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Tomorrow, 5:00 PM</span>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704b" className="w-6 h-6 rounded-full" alt="avatar" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-emerald-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Read Chapter 8 - Networks</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-medium rounded">Revision</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-medium rounded">Low</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Jan 20, 6:00 PM</span>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-6 h-6 rounded-full" alt="avatar" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-orange-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Frontend Component Design</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded">Medium</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Jan 22, 8:00 PM</span>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" className="w-6 h-6 rounded-full" alt="avatar" />
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-blue-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Prepare Quiz Questions</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">College Work</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">High</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>Jan 18, 9:00 AM</span>
                  </div>
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-6 h-6 rounded-full" alt="avatar" />
                </div>
              </div>

              <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors flex items-center justify-center gap-2 bg-transparent">
                <Plus size={16} /> Add Task
              </button>
            </div>
          </div>

          {/* IN PROGRESS COLUMN */}
          <div className="flex flex-col w-[300px] shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">In Progress</h3>
              <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">3 tasks</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-amber-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">System Design Case Study</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded">DSA Practice</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">High</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Progress</span>
                    <span className="font-medium text-gray-900">65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[65%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>2.5 hrs</span>
                  </div>
                  <div className="flex gap-1.5 text-blue-500">
                    <PauseCircle size={18} className="cursor-pointer hover:text-blue-600" />
                    <PlayCircle size={18} className="cursor-pointer text-emerald-500 hover:text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-amber-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">API Integration Testing</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded">Medium</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Progress</span>
                    <span className="font-medium text-gray-900">40%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[40%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>1.8 hrs</span>
                  </div>
                  <div className="flex gap-1.5 text-blue-500">
                    <PauseCircle size={18} className="cursor-pointer hover:text-blue-600" />
                    <PlayCircle size={18} className="cursor-pointer text-emerald-500 hover:text-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-amber-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Research Paper Review</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-pink-50 text-pink-600 text-[11px] font-medium rounded">Reading</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-medium rounded">Low</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Progress</span>
                    <span className="font-medium text-gray-900">25%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[25%] rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock size={14} />
                    <span>0.9 hrs</span>
                  </div>
                  <div className="flex gap-1.5 text-blue-500">
                    <PauseCircle size={18} className="cursor-pointer hover:text-blue-600" />
                    <PlayCircle size={18} className="cursor-pointer text-emerald-500 hover:text-emerald-600" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* REVIEW COLUMN */}
          <div className="flex flex-col w-[300px] shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Review</h3>
              <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-2 py-0.5 rounded-full">2 tasks</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-cyan-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">Code Review - Authentication Module</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded">College Work</span>
                  <span className="px-2 py-0.5 bg-cyan-50 text-cyan-600 text-[11px] font-medium rounded">Pending Review</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" className="w-6 h-6 rounded-full" alt="Prof" />
                  <span className="text-xs text-gray-500 font-medium">Prof. Anderson</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-cyan-500">
                <h4 className="text-sm font-medium text-gray-900 mb-3 leading-snug">UI/UX Design Feedback</h4>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-cyan-50 text-cyan-600 text-[11px] font-medium rounded">Pending Review</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-6 h-6 rounded-full" alt="Sarah" />
                  <span className="text-xs text-gray-500 font-medium">Sarah Chen</span>
                </div>
              </div>
            </div>
          </div>

          {/* DONE COLUMN */}
          <div className="flex flex-col w-[300px] shrink-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-900">Done</h3>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">11 tasks</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-emerald-500 opacity-70">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 line-through mb-1.5 leading-snug">Complete Binary Tree Implementation</h4>
                    <p className="text-[11px] text-gray-400">2 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-emerald-500 opacity-70">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 line-through mb-1.5 leading-snug">Database Schema Design</h4>
                    <p className="text-[11px] text-gray-400">5 hours ago</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm border-l-4 border-l-emerald-500 opacity-70">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 line-through mb-1.5 leading-snug">Weekly Progress Report</h4>
                    <p className="text-[11px] text-gray-400">Yesterday</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full text-sm font-medium text-blue-500 hover:underline mt-2">
                View All Completed
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
