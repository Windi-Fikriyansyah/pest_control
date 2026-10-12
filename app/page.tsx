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

export default function Home() {
  // Navigation & Drawer
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layananDropdownOpen, setLayananDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ID" | "EN">("ID");

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play slider effect (ganti slide otomatis setiap 5 detik)
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Quick booking state
  const [selectedPest, setSelectedPest] = useState("Serangga Semut");
  const [selectedProperty, setSelectedProperty] = useState("Rumah Tinggal");
  const [selectedLocation, setSelectedLocation] = useState("Jakarta");

  // Survey Form state
  const [formData, setFormData] = useState({
    name: "",
    propertyType: "",
    pestType: "",
    complaint: "",
    location: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  // Pest items data - 6 items
  const pestList = [
    {
      name: "Rayap Tanah",
      latin: "Coptotermes formosanus",
      image: "/images/pest_rayap.jpg",
    },
    {
      name: "Lalat Hijau",
      latin: "Lucilia sericata",
      image: "/images/pest_lalat.jpg",
    },
    {
      name: "Kecoa / Coro",
      latin: "Periplaneta americana",
      image: "/images/pest_kecoa.jpg",
    },
    {
      name: "Tikus Got",
      latin: "Rattus norvegicus",
      image: "/images/pest_tikus.jpg",
    },
    {
      name: "Kutu Busuk",
      latin: "Cimex lectularius",
      image: "/images/pest_kutubusuk.jpg",
    },
    {
      name: "Semut Api",
      latin: "Solenopsis invicta",
      image: "/images/pest_semut.svg",
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
            <div className="relative">
              <button
                type="button"
                onClick={() => setLayananDropdownOpen(!layananDropdownOpen)}
                onBlur={() => setTimeout(() => setLayananDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors cursor-pointer"
              >
                <span>LAYANAN KAMI</span>
                <span className="text-[10px] transform transition-transform">▼</span>
              </button>

              {layananDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-zinc-200 py-2 z-50 animate-in fade-in-50">
                  <a
                    href="#layanan"
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Serangga
                  </a>
                  <a
                    href="#layanan"
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Tikus
                  </a>
                  <a
                    href="#layanan"
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Anti Rayap Fondasi
                  </a>
                  <a
                    href="#penawaran"
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Disinfeksi Ruangan
                  </a>
                  <a
                    href="#prime-shield"
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

            {/* Language Box [ EN | ID ] */}
            <div className="flex items-center border border-zinc-400 rounded bg-white/70 px-2.5 py-1 text-[11px] font-bold text-zinc-700">
              <button
                type="button"
                onClick={() => setCurrentLang("EN")}
                className={`hover:text-[#C81E27] transition-colors ${currentLang === "EN" ? "text-[#C81E27] font-black" : "text-zinc-500"
                  }`}
              >
                EN
              </button>
              <span className="mx-1 text-zinc-300">|</span>
              <button
                type="button"
                onClick={() => setCurrentLang("ID")}
                className={`hover:text-[#C81E27] transition-colors ${currentLang === "ID" ? "text-[#C81E27] font-black" : "text-zinc-500"
                  }`}
              >
                ID
              </button>
            </div>
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
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100"
            >
              LAYANAN KAMI
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100"
            >
              TENTANG VECOS
            </a>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500">Pilihan Bahasa:</span>
              <div className="flex items-center border border-zinc-400 rounded px-3 py-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setCurrentLang("EN")}
                  className={currentLang === "EN" ? "text-[#C81E27]" : "text-zinc-500"}
                >
                  EN
                </button>
                <span className="mx-1.5 text-zinc-300">|</span>
                <button
                  type="button"
                  onClick={() => setCurrentLang("ID")}
                  className={currentLang === "ID" ? "text-[#C81E27]" : "text-zinc-500"}
                >
                  ID
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================== */}
      {/* 2. HERO SECTION / BANNER SLIDE UTAMA (FULL WIDTH 100%)    */}
      {/* ======================================================== */}
      <section
        id="beranda"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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

                      {/* Pill Call Center */}
                      <a
                        href={`tel:${slide.callCenter.replace(/[^0-9]/g, "")}`}
                        className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 hover:bg-white text-zinc-900 px-3.5 sm:px-4 py-1.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold shadow-sm transition-all"
                      >
                        <svg className="w-3.5 h-3.5 text-[#C81E27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Center : {slide.callCenter}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigasi Panah Slide Kiri & Kanan (Hanya tampil di tablet/desktop agar layar mobile bersih) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide Sebelumnya"
          className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#C81E27] text-white items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide Selanjutnya"
          className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#C81E27] text-white items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indikator Titik (Dots) Slide di sudut kanan atas banner */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-8 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Ke slide ${idx + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${idx === currentSlide ? "w-5 sm:w-6 bg-[#C81E27]" : "w-1.5 sm:w-2 bg-white/60 hover:bg-white"
                }`}
            />
          ))}
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
              className="w-full bg-white rounded-lg sm:rounded-2xl p-1 sm:p-1.5 flex flex-col md:flex-row items-stretch md:items-center shadow-lg divide-y md:divide-y-0 md:divide-x divide-zinc-200"
            >
              {/* Kolom 1: Serangga Semut */}
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3">
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
                    <option value="Serangga Semut">Serangga Semut</option>
                    <option value="Rayap Tanah & Kayu">Rayap Tanah & Kayu</option>
                    <option value="Tikus Got & Rumah">Tikus Got & Rumah</option>
                    <option value="Kecoa / Coro">Kecoa / Coro</option>
                    <option value="Kutu Busuk">Kutu Busuk</option>
                    <option value="Lalat & Nyamuk">Lalat & Nyamuk</option>
                  </select>
                </div>
              </div>

              {/* Kolom 2: Jenis Properti Anda */}
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3">
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
              <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2.5 sm:px-4 py-2 sm:py-3">
                <div className="text-zinc-900 shrink-0">
                  {/* Map Pin Icon */}
                  <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm md:text-base font-bold text-zinc-900 focus:outline-hidden cursor-pointer py-0.5"
                  >
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

            {/* Catatan Kaki: *Aktifkan Lokasi Anda */}
            <div className="pt-1.5 sm:pt-2 text-[10px] sm:text-xs text-white/90 font-medium tracking-wide pl-1">
              *Aktifkan Lokasi Anda
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* KONTEN HALAMAN UTAMA (FULL WIDTH EXPANSIVE 100%)         */}
      {/* ======================================================== */}
      <main className="w-full px-2 sm:px-4 md:px-6 lg:px-8 space-y-12 sm:space-y-16 py-10 sm:py-14">
        {/* ======================================================== */}
        {/* 3. SECTION: PENAWARAN TERBAIK UNTUK PROPERTI ANDA (FULL)  */}
        {/* ======================================================== */}
        <section id="penawaran" className="space-y-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Penawaran Terbaik untuk Properti Anda
          </h2>

          <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 aspect-16/9 sm:aspect-21/9 min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[500px]">
            <Image
              src="/images/banner2.jpg"
              alt="Disinfeksi perlindungan Dari Virus Berbahaya"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent flex items-center">
              <div className="p-6 sm:p-12 md:p-16 max-w-2xl text-white space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                  Disinfeksi perlindungan Dari Virus Berbahaya
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-200 leading-relaxed max-w-xl">
                  Sterilisasi menyeluruh dengan formulasi ramah lingkungan berstandar Kemenkes. Efektif membasmi 99,9% virus, kuman, dan bakteri untuk menjaga hunian serta tempat kerja Anda tetap aman, sehat, dan higienis.
                </p>
              </div>
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

          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-[#0c0d10] grid grid-cols-1 md:grid-cols-12">
            {/* Gambar Kiri: Teknisi Instalasi */}
            <div className="md:col-span-7 bg-zinc-900">
              <img
                src="/images/prime-shield-01.jpeg"
                alt="Instalasi Prime Shield-01 oleh Teknisi VECOS"
                className="w-full h-auto block"
              />
            </div>

            {/* Gambar Kanan: 3 Sudut Produk */}
            <div className="md:col-span-5 bg-[#0c0d10] p-3 sm:p-4 md:p-6 flex flex-col">
              {/* Teks Atas Kiri: VECOS Prime Shield-01 */}
              <div className="text-left mb-2 sm:mb-3 shrink-0">
                <div className="text-white text-sm sm:text-base md:text-lg font-black tracking-wide leading-tight uppercase font-sans">
                  VECOS
                </div>
                <div className="text-white text-xs sm:text-sm md:text-base font-bold tracking-tight leading-tight font-sans">
                  Prime Shield-01
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/images/prime_shield_angles.jpg"
                  alt="VECOS Prime Shield-01 Tiga Sudut Tampilan"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. SECTION: PEST TYPE (FULL WIDTH 6 KOLOM)               */}
        {/* ======================================================== */}
        <section id="layanan" className="space-y-6 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Pest Type
          </h2>

          {/* 3 Kolom x 2 Baris */}
          <div className="grid grid-cols-3 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-8 text-center w-full">
            {pestList.map((pest, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#e9ecf0] border-2 border-zinc-200 group-hover:border-[#C81E27] shadow-xs group-hover:shadow-md transition-all">
                  <Image
                    src={pest.image}
                    alt={pest.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-300"
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
        {/* 7. SECTION: SPECIAL OFFER (FULL WIDTH)                   */}
        {/* ======================================================== */}
        <section className="space-y-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Special Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
            <div
              onClick={scrollToSurvey}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/10 md:aspect-square min-h-[240px] sm:min-h-[320px] shadow-sm border border-zinc-200 group cursor-pointer"
            >
              <Image
                src="/images/offer_rumah.jpg"
                alt="Special Offer Rumah Tinggal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center p-3 text-center">
                <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wider uppercase">
                  RUMAH TINGGAL
                </span>
              </div>
            </div>

            <div
              onClick={scrollToSurvey}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/10 md:aspect-square min-h-[240px] sm:min-h-[320px] shadow-sm border border-zinc-200 group cursor-pointer"
            >
              <Image
                src="/images/offer_office.jpg"
                alt="Special Offer Office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center p-3 text-center">
                <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wider uppercase">
                  OFFICE
                </span>
              </div>
            </div>

            <div
              onClick={scrollToSurvey}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/10 md:aspect-square min-h-[240px] sm:min-h-[320px] shadow-sm border border-zinc-200 group cursor-pointer"
            >
              <Image
                src="/images/offer_hotel.jpg"
                alt="Special Offer Hotel & Resort"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center p-3 text-center">
                <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wider uppercase">
                  HOTEL / RESORT
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 8. SECTION: OUR CLIENT (FULL WIDTH 6 LOGO)               */}
        {/* ======================================================== */}
        <section id="tentang" className="space-y-4 w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Our Client
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-3 xs:gap-x-6 gap-y-5 sm:gap-10 items-center justify-items-center py-4 sm:py-8 w-full">
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_uph.svg" alt="UPH" fill className="object-contain" />
            </div>
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_pkos.svg" alt="PKOS" fill className="object-contain" />
            </div>
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_tzuchi.svg" alt="Tzu Chi" fill className="object-contain" />
            </div>
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_examap.svg" alt="ExsaMap" fill className="object-contain" />
            </div>
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_wuling.svg" alt="Wuling" fill className="object-contain" />
            </div>
            <div className="h-10 xs:h-12 sm:h-16 w-full max-w-[95px] xs:max-w-[115px] sm:w-40 sm:max-w-none relative flex items-center justify-center">
              <Image src="/images/logo_permata.svg" alt="Permata Hijau" fill className="object-contain" />
            </div>
          </div>
        </section>

      </main>

      {/* ======================================================== */}
      {/* 9. SECTION: SURVEY FORM, FAQ & FOOTER FLOW (FULL WIDTH)  */}
      {/* ======================================================== */}

      <div className="relative w-full mt-10 sm:mt-16 overflow-visible">
        {/* 1. Banner Survey dengan Foto Customer (Full Width) */}
        <div id="form-survey" className="w-full relative z-0 overflow-hidden shadow-2xl border-t-4 border-[#dc2626] min-h-[480px] sm:min-h-[640px] md:min-h-[740px] lg:min-h-[800px] flex items-center justify-center">
          {/* Foto Customer Asli */}
          <div className="absolute inset-0">
            <Image
              src="/images/customer.jpg"
              alt="Survey & Konsultasi Tim Vecos"
              fill
              className="object-cover object-center"
              priority
            />
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

                <div className="pt-0.5 sm:pt-1">
                  <button
                    type="submit"
                    className="w-full bg-[#E5282E] hover:bg-[#d02026] text-white font-bold text-xs sm:text-sm md:text-base py-2.5 sm:py-3.5 rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    Amankan Properti Anda
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* 2. Card FAQ (Full Width Melayang Di Atas Survey dan Footer) */}
        <div className="w-full relative z-20 -mt-12 sm:-mt-24 md:-mt-28 -mb-12 sm:-mb-24 md:-mb-28">
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
                <li><a href="#" className="hover:underline transition-all">Privacy Policy</a></li>
              </ul>

              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#layanan" className="hover:underline transition-all">Pembasmi Serangga</a></li>
                <li><a href="#layanan" className="hover:underline transition-all">Pembasmi Tikus</a></li>
                <li><a href="#layanan" className="hover:underline transition-all">Anti Rayap</a></li>
                <li><a href="#penawaran" className="hover:underline transition-all">Disinfeksi</a></li>
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

                <div className="text-[8px] sm:text-[11px] text-white/90 leading-tight">
                  <p>©2026 Vecos Indonesia</p>
                  <p>PT Vecos Indonesia Berjaya</p>
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

          {/* Strip Bahasa Paling Bawah Sesuai Gambar Mockup */}
          <div className="bg-[#c8ccd4] py-2.5 px-4 text-center sm:text-left text-[10px] sm:text-xs font-bold text-zinc-800">
            <div className="w-full flex flex-wrap items-center justify-center sm:justify-start gap-1">
              <span className="uppercase text-zinc-900">LANGUAGE :</span>
              <a href="#" className="text-blue-700 hover:underline">INDONESIA</a>
              <span className="text-zinc-600">/</span>
              <a href="#" className="text-blue-700 hover:underline">ENGLISH</a>
              <span className="text-zinc-600">/</span>
              <a href="#" className="text-blue-700 hover:underline">GERMAN</a>
              <span className="text-zinc-600">/</span>
              <a href="#" className="text-blue-700 hover:underline">CHINA</a>
              <span className="text-zinc-600">/</span>
              <a href="#" className="text-blue-700 hover:underline">RUSIA</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
