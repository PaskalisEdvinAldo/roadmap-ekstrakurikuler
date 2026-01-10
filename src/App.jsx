import React, { useState } from "react";
import { Filter } from "lucide-react";

const RoadmapEkskul = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Data ekstrakurikuler AKTUAL dari setiap unit
  const ekskulAktual = {
    "KB-TKK SANTO YUSUP III": [
      "Tari & Gerak Irama",
      "Bahasa Inggris",
      "Bahasa Mandarin",
    ],
    "SD MONTESSORI": ["Tae Kwon Do", "Gymnastic", "Coding"],
    "SDK SANTO YUSUP II": [
      "Basket",
      "Futsal",
      "Band & Vocalia",
      "Tari Modern",
      "Melukis",
      "Desain Grafis",
    ],
    "SDK SANTO YUSUP III": [
      "Tari Modern",
      "Tari Tradisional",
      "Ansambel",
      "Paduan Suara",
      "Wushu",
      "Basket",
      "Coding",
      "Sains",
      "OSN IPA SD",
      "OSN Matematika SD",
    ],
    "SMPK KOLESE SANTO YUSUP 1": [
      "OSN IPS SMP",
      "OSN Fisika SMP",
      "OSN Matematika SMP",
      "HSK - Mandarin",
      "Basket",
      "Jujitsu",
      "Paduan Suara",
      "Band & Vocalia",
      "Tari Modern",
    ],
    "SMPK KOLESE SANTO YUSUP 2": [
      "Tari Modern",
      "Tari Tradisional",
      "Band & Vocalia",
      "OSN Matematika SMP",
      "OSN IPA SMP",
      "OSN IPS SMP",
      "Basket",
    ],
    "SMAK KOLESE SANTO YUSUP": [
      "Science Club",
      "OSN Ekonomi SMA",
      "OSN Geografi SMA",
      "OSN Kebumian SMA",
      "OSN Astronomi SMA",
      "OSN Fisika SMA",
      "OSN Kimia SMA",
      "OSN Biologi SMA",
      "OSN Informatika SMA",
      "OSN Matematika SMA",
      "Persiapan TOEFL",
      "English Club",
      "Kosayu Library Club",
      "Mindset & Character",
      "Culinary",
      "Enterpreneurship",
      "Katekumen",
      "Legio Maria",
      "Futsal",
      "Basket",
      "Paduan Suara",
      "Band & Vocalia",
      "Multimedia",
      "Tari Tradisional",
      "Tari Modern",
    ],
  };

  // Data roadmap berdasarkan spreadsheet yang telah difilter
  const roadmapData = {
    "KB-TKK SANTO YUSUP III": {
      items: [
        { nama: "Musik", kategori: "Seni & Kreativitas" },
        { nama: "Sempoa", kategori: "Akademik" },
        { nama: "Creative Arts", kategori: "Seni & Kreativitas" },
        { nama: "Science", kategori: "Akademik" },
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
        { nama: "Ballet", kategori: "Seni & Kreativitas" },
        { nama: "Bahasa Mandarin", kategori: "Akademik" },
        { nama: "Literasi", kategori: "Akademik" },
        { nama: "Tari & Gerak Irama", kategori: "Seni & Kreativitas" },
        { nama: "Fashion Show", kategori: "Seni & Kreativitas" },
        { nama: "Bahasa Inggris", kategori: "Akademik" },
        { nama: "Teater", kategori: "Seni & Kreativitas" },
      ],
    },
    "SD MONTESSORI": {
      items: [
        { nama: "Storytelling", kategori: "Akademik" },
        { nama: "Musik", kategori: "Seni & Kreativitas" },
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Desain Grafis", kategori: "Seni & Kreativitas" },
        { nama: "Gymnastic", kategori: "Olahraga" },
        { nama: "Fotografi", kategori: "Seni & Kreativitas" },
        { nama: "Tae Kwon Do", kategori: "Olahraga" },
        { nama: "Ballet", kategori: "Seni & Kreativitas" },
      ],
    },
    "SDK SANTO YUSUP II": {
      items: [
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "Musik", kategori: "Seni & Kreativitas" },
        { nama: "Mandarin Club", kategori: "Akademik" },
        { nama: "Science", kategori: "Akademik" },
        { nama: "OSN Matematika SD", kategori: "Akademik" },
        { nama: "OSN IPA SD", kategori: "Akademik" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
        { nama: "OSN IPS SD", kategori: "Akademik" },
        { nama: "Dokter Kecil", kategori: "Sosial" },
        { nama: "Storytelling", kategori: "Akademik" },
        { nama: "Teater", kategori: "Seni & Kreativitas" },
        { nama: "Catur", kategori: "Olahraga" },
        { nama: "Fashion Show", kategori: "Seni & Kreativitas" },
        { nama: "Basket", kategori: "Olahraga" },
        { nama: "Tari Modern", kategori: "Seni & Kreativitas" },
        { nama: "Melukis", kategori: "Seni & Kreativitas" },
        { nama: "Desain Grafis", kategori: "Seni & Kreativitas" },
        { nama: "Futsal", kategori: "Olahraga" },
      ],
    },
    "SDK SANTO YUSUP III": {
      items: [
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "HSK - Mandarin", kategori: "Akademik" },
        { nama: "Mandarin Club", kategori: "Akademik" },
        { nama: "Desain Grafis", kategori: "Seni & Kreativitas" },
        { nama: "Dokter Kecil", kategori: "Sosial" },
        { nama: "Storytelling", kategori: "Akademik" },
        { nama: "Fotografi", kategori: "Seni & Kreativitas" },
        { nama: "Fashion Design", kategori: "Seni & Kreativitas" },
        { nama: "Band", kategori: "Seni & Kreativitas" },
        { nama: "Catur", kategori: "Olahraga" },
        { nama: "Teater", kategori: "Seni & Kreativitas" },
        { nama: "OSN IPS SD", kategori: "Akademik" },
        { nama: "Tari Tradisional", kategori: "Seni & Kreativitas" },
        { nama: "Tari Modern", kategori: "Seni & Kreativitas" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
      ],
    },
    "SMPK KOLESE SANTO YUSUP 1": {
      items: [
        { nama: "English Club", kategori: "Akademik" },
        { nama: "Public Speaking", kategori: "Akademik" },
        { nama: "Videografi", kategori: "Seni & Kreativitas" },
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "Enterpreneurship", kategori: "Akademik" },
        { nama: "Mandarin Club", kategori: "Akademik" },
        { nama: "Science", kategori: "Akademik" },
        { nama: "Futsal", kategori: "Olahraga" },
        { nama: "OSN IPA SMP", kategori: "Akademik" },
        { nama: "Palang Merah Remaja", kategori: "Sosial" },
        { nama: "Ansambel", kategori: "Seni & Kreativitas" },
        { nama: "Basket", kategori: "Olahraga" },
        { nama: "Band & Vocalia", kategori: "Seni & Kreativitas" },
        { nama: "HSK - Mandarin", kategori: "Akademik" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
      ],
    },
    "SMPK KOLESE SANTO YUSUP 2": {
      items: [
        { nama: "English Club", kategori: "Akademik" },
        { nama: "Science", kategori: "Akademik" },
        { nama: "Public Speaking", kategori: "Akademik" },
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
        { nama: "Enterpreneurship", kategori: "Akademik" },
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "Desain Grafis", kategori: "Seni & Kreativitas" },
        { nama: "Videografi", kategori: "Seni & Kreativitas" },
        { nama: "Mandarin Club", kategori: "Akademik" },
        { nama: "HSK - Mandarin", kategori: "Akademik" },
        { nama: "Palang Merah Remaja", kategori: "Sosial" },
        { nama: "Indonesian Club", kategori: "Akademik" },
        { nama: "Ansambel", kategori: "Seni & Kreativitas" },
        { nama: "Tari Modern", kategori: "Seni & Kreativitas" },
        { nama: "Basket", kategori: "Olahraga" },
        { nama: "OSN IPA SMP", kategori: "Akademik" },
      ],
    },
    "SMAK KOLESE SANTO YUSUP": {
      items: [
        { nama: "TOCFL Preparation", kategori: "Akademik" },
        { nama: "Coding", kategori: "IPTEK" },
        { nama: "Podcasting", kategori: "Seni & Kreativitas" },
        { nama: "HSK - Mandarin", kategori: "Akademik" },
        { nama: "Robotic", kategori: "IPTEK" },
        { nama: "Palang Merah Remaja", kategori: "Sosial" },
        { nama: "Jurnalistik", kategori: "Akademik" },
        { nama: "Model United Nations", kategori: "Akademik" },
        { nama: "Ansambel", kategori: "Seni & Kreativitas" },
        { nama: "Debat Mandarin", kategori: "Akademik" },
        { nama: "Basket", kategori: "Olahraga" },
        { nama: "Paduan Suara", kategori: "Seni & Kreativitas" },
        { nama: "Multimedia", kategori: "Seni & Kreativitas" },
        { nama: "Band & Vocalia", kategori: "Seni & Kreativitas" },
        { nama: "Kosayu Library Club", kategori: "Akademik" },
        { nama: "Culinary", kategori: "Seni & Kreativitas" },
        { nama: "OSN Fisika SMA", kategori: "Akademik" },
      ],
    },
  };

  const units = Object.keys(roadmapData);
  const categories = [
    "all",
    "Akademik",
    "Seni & Kreativitas",
    "IPTEK",
    "Olahraga",
    "Sosial",
  ];

  // Fungsi untuk cek apakah ekstrakurikuler aktual
  const isAktual = (unit, namaEkskul) => {
    return ekskulAktual[unit]?.includes(namaEkskul) || false;
  };

  // Kumpulkan semua nama ekskul unik
  const getAllEkskulNames = () => {
    const names = new Set();
    units.forEach((unit) => {
      roadmapData[unit].items.forEach((item) => {
        if (selectedCategory === "all" || item.kategori === selectedCategory) {
          names.add(item.nama);
        }
      });
    });
    return Array.from(names).sort();
  };

  const findEkskul = (unit, name) => {
    return roadmapData[unit].items.find((item) => item.nama === name);
  };

  const getCategoryColor = (kategori, aktual) => {
    // Jika aktual, gunakan warna biru
    if (aktual) {
      return "bg-blue-400 text-white border-2 border-blue-600";
    }

    // Jika usulan, gunakan warna sesuai kategori
    switch (kategori) {
      case "Akademik":
        return "bg-blue-200 text-gray-800";
      case "Seni & Kreativitas":
        return "bg-purple-300 text-gray-800";
      case "IPTEK":
        return "bg-green-300 text-gray-800";
      case "Olahraga":
        return "bg-orange-300 text-gray-800";
      case "Sosial":
        return "bg-pink-300 text-gray-800";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-50 overflow-x-hidden">
      <div className="w-full max-w-none mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ROADMAP EKSTRAKURIKULER
          </h1>
          <p className="text-gray-600 text-lg">Yayasan Kolese Santo Yusup</p>
        </div>

        {/* Filter Kategori */}
        <div className="mb-6 bg-white rounded-xl shadow-md p-4">
          <div className="flex items-center gap-3 mb-3">
            <Filter className="text-blue-600" size={20} />
            <span className="font-semibold text-gray-700">
              Filter Kategori:
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat === "all" ? "Semua Kategori" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Legenda */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white p-5 rounded-xl mb-6 shadow-lg">
          <h3 className="font-bold mb-3 text-lg">LEGENDA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-8 bg-blue-400 rounded border-2 border-blue-600"></div>
              <span>Ekstrakurikuler yang SEDANG AKTIF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-8 bg-purple-300 rounded"></div>
              <span>USULAN Ekstrakurikuler (warna sesuai kategori)</span>
            </div>
          </div>
        </div>

        {/* Tabel Roadmap */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <th className="border-2 border-blue-500 p-4 text-left font-bold min-w-[200px] text-white sticky left-0 bg-gradient-to-r from-blue-600 to-indigo-600 z-10">
                    Ekstrakurikuler
                  </th>
                  {units.map((unit) => (
                    <th
                      key={unit}
                      className="border-2 border-blue-500 p-3 text-center font-bold min-w-[140px] text-xs text-white"
                    >
                      {unit}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getAllEkskulNames().map((ekskulName, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="border-2 border-gray-300 p-3 font-semibold text-gray-700 bg-gray-50 sticky left-0 text-sm z-10">
                      {ekskulName}
                    </td>
                    {units.map((unit) => {
                      const ekskul = findEkskul(unit, ekskulName);
                      const aktual = ekskul
                        ? isAktual(unit, ekskul.nama)
                        : false;
                      return (
                        <td key={unit} className="border-2 border-gray-200 p-0">
                          {ekskul && (
                            <div
                              className={`${getCategoryColor(
                                ekskul.kategori,
                                aktual
                              )} h-full p-3 text-center font-medium text-xs transition-all hover:scale-105`}
                            >
                              {ekskul.nama}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {units.map((unit) => {
            const allItems = roadmapData[unit].items;
            const total =
              selectedCategory === "all"
                ? allItems.length
                : allItems.filter((i) => i.kategori === selectedCategory)
                    .length;
            const aktual =
              selectedCategory === "all"
                ? allItems.filter((i) => isAktual(unit, i.nama)).length
                : allItems.filter(
                    (i) =>
                      i.kategori === selectedCategory && isAktual(unit, i.nama)
                  ).length;
            const usulan = total - aktual;

            return (
              <div
                key={unit}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h4 className="font-bold text-xs mb-2 text-gray-600 line-clamp-3 h-12">
                  {unit}
                </h4>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {total}
                </div>
                <div className="text-xs text-gray-600">
                  <span className="text-blue-600 font-semibold">
                    {aktual} aktual
                  </span>
                  {" | "}
                  <span className="text-purple-600 font-semibold">
                    {usulan} usulan
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            💡 Ekstrakurikuler dengan border biru tebal = AKTIF | Warna kategori
            = USULAN
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapEkskul;
