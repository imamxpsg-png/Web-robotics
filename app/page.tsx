import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#111111] font-sans antialiased selection:bg-amber-200">
      
      {/* 1. LAYAR NAVIGASI UTAMA (Gaya Minimalis Givery Consulting) */}
      <nav className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* LOGO ROBOT MINIMALIS BERGERAK (PULSE ANIMATION) */}
            <div className="w-8 h-8 bg-[#002B7F] rounded-lg flex items-center justify-center relative animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="w-4 h-3 bg-white rounded-sm flex items-center justify-center gap-0.5">
                <div className="w-1 h-1 bg-[#CE1126] rounded-full"></div>
                <div className="w-1 h-1 bg-[#CE1126] rounded-full"></div>
              </div>
              <div className="absolute -top-1 w-0.5 h-1 bg-amber-400"></div>
            </div>
            <span className="font-extrabold tracking-tight text-sm uppercase text-[#002B7F]">
              ROBOTICS <span className="text-[#CE1126]">ROMANIA</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-600">
            <Link href="/" className="text-[#002B7F] border-b-2 border-[#002B7F] pb-1">Beranda</Link>
            <a href="#perkembangan" className="hover:text-black transition">Teknologi</a>
            <a href="#proyek" className="hover:text-black transition">Riset Proyek</a>
            <Link href="/kontak" className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION DENGAN VIDEO 100% MAKSIMAL & TAJAM */}
      <header className="relative w-full min-h-[85vh] flex items-center overflow-hidden border-b border-gray-100 bg-black">
        
        {/* VIDEO 100% MAKSIMAL (Tanpa class opacity agar warna asli video keluar sempurna) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/robot-bg.mp4"
        >
        </video>

        {/* LAPISAN OVERLAY TRANSFARANSI SUPER TIPIS (Aman untuk teks, video tetap terang benderang) */}
        <div className="absolute inset-0 bg-black/25 z-10"></div>

        {/* Konten Teks di Atas Video */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 text-white">
          <p className="text-[#22d3ee] font-bold text-xs uppercase tracking-widest bg-cyan-500/10 inline-block px-3 py-1 rounded border border-cyan-500/20">
            Institutul de Robotică 🇷🇴
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 max-w-4xl leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Driving the Future of Europe with Autonomous Technology and AI.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Kami bermitra dengan industri Uni Eropa untuk merealisasikan integrasi kecerdasan buatan, komputasi saraf, dan mekanika bionik langsung dari pusat riset Bucharest.
          </p>
          <div className="mt-8">
            <a href="#proyek" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-sm px-6 py-3 rounded transition shadow-lg shadow-cyan-500/20">
              Lihat Proyek Riset ↓
            </a>
          </div>
        </div>
      </header>

      {/* 3. FITUR PERKEMBANGAN TEKNOLOGI (Gaya List Garis Waktu Givery) */}
      <section id="perkembangan" className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">About Our Research</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Evolusi & Perkembangan Teknologi</h2>
          </div>
          <p className="text-gray-500 text-sm max-w-md font-light">
            Bagaimana laboratorium universitas kami memimpin standarisasi sistem otomasi nirkabel Uni Eropa dari tahun ke tahun.
          </p>
        </div>

        {/* Grid Lini Masa */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-2 border-l border-gray-200">
            <span className="text-xs font-mono text-[#002B7F] font-bold">Fase 01 / 2024</span>
            <h3 className="text-base font-bold mt-2 text-gray-900">Autonomous Mechanical Arms</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Otomatisasi lengan robotik industri dengan sistem akurasi sub-milimeter untuk manufaktur perakitan otomotif di wilayah Carpathian.
            </p>
          </div>

          <div className="p-2 border-l border-gray-200">
            <span className="text-xs font-mono text-[#FCD116] bg-amber-50 px-1 font-bold">Fase 02 / 2025</span>
            <h3 className="text-base font-bold mt-2 text-gray-900">Bipedal Computer Vision</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Penanaman kecerdasan spasial pada robot berkaki dua untuk navigasi mandiri melewati medan ekstrem pegunungan bersalju Romania.
            </p>
          </div>

          <div className="p-2 border-l border-gray-200">
            <span className="text-xs font-mono text-[#CE1126] font-bold">Fase 03 / 2026</span>
            <h3 className="text-base font-bold mt-2 text-gray-900">Quantum Neural Core</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">
              Uji coba integrasi komputasi jaringan saraf berbasis kuantum untuk memotong waktu latensi respon mekanik hingga mendekati 0ms.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DAFTAR PROYEK ROBOT (Gaya Kartu Border Atas Warna Solid Khas Givery) */}
      <section id="proyek" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50/50">
        <div className="mb-12">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active Research Portfolio</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">Proyek Unggulan Aktif</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Proyek 1: Nuansa Biru */}
          <div className="bg-white border-t-4 border-[#002B7F] p-8 rounded shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[250px]">
            <div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Aviation & Security</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3">DR-1 Drone Defender</h3>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Sistem quadcopter nirawak berbasis AI otonom untuk perlindungan wilayah dan patroli topografi dataran tinggi secara real-time.
              </p>
            </div>
            <span className="text-xs text-[#002B7F] font-bold mt-4 tracking-wider uppercase inline-block">Active Lab Phase →</span>
          </div>

          {/* Proyek 2: Nuansa Kuning */}
          <div className="bg-white border-t-4 border-[#FCD116] p-8 rounded shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[250px]">
            <div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Logistics Bionics</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Strider-V4 Exoskeleton</h3>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Rangka luar mekanik pembantu kekuatan fisik manusia untuk kebutuhan distribusi logistik berat hingga kapasitas angkut beban 150kg.
              </p>
            </div>
            <span className="text-xs text-amber-500 font-bold mt-4 tracking-wider uppercase inline-block">Active Lab Phase →</span>
          </div>

          {/* Proyek 3: Nuansa Merah */}
          <div className="bg-white border-t-4 border-[#CE1126] p-8 rounded shadow-sm hover:shadow-md transition flex flex-col justify-between min-h-[250px]">
            <div>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Bio-Inspired Rescue</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3">Lupu-S1 Quadruped</h3>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Robot berkaki empat taktis berkemampuan sensor inframerah tinggi untuk misi pencarian korban di area sempit bekas reruntuhan.
              </p>
            </div>
            <span className="text-xs text-[#CE1126] font-bold mt-4 tracking-wider uppercase inline-block">Active Lab Phase →</span>
          </div>

        </div>
      </section>

      {/* 5. FOOTER WEBSITE */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-20 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Dacia Robotics Labs — Universitatea din București. All Rights Reserved.</p>
          <p className="text-gray-600">Co-creation Partner for Unlocking Technology Potential.</p>
        </div>
      </footer>

    </div>
  );
}
