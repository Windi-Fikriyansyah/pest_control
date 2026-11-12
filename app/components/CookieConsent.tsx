"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
}

const STORAGE_KEY = "vecos_cookie_consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  // Status toggle preferensi
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  // Kunci scroll halaman web saat modal cookie tampil
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  // Cek apakah user sudah pernah menentukan preferensi sebelumnya
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CookiePreferences = JSON.parse(saved);
        setAnalyticsEnabled(parsed.analytics);
        setMarketingEnabled(parsed.marketing);
        setHasConsented(true);
        setIsVisible(false);
        applyConsent(parsed);
      } else {
        // Beri jeda kecil agar pemuatan halaman awal mulus sebelum popup muncul
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Menerapkan status consent ke window / analytics & trigger event
  const applyConsent = (prefs: CookiePreferences) => {
    if (typeof window === "undefined") return;

    (window as any).vecosCookieConsent = prefs;

    // Trigger Custom Event agar script pihak ketiga (misal: GTM, Pixel) bisa mendengar perubahan
    window.dispatchEvent(
      new CustomEvent("cookieConsentChange", {
        detail: prefs,
      })
    );

    // Integrasi otomatis Google Consent Mode v2 jika gtag terpasang
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
      });
    }
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore localStorage errors
    }

    setAnalyticsEnabled(analytics);
    setMarketingEnabled(marketing);
    setHasConsented(true);
    setIsVisible(false);
    setShowDetails(false);
    applyConsent(prefs);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleRejectNonEssential = () => {
    savePreferences(false, false);
  };

  const handleSaveCustom = () => {
    savePreferences(analyticsEnabled, marketingEnabled);
  };

  const handleOpenPreferences = () => {
    setShowDetails(true);
    setIsVisible(true);
  };

  return (
    <>
      {/* 1. Tombol Mengambang (Reopen Trigger) di Sudut Kiri Bawah saat consent sudah disimpan */}
      {hasConsented && !isVisible && (
        <button
          type="button"
          onClick={handleOpenPreferences}
          className="fixed bottom-5 left-4 sm:left-5 z-50 bg-white hover:bg-zinc-50 text-zinc-800 hover:text-[#C81E27] py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-full shadow-xl border border-zinc-300 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C81E27] flex items-center gap-1.5 sm:gap-2 group backdrop-blur-xs cursor-pointer"
          title="Pengaturan Privasi & Cookie"
          aria-label="Buka Pengaturan Cookie"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#C81E27] transition-transform group-hover:rotate-12 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
            <path d="M11 17v.01" />
            <path d="M7 14v.01" />
          </svg>
          <span className="text-xs font-bold text-zinc-800 group-hover:text-[#C81E27]">
            Cookie
          </span>
        </button>
      )}

      {/* 2. Pop-up Cookie Modal: Bottom Sheet di Mobile, Centered Modal di Desktop */}
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300"
        >
          <div className="relative w-full sm:max-w-[480px] bg-white border-t sm:border border-zinc-200/90 rounded-t-[24px] rounded-b-none sm:rounded-[28px] shadow-2xl shadow-zinc-950/30 p-5 sm:p-8 pb-6 sm:pb-8 text-zinc-900 animate-in slide-in-from-bottom-6 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 max-h-[90vh] sm:max-h-none overflow-y-auto">
            {/* Indikator Handle Bar khusus Mobile */}
            <div className="w-10 h-1 bg-zinc-300 rounded-full mx-auto mb-3 sm:hidden" />

            {/* Header: Logo VECOS Cookie */}
            <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
              <div className="relative w-40 sm:w-52 h-11 sm:h-14 mb-3 sm:mb-4">
                <Image
                  src="/images/cookie.png"
                  alt="VECOS Pest Control"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h2
                id="cookie-consent-title"
                className="text-sm sm:text-[17px] font-bold text-zinc-900 tracking-tight leading-snug"
              >
                {showDetails
                  ? "Pengaturan Preferensi Cookie"
                  : "Selamat datang di VECOS, Privasi Anda Berharga!"}
              </h2>
            </div>

            {/* Tampilan 1: Tampilan Utama (Sesuai Layout Garuda Screenshot) */}
            {!showDetails ? (
              <div>
                {/* Scrollable Text Area */}
                <div className="max-h-[220px] sm:max-h-[250px] overflow-y-auto pr-2 text-xs sm:text-[13px] leading-relaxed text-zinc-600 space-y-3.5 mb-6 border-r border-transparent hover:border-zinc-300">
                  <p>
                    Di vecos.co.id, kami menggunakan cookie untuk membantu situs kami
                    berfungsi dengan baik, untuk analitik lalu lintas kunjungan (<strong className="text-zinc-800">Cookie Analitik</strong>), serta menyajikan promosi dan penawaran yang dipersonalisasi berdasarkan preferensi Anda (<strong className="text-zinc-800">Cookie Iklan</strong>).
                  </p>

                  <p>
                    Dengan mengklik &quot;Terima Semua&quot;, Anda menyetujui penggunaan semua
                    cookie. Dengan mengklik &quot;Tolak&quot;, Anda menolak semua cookie selain
                    cookie penting. Atau, Anda dapat memperbarui preferensi Anda dengan
                    mengklik &quot;Preferensi Cookie&quot;.
                  </p>

                  <p className="text-zinc-500 text-[11px] sm:text-xs pt-1">
                    Baca selengkapnya{" "}
                    <Link
                      href="/tentang"
                      className="text-zinc-800 underline hover:text-[#C81E27] font-medium transition-colors"
                    >
                      Kebijakan Privasi
                    </Link>
                    ,{" "}
                    <Link
                      href="/tentang-vecos"
                      className="text-zinc-800 underline hover:text-[#C81E27] font-medium transition-colors"
                    >
                      Syarat Penggunaan
                    </Link>
                    , dan{" "}
                    <button
                      type="button"
                      onClick={() => setShowDetails(true)}
                      className="text-zinc-800 underline hover:text-[#C81E27] font-medium cursor-pointer transition-colors"
                    >
                      Kebijakan Cookies
                    </button>
                    .
                  </p>
                </div>

                {/* Tombol Aksi Vertikal (Stacked Buttons) */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full bg-[#C81E27] hover:bg-[#b01820] active:bg-[#96141c] text-white font-bold py-3 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm shadow-md shadow-red-700/20 hover:shadow-red-700/30 transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Terima Semua
                  </button>

                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="w-full bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-800 font-semibold py-3 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm border border-zinc-200 transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    Tolak
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDetails(true)}
                    className="w-full bg-white hover:bg-zinc-50 active:bg-zinc-100 text-zinc-700 hover:text-zinc-900 font-semibold py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm border border-zinc-300 shadow-xs transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    Preferensi Cookie
                  </button>
                </div>
              </div>
            ) : (
              /* Tampilan 2: Detail Preferensi / Switch Options */
              <div className="space-y-3.5">
                <p className="text-xs text-zinc-600 leading-relaxed text-center mb-1">
                  Pilih jenis cookie yang Anda izinkan. Cookie esensial wajib aktif untuk keamanan dan fungsi dasar situs.
                </p>

                <div className="space-y-2.5 sm:space-y-3">
                  {/* Option 1: Cookie Esensial */}
                  <div className="p-3 sm:p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl sm:rounded-2xl">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 block">
                          Cookie Esensial
                        </span>
                        <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
                          Dibutuhkan untuk keamanan, navigasi, dan fungsi dasar website.
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        Selalu Aktif
                      </span>
                    </div>
                  </div>

                  {/* Option 2: Cookie Analitik */}
                  <div className="p-3 sm:p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl sm:rounded-2xl">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 block">
                          Cookie Analitik
                        </span>
                        <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
                          Membantu kami memahami statistik pengunjung, durasi kunjungan, dan halaman terpopuler untuk peningkatan performa.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={analyticsEnabled}
                          onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C81E27] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C81E27]"></div>
                      </label>
                    </div>
                  </div>

                  {/* Option 3: Cookie Iklan & Pemasaran */}
                  <div className="p-3 sm:p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl sm:rounded-2xl">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-zinc-900 block">
                          Cookie Iklan & Pemasaran
                        </span>
                        <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
                          Digunakan untuk menyajikan iklan dan penawaran promo yang relevan bagi Anda di platform mitra kami (Google, Meta, dll).
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={marketingEnabled}
                          onChange={(e) => setMarketingEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#C81E27] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C81E27]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Tombol Simpan & Kembali */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full bg-[#C81E27] hover:bg-[#b01820] active:bg-[#96141c] text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm shadow-md shadow-red-700/20 hover:shadow-red-700/30 transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Terima Semua
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="w-full bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-zinc-800 font-semibold py-2.5 sm:py-3 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm border border-zinc-200 transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    Simpan Pilihan Kustom
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDetails(false)}
                    className="w-full bg-white hover:bg-zinc-50 active:bg-zinc-100 text-zinc-600 hover:text-zinc-800 font-semibold py-2 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm border border-zinc-300 transition-all text-center cursor-pointer"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
