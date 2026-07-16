// app/akademik/page.tsx
import React from 'react';
import Link from 'next/link';

export default function AkademikBeranda() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-black text-white">
      {/* Elemen Video Latar Belakang Asli */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
      >
        <source src="https://mixkit.co" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Lapisan Gradasi Gelap Kontras */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />

      {/* Konten Teks Hero Utama */}
      <div className="relative max-w-5xl mx-auto px-6 py-28 z-20 flex flex-col justify-center h-full min-h-[calc(100vh-160px)]">
        <span className="text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-950/60 border border-blue-800/50 px-4 py-1.5 rounded-full w-fit">
          ROBOTICS ROMANIA
        </span>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mt-6 leading-tight max-w-3xl">
          Driving the Future of Europe with Autonomous Technology and AI.
        </h1>
        
        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl">
          Kami bermitra dengan industri Uni Eropa untuk merealisasikan integrasi kecerdasan buatan, komputasi saraf, dan mekanika bionik langsung dari pusat riset Bucharest.
        </p>

        {/* Akses Cepat Navigasi Modul Terpisah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
          <Link href="/akademik/fase" className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white transition flex flex-col justify-between h-40 group">
            <div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">FASE 01 - 03</span>
              <h3 className="text-lg font-bold tracking-tight text-white mt-1 group-hover:text-blue-400 transition">Evolusi Teknologi</h3>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-white pb-1 border-b border-white w-fit">Lihat Riset →</span>
          </Link>

          <Link href="/akademik/proyek" className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white transition flex flex-col justify-between h-40 group">
            <div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">PORTFOLIO AKTIF</span>
              <h3 className="text-lg font-bold tracking-tight text-white mt-1 group-hover:text-blue-400 transition">Proyek Unggulan</h3>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-white pb-1 border-b border-white w-fit">Buka Portfolio →</span>
          </Link>

          <Link href="/akademik/artikel" className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-white transition flex flex-col justify-between h-40 group">
            <div>
              <span className="text-[10px] font-mono text-gray-500 tracking-wider">JURNAL ILMIAH</span>
              <h3 className="text-lg font-bold tracking-tight text-white mt-1 group-hover:text-blue-400 transition">Artikel Berkala</h3>
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-white pb-1 border-b border-white w-fit">Baca Jurnal →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
