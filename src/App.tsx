/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Stethoscope, ShoppingBag, Newspaper, Menu, Bell, Home, User, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('হোম');

  return (
    <div className="min-h-screen bg-green-50/20 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#1B5E20] text-white p-5 pt-8 pb-6 shadow-lg flex justify-between items-center rounded-b-[2rem]">
        <Menu size={24} className="opacity-90" />
        <h1 className="text-xl font-bold">ড্যাশবোর্ড</h1>
        <div className="relative">
          <Bell size={24} />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#1B5E20]"></span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-4 -mt-4">
        {/* Banner Section */}
        <div className="h-32 bg-blue-50/80 rounded-2xl shadow-sm flex items-center p-4 mb-3 border border-gray-100 overflow-hidden relative">
          <div className="flex-1 z-10">
            <h2 className="font-bold text-gray-800 text-sm mb-0.5">Special Discount!</h2>
            <p className="text-[10px] text-gray-500 mb-2">at 'Naogaon General Hospital'</p>
            <button className="bg-[#1B5E20] text-white text-[9px] px-3 py-1 rounded-full font-bold">Shop Now</button>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 z-10">Image</div>
        </div>
        <div className="flex justify-center gap-1.5 mb-6">
            <div className="w-5 h-1.5 rounded-full bg-[#1B5E20]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'জরুরি সেবা', icon: AlertTriangle, color: 'bg-green-50' },
            { label: 'ডাক্তার', icon: Stethoscope, color: 'bg-green-50' },
            { label: 'মার্কেট', icon: ShoppingBag, color: 'bg-green-50' },
            { label: 'খবর', icon: Newspaper, color: 'bg-green-50' },
          ].map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-3 h-32 border border-gray-100/80"
            >
              <div className={`${item.color} p-4 rounded-full`}>
                <item.icon size={28} className="text-[#1B5E20]" />
              </div>
              <span className="text-xs font-bold text-gray-800">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-100 p-4 pb-6 flex justify-around items-center sticky bottom-0 z-10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {[
          { label: 'হোম', icon: Home },
          { label: 'মার্কেট', icon: ShoppingBag },
          { label: 'একাউন্ট', icon: User },
          { label: 'হেল্প', icon: HelpCircle },
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === tab.label ? 'text-[#1B5E20]' : 'text-gray-400'}`}
          >
            <tab.icon size={26} strokeWidth={activeTab === tab.label ? 2.5 : 2} />
            <span className="text-[10px] font-bold">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
