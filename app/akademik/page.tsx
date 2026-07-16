"use client";

import React from 'react';

// Data konten (terintegrasi di bawah)

export default function AkademikPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-gray-900 tracking-tight antialiased min-h-screen">
      
      {/* NAVBAR: Logo memantul (animate-bounce) & Teks berkedip (animate-pulse) */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 cursor-pointer select-none group">
            <span className="inline-block animate-bounce text-2xl duration-1000">🤖</span>
            <div className="flex flex-col animate-pulse">
              <span className="font-black text-sm tracking-widest text-gray-900 uppercase">Institutul de Robotică</span>
              <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">Universitatea din București</span>
            </div>
          </div>
          <div className="flex space-x-8 text-xs font-bold tracking-widest uppercase text-gray-500">
            {/* Navigasi... */}
          </div>
        </div>
      </nav>

      {/* HERO SECTION: Video Latar Belakang */}
      <header className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-black text-white flex items-center">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-45 z-0">
          <source src="/robot-bg.mp4" type="video/mp4" />
        </video>
        {/* Konten Hero... */}
      </header>

      {/* Konten Utama & Footer... */}
    </div>
  );
}
