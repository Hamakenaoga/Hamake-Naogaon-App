/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Stethoscope, ShoppingBag, Newspaper, Menu, Bell, Home, User, HelpCircle, ArrowLeft, Search, Phone, MapPin } from 'lucide-react';

// --- Screen Components ---

const DashboardScreen = ({ onNavigate }) => (
  <main className="flex-grow p-4 -mt-4">
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

    <div className="grid grid-cols-2 gap-4">
      {[
        { label: 'জরুরি সেবা', icon: AlertTriangle, color: 'bg-green-50', screen: 'Emergency' },
        { label: 'ডাক্তার', icon: Stethoscope, color: 'bg-green-50', screen: 'Doctor' },
        { label: 'মার্কেট', icon: ShoppingBag, color: 'bg-green-50', screen: 'Market' },
        { label: 'খবর', icon: Newspaper, color: 'bg-green-50', screen: 'News' },
      ].map((item, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(item.screen)}
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
);

const EmergencyScreen = ({ onBack }) => (
  <main className="flex-grow p-4">
    <div className="flex gap-4 items-center mb-4">
      <button onClick={onBack}><ArrowLeft /></button>
      <h2 className="font-bold text-lg">জরুরি সেবা</h2>
    </div>
    <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-2 mb-4">
      <Search className="text-gray-400" size={20} />
      <input placeholder="Search" className="w-full text-sm outline-none" />
    </div>
    <div className="flex gap-2 mb-6">
      {['A+', 'A-', 'B+', 'AB+'].map(group => <button key={group} className="px-4 py-1.5 rounded-full bg-green-100 text-[#1B5E20] font-bold text-xs">{group}</button>)}
    </div>
    <div className="space-y-4">
      {[1, 2].map(i => (
        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <div className="flex-1">
            <h4 className="font-bold text-sm">Donor Name</h4>
            <div className="flex items-center text-[10px] text-gray-500 font-semibold"><MapPin size={10} className="mr-1"/>Naogaon, Model Thani</div>
            <p className="text-[10px] font-bold text-[#1B5E20]">Blood A+</p>
          </div>
          <button className="bg-[#1B5E20] text-white text-[10px] px-3 py-1.5 rounded-lg font-bold">Call Now</button>
        </div>
      ))}
    </div>
  </main>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState('হোম');
  const [currentScreen, setCurrentScreen] = useState('Dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Emergency': return <EmergencyScreen onBack={() => setCurrentScreen('Dashboard')} />;
      default: return <DashboardScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-green-50/20 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#1B5E20] text-white p-5 pt-8 pb-6 shadow-lg flex justify-between items-center rounded-b-[2rem]">
        <Menu size={24} className="opacity-90" />
        <h1 className="text-xl font-bold">হামাকে নওগাঁ</h1>
        <div className="relative">
          <Bell size={24} />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#1B5E20]"></span>
        </div>
      </header>

      {renderScreen()}

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
            onClick={() => { setActiveTab(tab.label); setCurrentScreen('Dashboard'); }}
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
