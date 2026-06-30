import { apiUrl } from '../lib/api';
import React, { useState, useEffect, useRef } from 'react';
import { Plus, X, GripHorizontal, Trash2 } from 'lucide-react';

type SlotType = 'revision' | 'new_task' | 'backlog' | 'extra_curicullar';

interface Slot {
  id: string;
  slot_type: SlotType;
  start_time: string; // "HH:MM"
  end_time: string; // "HH:MM"
}

const PPM = 2; // Pixels Per Minute
const SNAP_MINUTES = 10; // Snap to 10 minutes

const timeToMinutes = (t: string): number => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

const minutesToTime = (m: number): string => {
  const h = Math.floor(m / 60);
  const mins = m % 60;
  return `${h.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

const getTypeColor = (type: SlotType) => {
  switch (type) {
    case 'revision': return 'bg-purple-100 border-purple-300 text-purple-900 border-l-purple-500';
    case 'new_task': return 'bg-blue-100 border-blue-300 text-blue-900 border-l-blue-500';
    case 'backlog': return 'bg-red-100 border-red-300 text-red-900 border-l-red-500';
    case 'extra_curicullar': return 'bg-green-100 border-green-300 text-green-900 border-l-green-500';
    default: return 'bg-gray-100 border-gray-300 text-gray-900 border-l-gray-500';
  }
};

const getTypeLabel = (type: SlotType) => {
  switch (type) {
    case 'revision': return 'Revision';
    case 'new_task': return 'New Task';
    case 'backlog': return 'Backlog';
    case 'extra_curicullar': return 'Extra Curricular';
    default: return 'Unknown';
  }
};

const CustomTimePicker = ({ value, onChange, label }: { value: string, onChange: (val: string) => void, label: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [h, m] = value.split(':');
  
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ['00', '10', '20', '30', '40', '50'];

  const handleHourClick = (hour: string) => {
    onChange(`${hour}:${m}`);
  };

  const handleMinuteClick = (minute: string) => {
    onChange(`${h}:${minute}`);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div 
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 cursor-pointer bg-white flex justify-between items-center transition-all hover:border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-800">{value}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-[110] w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-2">
          {/* Hours Column */}
          <div className="flex-1 h-48 overflow-y-auto">
            <div className="text-xs font-semibold text-gray-400 mb-2 sticky top-0 bg-white/90 backdrop-blur-sm py-1 text-center">Hour</div>
            <div className="flex flex-col gap-1">
              {hours.map(hour => (
                <div 
                  key={hour}
                  className={`px-2 py-1.5 text-center rounded-lg cursor-pointer text-sm font-medium transition-colors ${h === hour ? 'bg-blue-600 text-white shadow-sm' : 'hover:bg-blue-50 text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHourClick(hour);
                  }}
                >
                  {hour}
                </div>
              ))}
            </div>
          </div>
          {/* Minutes Column */}
          <div className="flex-1 h-48 overflow-y-auto border-l border-gray-100 pl-2">
            <div className="text-xs font-semibold text-gray-400 mb-2 sticky top-0 bg-white/90 backdrop-blur-sm py-1 text-center">Min</div>
            <div className="flex flex-col gap-1">
              {minutes.map(minute => (
                <div 
                  key={minute}
                  className={`px-2 py-1.5 text-center rounded-lg cursor-pointer text-sm font-medium transition-colors ${m === minute ? 'bg-blue-600 text-white shadow-sm' : 'hover:bg-blue-50 text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMinuteClick(minute);
                  }}
                >
                  {minute}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function SlotPlanner() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSlot, setNewSlot] = useState({
    slot_type: 'new_task' as SlotType,
    start_time: '08:00',
    end_time: '09:00'
  });
  
  const [activeSlot, setActiveSlot] = useState<{start_time: string, end_time: string} | null>(null);
  const [isActiveModalOpen, setIsActiveModalOpen] = useState(false);
  const [newActiveSlot, setNewActiveSlot] = useState({ start_time: '08:00', end_time: '20:00' });
  
  const slotsRef = useRef<Slot[]>([]);
  const activeSlotRef = useRef<{start_time: string, end_time: string} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [dragState, setDragState] = useState<{
    id: string;
    type: 'move' | 'resize-top' | 'resize-bottom';
    startMouseY: number;
    originalStart: number;
    originalEnd: number;
  } | null>(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    slotsRef.current = slots;
  }, [slots]);

  useEffect(() => {
    activeSlotRef.current = activeSlot;
  }, [activeSlot]);

  useEffect(() => {
    fetchSlots();
    fetchActiveSlot();
  }, []);

  const fetchActiveSlot = async () => {
    try {
      const res = await fetch(apiUrl('/api/slots/active'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setActiveSlot(data);
          setNewActiveSlot({ start_time: data.start_time, end_time: data.end_time });
        }
      }
    } catch (e) {
      console.error('Error fetching active slot', e);
    }
  };

  const fetchSlots = async () => {
    try {
      const res = await fetch(apiUrl('/api/slots'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setSlots(data);
      }
    } catch (e) {
      console.error('Error fetching slots', e);
    }
  };

  const handleCreateSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // basic validation
    const sMin = timeToMinutes(newSlot.start_time);
    const eMin = timeToMinutes(newSlot.end_time);
    if (sMin >= eMin) {
      alert("End time must be after start time");
      return;
    }

    if (activeSlot) {
      const activeSMin = timeToMinutes(activeSlot.start_time);
      const activeEMin = timeToMinutes(activeSlot.end_time);
      if (sMin < activeSMin || eMin > activeEMin) {
        alert(`Slot must be within active hours: ${activeSlot.start_time} - ${activeSlot.end_time}`);
        return;
      }
    }
    
    // overlap check
    const hasOverlap = slots.some(s => {
      const sStart = timeToMinutes(s.start_time);
      const sEnd = timeToMinutes(s.end_time);
      return !(eMin <= sStart || sMin >= sEnd);
    });

    if (hasOverlap) {
      alert("Slot overlaps with an existing slot!");
      return;
    }

    try {
      const res = await fetch(apiUrl('/api/slots'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newSlot)
      });
      if (res.ok) {
        setIsModalOpen(false);
        fetchSlots();
      }
    } catch (e) {
      console.error('Error creating slot', e);
    }
  };

  const handleSetActiveSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    const sMin = timeToMinutes(newActiveSlot.start_time);
    const eMin = timeToMinutes(newActiveSlot.end_time);
    if (sMin >= eMin) {
      alert("End time must be after start time");
      return;
    }

    try {
      const res = await fetch(apiUrl('/api/slots/active'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newActiveSlot)
      });
      if (res.ok) {
        setIsActiveModalOpen(false);
        fetchActiveSlot();
      }
    } catch (e) {
      console.error('Error setting active slot', e);
    }
  };

  const handleDeleteSlot = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch(apiUrl(`/api/slots/${id}`), {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        fetchSlots();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleMouseDown = (e: React.MouseEvent, id: string, type: 'move' | 'resize-top' | 'resize-bottom') => {
    e.stopPropagation();
    const slot = slots.find(s => s.id === id);
    if (!slot) return;
    
    setDragState({
      id,
      type,
      startMouseY: e.clientY,
      originalStart: timeToMinutes(slot.start_time),
      originalEnd: timeToMinutes(slot.end_time),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragState) return;
      const deltaY = e.clientY - dragState.startMouseY;
      const deltaMinutes = Math.round(deltaY / PPM / SNAP_MINUTES) * SNAP_MINUTES;
      
      let newStart = dragState.originalStart;
      let newEnd = dragState.originalEnd;
      
      if (dragState.type === 'move') {
        newStart += deltaMinutes;
        newEnd += deltaMinutes;
      } else if (dragState.type === 'resize-top') {
        newStart += deltaMinutes;
        if (newStart >= newEnd - 10) newStart = newEnd - 10;
      } else if (dragState.type === 'resize-bottom') {
        newEnd += deltaMinutes;
        if (newEnd <= newStart + 10) newEnd = newStart + 10;
      }
      
      let minStart = 0;
      let maxEnd = 1440;
      
      if (activeSlotRef.current) {
        minStart = timeToMinutes(activeSlotRef.current.start_time);
        maxEnd = timeToMinutes(activeSlotRef.current.end_time);
      }
      
      if (newStart < minStart) {
        if (dragState.type === 'move') newEnd += (minStart - newStart);
        newStart = minStart;
      }
      if (newEnd > maxEnd) {
        if (dragState.type === 'move') newStart -= (newEnd - maxEnd);
        newEnd = maxEnd;
      }
      
      const hasOverlap = slotsRef.current.some(s => {
        if (s.id === dragState.id) return false;
        const sStart = timeToMinutes(s.start_time);
        const sEnd = timeToMinutes(s.end_time);
        return !(newEnd <= sStart || newStart >= sEnd);
      });
      
      if (!hasOverlap) {
        setSlots(prev => prev.map(s => {
          if (s.id === dragState.id) {
            return {
              ...s,
              start_time: minutesToTime(newStart),
              end_time: minutesToTime(newEnd),
            };
          }
          return s;
        }));
      }
    };

    const handleMouseUp = async () => {
      if (dragState) {
        const updatedSlot = slotsRef.current.find(s => s.id === dragState.id);
        if (updatedSlot) {
          try {
            await fetch(apiUrl(`/api/slots/${updatedSlot.id}`), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                start_time: updatedSlot.start_time,
                end_time: updatedSlot.end_time
              })
            });
          } catch (err) {
            console.error('Update failed', err);
          }
        }
        setDragState(null);
      }
    };

    if (dragState) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      // Disable text selection while dragging
      document.body.style.userSelect = 'none';
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = '';
      };
    }
  }, [dragState, token]);

  const HOURS = Array.from({length: 24}, (_, i) => i);

  return (
    <>
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50 h-screen">
        <header className="px-8 py-6 flex justify-between items-center border-b border-gray-200 bg-white shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Time Planner</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsActiveModalOpen(true)}
              className="flex items-center gap-2 py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg text-sm font-medium shadow-md transition-colors"
            >
              Set Active Slot
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-lg text-sm font-medium shadow-md transition-colors"
            >
              <Plus size={18} /> Schedule Slot
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto relative" ref={containerRef}>
          <div className="flex min-w-[600px] h-max relative bg-white m-4 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            
            {/* Time labels column */}
            <div className="w-20 border-r border-gray-100 bg-gray-50 shrink-0 relative z-10" style={{ height: 1440 * PPM }}>
              {HOURS.map((hour) => (
                <div 
                  key={hour} 
                  className="absolute w-full text-right pr-3 text-xs font-medium text-gray-500"
                  style={{ top: hour * 60 * PPM - 8 }}
                >
                  {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </div>
              ))}
            </div>

            {/* Grid and slots */}
            <div className="flex-1 relative bg-[length:100%_120px] bg-[linear-gradient(to_bottom,transparent_119px,#f1f5f9_120px)]" style={{ height: 1440 * PPM, backgroundSize: `100% ${60 * PPM}px` }}>
              {/* Hour lines for background pattern */}
              {HOURS.map((hour) => (
                <div 
                  key={hour} 
                  className="absolute w-full border-t border-gray-100"
                  style={{ top: hour * 60 * PPM }}
                />
              ))}

              {/* Active Slot Background Indicator */}
              {activeSlot && (
                <div 
                  className="absolute w-full bg-green-500/10 border-y border-green-500/30 pointer-events-none"
                  style={{
                    top: timeToMinutes(activeSlot.start_time) * PPM,
                    height: (timeToMinutes(activeSlot.end_time) - timeToMinutes(activeSlot.start_time)) * PPM
                  }}
                />
              )}

              {slots.map(slot => {
                const sMin = timeToMinutes(slot.start_time);
                const eMin = timeToMinutes(slot.end_time);
                const top = sMin * PPM;
                const height = (eMin - sMin) * PPM;

                return (
                  <div
                    key={slot.id}
                    className={`absolute left-2 right-2 rounded-lg border-l-4 shadow-sm flex flex-col overflow-hidden transition-shadow hover:shadow-md ${getTypeColor(slot.slot_type)}`}
                    style={{
                      top,
                      height,
                      zIndex: dragState?.id === slot.id ? 50 : 10,
                      opacity: dragState?.id === slot.id && dragState.type === 'move' ? 0.9 : 1
                    }}
                  >
                    {/* Top Resize Handle */}
                    <div 
                      className="h-2 w-full cursor-ns-resize absolute top-0 left-0 right-0 z-20 hover:bg-black/10 transition-colors"
                      onMouseDown={(e) => handleMouseDown(e, slot.id, 'resize-top')}
                    />

                    {/* Content (Draggable to move) */}
                    <div 
                      className="flex-1 p-2 cursor-move flex flex-col"
                      onMouseDown={(e) => handleMouseDown(e, slot.id, 'move')}
                    >
                      <div className="flex justify-between items-start">
                        <div className="font-semibold text-sm">
                          {getTypeLabel(slot.slot_type)}
                        </div>
                        <button 
                          onClick={(e) => handleDeleteSlot(slot.id, e)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="text-xs opacity-80 mt-1 font-medium">
                        {slot.start_time} - {slot.end_time}
                      </div>
                      <div className="mt-auto flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <GripHorizontal size={16} className="text-black/20" />
                      </div>
                    </div>

                    {/* Bottom Resize Handle */}
                    <div 
                      className="h-2 w-full cursor-ns-resize absolute bottom-0 left-0 right-0 z-20 hover:bg-black/10 transition-colors"
                      onMouseDown={(e) => handleMouseDown(e, slot.id, 'resize-bottom')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Create Slot Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-visible">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
              <h3 className="text-lg font-bold text-gray-900">Schedule New Slot</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreateSlot} className="p-6 space-y-5">
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Slot Type</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={newSlot.slot_type}
                  onChange={e => setNewSlot({...newSlot, slot_type: e.target.value as SlotType})}
                >
                  <option value="revision">Revision</option>
                  <option value="new_task">New Task</option>
                  <option value="backlog">Backlog</option>
                  <option value="extra_curicullar">Extra Curricular</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <CustomTimePicker 
                  label="Start Time"
                  value={newSlot.start_time}
                  onChange={(val) => setNewSlot({...newSlot, start_time: val})}
                />
                <CustomTimePicker 
                  label="End Time"
                  value={newSlot.end_time}
                  onChange={(val) => setNewSlot({...newSlot, end_time: val})}
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm rounded-lg transition-colors"
                >
                  Create Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Set Active Slot Modal */}
      {isActiveModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-visible">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
              <h3 className="text-lg font-bold text-gray-900">Set Active Work Hours</h3>
              <button onClick={() => setIsActiveModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSetActiveSlot} className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <CustomTimePicker 
                  label="Start Time"
                  value={newActiveSlot.start_time}
                  onChange={(val) => setNewActiveSlot({...newActiveSlot, start_time: val})}
                />
                <CustomTimePicker 
                  label="End Time"
                  value={newActiveSlot.end_time}
                  onChange={(val) => setNewActiveSlot({...newActiveSlot, end_time: val})}
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsActiveModalOpen(false)}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 shadow-sm rounded-lg transition-colors"
                >
                  Save Active Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
