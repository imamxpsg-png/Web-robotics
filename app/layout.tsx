// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 tracking-tight antialiased">
        <nav className="border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Animasi Logo Robot Naik Turun */}
            <Link href="/akademik" className="flex items-center space-x-3">
              <span className="inline-block animate-bounce text-2xl duration-1000">🤖</span>
              <div className="flex flex-col">
                <span className="font-black text-sm tracking-widest text-gray-900 uppercase">
                  Institutul de Robotică
                </span>
                <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">
                  Universitatea din București
                </span>
              </div>
            </Link>
            
            {/* Navigasi Antar Halaman Terpisah */}
            <div className="flex space-x-8 text-xs font-bold tracking-widest uppercase text-gray-500">
              <Link href="/akademik" className="hover:text-blue-600 transition">Beranda</Link>
              <Link href="/akademik/fase" className="hover:text-blue-600 transition">Evolusi</Link>
              <Link href="/akademik/proyek" className="hover:text-blue-600 transition">Proyek</Link>
              <Link href="/akademik/artikel" className="hover:text-blue-600 transition">Artikel</Link>
            </div>
          </div>
        </nav>
        
        {children}

        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-100 text-xs text-gray-400 tracking-wide mt-20">
          © 2026 Dacia Robotics Labs — Universitatea din București. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
