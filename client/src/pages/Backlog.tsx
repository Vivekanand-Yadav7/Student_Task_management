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
  Filter,
  ArrowUpDown,
  MoreVertical,
  Calendar,
  PlayCircle,
  Clock
} from 'lucide-react';

export default function Backlog() {
  return (
    <>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Backlog</h1>
            <p className="text-sm text-gray-500">18 unfinished tasks • 3 overdue</p>
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
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-gray-200 shadow-sm">
            <button className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-full">All Tasks</button>
            <button className="px-4 py-2 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-50 flex items-center gap-2">
              Overdue <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full text-xs">3</span>
            </button>
            <button className="px-4 py-2 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-50">This Week</button>
            <button className="px-4 py-2 text-gray-600 text-sm font-medium rounded-full hover:bg-gray-50">Rescheduled</button>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 shadow-sm">
              <Filter size={16} /> Group by: Category
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 shadow-sm">
              <ArrowUpDown size={16} /> Sort by: Date Added
            </button>
          </div>
        </div>

        {/* Overdue Tasks */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-semibold text-gray-900">Overdue Tasks</h2>
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">3 tasks</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Task 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-red-500 flex justify-between items-center hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">Complete Algorithm Assignment</h4>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded-full">DSA Practice</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">High</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-400 line-through">Jan 15, 11:59 PM</span>
                  <span className="text-red-500 font-medium">Overdue by 2 days</span>
                  <button className="flex items-center gap-1 text-blue-500 hover:underline font-medium">
                    <Calendar size={12} /> Reschedule
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704a" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-red-500 flex justify-between items-center hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">Database Project Documentation</h4>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded-full">College Work</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-full">Medium</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-400 line-through">Jan 14, 5:00 PM</span>
                  <span className="text-red-500 font-medium">Overdue by 3 days</span>
                  <button className="flex items-center gap-1 text-blue-500 hover:underline font-medium">
                    <Calendar size={12} /> Reschedule
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704b" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>

            {/* Task 3 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-red-500 flex justify-between items-center hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">System Design Case Study</h4>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded-full">DSA Practice</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">High</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-400 line-through">Jan 16, 8:00 PM</span>
                  <span className="text-red-500 font-medium">Overdue by 1 days</span>
                  <button className="flex items-center gap-1 text-blue-500 hover:underline font-medium">
                    <Calendar size={12} /> Reschedule
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704c" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Pending Tasks */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-semibold text-gray-900">Pending Tasks</h2>
            <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">12 tasks</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Task 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-blue-500 flex justify-between items-start hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">Code Review - Authentication Module</h4>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded-full">College Work</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-full">Medium</span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="text-gray-500">Waiting on: Prof. Anderson feedback</span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[11px] font-medium rounded-full">Waiting for review</span>
                </div>
                <button className="text-blue-500 text-xs font-medium hover:underline">Mark Ready</button>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-blue-500 flex justify-between items-start hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">API Integration Testing</h4>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">High</span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="text-gray-500">Waiting on: Backend API deployment</span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[11px] font-medium rounded-full">Blocked</span>
                </div>
                <button className="text-blue-500 text-xs font-medium hover:underline">View Dependencies</button>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>

            {/* Task 3 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-blue-500 flex justify-between items-start hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">UI/UX Design Feedback</h4>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-medium rounded-full">Low</span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="text-gray-500">Waiting on: Team review session</span>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[11px] font-medium rounded-full">Waiting for review</span>
                </div>
                <button className="text-blue-500 text-xs font-medium hover:underline">Mark Ready</button>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" className="w-6 h-6 rounded-full" alt="avatar" />
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
            </div>
          </div>
        </section>

        {/* Incomplete from Previous Weeks */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-semibold text-gray-900">Incomplete from Previous Weeks</h2>
            <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">6 tasks</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Task 1 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-purple-500 relative pb-10 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-medium text-gray-900">Research Paper Literature Review</h4>
                  <span className="text-xs text-purple-600 font-medium">65% complete</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-medium rounded-full">College Work</span>
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[11px] font-medium rounded-full">Medium</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mb-4 overflow-hidden">
                <div className="bg-purple-500 h-full w-[65%] rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-4">
                  <span>Target: Jan 20, 6:00 PM</span>
                  <span>Started 5 days ago</span>
                  <span><Clock size={12} className="inline mr-1 mb-0.5" />3.2 hrs</span>
                </div>
                <button className="flex items-center gap-1 text-blue-500 font-medium hover:underline">
                  <PlayCircle size={14} /> Resume Task
                </button>
              </div>
            </div>

            {/* Task 2 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-purple-500 relative pb-10 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-medium text-gray-900">Frontend Component Library</h4>
                  <span className="text-xs text-purple-600 font-medium">40% complete</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">Personal Projects</span>
                  <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[11px] font-medium rounded-full">Low</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mb-4 overflow-hidden">
                <div className="bg-purple-500 h-full w-[40%] rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-4">
                  <span>Target: Jan 25, 11:59 PM</span>
                  <span>Started 8 days ago</span>
                  <span><Clock size={12} className="inline mr-1 mb-0.5" />5.5 hrs</span>
                </div>
                <button className="flex items-center gap-1 text-blue-500 font-medium hover:underline">
                  <PlayCircle size={14} /> Resume Task
                </button>
              </div>
            </div>

            {/* Task 3 */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 border-l-purple-500 relative pb-10 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-medium text-gray-900">Database Schema Optimization</h4>
                  <span className="text-xs text-purple-600 font-medium">55% complete</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[11px] font-medium rounded-full">DSA Practice</span>
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[11px] font-medium rounded-full">High</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full mb-4 overflow-hidden">
                <div className="bg-purple-500 h-full w-[55%] rounded-full"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs text-gray-500">
                <div className="flex gap-4">
                  <span>Target: Jan 22, 5:00 PM</span>
                  <span>Started 4 days ago</span>
                  <span><Clock size={12} className="inline mr-1 mb-0.5" />4.8 hrs</span>
                </div>
                <button className="flex items-center gap-1 text-blue-500 font-medium hover:underline">
                  <PlayCircle size={14} /> Resume Task
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-[320px] bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto shrink-0">
        
        {/* Backlog Overview */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-6">Backlog Overview</h3>
          <div className="flex justify-center mb-6">
            <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full" style={{ background: 'conic-gradient(#ef4444 0% 17%, #f59e0b 17% 67%, #8b5cf6 67% 100%)' }}>
              <div className="w-[96px] h-[96px] bg-white rounded-full flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-gray-900">18</span>
                <span className="text-[10px] text-gray-500">total tasks</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <span className="text-xs text-gray-600 font-medium">Overdue</span>
              </div>
              <span className="text-xs font-bold text-gray-900">17%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <span className="text-xs text-gray-600 font-medium">Pending</span>
              </div>
              <span className="text-xs font-bold text-gray-900">50%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                <span className="text-xs text-gray-600 font-medium">Incomplete</span>
              </div>
              <span className="text-xs font-bold text-gray-900">33%</span>
            </div>
          </div>
        </section>

        {/* Action Priority Matrix */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Action Priority Matrix</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-50 rounded-lg p-3 border border-red-100 flex flex-col">
              <span className="text-[10px] text-red-500 font-semibold mb-2">Urgent &<br/>Important</span>
              <span className="text-xl font-bold text-red-500">3</span>
              <span className="text-[10px] text-gray-500">tasks</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 flex flex-col">
              <span className="text-[10px] text-blue-500 font-semibold mb-2">Not Urgent &<br/>Important</span>
              <span className="text-xl font-bold text-blue-500">8</span>
              <span className="text-[10px] text-gray-500">tasks</span>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 flex flex-col">
              <span className="text-[10px] text-amber-500 font-semibold mb-2">Urgent & Not<br/>Important</span>
              <span className="text-xl font-bold text-amber-500">4</span>
              <span className="text-[10px] text-gray-500">tasks</span>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100 flex flex-col">
              <span className="text-[10px] text-emerald-500 font-semibold mb-2">Not Urgent &<br/>Not Important</span>
              <span className="text-xl font-bold text-emerald-500">3</span>
              <span className="text-[10px] text-gray-500">tasks</span>
            </div>
          </div>
        </section>

        {/* Reasons for Backlog */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Reasons for Backlog</h3>
          
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Waiting on others</span>
                <span className="font-bold text-gray-900">40%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[40%] rounded-full opacity-50"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Complexity/Time needed</span>
                <span className="font-bold text-gray-900">30%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[30%] rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Low priority</span>
                <span className="font-bold text-gray-900">20%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 w-[20%] rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Resource constraints</span>
                <span className="font-bold text-gray-900">10%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-[10%] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-col gap-2">
            <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Bulk Actions</button>
            <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Clear Completed</button>
            <button className="w-full py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Export Backlog</button>
            <button className="w-full py-2 bg-blue-500 text-white border-none rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex justify-center items-center gap-2">
              <Calendar size={14} /> Schedule Review
            </button>
          </div>
        </section>

      </aside>
    </>
  );
}
