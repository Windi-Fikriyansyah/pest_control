"use client";

import React, { useState, useEffect } from "react";

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
          className="fixed bottom-5 left-5 z-40 bg-white/95 hover:bg-white text-zinc-700 hover:text-emerald-700 p-2.5 sm:p-3 rounded-full shadow-lg border border-zinc-200/90 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 flex items-center gap-2 group backdrop-blur-xs"
          title="Pengaturan Privasi & Cookie"
          aria-label="Buka Pengaturan Cookie"
        >
          <svg
            className="w-5 h-5 text-emerald-600 transition-transform group-hover:rotate-12"
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
          <span className="text-xs font-semibold pr-1 hidden sm:inline-block">
            Cookie
          </span>
        </button>
      )}

      {/* 2. Pop-up Cookie Banner / Modal */}
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:max-w-lg z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zinc-200/90 p-5 sm:p-6 text-zinc-900 transition-all">
            {/* Header Popup */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl shrink-0 border border-emerald-100">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  id="cookie-consent-title"
                  className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight"
                >
                  {showDetails ? "Pengaturan Cookie & Privasi" : "Preferensi Cookie & Privasi"}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  PT VECOS Indonesia Sejahtera (vecos.co.id)
                </p>
              </div>
            </div>

            {/* Tampilan 1: Banner Ringkas Awal */}
            {!showDetails ? (
              <div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                  Kami menggunakan cookie untuk memastikan situs berfungsi dengan aman,
                  menganalisis trafik kunjungan (<strong>Cookie Analitik</strong>), serta
                  menampilkan promosi dan penawaran relevan bagi Anda (<strong>Cookie Iklan</strong>).
                </p>

                {/* Badge Kategori Cookie */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    Esensial
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Analitik
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-800 border border-purple-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    Iklan & Pemasaran
                  </span>
                </div>

                {/* Tombol Aksi Utama */}
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    Terima Semua
                  </button>
                  <button
                    type="button"
                    onClick={handleRejectNonEssential}
                    className="w-full sm:flex-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors text-center focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  >
                    Tolak Selain Esensial
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => setShowDetails(true)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
                  >
                    Atur Preferensi Kustom &rarr;
                  </button>
                </div>
              </div>
            ) : (
              /* Tampilan 2: Detail Preferensi / Switch Options */
              <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Pilih jenis cookie yang Anda izinkan. Cookie esensial wajib aktif untuk keamanan dan fungsi dasar situs.
                </p>

                {/* Option 1: Cookie Esensial */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-xs sm:text-sm font-bold text-zinc-900 block">
                        Cookie Esensial
                      </span>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Dibutuhkan untuk keamanan, navigasi, dan fungsi dasar situs.
                      </p>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      Selalu Aktif
                    </span>
                  </div>
                </div>

                {/* Option 2: Cookie Analitik */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
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
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                </div>

                {/* Option 3: Cookie Iklan & Pemasaran */}
                <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
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
                      <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>
                </div>

                {/* Tombol Simpan Preferensi Detail */}
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-colors text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    Simpan Pilihan
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDetails(false)}
                    className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold py-2.5 px-3 rounded-xl text-xs sm:text-sm transition-colors text-center"
                  >
                    Batal
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

