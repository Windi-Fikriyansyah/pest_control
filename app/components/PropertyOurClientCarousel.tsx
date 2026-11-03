"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ClientLogo {
  name: string;
  image: string;
  extraZoom?: boolean;
  noZoom?: boolean;
}

// Data client logos diambil dari section Our Client di halaman utama
const clientLogos: ClientLogo[] = [
  { name: "Logo 1", image: "/images/logo/1.png", extraZoom: true },
  { name: "Logo 2", image: "/images/logo/2.png" },
  { name: "Logo 3", image: "/images/logo/3.png", extraZoom: true },
  { name: "Logo 4", image: "/images/logo/4.png" },
  { name: "Logo 5", image: "/images/logo/5.png" },
  { name: "Logo 6", image: "/images/logo/6.png", noZoom: true },
  { name: "Logo 7", image: "/images/logo/7.png", extraZoom: true },
  { name: "Logo 8", image: "/images/logo/8.png" },
  { name: "Logo 9", image: "/images/logo/9.png" },
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

export default function PropertyOurClientCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Bagi menjadi 3 slide dengan masing-masing 6 logo (3 kolom x 2 baris)
  const itemsPerSlide = 6;
  const slides: ClientLogo[][] = [];
  for (let i = 0; i < clientLogos.length; i += itemsPerSlide) {
    slides.push(clientLogos.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Carousel otomatis bergeser setiap 4 detik
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  // Touch Swipe Handlers untuk Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      aria-label="Our Client"
      className="my-10 sm:my-14 rounded-3xl bg-gradient-to-br from-zinc-50 via-white to-red-50/20 border border-zinc-200/90 shadow-sm p-5 sm:p-8 md:p-10 transition-all overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header Section: Judul, Subjudul & Navigasi Panah */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/70 border border-red-200/80 text-[#C81E27] text-[11px] font-black uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C81E27] animate-pulse" />
            <span>Klien Terpercaya</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight leading-tight">
            Our Client
          </h3>
        </div>

        {/* Tombol Navigasi Carousel (Kiri & Kanan) */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Lihat klien sebelumnya"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#C81E27] text-zinc-700 hover:text-white border border-zinc-300 shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Indikator Halaman Angka */}
          <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full text-xs font-extrabold text-zinc-700 border border-zinc-200 shadow-2xs">
            <span className="text-[#C81E27] font-black">{currentSlide + 1}</span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-500">{totalSlides}</span>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Lihat klien selanjutnya"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C81E27] hover:bg-[#b01820] text-white shadow-xs shadow-red-700/20 flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Track Container (3 Kolom x 2 Baris) */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slideItems, sIdx) => (
            <div key={sIdx} className="w-full shrink-0">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
                {slideItems.map((client, idx) => (
                  <div
                    key={`${sIdx}-${idx}-${client.name}`}
                    className="h-16 sm:h-20 md:h-24 w-full px-2 sm:px-4 py-2 bg-white rounded-xl sm:rounded-2xl border border-zinc-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex items-center justify-center group"
                    title={client.name}
                  >
                    <div className="relative w-full h-full max-h-10 sm:max-h-14 flex items-center justify-center">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        className={`object-contain transition-transform duration-300 ${
                          client.noZoom || client.image.includes("6.png")
                            ? "scale-100 group-hover:scale-105"
                            : client.extraZoom
                              ? "scale-[1.40] sm:scale-[1.50] group-hover:scale-[1.55]"
                              : "scale-115 sm:scale-125 group-hover:scale-130"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indikator Titik (Dots) di Bawah Carousel */}
      <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Pindah ke slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentSlide === idx
                ? "w-7 sm:w-8 bg-[#C81E27]"
                : "w-2 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

