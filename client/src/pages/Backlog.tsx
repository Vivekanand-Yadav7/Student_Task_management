import { apiUrl } from '../lib/api';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  Bell,
  Plus,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Calendar,
  PlayCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Backlog() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const response = await fetch(apiUrl('/api/tasks/all'), {
        headers: { 'Authorization': `Bearer ${token}` }
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

  const handleMarkTaskDone = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(apiUrl(`/api/tasks/done?id=${id}`), {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        fetchTasks();
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to mark task done');
      }
    } catch (error) {
      console.error('Failed to mark task done', error);
    }
  };

  // Backlog filter logic
  const isBacklog = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return new Date(date.setHours(0,0,0,0)).getTime() < new Date(today.setHours(0,0,0,0)).getTime();
  };

  const matchesFilterDate = (dateString: string) => {
    if (!filterDate) return true;
    const taskDateStr = new Date(dateString).toISOString().split('T')[0];
    return taskDateStr === filterDate;
  };

  const backlogTasks = tasks.filter(t => !t.is_complete && isBacklog(t.createdAt) && matchesFilterDate(t.createdAt));
  const totalBacklogTasks = tasks.filter(t => !t.is_complete && isBacklog(t.createdAt)).length;

  // Themes for categories
  const catThemes = [
    { border: 'border-l-red-500', bg: 'bg-red-50', text: 'text-red-600', label: 'Urgent' },
    { border: 'border-l-blue-500', bg: 'bg-blue-50', text: 'text-blue-600', label: 'College Work' },
    { border: 'border-l-purple-500', bg: 'bg-purple-50', text: 'text-purple-600', label: 'DSA Practice' },
    { border: 'border-l-orange-500', bg: 'bg-orange-50', text: 'text-orange-600', label: 'Others' }
  ];

  const formatDuration = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0 && m > 0) return `${h}h ${m}m`;
    if (h > 0) return `${h}h`;
    return `${m}m`;
  };

  return (
    <>
      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Backlog</h1>
            <p className="text-sm text-gray-500">{totalBacklogTasks} unfinished tasks from past days</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input 
                type="date" 
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <button 
              onClick={() => setFilterDate('')}
              className="text-sm text-blue-500 hover:underline"
            >
              Clear Filter
            </button>
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-gray-50"></span>
            </div>
            <button className="flex items-center gap-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white border-none rounded-lg text-sm font-medium cursor-pointer transition-colors" onClick={() => navigate('/daily-tasks')}>
              <Plus size={18} />
              Create Task
            </button>
          </div>
        </header>

        {/* Backlog Tasks */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-base font-semibold text-gray-900">Overdue / Backlog Tasks</h2>
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">{backlogTasks.length} tasks</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {backlogTasks.length === 0 && (
              <div className="text-gray-500 text-sm py-4">No backlog tasks found for this date.</div>
            )}
            {backlogTasks.map((task, index) => {
              const catTheme = catThemes[index % catThemes.length];
              const daysOverdue = Math.floor((new Date().getTime() - new Date(task.createdAt).getTime()) / (1000 * 3600 * 24));
              
              return (
                <div key={task.id} className={`bg-white p-4 rounded-xl border border-gray-200 shadow-sm border-l-4 ${catTheme.border} flex justify-between items-center hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer`}>
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">
                      <div 
                        onClick={() => handleMarkTaskDone(task.id)}
                        className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer hover:border-emerald-500 transition-colors"
                        title="Mark Done (Requires Backlog Slot)"
                      ></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                        <span className={`px-2 py-0.5 ${catTheme.bg} ${catTheme.text} text-[11px] font-medium rounded-full`}>{task.priority}</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-400">Created: {new Date(task.createdAt).toLocaleDateString()}</span>
                        <span className="text-red-500 font-medium">Overdue by {daysOverdue} days</span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock size={12} /> {formatDuration(task.duration_required)}
                        </span>
                        <button className="flex items-center gap-1 text-emerald-500 hover:underline font-medium" onClick={() => handleMarkTaskDone(task.id)}>
                          <CheckCircle2 size={12} /> Clear from Backlog
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
