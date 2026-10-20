"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { articles, Article } from "@/app/data/articles";
import CallCenterButton from "@/app/components/CallCenterButton";

export default function AllArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Ambil semua kategori unik
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return ["Semua", ...Array.from(set)];
  }, []);

  // Filter artikel berdasarkan kategori dan query pencarian
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCat =
        selectedCategory === "Semua" || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full pb-16">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (FULL 1 SCREEN + CENTERED TEXT & BUTTONS) */}
      {/* ======================================================== */}
      <section className="relative w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-[580px] overflow-hidden bg-zinc-950 text-white flex items-center justify-center shadow-2xl">
        {/* Background Banner Image Mobile & Desktop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner/mobile/1.png"
            alt="Semua Artikel VECOS"
            fill
            priority
            className="md:hidden object-cover object-center scale-105"
          />
          <Image
            src="/images/banner/pc/1.png"
            alt="Semua Artikel VECOS"
            fill
            priority
            className="hidden md:block object-cover object-center scale-105"
          />

          {/* Dark Overlay Gradient untuk kontras maksimal */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/70 pointer-events-none" />
        </div>

        {/* Hero Content Container (Tampil di Tengah Penuh) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-center justify-center text-center">
            {/* Judul Hero */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.12] tracking-tight drop-shadow-2xl uppercase text-center max-w-4xl">
              Panduan Lengkap & Solusi Hama VECOS
            </h1>

            {/* Tombol Aksi Hero: Amankan Properti Anda & Call No HP di Tengah */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
              {/* Tombol Amankan Properti Anda */}
              <a
                href="#form-survey"
                className="bg-[#C81E27] hover:bg-[#b01820] active:scale-95 text-white font-extrabold text-xs sm:text-sm md:text-base lg:text-lg px-7 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-xl shadow-red-700/50 hover:shadow-red-700/80 transition-all cursor-pointer inline-flex items-center gap-2.5 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Amankan Properti Anda</span>
              </a>

              {/* Tombol Call Center WhatsApp */}
              <CallCenterButton className="bg-white/95 hover:bg-white active:scale-95 text-zinc-900 font-extrabold text-xs sm:text-sm md:text-base lg:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-xl transition-all cursor-pointer inline-flex items-center gap-2.5 border border-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION ISI ARTIKEL (FILTER, PENCARIAN & GRID ARTIKEL)*/}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {/* Search Bar & Kategori Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-zinc-200/80 shadow-xs mb-8 sm:mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Input Pencarian */}
            <div className="relative flex-1">
              <svg
                className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari topik, masalah hama, atau properti (misal: rayap, restoran, bandara)..."
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#C81E27] focus:bg-white focus:outline-hidden text-zinc-900 placeholder:text-zinc-400 rounded-xl pl-10 pr-9 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs p-1"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="text-xs font-bold text-zinc-500 whitespace-nowrap pl-1">
              Menampilkan {filteredArticles.length} dari {articles.length} artikel
            </div>
          </div>

          {/* Chips Kategori */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-full shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#C81E27] text-white shadow-sm"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Artikel */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Cover */}
                  <Link href={`/artikel/${article.slug}`} className="block relative w-full aspect-16/10 overflow-hidden bg-zinc-100">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#C81E27] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </Link>

                  {/* Body Card */}
                  <div className="p-5 sm:p-6 space-y-2.5">
                    {/* Meta info */}
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-zinc-400">
                      <span>⏱️ {article.readTime}</span>
                      <span>•</span>
                      <span>📅 {article.date}</span>
                    </div>

                    {/* Judul Artikel */}
                    <h2 className="text-base sm:text-lg font-black text-zinc-900 group-hover:text-[#C81E27] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/artikel/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Card */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-400">
                    {article.wordCount} Kata
                  </span>

                  <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-[#C81E27] group-hover:gap-2 transition-all"
                  >
                    <span>Baca Selengkapnya</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-zinc-200 space-y-3">
            <span className="text-4xl block">🔍</span>
            <h3 className="text-lg font-bold text-zinc-800">
              Tidak ada artikel yang cocok
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
              Tidak ditemukan artikel untuk kata kunci "{searchQuery}". Silakan coba kata kunci lain atau pilih kategori Semua.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
              className="mt-2 text-xs font-bold text-[#C81E27] underline"
            >
              Reset Filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
