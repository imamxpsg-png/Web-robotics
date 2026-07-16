// app/akademik/page.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function AkademikPortal() {
  const [role, setRole] = useState<'reader' | 'admin'>('reader');

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-extrabold mb-2">Portal Akademik Dacia Labs</h1>
      <p className="text-gray-500 mb-8">Pilih mode akses Anda untuk menjelajahi data laboratorium.</p>

      {/* Switcher Role Akses */}
      <div className="inline-flex p-1 bg-gray-200 rounded-lg mb-12">
        <button 
          onClick={() => setRole('reader')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${role === 'reader' ? 'bg-white shadow text-blue-600' : 'text-gray-600'}`}
        >
          Mata-Mata (Reader Mode)
        </button>
        <button 
          onClick={() => setRole('admin')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${role === 'admin' ? 'bg-white shadow text-blue-600' : 'text-gray-600'}`}
        >
          Pengelola (Admin Mode)
        </button>
      </div>

      {/* Status Banner */}
      <div className={`p-4 rounded-xl mb-8 border text-left ${role === 'admin' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
        <p className="text-sm font-semibold">
          {role === 'admin' 
            ? '⚡ Mode Admin Aktif: Anda memiliki otoritas penuh untuk memodifikasi fase riset dan menulis artikel baru.' 
            : '👁️ Mode Baca Aktif: Anda dapat melihat seluruh arsip, jurnal publik, dan portofolio terkini.'}
        </p>
      </div>

      {/* Navigasi Modul Berbeda Halaman */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <Link href="/akademik/fase" className="p-6 bg-white border rounded-xl hover:shadow-md transition group">
          <h3 className="font-bold text-lg group-hover:text-blue-600">Evolusi Teknologi →</h3>
          <p className="text-xs text-gray-500 mt-1">Garis waktu standarisasi otomasi nirkabel Uni Eropa.</p>
        </Link>
        <Link href="/akademik/proyek" className="p-6 bg-white border rounded-xl hover:shadow-md transition group">
          <h3 className="font-bold text-lg group-hover:text-blue-600">Proyek Unggulan →</h3>
          <p className="text-xs text-gray-500 mt-1">Daftar robotika taktis dan bionik aktif laboratorium.</p>
        </Link>
        <Link href="/akademik/artikel" className="p-6 bg-white border rounded-xl hover:shadow-md transition group">
          <h3 className="font-bold text-lg group-hover:text-blue-600">Artikel & Jurnal →</h3>
          <p className="text-xs text-gray-500 mt-1">Publikasi riset kecerdasan buatan teranyar.</p>
        </Link>
      </div>
    </div>
  );
}
