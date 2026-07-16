import Link from 'next/link';

export default function Akademik() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#002B7F] hover:underline font-semibold flex items-center gap-1 mb-6">
          ← Kembali ke Beranda
        </Link>
        
        <h1 className="text-4xl font-extrabold text-[#002B7F] mb-2">Fakultas & Program Studi</h1>
        <p className="text-gray-600 mb-8">Universitas Regia Romania menawarkan program studi dalam Bahasa Inggris dan Bahasa Romania.</p>
        
        <div className="space-y-4">
          <div className="p-5 bg-white rounded-lg shadow border-l-4 border-[#CE1126]">
            <h3 className="text-lg font-bold">Faculty of Medicine (Kedokteran)</h3>
            <p className="text-sm text-gray-500">Durasi: 6 Tahun | Pengantar: Bahasa Inggris & Prancis</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow border-l-4 border-[#FCD116]">
            <h3 className="text-lg font-bold">Faculty of Computer Science & Automation</h3>
            <p className="text-sm text-gray-500">Durasi: 4 Tahun | Pengantar: Bahasa Inggris</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow border-l-4 border-[#002B7F]">
            <h3 className="text-lg font-bold">Faculty of European Studies & International Relations</h3>
            <p className="text-sm text-gray-500">Durasi: 3 Tahun | Pengantar: Bahasa Inggris</p>
          </div>
        </div>
      </div>
    </div>
  );
}
