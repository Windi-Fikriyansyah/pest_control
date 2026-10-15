"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// =========================================================================
// PANDUAN PENGGANTIAN GAMBAR & KONTEN BANNER SLIDE UTAMA (HERO SECTION):
// Anda dapat mengganti URL gambar (image), judul (title), dan deskripsi
// pada daftar heroSlides di bawah ini sesuai kebutuhan Anda.
// =========================================================================
const heroSlides = [
  {
    id: 1,
    title: "Jangan Biarkan Hama Merusak Tempat yang Paling Anda Jaga",
    subtitle:
      "Baik untuk Bisnis Anda dari kerugian maupun kenyamanan Rumah Anda, ambil kembali kendali penuh dan lindungi aset berharga dari ancaman hama secara tuntas dan bergaransi.",
    image: "/images/vecos.jpg", // Ganti gambar slide 1 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
  {
    id: 2,
    title: "Perlindungan Sterilisasi maksimal untuk Ruang Kerja dan Hunian Bebas Virus",
    subtitle:
      "Disinfeksi cold fogging uap mikro berstandar medis untuk membasmi 99.9% patogen dan virus berbahaya tanpa residu kimia berlebih.",
    image: "/images/banner2.jpg", // Ganti gambar slide 3 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",

  },
  {
    id: 3,
    title: "Amankan Properti Anda dari Ancaman Rayap",
    subtitle:
      "Garansi 7 Bulan.",
    image: "/images/banner3.jpg", // Ganti gambar slide 2 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
  {
    id: 4,
    title: "Tempat Belajar yang Terbebas dari Hama",
    subtitle:
      "Menciptakan lingkungan belajar yang bersih, aman dan bebas hama bagi siswa dan staff.",
    image: "/images/banner4.jpg", // Ganti gambar slide 4 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
  {
    id: 5,
    title: "Perlindungan Pest Control Hotel & Resort",
    subtitle:
      "Menjaga kenyamanan tamu kualitas sanitasi dan reputasi bisnis Anda dari ancaman Hama.",
    image: "/images/banner5.jpg", // Ganti gambar slide 5 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
  {
    id: 6,
    title: "Perlindungan Pest Control Restaurant",
    subtitle:
      "Pencegahan dini bahaya hama di area dapur, penyimpanan bahan baku, hingga area Makan.",
    image: "/images/banner6.jpg", // Ganti gambar slide 6 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
  {
    id: 7,
    title: "Perlindungan Pest Control Hospital",
    subtitle:
      "Sterilisasi dan pengendalian hama ketat sesuai standar keselamatan fasilitas kesehatan.",
    image: "/images/banner7.jpg", // Ganti gambar slide 6 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },

  {
    id: 8,
    title: "Perlindungan Pest Control Airport",
    subtitle:
      "Mitra terpercaya pengendalian Hama Bandara.",
    image: "/images/banner8.jpg", // Ganti gambar slide 6 di sini
    callCenter: "0857-4368-1500",
    ctaText: "Amankan Properti Anda",
  },
];

// Data Banner Penawaran (Promo Slides & Artikel Lengkap)
interface OfferSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  article: {
    title: string;
    date: string;
    readTime: string;
    content: string[];
    keyPoints: string[];
  };
}

const offerSlides: OfferSlide[] = [
  {
    id: 1,
    title: "Disinfeksi & Sterilisasi Perlindungan Dari Virus Berbahaya",
    subtitle:
      "Layanan disinfeksi profesional untuk memastikan area aktivitas anda bebas dari virus berbahaya",
    image: "/images/penawaran/1.png",
    tag: "Disinfeksi & Sterilisasi",
    article: {
      title: "Prosedur Sterilisasi ULV Cold Fogging Berstandar Medis untuk Perlindungan Ruangan",
      date: "13 Oktober 2026",
      readTime: "3 Menit Baca",
      content: [
        "Metode ULV (Ultra Low Volume) Cold Fogging menghasilkan partikel aerosol mikro berukuran 5-20 mikron yang mampu melayang di udara dan menjangkau sudut-sudut paling tersembunyi yang tidak dapat dijangkau pembersihan konvensional.",
        "Senyawa aktif disinfektan yang digunakan VECOS telah teruji klinis memenuhi regulasi Kementerian Kesehatan RI, terbukti membunuh bakteri patogen, virus influenza, dan spora jamur tanpa meninggalkan residu korosif atau bau menyengat pada perabot dan alat elektronik.",
        "Layanan ini sangat direkomendasikan secara berkala untuk kantor komersial, klinik, sekolah, dan hunian keluarga guna memastikan sirkulasi udara steril dan lingkungan bebas penularan penyakit."
      ],
      keyPoints: [
        "Membasmi 99,9% virus dan bakteri pathogen di udara dan permukaan.",
        "Formula food-grade non-korosif, aman bagi komputer dan furnitur.",
        "Waktu aerasi cepat: ruangan dapat digunakan kembali dalam 30-45 menit."
      ]
    }
  },
  {
    id: 2,
    title: "Inspeksi Menyeluruh Bisnis & Rumah Anda",
    subtitle:
      "Dengan biaya 0 rupiah",
    image: "/images/penawaran/2.png",
    tag: "Anti Rayap Bergaransi",
    article: {
      title: "Strategi Proteksi Struktur Bangunan dari Koloni Rayap Tanah & Kayu",
      date: "10 Oktober 2026",
      readTime: "4 Menit Baca",
      content: [
        "Rayap adalah hama perusak sunyi (silent destroyer) yang kerap kali baru disadari keberadaannya setelah kusen, plafon, atau rangka atap mengalami kerusakan struktural fatal bernilai puluhan juta rupiah.",
        "VECOS menerapkan kombinasi metode chemical barrier (injeksi termitisida non-repellent) di sekeliling perimeter fondasi serta monitoring baiting system berbasis hexaflumuron yang dibawa pekerja rayap ke sarang untuk memusnahkan ratu dan seluruh koloni secara tuntas.",
        "Setiap pengerjaan anti rayap VECOS dilengkapi dengan sertifikat garansi resmi dan inspeksi berkala gratis untuk menjamin fondasi properti Anda aman dari serangan ulang."
      ],
      keyPoints: [
        "Formula non-repellent termitisida ramah lingkungan tanpa bau menyengat.",
        "Eliminasi hingga ke pusat sarang (elimination of the entire queen colony).",
        "Sertifikat garansi resmi dan jadwal inspeksi berkala gratis."
      ]
    }
  },
  {
    id: 3,
    title: "Amankan properti anda dari ancaman rayap",
    subtitle:
      "garansi sampai 7 tahun.",
    image: "/images/penawaran/3.png",
    tag: "Solusi Komersial & Institusi",
    article: {
      title: "Standar Sanitasi dan Pengendalian Hama Fasilitas Publik & Pendidikan",
      date: "8 Oktober 2026",
      readTime: "3 Menit Baca",
      content: [
        "Fasilitas umum seperti sekolah, universitas, dan perkantoran memiliki lalu lintas manusia yang padat dan area konsumsi makanan yang rentan menjadi magnet bagi hama tikus, kecoa, serta lalat.",
        "Pendekatan IPM (Integrated Pest Management) dari VECOS menitikberatkan pada pencegahan mekanis, penutupan celah akses (proofing), dan penempatan bait station tertutup yang aman dari jangkauan anak-anak maupun staf.",
        "Dokumentasi laporan servis transparan kami sediakan untuk melengkapi audit standar sanitasi dan akreditasi kebersihan instansi Anda."
      ],
      keyPoints: [
        "Penempatan bait station terkunci aman dari anak-anak dan staf.",
        "Inspeksi celah dan sanitasi menyeluruh di area pantry dan kantin.",
        "Laporan audit berkala untuk pemenuhan standar kepatuhan dinas terkait."
      ]
    }
  },
  {
    id: 4,
    title: "Perlindungan Pest Control Hotel & Resort Bintang",
    subtitle:
      "Menjaga kenyamanan tamu, sanitasi kamar, dan reputasi bisnis Anda dari ancaman kutu busuk, serangga, dan hama dengan penanganan steril tanpa bau.",
    image: "/images/penawaran/4.png",
    tag: "Hospitality & Tourism",
    article: {
      title: "Protokol Pencegahan Kutu Busuk (Bed Bugs) dan Hama Perhotelan",
      date: "5 Oktober 2026",
      readTime: "4 Menit Baca",
      content: [
        "Bagi industri perhotelan, satu komplain kutu busuk atau kecoa di ulasan online dapat merusak reputasi hotel bertahun-tahun. VECOS menghadirkan Hospitality Pest Program dengan respon cepat dan inspeksi tak terlihat (discreet service).",
        "Pemeriksaan rutin menggunakan teknologi deteksi dini dan steam heat treatment khusus untuk matras dan linen memastikan kamar tidur terbebas dari kutu busuk tanpa merusak serat kain.",
        "Perlakuan rutin di area dapur restoran hotel memastikan standar HACCP dan Food Safety terpenuhi secara konsisten."
      ],
      keyPoints: [
        "Layanan senyap (discreet protocol) menjaga privasi dan ketenangan tamu.",
        "Solusi terpadu kutu busuk matras dengan heat treatment dan residu aman.",
        "Sesuai standar audit HACCP restoran dan dapur hotel internasional."
      ]
    }
  },
  {
    id: 5,
    title: "Perlindungan Pest Control Restaurant & Cafe",
    subtitle:
      "Pencegahan dini bahaya hama di area dapur, penyimpanan bahan baku, hingga area makan dengan inspeksi berkala berstandar kebersihan tinggi.",
    image: "/images/penawaran/9.png",
    tag: "Restoran & Kuliner",
    article: {
      title: "Manajemen Pengendalian Hama Bisnis Kuliner & Restoran",
      date: "3 Oktober 2026",
      readTime: "3 Menit Baca",
      content: [
        "Industri kuliner sangat rentan terhadap serangan hama kecoa, tikus, dan lalat yang dapat mencemari makanan serta menurunkan reputasi bisnis.",
        "VECOS menyediakan program penanganan terintegrasi tanpa mengganggu operasional dapur dan ruang makan pelanggan.",
        "Setiap treatment dilakukan di luar jam operasional dengan bahan kimia tersertifikasi food-grade yang aman."
      ],
      keyPoints: [
        "Bahan aktif food-grade aman untuk area pengolahan makanan.",
        "Jadwal perlakuan fleksibel di luar jam operasional bisnis.",
        "Laporan kepatuhan sanitasi siap audit berkala."
      ]
    }
  },
  {
    id: 6,
    title: "Perlindungan Fasilitas Medis & Rumah Sakit",
    subtitle:
      "Sterilisasi dan pengendalian hama ketat sesuai standar keselamatan fasilitas kesehatan untuk memutus rantai penularan kuman dan infeksi.",
    image: "/images/penawaran/10.png",
    tag: "Healthcare & Medis",
    article: {
      title: "Protokol Pengendalian Hama Fasilitas Kesehatan & Rumah Sakit",
      date: "1 Oktober 2026",
      readTime: "4 Menit Baca",
      content: [
        "Fasilitas kesehatan memerlukan standar higienitas tertinggi tanpa toleransi terhadap hama pembawa vektor penyakit.",
        "VECOS menerapkan sterilisasi dan monitoring tanpa pestisida berbahaya pada ruang rawat inap dan ruang operasi.",
        "Semua proses mengacu pada pedoman PPI (Pencegahan dan Pengendalian Infeksi) rumah sakit."
      ],
      keyPoints: [
        "Prosedur aman bagi pasien dengan kondisi kesehatan sensitif.",
        "Monitoring perangkap tertutup tanpa residu aerosol berbahaya.",
        "Sesuai regulasi akreditasi rumah sakit dan Kemenkes RI."
      ]
    }
  },
  {
    id: 7,
    title: "Perlindungan Pengendalian Hama Bandara & Transportasi",
    subtitle:
      "Mitra terpercaya pengendalian hama bandara, terminal, dan sarana transportasi publik berskala besar untuk kenyamanan mobilitas publik.",
    image: "/images/penawaran/5.png",
    tag: "Transportasi Publik",
    article: {
      title: "Pengendalian Hama Vektor Transportasi Publik & Bandara Internasional",
      date: "28 September 2026",
      readTime: "4 Menit Baca",
      content: [
        "Fasilitas transportasi umum dengan arus penumpang ribuan orang per jam membutuhkan pengawasan sanitasi ketat.",
        "VECOS berpengalaman menangani area kargo, ruang tunggu terminal, hingga hanggar dengan pemetaan titik rawan terpadu.",
        "Layanan terjadwal memastikan nol gangguan pada jadwal penerbangan dan kenyamanan penumpang."
      ],
      keyPoints: [
        "Cakupan area luas (wide-area IPM solution).",
        "Penanganan senyap dan terorganisir 24/7.",
        "Pemberantasan vektor karantina kesehatan pelabuhan & bandara."
      ]
    }
  },
  {
    id: 8,
    title: "Perlindungan Gudang Logistik & Fasilitas Pabrik",
    subtitle:
      "Proteksi komprehensif stok barang, bahan baku, dan mesin industri dari kerusakan akibat gigitan tikus dan serangga perusak.",
    image: "/images/penawaran/11.png",
    tag: "Industri & Gudang",
    article: {
      title: "Sistem Manajemen Proteksi Gudang Logistik dan Manufaktur",
      date: "25 September 2026",
      readTime: "3 Menit Baca",
      content: [
        "Gudang penyimpanan bahan baku dan produk jadi sering menjadi sasaran empuk tikus dan serangga perusak kemasan.",
        "VECOS memasang barrier perimeter luar dan monitoring umpan terenkapsulasi untuk memutus jalur masuk hama.",
        "Perlindungan menyeluruh menghindarkan perusahaan dari risiko kerugian barang reject bernilai tinggi."
      ],
      keyPoints: [
        "Perlindungan perimeter fondasi dan celah pintu loading dock.",
        "Pemberantasan tuntas sarang tikus tanpa bangkai berceceran.",
        "Sertifikasi laporan sanitasi logistik berstandar ISO."
      ]
    }
  }
];

// =========================================================================
// =========================================================================
// DATA SPECIAL OFFER (7 LAYANAN DENGAN ICON GESER)
// Gambar diduplikasi sementara, silakan ganti image & title sesuai kebutuhan:
// =========================================================================
const specialOfferServices = [
  {
    id: 1,
    title: "RUMAH TINGGAL",
    image: "/images/offer_rumah.jpg", // Gambar 1
  },
  {
    id: 2,
    title: "OFFICE",
    image: "/images/offer_office.jpg", // Gambar 2
  },
  {
    id: 3,
    title: "HOTEL / RESORT",
    image: "/images/offer_hotel.jpg", // Gambar 3
  },
  {
    id: 4,
    title: "RESTORAN & CAFE",
    image: "/images/offer/restaurant.jpeg", // Gambar 4 (duplikat)
  },
  {
    id: 5,
    title: "PABRIK & GUDANG",
    image: "/images/offer/warehouse.jpeg", // Gambar 5 (duplikat)
  },
  {
    id: 6,
    title: "RUMAH SAKIT",
    image: "/images/offer/hospital.jpeg", // Gambar 6 (duplikat)
  },
  {
    id: 7,
    title: "SEKOLAH / KAMPUS",
    image: "/images/offer/kampus.jpeg", // Gambar 7 (duplikat)
  },
];

// =========================================================================
// DATA CLIENT LOGOS (2 BARIS ANIMASI BERGERAK SALING LAWAN ARAH)
// =========================================================================
const clientLogosRow1 = [
  { name: "Logo 1", image: "/images/logo/1.png", extraZoom: true },
  { name: "Logo 2", image: "/images/logo/2.png" },
  { name: "Logo 3", image: "/images/logo/3.png", extraZoom: true },
  { name: "Logo 4", image: "/images/logo/4.png" },
  { name: "Logo 5", image: "/images/logo/5.png" },
  { name: "Logo 6", image: "/images/logo/6.png", noZoom: true },
  { name: "Logo 7", image: "/images/logo/7.png", extraZoom: true },
  { name: "Logo 8", image: "/images/logo/8.png" },
  { name: "Logo 9", image: "/images/logo/9.png" },
];

const clientLogosRow2 = [
  { name: "Logo 10", image: "/images/logo/10.png" },
  { name: "Logo 11", image: "/images/logo/11.png" },
  { name: "Logo 12", image: "/images/logo/12.png" },
  { name: "Logo 13", image: "/images/logo/13.png" },
  { name: "Logo 14", image: "/images/logo/14.png", extraZoom: true },
  { name: "Logo 15", image: "/images/logo/15.png" },
  { name: "Logo 16", image: "/images/logo/16.png" },
  { name: "Logo 17", image: "/images/logo/17.png", extraZoom: true },
  { name: "Logo 18", image: "/images/logo/18.png" },
];

// =========================================================================
// DATA NEGARA & BAHASA UNTUK TRANSLASI OTOMATIS
// =========================================================================
interface CountryItem {
  code: string;
  name: string;
  subLabel?: string;
  flag: string;
  defaultLang: string;
  supportedLangs: string[];
}

const countryList: CountryItem[] = [
  { code: "ID", name: "Indonesia", subLabel: "Indonesia", flag: "🇮🇩", defaultLang: "id", supportedLangs: ["en", "id"] },
  { code: "SG", name: "Singapore", subLabel: "Singapura", flag: "🇸🇬", defaultLang: "en", supportedLangs: ["en"] },
  { code: "MY", name: "Malaysia", subLabel: "Malaysia", flag: "🇲🇾", defaultLang: "en", supportedLangs: ["en"] },
  { code: "TH", name: "Thailand", subLabel: "Thailand", flag: "🇹🇭", defaultLang: "th", supportedLangs: ["en", "th"] },
  { code: "AU", name: "Australia", subLabel: "Australia", flag: "🇦🇺", defaultLang: "en", supportedLangs: ["en"] },
  { code: "JP", name: "Japan", subLabel: "Jepang", flag: "🇯🇵", defaultLang: "ja", supportedLangs: ["en", "ja"] },
  { code: "CN", name: "China", subLabel: "Tiongkok", flag: "🇨🇳", defaultLang: "zh-CN", supportedLangs: ["en", "zh-CN"] },
  { code: "KR", name: "South Korea", subLabel: "Korea Selatan", flag: "🇰🇷", defaultLang: "ko", supportedLangs: ["en", "ko"] },
  { code: "HK", name: "Hong Kong", subLabel: "Hong Kong", flag: "🇭🇰", defaultLang: "zh-CN", supportedLangs: ["en", "zh-CN"] },
  { code: "QA", name: "Qatar", subLabel: "Qatar", flag: "🇶🇦", defaultLang: "ar", supportedLangs: ["en", "ar"] },
  { code: "NL", name: "Netherlands", subLabel: "Belanda", flag: "🇳🇱", defaultLang: "nl", supportedLangs: ["en", "nl"] },
  { code: "SA", name: "Saudi Arabia", subLabel: "Arab Saudi", flag: "🇸🇦", defaultLang: "ar", supportedLangs: ["en", "ar"] },
  { code: "IN", name: "India", subLabel: "India", flag: "🇮🇳", defaultLang: "hi", supportedLangs: ["en", "hi"] },
  { code: "OTHER", name: "Other Countries", subLabel: "Negara Lainnya", flag: "🌐", defaultLang: "en", supportedLangs: ["en"] },
];

const languageList = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "id", name: "Bahasa Indonesia", nativeName: "Bahasa Indonesia" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "zh-CN", name: "Chinese", nativeName: "中文" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
];

// =========================================================================
// KOMPONEN SELECT2 (SEARCHABLE SELECT DENGAN KOTAK PENCARIAN)
// =========================================================================
interface SearchableSelectOption {
  value: string;
  label: string;
  subLabel?: string;
  icon?: string;
}

function SearchableSelect({
  label,
  value,
  options,
  placeholder = "Cari...",
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  options: SearchableSelectOption[];
  placeholder?: string;
  onChange: (val: string) => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutside);
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 60);
      return () => {
        clearTimeout(timer);
        document.removeEventListener("mousedown", handleOutside);
      };
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [isOpen]);

  const filteredOptions = options.filter((opt) => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      opt.label.toLowerCase().includes(q) ||
      (opt.subLabel && opt.subLabel.toLowerCase().includes(q)) ||
      opt.value.toLowerCase().includes(q)
    );
  });

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <label className="block text-[11px] sm:text-xs text-zinc-400 font-medium mb-1">
        {label}
      </label>

      {/* Select2 Trigger Button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setSearchTerm("");
        }}
        className={`w-full bg-[#1c2333] border text-left rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2 transition-all cursor-pointer ${isOpen
          ? "border-[#C81E27] ring-2 ring-[#C81E27]/30"
          : "border-zinc-700/80 hover:border-zinc-600"
          }`}
      >
        <div className="flex items-center gap-2 min-w-0">
          {selectedOption?.icon && (
            <span className="text-base shrink-0">{selectedOption.icon}</span>
          )}
          <span className="text-white font-bold text-xs sm:text-sm truncate">
            {selectedOption?.label}
          </span>
          {selectedOption?.subLabel && (
            <span className="text-zinc-400 text-xs shrink-0 truncate hidden xs:inline">
              ({selectedOption.subLabel})
            </span>
          )}
        </div>

        {/* Chevron Icon */}
        <svg
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#C81E27]" : ""
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu dengan Search Bar (Select2 Style) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#18202f] border border-zinc-700/90 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
          {/* Search Box Input */}
          <div className="p-2 border-b border-zinc-700/60 bg-[#141923]">
            <div className="relative flex items-center">
              <svg
                className="w-4 h-4 text-zinc-400 absolute left-2.5 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-[#1c2333] border border-zinc-700 focus:border-[#C81E27] focus:outline-hidden text-white placeholder:text-zinc-500 rounded-lg pl-8 pr-7 py-1.5 text-xs font-medium"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 text-zinc-400 hover:text-white text-xs p-0.5 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* List Options */}
          <div className="max-h-48 sm:max-h-56 overflow-y-auto divide-y divide-zinc-800/40 p-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between gap-2 transition-colors cursor-pointer text-xs sm:text-sm ${isSelected
                      ? "bg-[#C81E27] text-white font-bold"
                      : "text-zinc-200 hover:bg-[#232c3f]"
                      }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {opt.icon && <span className="text-sm shrink-0">{opt.icon}</span>}
                      <span className="truncate">{opt.label}</span>
                      {opt.subLabel && (
                        <span
                          className={`text-xs shrink-0 ${isSelected ? "text-white/80" : "text-zinc-400"
                            }`}
                        >
                          {opt.subLabel}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <span className="shrink-0 text-white font-black text-xs">✓</span>
                    )}
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-zinc-400">
                Tidak ada hasil ditemukan
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  // Navigation & Drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layananDropdownOpen, setLayananDropdownOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const layananDropdownRef = useRef<HTMLDivElement | null>(null);

  // Preferred Country & Language State (Translasi Otomatis)
  const [currentCountry, setCurrentCountry] = useState("ID");
  const [currentLang, setCurrentLang] = useState("id");
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [tempCountry, setTempCountry] = useState("ID");
  const [tempLang, setTempLang] = useState("id");

  const openLangModal = () => {
    setTempCountry(currentCountry);
    const country = countryList.find((c) => c.code === currentCountry) || countryList[0];
    if (country.supportedLangs.includes(currentLang)) {
      setTempLang(currentLang);
    } else {
      setTempLang(country.defaultLang);
    }
    setIsLangModalOpen(true);
  };

  const handleCountryChange = (cCode: string) => {
    setTempCountry(cCode);
    const country = countryList.find((c) => c.code === cCode);
    if (country) {
      setTempLang(country.defaultLang);
    }
  };

  // Google Translate initialization & read active googtrans cookie
  useEffect(() => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
      if (match) {
        const parts = match[1].split("/");
        const targetLang = parts[parts.length - 1];
        if (targetLang && targetLang !== "id") {
          setCurrentLang(targetLang);
          const found = countryList.find((c) => c.defaultLang === targetLang || c.supportedLangs.includes(targetLang));
          if (found) setCurrentCountry(found.code);
        }
      }

      if (!document.getElementById("google-translate-script")) {
        (window as any).googleTranslateElementInit = () => {
          if ((window as any).google?.translate?.TranslateElement) {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "id",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          }
        };

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  const applyLanguagePreference = (countryCode: string, langCode: string) => {
    setCurrentCountry(countryCode);
    setCurrentLang(langCode);
    setIsLangModalOpen(false);

    if (typeof document === "undefined") return;

    if (langCode === "id") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select) {
        select.value = "id";
        select.dispatchEvent(new Event("change"));
      }
      window.location.reload();
      return;
    }

    document.cookie = `googtrans=/id/${langCode}; path=/;`;
    document.cookie = `googtrans=/id/${langCode}; domain=${window.location.hostname}; path=/;`;

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  // Outside click listener untuk menutup dropdown Layanan Kami
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        layananDropdownRef.current &&
        !layananDropdownRef.current.contains(event.target as Node)
      ) {
        setLayananDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Hero Carousel State (Berganti otomatis setiap 5 detik murni tanpa icon)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider effect Hero (setiap 5 detik konsisten tanpa jeda kursor)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Banner Penawaran State (Berganti otomatis setiap 5 detik dengan icon titik, loading, dan geser)
  const [currentOffer, setCurrentOffer] = useState(0);
  const [offerProgress, setOfferProgress] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<OfferSlide | null>(null);
  const offerStartTimeRef = useRef<number>(0);

  // Legal Modals State (Kebijakan Privasi, Ketentuan Layanan, Pengaturan Cookie)
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "cookie" | null>(null);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [cookieSaved, setCookieSaved] = useState(false);

  // Status apakah ada modal yang sedang terbuka
  const isAnyModalOpen = Boolean(legalModal || selectedArticle || isLangModalOpen);

  // Mencegah scroll pada body saat modal aktif agar tampilan stabil
  useEffect(() => {
    if (isAnyModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isAnyModalOpen]);

  // Timer loading progress 5 detik untuk Banner Penawaran (Akurat, tidak melangkah)
  useEffect(() => {
    if (selectedArticle !== null) return;

    offerStartTimeRef.current = Date.now();
    setOfferProgress(0);

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - offerStartTimeRef.current;
      const duration = 5000; // 5 detik per slide

      if (elapsed >= duration) {
        offerStartTimeRef.current = Date.now();
        setOfferProgress(0);
        setCurrentOffer((prev) => (prev + 1) % offerSlides.length);
      } else {
        setOfferProgress((elapsed / duration) * 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [selectedArticle]);

  const nextOffer = () => {
    offerStartTimeRef.current = Date.now();
    setOfferProgress(0);
    setCurrentOffer((prev) => (prev + 1) % offerSlides.length);
  };

  const prevOffer = () => {
    offerStartTimeRef.current = Date.now();
    setOfferProgress(0);
    setCurrentOffer((prev) => (prev - 1 + offerSlides.length) % offerSlides.length);
  };

  const goToOffer = (idx: number) => {
    offerStartTimeRef.current = Date.now();
    setOfferProgress(0);
    setCurrentOffer(idx);
  };

  // Special Offer Slider Ref & Handlers (7 Layanan dengan Icon Geser)
  const specialOfferSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollSpecialOfferLeft = () => {
    if (specialOfferSliderRef.current) {
      const card = specialOfferSliderRef.current.firstElementChild as HTMLElement;
      const scrollStep = (card?.offsetWidth || 340) + 24;
      specialOfferSliderRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }
  };

  const scrollSpecialOfferRight = () => {
    if (specialOfferSliderRef.current) {
      const card = specialOfferSliderRef.current.firstElementChild as HTMLElement;
      const scrollStep = (card?.offsetWidth || 340) + 24;
      specialOfferSliderRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  };

  // Quick booking state
  const [selectedPest, setSelectedPest] = useState("Rayap Tanah");
  const [selectedProperty, setSelectedProperty] = useState("Rumah Tinggal");
  const [selectedLocation, setSelectedLocation] = useState("Jakarta");
  const [detectedAddress, setDetectedAddress] = useState("");
  const [locationDetecting, setLocationDetecting] = useState(false);

  // Fungsi reverse geocoding untuk mendapatkan alamat lengkap (jalan, kelurahan, kecamatan, kota, kodepos)
  const fetchFullAddress = async (lat: number, lon: number): Promise<string> => {
    // 1. Nominatim OpenStreetMap (Detail sampai nama jalan dan nomor)
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
        {
          headers: {
            "Accept-Language": "id",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        if (data.address) {
          const a = data.address;
          const road = a.road || a.pedestrian || a.street || a.building;
          const suburb = a.suburb || a.village || a.neighbourhood || a.quarter;
          const district = a.city_district || a.subdistrict || a.district;
          const city = a.city || a.town || a.county || a.municipality;
          const state = a.state;
          const postcode = a.postcode;

          const addressParts = [road, suburb, district, city, state, postcode].filter(Boolean);
          if (addressParts.length >= 2) {
            return addressParts.join(", ");
          }
        }
        if (data.display_name) {
          return data.display_name;
        }
      }
    } catch {
      // Lanjut ke fallback
    }

    // 2. Fallback BigDataCloud API
    try {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=id`
      );
      if (res.ok) {
        const data = await res.json();
        const parts = [data.locality, data.city, data.principalSubdivision, data.countryName].filter(Boolean);
        if (parts.length > 0) {
          return parts.join(", ");
        }
      }
    } catch {
      // Fallback
    }

    return `Lokasi (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
  };

  const handleUseCurrentLocation = () => {
    setLocationDetecting(true);
    setSelectedLocation("Mendeteksi alamat lengkap...");

    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const fullAddress = await fetchFullAddress(pos.coords.latitude, pos.coords.longitude);
            setDetectedAddress(fullAddress);
            setSelectedLocation(fullAddress);
            setFormData((prev) => ({ ...prev, location: fullAddress }));
          } catch {
            const fallback = `Lokasi (${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)})`;
            setDetectedAddress(fallback);
            setSelectedLocation(fallback);
            setFormData((prev) => ({ ...prev, location: fallback }));
          } finally {
            setLocationDetecting(false);
          }
        },
        async () => {
          // Fallback jika izin GPS browser belum diberikan
          try {
            const res = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=id");
            if (res.ok) {
              const data = await res.json();
              const parts = [data.locality, data.city, data.principalSubdivision].filter(Boolean);
              const ipAddress = parts.length > 0 ? parts.join(", ") : "Jakarta, Indonesia";
              setDetectedAddress(ipAddress);
              setSelectedLocation(ipAddress);
              setFormData((prev) => ({ ...prev, location: ipAddress }));
            } else {
              setSelectedLocation("Jakarta");
            }
          } catch {
            setSelectedLocation("Jakarta");
          } finally {
            setLocationDetecting(false);
          }
        },
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
      );
    } else {
      setSelectedLocation("Jakarta");
      setLocationDetecting(false);
    }
  };

  // Survey Form state
  const [formData, setFormData] = useState({
    name: "",
    propertyType: "",
    pestType: "",
    complaint: "",
    location: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Pest pagination state: 0 = 6 hama pertama (1-6), 1 = sisanya (7-11)
  const [pestPage, setPestPage] = useState(0);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSurvey = () => {
    const surveyElem = document.getElementById("form-survey");
    if (surveyElem) {
      surveyElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      propertyType: selectedProperty,
      pestType: selectedPest,
      location: selectedLocation,
    }));
    scrollToSurvey();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        propertyType: "",
        pestType: "",
        complaint: "",
        location: "",
      });
    }, 4500);
  };

  // Pest items data - 11 Macam Hama (Tampilan 6 hama utama, sisanya 5 hama via icon selanjutnya)
  const pestList = [
    {
      name: "Rayap Tanah",
      latin: "Coptotermes formosanus",
      image: "/images/binatang/rayap tanah.png",
      imageClass: "object-contain p-0 scale-110",
    },
    {
      name: "Lalat Hijau",
      latin: "Lucilia sericata",
      image: "/images/binatang/lalat hijau.png",
      imageClass: "object-contain p-0 w-full h-full scale-125",
    },
    {
      name: "Kecoa Amerikana",
      latin: "Periplaneta americana",
      image: "/images/binatang/kecoa amerikana.png",
      imageClass: "object-contain p-0 w-full h-full scale-125 translate-x-9",
    },
    {
      name: "Tikus",
      latin: "Rattus norvegicus",
      image: "/images/binatang/tikus.png",
    },
    {
      name: "Kutu Kasur",
      latin: "Cimex lectularius",
      image: "/images/binatang/kutu kasur.png",
      imageClass: "object-contain p-4.5 sm:p-6",
    },
    {
      name: "Semut Rang Rang",
      latin: "Oecophylla smaragdina",
      image: "/images/binatang/semut rang rang.png",
      imageClass: "object-contain p-2.5 sm:p-3",
    },
    {
      name: "Nyamuk Aeydes",
      latin: "Aedes aegypti",
      image: "/images/binatang/nyamuk aeydes.png",
    },
    {
      name: "Tawon Vespa",
      latin: "Vespa affinis",
      image: "/images/binatang/tawon vespa.png",
      imageClass: "object-contain p-2.5 sm:p-3",
    },
    {
      name: "Kelelawar",
      latin: "Chiroptera",
      image: "/images/binatang/kelelawar.png",
    },
    {
      name: "Burung Greja",
      latin: "Passer montanus",
      image: "/images/binatang/burung greja.png",
    },
    {
      name: "Ular Weling",
      latin: "Bungarus candidus",
      image: "/images/binatang/ular weling.png",
      imageClass: "object-contain p-2.5 sm:p-3",
    },
  ];

  // FAQ items
  const faqList = [
    {
      question: "Apa itu Vecos ?",
      answer:
        "Vecos adalah perusahaan jasa pengendalian hama (pest control) profesional bersertifikasi yang berfokus pada Integrated Pest Management (IPM). Kami melindungi hunian residensial, gedung perkantoran, restoran, dan industri dengan metode ramah lingkungan, aman bagi keluarga, dan bergaransi tuntas.",
    },
    {
      question: "Berapa Harga Jasa Vecos ?",
      answer:
        "Biaya layanan Vecos sangat fleksibel dan transparan, disesuaikan dengan luas area properti, jenis hama yang menyerang, dan tingkat infestasi. Kami menyediakan layanan Survey Lokasi & Konsultasi GRATIS untuk memberikan estimasi biaya yang paling efisien.",
    },
    {
      question: "Apakah Vecos Menyediakan Jasa Pest Control Untuk Rumah ?",
      answer:
        "Ya, tentu saja! Vecos memiliki paket khusus hunian keluarga dengan formulasi bahan kimia berstandar Kemenkes yang tidak berbau menyengat (odorless) serta aman bagi anak-anak, ibu hamil, dan hewan peliharaan.",
    },
    {
      question: "Berapa Biaya Survey atau Inspeksi Hama Vecos?",
      answer:
        "Layanan survey lokasi dan inspeksi hama awal oleh tim teknisi profesional Vecos adalah 100% GRATIS tanpa dipungut biaya apapun untuk seluruh area jangkauan kami.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#eef1f5] text-zinc-900 selection:bg-red-100 selection:text-red-700 font-sans overflow-x-hidden">
      {/* ======================================================== */}
      {/* 1. NAVBAR / HEADER (FULL WIDTH: BLOK MERAH SAMPAI UJUNG) */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#eef1f5] border-b border-zinc-300/80 shadow-xs w-full">
        <div className="w-full flex items-stretch justify-between h-14 sm:h-16">
          {/* Sisi Kiri: Blok Merah VECOS menempel penuh di ujung kiri */}
          <div className="flex items-center shrink-0">
            <a
              href="#"
              className="h-full bg-[#C81E27] hover:bg-[#b01820] text-white flex items-center px-6 sm:px-12 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-wider uppercase font-sans">
                VECOS
              </span>
            </a>
          </div>

          {/* Sisi Kanan: Menu Navigasi Desktop & Language Toggle menempel ke kanan */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 pr-6 sm:pr-10 lg:pr-14">
            <a
              href="#form-survey"
              className="text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors"
            >
              HUBUNGI KAMI
            </a>

            {/* Dropdown Layanan Kami */}
            <div className="relative" ref={layananDropdownRef}>
              <button
                type="button"
                onClick={() => setLayananDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors cursor-pointer select-none"
                aria-expanded={layananDropdownOpen}
              >
                <span>LAYANAN KAMI</span>
                {/* Icon panah: berubah arah ke atas saat dropdown dibuka dan ke bawah saat ditutup */}
                <svg
                  className="w-3.5 h-3.5 origin-center inline-block transition-transform duration-300 ease-in-out"
                  style={{
                    transform: layananDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: layananDropdownOpen ? "#C81E27" : "#52525b",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {layananDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-zinc-200 py-2 z-50 animate-in fade-in-50">
                  <a
                    href="#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Serangga
                  </a>
                  <a
                    href="#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Tikus
                  </a>
                  <a
                    href="#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Anti Rayap
                  </a>
                  <a
                    href="#penawaran"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Disinfeksi Ruangan
                  </a>
                  <a
                    href="#prime-shield"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Prime Shield-01 Trap
                  </a>
                </div>
              )}
            </div>

            <a
              href="#tentang"
              className="text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors"
            >
              TENTANG VECOS
            </a>

            {/* Language Button [ FLAG / CODE ] + Globe Icon (Tanpa Background, Sesuai Warna Menu Header) */}
            <button
              type="button"
              onClick={openLangModal}
              className="flex items-center gap-1.5 text-zinc-800 hover:text-[#C81E27] py-1 transition-colors cursor-pointer group"
              title="Pilih Preferensi Bahasa & Negara"
            >
              <span className="border-b-2 border-zinc-800 group-hover:border-[#C81E27] pb-0.5 leading-none font-extrabold text-xs lg:text-sm tracking-wider uppercase transition-colors">
                {currentLang.toUpperCase()}
              </span>
              <svg
                className="w-4 h-4 text-zinc-800 group-hover:text-[#C81E27] shrink-0 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center pr-4 sm:pr-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-800 hover:text-[#C81E27] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
            <a
              href="#form-survey"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-[#C81E27] py-2 border-b border-zinc-100"
            >
              HUBUNGI KAMI
            </a>
            <div>
              <button
                type="button"
                onClick={() => setMobileLayananOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100 cursor-pointer"
              >
                <span>LAYANAN KAMI</span>
                {/* Icon panah mobile: berputar ke atas saat dibuka dan ke bawah saat ditutup */}
                <svg
                  className="w-4 h-4 origin-center inline-block transition-transform duration-300 ease-in-out"
                  style={{
                    transform: mobileLayananOpen ? "rotate(180deg)" : "rotate(0deg)",
                    color: mobileLayananOpen ? "#C81E27" : "#52525b",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileLayananOpen && (
                <div className="pl-4 py-2 space-y-2 bg-zinc-50 border-b border-zinc-100 rounded-lg my-1 animate-in fade-in-50">
                  <a
                    href="#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Pembasmi Serangga
                  </a>
                  <a
                    href="#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Pembasmi Tikus
                  </a>
                  <a
                    href="#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Anti Rayap Fondasi
                  </a>
                  <a
                    href="#penawaran"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Disinfeksi Ruangan
                  </a>
                  <a
                    href="#prime-shield"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Prime Shield-01 Trap
                  </a>
                </div>
              )}
            </div>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100"
            >
              TENTANG VECOS
            </a>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500">Pilihan Negara & Bahasa:</span>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLangModal();
                }}
                className="flex items-center gap-1.5 text-zinc-800 hover:text-[#C81E27] py-1 transition-colors cursor-pointer group"
              >
                <span className="border-b-2 border-zinc-800 group-hover:border-[#C81E27] pb-0.5 leading-none font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-colors">
                  {currentLang.toUpperCase()}
                </span>
                <svg
                  className="w-4 h-4 text-zinc-800 group-hover:text-[#C81E27] shrink-0 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION / BANNER SLIDE UTAMA (FULL WIDTH 100%)    */}
      {/* ======================================================== */}
      <section
        id="beranda"
        className="relative w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-[620px] max-h-[1080px] overflow-hidden bg-zinc-900 shadow-md flex flex-col justify-between"
      >
        {/* Container Slide Gambar & Teks */}
        <div className="relative w-full h-full flex items-center">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                {/* Background Image Slide: Penuh di dalam carousel dengan penyesuaian fokus visual di mobile */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-[75%_center] sm:object-cover sm:object-center"
                />

                {/* Dark Gradient Overlay agar teks kontras dan terbaca jelas di atas gambar */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 md:from-black/80 md:via-black/50 md:to-transparent pointer-events-none"></div>

                {/* Content Box Teks & Tombol berada di dalam gambar carousel */}
                <div className="relative h-full w-full px-5 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-start pt-9 xs:pt-12 sm:pt-6 sm:justify-center pb-64 sm:pb-40 md:pb-44 lg:pb-48">
                  <div className="max-w-xl lg:max-w-2xl space-y-2.5 sm:space-y-4">
                    {/* Judul Hero Slide */}
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white leading-tight tracking-tight drop-shadow-md">
                      {slide.title}
                    </h1>

                    {/* Deskripsi Subtitle */}
                    {slide.subtitle && (
                      <p className="text-xs sm:text-sm md:text-base text-zinc-100 leading-relaxed drop-shadow-sm max-w-xl line-clamp-2 sm:line-clamp-none">
                        {slide.subtitle}
                      </p>
                    )}

                    {/* Tombol Amankan Properti Anda & Call Center di dalam gambar */}
                    <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <button
                        type="button"
                        onClick={scrollToSurvey}
                        className="bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-lg shadow-red-700/40 hover:shadow-red-700/60 transition-all cursor-pointer"
                      >
                        {slide.ctaText}
                      </button>

                      {/* Pill Call Center (Murni Teks Tanpa Icon Apapun) */}
                      <a
                        href={`tel:${slide.callCenter.replace(/[^0-9]/g, "")}`}
                        className="inline-flex items-center bg-white/95 hover:bg-white text-zinc-900 px-3.5 sm:px-4 py-1.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-sm transition-all"
                      >
                        <span>Call Center : {slide.callCenter}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* FLOATING FILTER BAR: "Kebutuhan Anda" (FULL WIDTH CARD)  */}
        {/* Persis seperti gambar referensi: Card frosted dengan      */}
        {/* garis merah horizontal, 3 input icon, & tombol 2 baris   */}
        {/* ======================================================== */}
        <div className="absolute bottom-2.5 sm:bottom-6 md:bottom-8 inset-x-2 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 z-30">
          <div className="w-full rounded-xl sm:rounded-3xl border sm:border-[3px] border-white/90 bg-black/40 backdrop-blur-md p-2.5 sm:p-4 md:p-5 shadow-2xl">
            {/* Header: Tulisan Putih "Kebutuhan Anda" */}
            <div className="text-white text-sm sm:text-lg md:text-xl font-bold tracking-wide pl-1">
              Kebutuhan Anda
            </div>

            {/* Garis Merah Horizontal Membentang Penuh */}
            <div className="h-[2px] sm:h-[3px] bg-[#C81E27] w-full my-1.5 sm:mt-2 sm:mb-3 rounded-full"></div>

            {/* Form Putih 3 Kolom Input + Tombol Merah */}
            <form
              onSubmit={handleQuickSubmit}
              className="w-full bg-white rounded-lg sm:rounded-2xl p-1 sm:p-1.5 flex flex-col md:flex-row items-stretch md:items-center shadow-lg"
            >
              {/* Kolom 1: Serangga Semut */}
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3 border-b md:border-b-0 md:border-r-2 border-zinc-300 md:border-zinc-400">
                <div className="text-zinc-900 shrink-0">
                  {/* Insect / Bug Icon */}
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 2 1.88 1.88" />
                    <path d="M14.12 3.88 16 2" />
                    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
                    <path d="M12 20v-9" />
                    <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                    <path d="M6 13H2" />
                    <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                    <path d="M22 13h-4" />
                    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <select
                    value={selectedPest}
                    onChange={(e) => setSelectedPest(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm md:text-base font-bold text-zinc-900 focus:outline-hidden cursor-pointer py-0.5"
                  >
                    <option value="Rayap Tanah">Rayap Tanah</option>
                    <option value="Lalat Hijau">Lalat Hijau</option>
                    <option value="Kecoa Amerikana">Kecoa Amerikana</option>
                    <option value="Tikus">Tikus</option>
                    <option value="Kutu Kasur">Kutu Kasur</option>
                    <option value="Semut Rang Rang">Semut Rang Rang</option>
                    <option value="Nyamuk Aeydes">Nyamuk Aeydes</option>
                    <option value="Tawon Vespa">Tawon Vespa</option>
                    <option value="Kelelawar">Kelelawar</option>
                    <option value="Burung Greja">Burung Greja</option>
                    <option value="Ular Weling">Ular Weling</option>
                  </select>
                </div>
              </div>

              {/* Kolom 2: Jenis Properti Anda */}
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3 border-b md:border-b-0 md:border-r-2 border-zinc-300 md:border-zinc-400">
                <div className="text-zinc-900 shrink-0">
                  {/* Building Icon */}
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v14h18V4c0-1.1-.9-2-2-2zM5 20V8h2v12H5zm6 0H9V4h10v16h-8zm6-14h-2v2h2V6zm-4 0h-2v2h2V6zm4 4h-2v2h2v-2zm-4 0h-2v2h2v-2zm4 4h-2v2h2v-2zm-4 0h-2v2h2v-2zm4 4h-2v2h2v-2zm-4 0h-2v2h2v-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <select
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm md:text-base font-bold text-zinc-900 focus:outline-hidden cursor-pointer py-0.5"
                  >
                    <option value="Rumah Tinggal">Jenis Properti Anda</option>
                    <option value="Kantor / Gedung">Kantor / Gedung</option>
                    <option value="Restoran & Cafe">Restoran & Cafe</option>
                    <option value="Hotel & Resor">Hotel & Resor</option>
                    <option value="Gudang & Pabrik">Gudang & Pabrik</option>
                  </select>
                </div>
              </div>

              {/* Kolom 3: Lokasi Anda */}
              <div
                className={`flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3 border-b md:border-b-0 md:border-r-2 border-zinc-300 md:border-zinc-400 transition-colors duration-200 ${detectedAddress ? "bg-blue-50/70" : ""
                  }`}
              >
                <div className="text-zinc-900 shrink-0">
                  {detectedAddress ? (
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 text-[#00629b]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="7" />
                      <line x1="12" y1="1" x2="12" y2="4" />
                      <line x1="12" y1="20" x2="12" y2="23" />
                      <line x1="1" y1="12" x2="4" y2="12" />
                      <line x1="20" y1="12" x2="23" y2="12" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  ) : (
                    /* Map Pin Icon */
                    <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm md:text-base font-bold text-zinc-900 focus:outline-hidden cursor-pointer py-0.5 truncate"
                    title={selectedLocation}
                  >
                    {locationDetecting && (
                      <option value="Mendeteksi alamat lengkap...">Mendeteksi alamat lengkap...</option>
                    )}
                    {detectedAddress && (
                      <option value={detectedAddress}>{detectedAddress}</option>
                    )}
                    <option value="Jakarta">Lokasi Anda (Jakarta)</option>
                    <option value="Tangerang">Tangerang & BSD</option>
                    <option value="Bekasi">Bekasi</option>
                    <option value="Depok">Depok</option>
                    <option value="Bogor">Bogor</option>
                  </select>
                </div>
              </div>

              {/* Kolom 4: Tombol Merah Dua Baris */}
              <div className="p-1 sm:p-1.5 shrink-0 flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all text-center leading-tight cursor-pointer"
                >
                  Amankan Properti<br className="hidden md:inline" /> Anda
                </button>
              </div>
            </form>

            {/* Gunakan lokasi saya saat ini (Persis seperti gambar referensi) */}
            <div className="pt-2 sm:pt-2.5 pl-1 flex items-center">
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                className={`inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg border shadow-sm text-xs sm:text-sm font-semibold transition-all cursor-pointer group select-none ${detectedAddress
                  ? "bg-blue-50 border-blue-300 text-[#00629b]"
                  : "bg-white/95 hover:bg-white border-zinc-200/90 text-[#00629b] hover:text-[#004e7c]"
                  }`}
                title="Gunakan lokasi saya saat ini"
              >
                {/* Target / Crosshair Icon persis seperti di gambar referensi */}
                <svg
                  className={`w-4 h-4 text-[#00629b] shrink-0 transition-colors ${locationDetecting ? "animate-spin" : ""
                    }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="7" />
                  <line x1="12" y1="1" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="23" y2="12" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
                <span>{locationDetecting ? "Mendeteksi alamat lengkap..." : "Gunakan lokasi saya saat ini"}</span>
                {detectedAddress && !locationDetecting && (
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-100/90 px-1.5 py-0.5 rounded ml-1 animate-in fade-in">
                    ✓ Alamat Terisi
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* KONTEN HALAMAN UTAMA (FULL WIDTH EXPANSIVE 100%)         */}
      {/* ======================================================== */}
      <main className="w-full px-2 sm:px-4 md:px-6 lg:px-8 space-y-12 sm:space-y-16 py-10 sm:py-14">
        {/* ======================================================== */}
        {/* 3. SECTION: PENAWARAN TERBAIK (CAROUSEL OTOMATIS 5 DETIK) */}
        {/* Dilengkapi icon titik, icon loading bar, icon geser panah */}
        {/* dan klik banner / tombol menuju artikel penawaran terkait */}
        {/* ======================================================== */}
        <section
          id="penawaran"
          className="space-y-3 w-full"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Penawaran Terbaik untuk Properti Anda
            </h2>
          </div>

          {/* Banner Container Carousel (Card Bersih Tanpa Icon Overlay Yang Mengganggu) */}
          <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/90 aspect-16/9 sm:aspect-21/9 min-h-[300px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[480px] group">
            {/* Slide List */}
            {offerSlides.map((slide, idx) => {
              const isActive = idx === currentOffer;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  {/* Foto Latar Penawaran (Dizoom sedikit dengan scale-108) */}
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    className="object-cover object-center scale-108 group-hover:scale-112 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/65 to-black/30 sm:to-transparent flex items-end sm:items-center">
                    <div className="p-5 sm:p-10 md:p-14 max-w-2xl text-white space-y-2.5 sm:space-y-3.5">
                      {/* Judul Penawaran */}
                      <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-md">
                        {slide.title}
                      </h3>

                      {/* Deskripsi Singkat */}
                      <p className="text-xs sm:text-sm md:text-base text-zinc-200 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-3">
                        {slide.subtitle}
                      </p>

                      {/* Tombol Penawaran */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={scrollToSurvey}
                          className="inline-flex items-center gap-2 bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all cursor-pointer hover:translate-x-1"
                        >
                          <span>Klaim Penawaran</span>
                          <span className="text-sm">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls Bar di Bawah Card Gambar (Persis Seperti Gambar Referensi) */}
          <div className="flex items-center justify-between pt-3 px-1">
            {/* Sisi Kiri: Tombol Swipe Kiri & Kanan dengan Bentuk Lingkaran & Progress Arc Persis di Gambar */}
            <div className="flex items-center gap-3">
              {/* Tombol Swipe Kiri (<) */}
              <button
                type="button"
                onClick={prevOffer}
                aria-label="Geser Penawaran Sebelumnya"
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-transparent flex items-center justify-center text-zinc-900 hover:text-[#C81E27] transition-colors cursor-pointer group select-none"
              >
                {/* Thin Hollow Circle Ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 44 44">
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    className="group-hover:stroke-red-200 transition-colors"
                  />
                </svg>

                {/* Chevron Kiri (<) - Posisi Tetap Diam Tidak Bergeser */}
                <svg
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 relative z-10 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Tombol Swipe Kanan (>) dengan Circular Progress Arc Loading */}
              <button
                type="button"
                onClick={nextOffer}
                aria-label="Geser Penawaran Selanjutnya"
                className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-transparent flex items-center justify-center text-zinc-900 hover:text-[#C81E27] transition-colors cursor-pointer group select-none"
              >
                {/* Circular Progress Arc */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
                  {/* Faint Background Track Ring */}
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                  />
                  {/* Active Progress Loading Arc (Merah #C81E27 Sesuai Tema Web) */}
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    fill="none"
                    stroke="#C81E27"
                    strokeWidth="2.5"
                    strokeDasharray={119.38}
                    strokeDashoffset={119.38 * (1 - Math.min(100, Math.max(0, offerProgress)) / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-75"
                  />
                </svg>

                {/* Chevron Kanan (>) - Posisi Tetap Diam Tidak Bergeser */}
                <svg
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 relative z-10 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Sisi Kanan: Titik-titik (Pagination Dots) Sesuai Warna Web (#C81E27) */}
            <div className="flex items-center gap-2">
              {offerSlides.map((_, idx) => {
                const isActive = idx === currentOffer;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToOffer(idx)}
                    aria-label={`Lihat penawaran ${idx + 1}`}
                    className={`rounded-full transition-all cursor-pointer ${isActive
                      ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#C81E27] scale-110"
                      : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-200 hover:bg-[#C81E27]/50"
                      }`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. SECTION: PRIME SHIELD-01 (FULL WIDTH)                 */}
        {/* ======================================================== */}
        <section id="prime-shield" className="space-y-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Prime Shield-01
          </h2>

          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-[#0c0d10]">
            <Image
              src="/images/prime-shield.png"
              alt="VECOS Prime Shield-01"
              width={3419}
              height={2809}
              className="w-full h-auto block scale-106 sm:scale-108 transition-transform duration-700"
              priority
            />

            {/* Teks: VECOS Prime Shield-01 (Diperbesar sedikit agar lebih jelas & tegas) */}
            <div className="absolute top-3.5 sm:top-6 md:top-8 lg:top-11 left-[54%] z-10 pointer-events-none select-none">
              <div className="text-white text-sm sm:text-xl md:text-2xl lg:text-3xl font-black tracking-wide leading-tight uppercase font-sans">
                VECOS
              </div>
              <div className="text-white text-xs sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight leading-tight font-sans">
                Prime Shield-01
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. SECTION: PEST TYPE (TOTAL 11 MACAM, TAMPILAN 6, SISANYA ICON SELANJUTNYA) */}
        {/* ======================================================== */}
        <section id="layanan" className="space-y-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Jenis Hama
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                {pestPage === 0
                  ? "Menampilkan 6 hama utama (Halaman 1 dari 2)"
                  : "Menampilkan 5 hama lainnya (Halaman 2 dari 2)"}
              </p>
            </div>

            {/* Icon Navigasi: Sebelumnya & Selanjutnya */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setPestPage(0)}
                disabled={pestPage === 0}
                aria-label="Lihat hama sebelumnya"
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${pestPage === 0
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200"
                  : "bg-white text-zinc-800 hover:bg-[#C81E27] hover:text-white border border-zinc-300 shadow-sm cursor-pointer"
                  }`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden xs:inline">Sebelumnya</span>
              </button>

              {/* Indikator Halaman Titik / Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full text-xs font-extrabold text-zinc-700 border border-zinc-200">
                <span className={pestPage === 0 ? "text-[#C81E27] font-black" : "text-zinc-500"}>1</span>
                <span className="text-zinc-400">/</span>
                <span className={pestPage === 1 ? "text-[#C81E27] font-black" : "text-zinc-500"}>2</span>
              </div>

              {/* Icon Selanjutnya */}
              <button
                type="button"
                onClick={() => setPestPage(1)}
                disabled={pestPage === 1}
                aria-label="Lihat hama selanjutnya"
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${pestPage === 1
                  ? "bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200"
                  : "bg-[#C81E27] text-white hover:bg-[#b01820] shadow-md shadow-red-600/30 cursor-pointer"
                  }`}
              >
                <span>Selanjutnya</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* 3 Kolom x 2 Baris Grid (Tampilan 6 Item) */}
          <div className="grid grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-8 text-center w-full min-h-[320px] transition-all duration-300">
            {(pestPage === 0 ? pestList.slice(0, 6) : pestList.slice(6, 11)).map((pest) => (
              <div
                key={pest.name}
                onClick={() => {
                  setSelectedPest(pest.name);
                  setFormData((prev) => ({ ...prev, pestType: pest.name }));
                  scrollToSurvey();
                }}
                className="flex flex-col items-center group cursor-pointer"
                title={`Pilih ${pest.name} untuk survey`}
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#e9ecf0] border-2 border-zinc-200 group-hover:border-[#C81E27] shadow-xs group-hover:shadow-md transition-all">
                  <Image
                    src={pest.image}
                    alt={pest.name}
                    fill
                    className={`${pest.imageClass || "object-cover"} group-hover:scale-108 transition-transform duration-300`}
                  />
                </div>

                <h3 className="mt-3 text-xs sm:text-sm md:text-base font-bold text-zinc-900 group-hover:text-[#C81E27] transition-colors leading-tight">
                  {pest.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 italic mt-0.5 leading-tight">
                  {pest.latin}
                </p>
              </div>
            ))}

            {/* Slot ke-6 pada Halaman 2: Card Icon Kembali (Sebelumnya) agar Layout 3x2 Tetap Seimbang */}
            {pestPage === 1 && (
              <div
                onClick={() => setPestPage(0)}
                className="flex flex-col items-center group cursor-pointer"
                title="Kembali ke halaman sebelumnya (6 hama utama)"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-zinc-100 hover:bg-red-50 border-2 border-dashed border-zinc-300 group-hover:border-[#C81E27] shadow-xs group-hover:shadow-md transition-all flex flex-col items-center justify-center text-zinc-600 group-hover:text-[#C81E27]">
                  <svg className="w-7 h-7 sm:w-9 sm:h-9 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold mt-1">Ke Awal</span>
                </div>

                <h3 className="mt-3 text-xs sm:text-sm md:text-base font-bold text-zinc-600 group-hover:text-[#C81E27] transition-colors leading-tight">
                  6 Hama Utama
                </h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 italic mt-0.5 leading-tight">
                  Kembali ke Halaman 1
                </p>
              </div>
            )}
          </div>

          {/* Tombol Footer Navigasi Cepat Antar Halaman */}
          <div className="pt-2 flex items-center justify-center">
            {pestPage === 0 ? (
              <button
                type="button"
                onClick={() => setPestPage(1)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-xs sm:text-sm font-bold text-zinc-800 hover:text-[#C81E27] shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <span>Lihat 5 Jenis Hama Lainnya</span>
                <div className="w-5 h-5 rounded-full bg-[#C81E27] text-white flex items-center justify-center text-xs">
                  →
                </div>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPestPage(0)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white hover:bg-zinc-50 border border-zinc-300 text-xs sm:text-sm font-bold text-zinc-800 hover:text-[#C81E27] shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-[#C81E27] text-white flex items-center justify-center text-xs">
                  ←
                </div>
                <span>Kembali ke 6 Hama Utama</span>
              </button>
            )}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. CARD: VECOS PROFFING DEFENDER (FULL WIDTH)            */}
        {/* ======================================================== */}
        <section className="w-full">
          <div className="w-full rounded-2xl sm:rounded-3xl bg-[#d2d4d8] border border-zinc-300/80 p-5 sm:p-8 md:p-10 shadow-sm flex items-center gap-4 sm:gap-7 md:gap-9">
            <div className="shrink-0 relative w-16 h-18 sm:w-24 sm:h-28 md:w-28 md:h-32 flex items-center justify-center">
              <Image
                src="/images/pestcontrol.png"
                alt="Vecos Proffing Defender"
                width={120}
                height={136}
                className="w-full h-auto object-contain drop-shadow-sm"
                priority
              />
            </div>

            <div className="space-y-1 sm:space-y-1.5 flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#3a3f4d] tracking-tight leading-snug">
                <span className="block">Vecos Proffing</span>
                <span className="block">Defender</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#4f5563] font-medium leading-relaxed max-w-xl">
                Layanan penutupan celah hama di setiap titik properti anda.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 7. SECTION: SPECIAL OFFER (7 LAYANAN DENGAN ICON GESER)  */}
        {/* Gambar diduplikasi, navigasi geser panah kiri & kanan     */}
        {/* ======================================================== */}
        <section className="space-y-4 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Penawaran Spesial
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                Geser untuk menjelajahi 7 layanan penawaran khusus properti Anda
              </p>
            </div>

            {/* Icon Geser (Navigasi Panah Kiri & Kanan) */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                onClick={scrollSpecialOfferLeft}
                aria-label="Geser layanan ke kiri"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 bg-white hover:bg-[#C81E27] hover:text-white hover:border-[#C81E27] text-zinc-700 flex items-center justify-center transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
                title="Geser ke kiri"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={scrollSpecialOfferRight}
                aria-label="Geser layanan ke kanan"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C81E27] hover:bg-[#b01820] text-white flex items-center justify-center transition-all shadow-md shadow-red-700/30 hover:shadow-lg cursor-pointer active:scale-95"
                title="Geser ke kanan"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Container dengan Icon Geser & Touch Swipe */}
          <div className="relative group/carousel">
            {/* Slider List */}
            <div
              ref={specialOfferSliderRef}
              className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-1 scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {specialOfferServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => {
                    setSelectedProperty(service.title);
                    setFormData((prev) => ({ ...prev, propertyType: service.title }));
                    scrollToSurvey();
                  }}
                  className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] shrink-0 snap-start relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/11 shadow-sm hover:shadow-xl border border-zinc-200/90 group cursor-pointer transition-all duration-300"
                  title={`Pilih penawaran ${service.title}`}
                >
                  {/* Foto Layanan (Duplikat, siap diubah) */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Overlay Gelap dengan Tulisan di Tengah (Tanpa Deskripsi, Tombol, atau Badge) */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center p-3 sm:p-4 text-center">
                    <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wider uppercase drop-shadow-md">
                      {service.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Panah Geser Mengambang di Desktop */}
            <button
              type="button"
              onClick={scrollSpecialOfferLeft}
              aria-label="Geser kiri"
              className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C81E27] text-white items-center justify-center backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={scrollSpecialOfferRight}
              aria-label="Geser kanan"
              className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C81E27] text-white items-center justify-center backdrop-blur-xs opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. SECTION: OUR CLIENT (2 BARIS BERGERAK SALING LAWAN ARAH)*/}
        {/* Baris 1 bergerak lambat ke kanan, Baris 2 ke kiri        */}
        {/* ======================================================== */}
        <section id="tentang" className="space-y-5 w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                Our Client
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                Dipercaya oleh institusi, fasilitas publik, perhotelan, dan korporasi terkemuka
              </p>
            </div>
          </div>

          <div className="relative w-full py-2 space-y-3 sm:space-y-4 overflow-hidden">
            {/* Soft Edge Gradient Fade Masks (Kiri & Kanan) */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#eef1f5] via-[#eef1f5]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#eef1f5] via-[#eef1f5]/80 to-transparent z-10 pointer-events-none" />

            {/* BARIS 1: Bergerak Lambat ke Kanan */}
            <div className="w-full overflow-hidden">
              <div className="animate-marquee-right flex items-center gap-3 sm:gap-5 py-1">
                {[...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1].map((client, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="h-16 sm:h-22 w-40 xs:w-48 sm:w-56 px-3 sm:px-4 py-2 bg-white/95 rounded-xl sm:rounded-2xl border border-zinc-200/80 shadow-2xs hover:shadow-md hover:border-red-200 transition-all flex items-center justify-center shrink-0"
                    title={client.name}
                  >
                    <div className="relative w-full h-full max-h-11 sm:max-h-15 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className={`object-contain transition-transform duration-300 ${(client as any).noZoom || client.image.includes("6.png")
                          ? "scale-100"
                          : (client as any).extraZoom
                            ? "scale-[1.45] sm:scale-[1.55] hover:scale-[1.60]"
                            : "scale-120 sm:scale-130 hover:scale-135"
                          }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BARIS 2: Bergerak Lambat ke Kiri */}
            <div className="w-full overflow-hidden">
              <div className="animate-marquee-left flex items-center gap-3 sm:gap-5 py-1">
                {[...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2].map((client, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="h-16 sm:h-22 w-40 xs:w-48 sm:w-56 px-3 sm:px-4 py-2 bg-white/95 rounded-xl sm:rounded-2xl border border-zinc-200/80 shadow-2xs hover:shadow-md hover:border-red-200 transition-all flex items-center justify-center shrink-0"
                    title={client.name}
                  >
                    <div className="relative w-full h-full max-h-11 sm:max-h-15 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className={`object-contain transition-transform duration-300 ${(client as any).noZoom || client.image.includes("6.png")
                          ? "scale-100"
                          : (client as any).extraZoom
                            ? "scale-[1.45] sm:scale-[1.55] hover:scale-[1.60]"
                            : "scale-120 sm:scale-130 hover:scale-135"
                          }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* 9. SECTION: SURVEY FORM, FAQ & FOOTER FLOW (FULL WIDTH)  */}
      {/* ======================================================== */}

      <div className={`relative w-full mt-10 sm:mt-16 overflow-visible ${isAnyModalOpen ? "z-0" : ""}`}>
        {/* 1. Banner Survey dengan Foto Customer (Full Width) */}
        <div id="form-survey" className="w-full relative z-0 overflow-hidden shadow-2xl border-t-4 border-[#dc2626] min-h-[480px] sm:min-h-[640px] md:min-h-[740px] lg:min-h-[800px] flex items-center justify-center">
          {/* Foto Customer Asli */}
          <div className="absolute inset-0">
            <Image
              src="/images/image_form.png"
              alt="Survey & Konsultasi Tim Vecos"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Pelapis Gelap (Dark Overlay) agar background lebih kontras & sedikit gelap */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </div>

          {/* Form Input di Tengah Section */}
          <div className="relative z-10 w-full pt-8 sm:pt-14 pb-16 sm:pb-28 md:pb-32 px-3 sm:px-4 flex flex-col items-center justify-center">
            {formSubmitted ? (
              <div className="p-5 sm:p-8 bg-emerald-900/90 backdrop-blur-md border border-emerald-400 rounded-2xl text-center space-y-2 max-w-sm sm:max-w-md w-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-base sm:text-lg font-bold">
                  ✓
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-white">Permintaan Berhasil Terkirim!</h4>
                <p className="text-xs sm:text-sm text-emerald-100">
                  Tim VECOS akan segera menghubungi Anda untuk jadwal survey lokasi gratis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="w-full max-w-sm sm:max-w-lg space-y-2 sm:space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Nama /Perusahaan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/95 text-zinc-900 placeholder:text-zinc-500 border border-zinc-200/90 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Jenis Properti"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-white/95 text-zinc-900 placeholder:text-zinc-500 border border-zinc-200/90 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Jenis Hama"
                    value={formData.pestType}
                    onChange={(e) => setFormData({ ...formData, pestType: e.target.value })}
                    className="w-full bg-white/95 text-zinc-900 placeholder:text-zinc-500 border border-zinc-200/90 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Keluhan Anda"
                    value={formData.complaint}
                    onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                    className="w-full bg-white/95 text-zinc-900 placeholder:text-zinc-500 border border-zinc-200/90 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 shadow-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Alamat Anda"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/95 text-zinc-900 placeholder:text-zinc-500 border border-zinc-200/90 rounded-xl px-3.5 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-red-500 shadow-sm"
                  />
                </div>

                <div className="pt-0.5 sm:pt-1 space-y-2">
                  <button
                    type="submit"
                    className="w-full bg-[#E5282E] hover:bg-[#d02026] text-white font-bold text-xs sm:text-sm md:text-base py-2.5 sm:py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    Amankan Properti Anda
                  </button>

                  <p className="text-[11px] sm:text-xs text-center text-zinc-200/90 leading-relaxed px-2 font-normal">
                    Lihat{" "}
                    <button
                      type="button"
                      onClick={() => setLegalModal("privacy")}
                      className="text-white underline underline-offset-2 hover:text-red-400 font-semibold cursor-pointer transition-colors"
                    >
                      kebijakan privasi kami
                    </button>{" "}
                    untuk melihat komitmen kami untuk melindungi dan menghormati privasi anda serta cara mengelola preferensi anda.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 2. Card FAQ (Full Width Melayang Di Atas Survey dan Footer) */}
        <div className={`w-full relative ${isAnyModalOpen ? "z-0 pointer-events-none" : "z-20"} -mt-12 sm:-mt-24 md:-mt-28 -mb-12 sm:-mb-24 md:-mb-28`}>
          <div className="w-full bg-[#d2d5dc] rounded-2xl sm:rounded-3xl lg:rounded-[36px] py-5 sm:py-10 md:py-12 px-3 sm:px-8 md:px-12 shadow-2xl border-y border-zinc-300/80">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-2.5 sm:gap-6 md:gap-8 items-center">
              {/* Sisi Kiri: Frequently Question for Vecos */}
              <div className="col-span-5 sm:col-span-4">
                <h2 className="text-xs sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3a3e48] tracking-tight leading-[1.15]">
                  <span className="block">Frequently</span>
                  <span className="block">Question</span>
                  <span className="block">for</span>
                  <span className="block">Vecos</span>
                </h2>
              </div>

              {/* Sisi Kanan: 4 Accordion Pill */}
              <div className="col-span-7 sm:col-span-8 space-y-2 sm:space-y-3 w-full">
                {faqList.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left px-2.5 sm:px-6 py-2 sm:py-3.5 bg-[#b2b7bf] hover:bg-[#a6abb3] text-white flex items-center justify-between gap-1.5 sm:gap-2 font-bold text-[10px] sm:text-sm md:text-base transition-colors cursor-pointer leading-tight"
                      >
                        <span className="break-words">{faq.question}</span>
                        <span className="shrink-0 text-white font-black text-xs sm:text-lg ml-1">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-3 sm:px-6 py-2.5 sm:py-4 text-[10px] sm:text-sm text-zinc-800 leading-relaxed bg-[#e5e8ef] border-t border-zinc-300/70 font-medium">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Footer Merah Penuh */}
        <footer className="w-full bg-[#E02428] text-white pt-18 sm:pt-36 md:pt-40 pb-0 shadow-2xl relative z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
            {/* 2 Kolom Link Navigasi Putih */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#beranda" className="hover:underline transition-all">Beranda</a></li>
                <li><a href="#form-survey" className="hover:underline transition-all">Hubungi kami</a></li>
                <li><a href="#layanan" className="hover:underline transition-all">Layanan kami</a></li>
                <li><a href="#tentang" className="hover:underline transition-all">Tentang Vecos</a></li>

              </ul>

              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#layanan" className="hover:underline transition-all">Pembasmi Serangga</a></li>
                <li><a href="#layanan" className="hover:underline transition-all">Pembasmi Tikus</a></li>
                <li><a href="#layanan" className="hover:underline transition-all">Anti Rayap</a></li>
                <li><a href="#penawaran" className="hover:underline transition-all">Disinfeksi</a></li>
                <li><a href="#prime-shield" className="hover:underline transition-all">Prime Shield-01</a></li>
              </ul>
            </div>

            {/* Baris Brand, Kontak & Badge */}
            <div className="flex items-center justify-between gap-3 sm:gap-4 pt-2 pb-5 sm:pb-8 border-b border-white/20">
              {/* Sisi Kiri: Brand, Sosmed, Telepon & Hak Cipta */}
              <div className="space-y-1.5 sm:space-y-2.5">
                <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white block">
                  VECOS
                </span>

                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#991419] hover:bg-[#801014] flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                  <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#991419] hover:bg-[#801014] flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" /></svg>
                  </a>
                  <a href="https://wa.me/6285743681500" target="_blank" rel="noopener noreferrer" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#991419] hover:bg-[#801014] flex items-center justify-center text-white transition-colors" aria-label="WhatsApp">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84a8.196 8.196 0 0 1-5.83 2.41c-1.47 0-2.92-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.24-8.25" /></svg>
                  </a>
                </div>

                <div className="text-xs sm:text-sm md:text-base font-bold text-white pt-0.5">
                  0857-4368-1500
                </div>

                <div className="text-[10px] sm:text-xs text-white/90 leading-tight">
                  <p>PT Vecos Intitama Mulya</p>
                </div>
              </div>

              {/* Sisi Kanan: Badge Vecos Proffing Defender */}
              <div className="bg-[#d2d4d8] text-zinc-900 px-2 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg flex items-center gap-2 sm:gap-3.5 max-w-[155px] xs:max-w-[185px] sm:max-w-xs shrink-0">
                <div className="w-7 h-9 sm:w-10 sm:h-12 relative shrink-0">
                  <Image
                    src="/images/pestcontrol.png"
                    alt="Vecos Proffing Defender"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-[9.5px] sm:text-xs md:text-sm font-extrabold leading-tight text-[#3a3f4d]">
                    Vecos Proffing<br />Defender
                  </div>
                  <div className="text-[7.5px] sm:text-[9px] md:text-[10px] text-[#555a66] leading-tight pt-0.5 line-clamp-2">
                    Layanan penutupan celah hama di setiap titik properti anda.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strip Paling Bawah: Copyright Kiri & Menu Legal Biru Kanan (Sesuai Referensi) */}
          <div className="bg-[#f0f3f8] border-t border-zinc-200/90 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 text-[11px] sm:text-xs text-zinc-600">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
              {/* Sisi Kiri: Copyright */}
              <div className="text-zinc-600 font-normal">
                Copyright © 2026 PT Vecos Intitama Mulya . All Rights Reserved
              </div>

              {/* Sisi Kanan: Menu Kebijakan Privasi, Ketentuan Layanan, Pengaturan Cookie */}
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-7 font-normal">
                <button
                  type="button"
                  onClick={() => setLegalModal("privacy")}
                  className="text-[#0070ba] hover:underline cursor-pointer transition-colors"
                >
                  Kebijakan Privasi
                </button>
                <button
                  type="button"
                  onClick={() => setLegalModal("terms")}
                  className="text-[#0070ba] hover:underline cursor-pointer transition-colors"
                >
                  Ketentuan Layanan
                </button>
                <button
                  type="button"
                  onClick={() => setLegalModal("cookie")}
                  className="text-[#0070ba] hover:underline cursor-pointer transition-colors"
                >
                  Pengaturan Cookie
                </button>
              </div>
            </div>
          </div>

        </footer>
      </div>

      {/* ======================================================== */}
      {/* GLOBAL MODALS (ROOT LEVEL Z-[999])                       */}
      {/* Menjamin modal selalu berada di atas FAQ & semua section */}
      {/* ======================================================== */}

      {/* 1. Modal Pop-up Artikel Saat Banner Penawaran Ditekan */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 text-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Foto Artikel */}
            <div className="relative w-full h-44 sm:h-60 bg-zinc-900">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-5">
                <span className="bg-[#C81E27] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {selectedArticle.tag}
                </span>
              </div>

              {/* Tombol Tutup X */}
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                aria-label="Tutup Artikel"
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C81E27] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Konten Artikel Lengkap */}
            <div className="p-5 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-zinc-500 font-semibold border-b border-zinc-100 pb-3">
                <span>📅 {selectedArticle.article.date}</span>
                <span>•</span>
                <span>⏱️ {selectedArticle.article.readTime}</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">Resmi VECOS</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 leading-snug">
                {selectedArticle.article.title}
              </h3>

              {/* Paragraf Artikel */}
              <div className="space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                {selectedArticle.article.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Poin Keunggulan / Key Highlights */}
              <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 sm:p-5 space-y-2">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#C81E27] uppercase tracking-wide">
                  Keunggulan Standar Layanan VECOS:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-800 font-medium">
                  {selectedArticle.article.keyPoints.map((point, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <span className="text-[#C81E27] font-bold shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Modal: Tombol Aksi */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-zinc-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Tutup
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    scrollToSurvey();
                  }}
                  className="w-full sm:w-auto bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg transition-colors cursor-pointer"
                >
                  Klaim Penawaran & Jadwalkan Survey Gratis →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Modal Dialog Legal: Kebijakan Privasi, Ketentuan, & Cookie */}
      {legalModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-zinc-900 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-zinc-200 p-5 sm:p-8 space-y-5 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-100 text-[#C81E27] flex items-center justify-center font-bold text-sm">
                  {legalModal === "privacy" && "🛡️"}
                  {legalModal === "terms" && "📜"}
                  {legalModal === "cookie" && "🍪"}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-950">
                    {legalModal === "privacy" && "Kebijakan Privasi"}
                    {legalModal === "terms" && "Ketentuan Layanan"}
                    {legalModal === "cookie" && "Pengaturan Cookie"}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                    PT Vecos Indonesia Berjaya • Pembaruan Terakhir 2026
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Tutup modal"
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Konten Kebijakan Privasi */}
            {legalModal === "privacy" && (
              <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <p>
                  Selamat datang di VECOS (PT Vecos Indonesia Berjaya). Kami berkomitmen penuh untuk menghormati dan menjaga kerahasiaan data pribadi pelanggan, baik pemilik hunian pribadi maupun entitas bisnis/komersial.
                </p>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">1. Data yang Kami Kumpulkan</h4>
                  <p>
                    Informasi yang Anda berikan melalui form survey atau kontak WhatsApp, meliputi: Nama, Nomor Telepon/WhatsApp, Alamat/Lokasi Properti, Jenis Properti, dan Keluhan Infestasi Hama yang dialami.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">2. Penggunaan Data</h4>
                  <p>
                    Data digunakan secara eksklusif untuk keperluan penjadwalan survey lokasi gratis, konsultasi teknis Integrated Pest Management (IPM), penerbitan sertifikat garansi pengerjaan, dan pelayanan pelanggan purna jual. Kami <strong>tidak pernah</strong> menjual atau menyebarluaskan data Anda kepada pihak ketiga.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">3. Keamanan Informasi</h4>
                  <p>
                    Seluruh formulir dan transmisi data diproteksi dengan enkripsi berstandar industri. Hanya teknisi berwenang dan tim operasional resmi VECOS yang memiliki hak akses terbatas untuk kunjungan survey lokasi.
                  </p>
                </div>
              </div>
            )}

            {/* Konten Ketentuan Layanan */}
            {legalModal === "terms" && (
              <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <p>
                  Ketentuan Layanan ini mengatur penggunaan jasa pengendalian hama terpadu (Integrated Pest Management) yang disediakan oleh PT Vecos Indonesia Berjaya.
                </p>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">1. Survey & Konsultasi Gratis</h4>
                  <p>
                    Layanan inspeksi dan estimasi biaya awal oleh tim teknisi bersertifikasi VECOS adalah 100% Bebas Biaya (Gratis) tanpa kewajiban pemesanan langsung bagi pelanggan di wilayah jangkauan kami.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">2. Standar Keselamatan Kimia</h4>
                  <p>
                    Semua bahan pestisida, termitisida, dan disinfektan yang diaplikasikan telah terdaftar resmi di Kementerian Pertanian dan Kementerian Kesehatan RI, diformulasikan ramah lingkungan (*odorless & eco-friendly*), aman bagi anak-anak serta hewan peliharaan.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-extrabold text-zinc-900 text-sm">3. Sertifikat Garansi Resmi</h4>
                  <p>
                    Setiap pengerjaan anti rayap (termitisida barrier & baiting) dan paket komersial bergaransi dilengkapi sertifikat garansi tertulis. Jika hama muncul kembali selama masa garansi aktif, VECOS akan melakukan penanganan ulang (re-treatment) tanpa biaya tambahan.
                  </p>
                </div>
              </div>
            )}

            {/* Konten Pengaturan Cookie */}
            {legalModal === "cookie" && (
              <div className="space-y-5 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                <p>
                  Website VECOS menggunakan cookie untuk meningkatkan pengalaman navigasi, mengingat preferensi layanan, dan menganalisis trafik kunjungan secara anonim. Anda dapat menyesuaikan izin cookie di bawah ini:
                </p>

                <div className="space-y-3">
                  {/* Cookie 1: Esensial */}
                  <div className="flex items-start justify-between gap-4 p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-zinc-900">Cookie Esensial</span>
                        <span className="text-[10px] bg-zinc-200 text-zinc-700 px-2 py-0.5 rounded-full font-bold">Wajib</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-zinc-500">
                        Diperlukan untuk keamanan website, pemrosesan form survey, dan fungsionalitas dasar navigasi.
                      </p>
                    </div>
                    <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[#C81E27] cursor-not-allowed" />
                  </div>

                  {/* Cookie 2: Fungsional */}
                  <div className="flex items-start justify-between gap-4 p-3.5 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
                    <div className="space-y-0.5">
                      <span className="font-bold text-zinc-900">Cookie Fungsionalitas</span>
                      <p className="text-[11px] sm:text-xs text-zinc-500">
                        Mengingat pilihan bahasa, preferensi wilayah, dan riwayat kalkulasi kebutuhan hama Anda.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={functionalCookies}
                      onChange={(e) => setFunctionalCookies(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#C81E27] cursor-pointer"
                    />
                  </div>

                  {/* Cookie 3: Analitik */}
                  <div className="flex items-start justify-between gap-4 p-3.5 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
                    <div className="space-y-0.5">
                      <span className="font-bold text-zinc-900">Cookie Kinerja & Analisis</span>
                      <p className="text-[11px] sm:text-xs text-zinc-500">
                        Membantu kami memahami halaman yang paling banyak diakses untuk meningkatkan performa situs.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analyticsCookies}
                      onChange={(e) => setAnalyticsCookies(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#C81E27] cursor-pointer"
                    />
                  </div>
                </div>

                {cookieSaved && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs font-bold text-center animate-in fade-in">
                    ✓ Preferensi cookie Anda berhasil disimpan!
                  </div>
                )}
              </div>
            )}

            {/* Footer Modal: Tombol Aksi */}
            <div className="pt-3 border-t border-zinc-200 flex flex-wrap items-center justify-end gap-2.5">
              {legalModal === "cookie" ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setAnalyticsCookies(true);
                      setFunctionalCookies(true);
                      setCookieSaved(true);
                      setTimeout(() => {
                        setCookieSaved(false);
                        setLegalModal(null);
                      }, 1200);
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Terima Semua
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCookieSaved(true);
                      setTimeout(() => {
                        setCookieSaved(false);
                        setLegalModal(null);
                      }, 1200);
                    }}
                    className="px-5 py-2 rounded-xl bg-[#C81E27] hover:bg-[#b01820] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
                  >
                    Simpan Pengaturan
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="px-6 py-2 rounded-xl bg-[#C81E27] hover:bg-[#b01820] text-white text-xs font-extrabold shadow-md transition-all cursor-pointer"
                >
                  Saya Mengerti & Tutup
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. Modal Preferensi Bahasa & Negara */}
      {isLangModalOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={() => setIsLangModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close (X) di samping kanan atas card sesuai desain referensi */}
            <button
              type="button"
              onClick={() => setIsLangModalOpen(false)}
              className="absolute -top-12 right-0 sm:-right-14 sm:top-0 p-2.5 rounded-xl bg-[#1c2230]/90 hover:bg-zinc-700 border border-zinc-700/80 text-zinc-300 hover:text-white transition-colors cursor-pointer shadow-lg"
              aria-label="Tutup preferensi bahasa"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Card Dialog Modal */}
            <div className="bg-[#141923] border border-zinc-700/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Pilih preferensi bahasa & negara Anda
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Seluruh halaman website akan diterjemahkan secara otomatis sesuai preferensi negara & bahasa yang Anda pilih.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Select2: Pilihan Negara / Wilayah */}
                <SearchableSelect
                  label="Negara / Wilayah"
                  value={tempCountry}
                  placeholder="Ketik untuk mencari negara..."
                  className="z-20"
                  options={countryList.map((country) => ({
                    value: country.code,
                    label: country.name,
                    subLabel: country.subLabel,
                    icon: country.flag,
                  }))}
                  onChange={(val) => handleCountryChange(val)}
                />

                {/* Select2: Pilihan Bahasa */}
                <SearchableSelect
                  label="Bahasa Terjemahan"
                  value={tempLang}
                  placeholder="Ketik untuk mencari bahasa..."
                  className="z-10"
                  options={(() => {
                    const activeCountry =
                      countryList.find((c) => c.code === tempCountry) || countryList[0];
                    return activeCountry.supportedLangs
                      .map((langCode) => languageList.find((l) => l.code === langCode))
                      .filter((l): l is (typeof languageList)[0] => Boolean(l))
                      .map((lang) => ({
                        value: lang.code,
                        label: lang.name,
                        subLabel: lang.nativeName,
                      }));
                  })()}
                  onChange={(val) => setTempLang(val)}
                />
              </div>

              {/* Info Card Status Bahasa */}
              <div className="bg-[#1a202d] rounded-xl p-3 border border-zinc-700/50 flex items-center justify-between text-xs text-zinc-300">
                <span className="flex items-center gap-1.5">
                  <span>{countryList.find((c) => c.code === tempCountry)?.flag || "🌐"}</span>
                  <span>
                    {countryList.find((c) => c.code === tempCountry)?.name}
                  </span>
                </span>
                <span className="font-bold text-[#E5282E]">
                  {languageList.find((l) => l.code === tempLang)?.nativeName || tempLang}
                </span>
              </div>

              {/* Tombol Aksi: Warna Brand Merah VECOS (#C81E27) */}
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => applyLanguagePreference(tempCountry, tempLang)}
                  className="bg-[#C81E27] hover:bg-[#b01820] active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-red-900/30 transition-all cursor-pointer"
                >
                  Perbarui preferensi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Google Translate Element Container */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
}
