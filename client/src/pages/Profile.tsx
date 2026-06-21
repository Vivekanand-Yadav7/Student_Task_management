import React, { useState } from 'react';
import {
  User,
  Mail,
  Camera,
  Shield,
  Bell,
  Key,
  LogOut,
  MapPin,
  Link as LinkIcon,
  Briefcase,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <main className="flex-1 p-8 overflow-y-auto bg-gray-50 min-w-0">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
            <p className="text-sm text-gray-500">Manage your account settings and preferences</p>
          </div>
          <button className="flex items-center gap-2 py-2 px-4 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 rounded-lg text-sm font-medium cursor-pointer transition-colors">
            <LogOut size={16} />
            Sign Out
          </button>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Profile Card & Nav */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
            
            {/* Profile Summary Card */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              
              <div className="relative mt-8 mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-md mx-auto relative overflow-hidden bg-white">
                  <img src="https://i.pravatar.cc/150?u=a042581f4e29026704z" alt="Profile" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900">Alex Carter</h2>
              <p className="text-sm text-gray-500 mb-4">alex.carter@example.com</p>
              
              <div className="flex justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">Pro Plan</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold">Student</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">142</div>
                  <div className="text-xs text-gray-500 font-medium">Tasks Done</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-xs text-gray-500 font-medium">Productivity</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center gap-3 p-4 text-sm font-medium transition-colors text-left ${activeTab === 'personal' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'}`}
                >
                  <User size={18} /> Personal Info
                </button>
                <button 
                  onClick={() => setActiveTab('security')}
                  className={`flex items-center gap-3 p-4 text-sm font-medium transition-colors text-left border-t border-gray-100 ${activeTab === 'security' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'}`}
                >
                  <Shield size={18} /> Security
                </button>
                <button 
                  onClick={() => setActiveTab('notifications')}
                  className={`flex items-center gap-3 p-4 text-sm font-medium transition-colors text-left border-t border-gray-100 ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500' : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'}`}
                >
                  <Bell size={18} /> Notifications
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column - Settings Content */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
            
            {activeTab === 'personal' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Personal Information</h3>
                
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <input type="text" defaultValue="Alex" className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <input type="text" defaultValue="Carter" className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input type="email" defaultValue="alex.carter@example.com" className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">Bio</label>
                    <textarea rows={4} defaultValue="Computer Science student passionate about software engineering, productivity systems, and open-source." className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Location</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin size={16} className="text-gray-400" />
                        </div>
                        <input type="text" defaultValue="San Francisco, CA" className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Profession</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase size={16} className="text-gray-400" />
                        </div>
                        <input type="text" defaultValue="Student / Developer" className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-4 pt-6 border-t border-gray-100">
                    <button type="button" className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">Discard</button>
                    <button type="button" className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">Save Changes</button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Security Settings</h3>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">Change Password</h4>
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Current Password</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Key size={16} className="text-gray-400" />
                        </div>
                        <input type="password" placeholder="Enter current password" className="p-3 pl-10 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">New Password</label>
                      <input type="password" placeholder="Enter new password" className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                      <input type="password" placeholder="Confirm new password" className="p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
                    </div>
                    <div className="flex justify-start mt-2">
                      <button type="button" className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">Update Password</button>
                    </div>
                  </form>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-4 border-t border-gray-100 pt-6">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Protect your account with 2FA</p>
                      <p className="text-xs text-gray-500 mt-1">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors">Enable</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Notification Preferences</h3>
                
                <div className="flex flex-col gap-6">
                  {/* Email Notifications */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-4">Email Notifications</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                          <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer" />
                          <CheckCircle2 size={14} className="text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Task Reminders</p>
                          <p className="text-xs text-gray-500 mt-0.5">Receive an email when a task is nearing its deadline.</p>
                        </div>
                      </label>
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                          <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer" />
                          <CheckCircle2 size={14} className="text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Weekly Digest</p>
                          <p className="text-xs text-gray-500 mt-0.5">Get a weekly summary of your completed tasks and productivity stats.</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-4 border-t border-gray-100 pt-6">Push Notifications</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                          <input type="checkbox" defaultChecked className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer" />
                          <CheckCircle2 size={14} className="text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Daily Schedule</p>
                          <p className="text-xs text-gray-500 mt-0.5">Receive a push notification every morning with today's tasks.</p>
                        </div>
                      </label>
                      
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 mt-0.5">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 checked:bg-blue-500 checked:border-blue-500 transition-colors cursor-pointer" />
                          <CheckCircle2 size={14} className="text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">New Feature Announcements</p>
                          <p className="text-xs text-gray-500 mt-0.5">Be the first to know when we release a new tool or feature.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4 pt-6 border-t border-gray-100">
                    <button type="button" className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">Save Preferences</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </>
  );
}
