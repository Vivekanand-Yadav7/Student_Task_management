import React, { useState, useEffect } from 'react';
import {
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
import { useNavigate } from 'react-router-dom';

export default function Task() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const navigate = useNavigate();

  // Create Task Form State
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDurationHHMM, setNewTaskDurationHHMM] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('MEDIUM');
  const [newTaskSlotId, setNewTaskSlotId] = useState('');
  const [slots, setSlots] = useState<any[]>([]);
  
  // Subtitle Form State
  const [newSubtitles, setNewSubtitles] = useState<Record<string, string>>({});

  useEffect(() => {
    fetchTasks();
    fetchSlots();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch('/api/tasks/all', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else if (response.status === 401) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSlots = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      const response = await fetch('/api/slots', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setSlots(data);
      }
    } catch (error) {
      console.error('Failed to fetch slots', error);
    }
  };

  const handleCreateTask = async () => {
    if (!newTaskTitle) return;
    
    setIsCreatingTask(true);
    
    // Parse HH:MM to seconds
    let durationSeconds = 3600; // default 1 hour
    if (newTaskDurationHHMM) {
      const [hoursStr, minutesStr] = newTaskDurationHHMM.split(':');
      const hours = parseInt(hoursStr) || 0;
      const minutes = parseInt(minutesStr) || 0;
      durationSeconds = hours * 3600 + minutes * 60;
    }

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/tasks/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newTaskTitle,
          duration_required: durationSeconds,
          priority: newTaskPriority,
          ...(newTaskSlotId ? { slotId: newTaskSlotId } : {})
        })
      });
      if (response.ok) {
        setNewTaskTitle('');
        setNewTaskDurationHHMM('');
        setNewTaskSlotId('');
        await fetchTasks();
      }
    } catch (error) {
      console.error('Failed to create task', error);
    } finally {
      setIsCreatingTask(false);
    }
  };

  const handleMarkTaskDone = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/tasks/done?id=${id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Failed to mark task done', error);
    }
  };

  const handleCreateSubtitle = async (taskId: string) => {
    const title = newSubtitles[taskId];
    if (!title) return;

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/tasks/subtitle/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          taskId,
          title
        })
      });
      if (response.ok) {
        setNewSubtitles({ ...newSubtitles, [taskId]: '' });
        fetchTasks();
      }
    } catch (error) {
      console.error('Failed to create subtitle', error);
    }
  };

  const handleMarkSubtitleDone = async (taskId: string, subId: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/tasks/subtitlecomplete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id: taskId,
          subId
        })
      });
      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Failed to mark subtitle done', error);
    }
  };

  const isToday = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const activeTasks = tasks.filter(t => !t.is_complete && isToday(t.createdAt));
  const completedTasks = tasks.filter(t => t.is_complete && isToday(t.createdAt));

  // Themes for categories (to match hardcoded styling)
  const catThemes = [
    { border: 'border-l-purple-500', bg: 'bg-purple-50', text: 'text-purple-600', label: 'DSA Practice' },
    { border: 'border-l-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', label: 'College Work' },
    { border: 'border-l-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Revision' },
    { border: 'border-l-orange-500', bg: 'bg-orange-50', text: 'text-orange-600', label: 'Others' }
  ];

  const priorityTheme: any = {
    HIGH: { bg: 'bg-red-50', text: 'text-red-600', label: 'High Priority' },
    MEDIUM: { bg: 'bg-amber-50', text: 'text-amber-600', label: 'Medium Priority' },
    LEAST: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Low Priority' }
  };

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    return `${m}m`;
  };

  return (
    <>
      {/* Loading Overlay */}
      {isCreatingTask && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-white text-lg font-semibold">Creating Task...</h2>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Daily Tasks</h1>
            <p className="text-sm text-gray-500">{tasks.length} tasks today • {activeTasks.length} pending</p>
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
            <input 
              type="text" 
              placeholder="Task title" 
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Duration (HH:MM)"
                  value={newTaskDurationHHMM}
                  onChange={(e) => setNewTaskDurationHHMM(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <select 
                  value={newTaskPriority}
                  onChange={(e) => setNewTaskPriority(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="HIGH">High Priority</option>
                  <option value="MEDIUM">Medium Priority</option>
                  <option value="LEAST">Low Priority</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {slots.length > 0 && (
              <div className="relative">
                <select
                  value={newTaskSlotId}
                  onChange={(e) => setNewTaskSlotId(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">— Assign to a time slot (optional) —</option>
                  {slots.map((slot: any) => (
                    <option key={slot.id} value={slot.id}>
                      {slot.slot_type.replace('_', ' ')} · {slot.start_time} – {slot.end_time}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3.5 text-gray-400" />
              </div>
            )}

            <div className="flex gap-3 mt-2">
              <button onClick={handleCreateTask} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">Add Task</button>
              <button onClick={() => setNewTaskTitle('')} className="px-5 py-2 bg-transparent text-gray-500 hover:text-gray-700 text-sm font-medium rounded-lg transition-colors">Cancel</button>
            </div>
          </div>
        </section>

        {/* Active Tasks */}
        <section className="mb-8">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Active Tasks</h2>
          
          <div className="flex flex-col gap-3">
            {activeTasks.length === 0 && (
              <div className="text-gray-500 text-sm py-4">No active tasks found.</div>
            )}
            {activeTasks.map((task, index) => {
              const catTheme = catThemes[index % catThemes.length];
              const pTheme = priorityTheme[task.priority] || priorityTheme.MEDIUM;
              
              return (
                <div key={task.id} className={`bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 border-l-4 ${catTheme.border}`}>
                  <div className="mt-1">
                    <div 
                      onClick={() => handleMarkTaskDone(task.id)}
                      className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 transition-colors"
                    ></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                        <span className={`px-2 py-0.5 ${catTheme.bg} ${catTheme.text} text-[11px] font-medium rounded-full`}>
                          {catTheme.label}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={14} />
                        <span>{formatDuration(task.duration_required)}</span>
                      </div>
                      <span className={`px-2 py-0.5 ${pTheme.bg} ${pTheme.text} text-[11px] font-medium rounded-full`}>
                        {pTheme.label}
                      </span>
                    </div>
                    
                    {/* Subtitles Section */}
                    <div className="mt-2 pl-2 border-l-2 border-gray-100">
                      <h5 className="text-xs font-semibold text-gray-700 mb-2">Subtitles / Subtasks</h5>
                      <div className="flex flex-col gap-2 mb-3">
                        {task.subtitles?.map((sub: any) => (
                          <div key={sub.id} className="flex items-center gap-2">
                            {sub.is_complete ? (
                              <CheckCircle2 size={14} className="text-emerald-500" />
                            ) : (
                              <div 
                                onClick={() => handleMarkSubtitleDone(task.id, sub.id)}
                                className="w-3 h-3 border-2 border-gray-300 rounded-sm cursor-pointer hover:border-blue-500"
                              ></div>
                            )}
                            <span className={`text-xs ${sub.is_complete ? 'text-gray-400 line-through' : 'text-gray-600'}`}>{sub.title}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <input 
                          type="text" 
                          placeholder="Add a new subtitle..."
                          value={newSubtitles[task.id] || ''}
                          onChange={(e) => setNewSubtitles({...newSubtitles, [task.id]: e.target.value})}
                          className="flex-1 p-2 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
                        />
                        <button 
                          onClick={() => handleCreateSubtitle(task.id)}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-md transition-colors"
                        >Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Completed Tasks */}
        <section>
          <div className="flex items-center gap-2 mb-4 cursor-pointer text-gray-600 hover:text-gray-900 transition-colors">
            <h2 className="text-sm font-semibold">{completedTasks.length} Completed Tasks</h2>
            <ChevronDown size={16} />
          </div>

          <div className="flex flex-col gap-3 opacity-60">
            {completedTasks.map(task => (
              <div key={task.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 line-through mb-0.5">{task.title}</h4>
                  <p className="text-xs text-gray-400">{formatDuration(task.duration_required)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden xl:block w-[320px] bg-gray-50 border-l border-gray-200 p-6 overflow-y-auto shrink-0">
        {/* Today's Progress */}
        <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-gray-900 w-full mb-6 text-left">Today's Progress</h3>
          <div className="relative flex justify-center items-center w-24 h-24 rounded-full mb-4" style={{ background: `conic-gradient(#3b82f6 ${tasks.length ? (completedTasks.length / tasks.length) * 100 : 0}%, #e5e7eb 0)` }}>
            <div className="w-[84px] h-[84px] bg-white rounded-full flex justify-center items-center text-xl font-bold text-gray-900">
              {tasks.length ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">{completedTasks.length} of {tasks.length} tasks completed</p>
        </section>
        
        {/* Upcoming Deadlines Placeholder */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Upcoming Deadlines</h3>
            <AlertCircle size={16} className="text-red-500" />
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex gap-3">
              <Clock size={16} className="text-gray-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-0.5">Nothing urgent</h4>
                <p className="text-xs text-gray-500">You're all caught up!</p>
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
              <span className="text-xs text-gray-500">Tasks Completed</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 block">{completedTasks.length}</span>
              <span className="text-xs text-gray-500">completed</span>
            </div>
          </div>
        </div>

      </aside>
    </>
  );
}
