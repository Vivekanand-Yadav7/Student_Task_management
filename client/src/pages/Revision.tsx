import { apiUrl, authHeaders } from '../lib/api';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {
  RefreshCcw,
  Plus,
  Settings,
  MoreVertical,
  CheckCircle2,
  Trash2,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Revision() {
  const [revisionTasks, setRevisionTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState<string>('');
  
  // New Revision Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDuration, setNewDuration] = useState('3600');
  
  // Action Modal State
  const [showActionModal, setShowActionModal] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRevisionTasks();
  }, [filterDate]);

  const fetchRevisionTasks = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      let url = '/api/revision-tasks';
      if (filterDate) {
        url += `?date=${filterDate}`;
      }
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setRevisionTasks(data);
      } else if (response.status === 401) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Failed to fetch revision tasks', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRevision = async () => {
    if (!newTitle) return;
    
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(apiUrl('/api/revision-tasks'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: newTitle,
          duration_required: parseInt(newDuration),
        })
      });
      if (response.ok) {
        setNewTitle('');
        fetchRevisionTasks();
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to create revision task');
      }
    } catch (error) {
      console.error('Failed to create revision task', error);
    }
  };

  const handleComplete = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(apiUrl(`/api/revision-tasks/${id}/complete`), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        setShowActionModal(null);
        fetchRevisionTasks();
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to complete revision task');
      }
    } catch (error) {
      console.error('Failed to complete revision task', error);
    }
  };

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(apiUrl(`/api/revision-tasks/${id}`), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        setShowActionModal(null);
        fetchRevisionTasks();
      }
    } catch (error) {
      console.error('Failed to delete revision task', error);
    }
  };

  const activeRevisions = revisionTasks.filter(t => !t.is_complete);

  return (
    <>
      <main className="flex-1 p-8 overflow-y-auto min-w-0">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Revision Scheduling</h1>
            <p className="text-sm text-gray-500">Master topics using spaced repetition</p>
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
            <button className="flex items-center gap-2 py-2 px-4 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors">
              <Settings size={18} />
              Interval Settings
            </button>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Add Revision Form */}
          <div className="col-span-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm self-start">
            <h3 className="text-base font-semibold text-gray-900 mb-4">New Revision Topic</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Topic Name</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Graph Algorithms" 
                  className="w-full p-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" 
                />
              </div>
              <button 
                onClick={handleCreateRevision}
                className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg mt-2 transition-colors"
              >
                Schedule Topic
              </button>
            </div>
          </div>

          {/* Upcoming Revisions */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex gap-4">
                <button className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 pb-1">Due ({activeRevisions.length})</button>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 pb-1">All Filtered ({revisionTasks.length})</button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 flex flex-col gap-2">
              {activeRevisions.length === 0 && (
                <div className="p-4 text-center text-sm text-gray-500">No revisions found for this filter.</div>
              )}
              {activeRevisions.map(task => (
                <div key={task.id} className="p-3 border border-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-50 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                      <RefreshCcw size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                      <div className="flex gap-2 text-xs text-gray-500 mt-1">
                        <span className="px-1.5 py-0.5 bg-gray-100 rounded">Freq: {task.revision_frequency}</span>
                        <span>Date: {new Date(task.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {showActionModal === task.id ? (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleComplete(task.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md text-xs font-medium transition-colors"
                        >
                          <CheckCircle2 size={14} /> Persist (Complete)
                        </button>
                        <button 
                          onClick={() => handleDelete(task.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 text-white hover:bg-red-600 rounded-md text-xs font-medium transition-colors"
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                        <button 
                          onClick={() => setShowActionModal(null)}
                          className="text-xs text-gray-500 hover:underline px-2"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setShowActionModal(task.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-md text-xs font-medium transition-colors"
                      >
                        <CheckCircle2 size={14} /> Mark Done / Action
                      </button>
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
