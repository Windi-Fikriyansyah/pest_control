"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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

// Searchable Select Component for Language Modal
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
        <div className="flex items-center gap-2.5 truncate">
          {selectedOption?.icon && (
            <span className="text-base shrink-0">{selectedOption.icon}</span>
          )}
          <span className="text-xs sm:text-sm font-semibold text-white truncate">
            {selectedOption?.label || "Pilih..."}
          </span>
          {selectedOption?.subLabel && (
            <span className="text-[11px] text-zinc-400 shrink-0">
              ({selectedOption.subLabel})
            </span>
          )}
        </div>
        <svg
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#171c28] border border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-2 border-b border-zinc-800 bg-[#121620]">
            <div className="relative flex items-center">
              <svg
                className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 pointer-events-none"
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

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layananDropdownOpen, setLayananDropdownOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);
  const layananDropdownRef = useRef<HTMLDivElement | null>(null);

  // Preferred Country & Language State
  const [currentCountry, setCurrentCountry] = useState("ID");
  const [currentLang, setCurrentLang] = useState("id");
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [tempCountry, setTempCountry] = useState("ID");
  const [tempLang, setTempLang] = useState("id");

  // Legal Modal State (Privacy, Terms, Cookies)
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "cookie" | null>(null);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [cookieSaved, setCookieSaved] = useState(false);

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

  // Outside click listener for layanan dropdown
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

  return (
    <div className="w-full min-h-screen bg-[#eef1f5] text-zinc-900 selection:bg-red-100 selection:text-red-700 font-sans overflow-x-hidden flex flex-col justify-between">
      {/* ======================================================== */}
      {/* 1. NAVBAR / HEADER PERSIS HALAMAN UTAMA                  */}
      {/* ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#eef1f5] border-b border-zinc-300/80 shadow-xs w-full">
        <div className="w-full flex items-stretch justify-between h-14 sm:h-16">
          {/* Sisi Kiri: Blok Merah VECOS menempel penuh di ujung kiri */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="h-full bg-[#C81E27] hover:bg-[#b01820] text-white flex items-center px-6 sm:px-12 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-wider uppercase font-sans">
                VECOS
              </span>
            </Link>
          </div>

          {/* Sisi Kanan: Menu Navigasi Desktop & Language Toggle menempel ke kanan */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 pr-6 sm:pr-10 lg:pr-14">
            <Link
              href="/#form-survey"
              className="text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors"
            >
              HUBUNGI KAMI
            </Link>

            {/* Dropdown Layanan Kami */}
            <div className="relative" ref={layananDropdownRef}>
              <button
                type="button"
                onClick={() => setLayananDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors cursor-pointer select-none"
                aria-expanded={layananDropdownOpen}
              >
                <span>LAYANAN KAMI</span>
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
                  <Link
                    href="/#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Serangga
                  </Link>
                  <Link
                    href="/#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Pembasmi Tikus
                  </Link>
                  <Link
                    href="/#layanan"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Anti Rayap
                  </Link>
                  <Link
                    href="/#penawaran"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Disinfeksi Ruangan
                  </Link>
                  <Link
                    href="/#prime-shield"
                    onClick={() => setLayananDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-semibold text-zinc-700 hover:bg-red-50 hover:text-[#C81E27]"
                  >
                    Prime Shield-01 Trap
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#tentang"
              className="text-xs lg:text-sm font-extrabold uppercase text-zinc-800 hover:text-[#C81E27] tracking-wider transition-colors"
            >
              TENTANG VECOS
            </Link>



            {/* Language Button [ FLAG / CODE ] + Globe Icon */}
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
            <Link
              href="/#form-survey"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-[#C81E27] py-2 border-b border-zinc-100"
            >
              HUBUNGI KAMI
            </Link>
            <div>
              <button
                type="button"
                onClick={() => setMobileLayananOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100 cursor-pointer"
              >
                <span>LAYANAN KAMI</span>
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
                  <Link
                    href="/#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Pembasmi Serangga
                  </Link>
                  <Link
                    href="/#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Pembasmi Tikus
                  </Link>
                  <Link
                    href="/#layanan"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Anti Rayap Fondasi
                  </Link>
                  <Link
                    href="/#penawaran"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Disinfeksi Ruangan
                  </Link>
                  <Link
                    href="/#prime-shield"
                    onClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block text-xs font-semibold text-zinc-700 hover:text-[#C81E27] py-1"
                  >
                    • Prime Shield-01 Trap
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-zinc-800 py-2 border-b border-zinc-100"
            >
              TENTANG VECOS
            </Link>



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

      {/* Main Content Article */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* ======================================================== */}
      {/* 2. FOOTER PERSIS HALAMAN UTAMA (MERAH PENUH #E02428)      */}
      {/* ======================================================== */}
      <footer className="w-full bg-[#E02428] text-white pt-12 sm:pt-16 pb-0 shadow-2xl relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
          {/* 2 Kolom Link Navigasi Putih */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/#beranda" className="hover:underline transition-all">Beranda</Link></li>
              <li><Link href="/#form-survey" className="hover:underline transition-all">Hubungi kami</Link></li>
              <li><Link href="/#layanan" className="hover:underline transition-all">Layanan kami</Link></li>
              <li><Link href="/#tentang" className="hover:underline transition-all">Tentang Vecos</Link></li>

            </ul>

            <ul className="space-y-1.5 sm:space-y-2">
              <li><Link href="/#layanan" className="hover:underline transition-all">Pembasmi Serangga</Link></li>
              <li><Link href="/#layanan" className="hover:underline transition-all">Pembasmi Tikus</Link></li>
              <li><Link href="/#layanan" className="hover:underline transition-all">Anti Rayap</Link></li>
              <li><Link href="/#penawaran" className="hover:underline transition-all">Disinfeksi</Link></li>
              <li><Link href="/#prime-shield" className="hover:underline transition-all">Prime Shield-01</Link></li>
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

      {/* ======================================================== */}
      {/* GLOBAL MODALS (ROOT LEVEL Z-[999])                       */}
      {/* ======================================================== */}

      {/* 1. Modal Legalitas (Kebijakan Privasi, Ketentuan, Cookie) */}
      {legalModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-zinc-200 text-zinc-900 p-6 sm:p-8 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h3 className="text-base sm:text-lg font-black text-zinc-950 uppercase tracking-wide">
                {legalModal === "privacy" && "Kebijakan Privasi VECOS"}
                {legalModal === "terms" && "Ketentuan Layanan VECOS"}
                {legalModal === "cookie" && "Pusat Preferensi Cookie"}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#C81E27] hover:text-white text-zinc-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
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

      {/* 2. Modal Preferensi Bahasa & Negara */}
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
