"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CallCenterButton from "@/app/components/CallCenterButton";
import LayananDropdownMenu from "@/app/components/LayananDropdownMenu";

interface OfferSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  slug: string;
  article: {
    title: string;
    date: string;
    readTime: string;
    content: string[];
    keyPoints: string[];
  };
}

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

export default function HubungiKamiPage() {
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

  // Legal Modals State (Kebijakan Privasi, Ketentuan Layanan, Pengaturan Cookie)
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "cookie" | null>(null);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [cookieSaved, setCookieSaved] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<OfferSlide | null>(null);

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

  // State dan scroll listener untuk tombol Scroll to Top
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowScrollTop(window.scrollY > 120);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // State & handler untuk Menu Popup Chat Widget
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [csReferenceCode, setCsReferenceCode] = useState("");
  const chatWidgetRef = useRef<HTMLDivElement | null>(null);

  // Generate Kode Referensi CS setiap kali menu chat dibuka
  useEffect(() => {
    if (isChatMenuOpen) {
      const now = new Date();
      const y = String(now.getFullYear()).slice(-2);
      const m = String(now.getMonth() + 1).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
      setCsReferenceCode(`${y}${m}${d}-${rand}`);
    }
  }, [isChatMenuOpen]);

  // Tutup menu popup chat jika klik di luar area widget
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (chatWidgetRef.current && !chatWidgetRef.current.contains(e.target as Node)) {
        setIsChatMenuOpen(false);
      }
    };
    if (isChatMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isChatMenuOpen]);

  const scrollToSurvey = () => {
    const surveyElem = document.getElementById("form-survey");
    if (surveyElem) {
      surveyElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAmankanPropertiClick = () => {
    setIsChatMenuOpen(false);
    scrollToSurvey();
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsChatMenuOpen(false);
    const now = new Date();
    const y = String(now.getFullYear()).slice(-2);
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = csReferenceCode || `${y}${m}${d}-${rand}`;
    const text = `Halo Customer Service, saya ingin menyampaikan pertanyaan/komplain. (Kode Referensi CS ${code})`;
    window.open(`https://wa.me/6285743681500?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
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
  const [submittedCode, setSubmittedCode] = useState("");
  const [waLink, setWaLink] = useState("");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const now = new Date();
    const y = String(now.getFullYear()).slice(-2);
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const surveyCode = `VCS-SRV-${y}${m}${d}-${randomHex}`;

    const dateFormatted = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const timeFormatted = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const message =
      `*FORMULIR PENGAJUAN SURVEY VECOS*
━━━━━━━━━━━━━━━━━━━━━
📋 *Kode Survey:* ${surveyCode}
📅 *Waktu:* ${dateFormatted}, ${timeFormatted} WIB

👤 *Nama / Perusahaan:*
${formData.name || "-"}

🏢 *Jenis Properti:*
${formData.propertyType || "-"}

🦟 *Jenis Hama:*
${formData.pestType || "-"}

📝 *Keluhan Anda:*
${formData.complaint || "-"}

📍 *Alamat / Lokasi:*
${formData.location || "-"}

━━━━━━━━━━━━━━━━━━━━━
Halo Tim VECOS, saya ingin mengajukan jadwal survey lokasi dan konsultasi pengendalian hama untuk data di atas. Mohon konfirmasi jadwalnya. Terima kasih.`;

    const waUrl = `https://wa.me/6285743681500?text=${encodeURIComponent(message)}`;

    setSubmittedCode(surveyCode);
    setWaLink(waUrl);
    setFormSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }
  };

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
      <header className="sticky top-0 z-50 bg-[#eef1f5] border-b border-zinc-300/80 shadow-xs w-full">
        <div className="w-full flex items-stretch justify-between h-14 sm:h-16">
          {/* Sisi Kiri: Blok Merah VECOS menempel penuh di ujung kiri */}
          <div className="flex items-center shrink-0">
            <a
              href="/"
              className="h-full bg-[#C81E27] hover:bg-[#b01820] text-white flex items-center px-6 sm:px-12 transition-colors"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-wider uppercase font-sans">
                VECOS
              </span>
            </a>
          </div>

          {/* Sisi Kanan: Menu Navigasi Desktop & Language Toggle menempel ke kanan */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 pr-6 sm:pr-10 lg:pr-14">
            <Link
              href="/hubungi-kami"
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[360px] sm:w-[410px] md:w-[420px] bg-white rounded-2xl shadow-2xl border border-zinc-200/90 p-2 sm:p-3 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                  <LayananDropdownMenu
                    onItemClick={() => setLayananDropdownOpen(false)}
                    isArticlePage={false}
                    variant="desktop"
                  />
                </div>
              )}
            </div>

            <a
              href="/tentang-vecos"
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
            <Link
              href="/hubungi-kami"
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
                <div className="py-1 bg-white border-b border-zinc-100 animate-in fade-in-50">
                  <LayananDropdownMenu
                    onItemClick={() => {
                      setMobileLayananOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    isArticlePage={false}
                    variant="mobile"
                  />
                </div>
              )}
            </div>
            <a
              href="/tentang-vecos"
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

      {/* HERO SECTION */}
      <section className="relative w-full bg-[#1e232a] text-white py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-zinc-400 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
            <span>🛡️</span>
            <span>Jam Oprasional : 08:00 – 17:00</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Lindungi Properti &amp; Bisnis Anda
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-zinc-300 font-medium max-w-3xl mx-auto">
            Konsultasi Bebas Hama Sekarang
          </p>
        </div>
      </section>

      {/* SECTION KONTAK KAMI */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
            Kontak Kami
          </h2>
          <div className="w-16 h-1 bg-[#C81E27] mx-auto mt-2.5 rounded-full" />
          <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-xl mx-auto font-medium">
            Hubungi tim konsultan dan teknisi spesialis hama kami melalui saluran komunikasi resmi di bawah ini:
          </p>
        </div>

        {/* 4 Kartu Informasi Kontak Kami */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Telepon & WhatsApp */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                📞
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-base sm:text-lg">
                  Telepon &amp; WhatsApp
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Respon Cepat Call Center Resmi
                </p>
              </div>
              <p className="text-sm font-bold text-zinc-800 font-mono">
                0857-4368-1500
              </p>
            </div>
            <a
              href="https://wa.me/6285743681500?text=Halo%20Tim%20VECOS%2C%20saya%20ingin%20konsultasi%20layanan%20pengendalian%20hama."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <span>Hubungi Sekarang</span>
              <span>↗</span>
            </a>
          </div>

          {/* Card 2: Jam Operasional */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🕒
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-base sm:text-lg">
                  Jam Operasional
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Senin – Sabtu
                </p>
              </div>
              <p className="text-sm font-extrabold text-zinc-900">
                08:00 – 17:00 WIB
              </p>
            </div>
            <div className="mt-5 py-2 px-3 bg-zinc-50 rounded-xl border border-zinc-200 text-[11px] text-zinc-600 text-center font-medium">
              Layanan survey &amp; darurat siaga
            </div>
          </div>

          {/* Card 3: Email Resmi */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-base sm:text-lg">
                  Email Resmi
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Pertanyaan &amp; Kerjasama B2B
                </p>
              </div>
              <p className="text-xs sm:text-sm font-bold text-zinc-800 break-all font-mono">
                info@vecos.co.id
              </p>
            </div>
            <a
              href="mailto:info@vecos.co.id"
              className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              <span>Kirim Email</span>
              <span>✉</span>
            </a>
          </div>

          {/* Card 4: Legalitas & Kantor */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-zinc-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🏢
              </div>
              <div>
                <h3 className="font-extrabold text-zinc-900 text-base sm:text-lg">
                  Legalitas &amp; Kantor
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  PT Vecos Intitama Mulya
                </p>
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                NIB: <span className="font-mono font-bold text-zinc-900">1903240165201</span><br />
                Sertifikasi Tenaga Ahli Kemenkes RI
              </p>
            </div>
            <div className="mt-5 py-2 px-3 bg-amber-50/80 rounded-xl border border-amber-200 text-[11px] text-amber-800 text-center font-bold">
              ✓ Berizin Resmi &amp; Terverifikasi
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER FLOW STARTING FROM FORM SURVEY TO COPYRIGHT */}
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
              <div className="p-5 sm:p-8 bg-white/95 backdrop-blur-md border border-emerald-400 rounded-2xl text-center space-y-3 max-w-sm sm:max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-md">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-xl font-black text-zinc-900">
                    Permintaan Survey Terkirim!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Formulir Anda telah diteruskan ke WhatsApp Call Center VECOS.
                  </p>
                </div>

                {submittedCode && (
                  <div className="bg-zinc-100 border border-zinc-200 rounded-xl p-3 text-center space-y-0.5">
                    <span className="text-[11px] font-medium text-zinc-500 block uppercase tracking-wider">
                      Kode Pengajuan Survey
                    </span>
                    <span className="text-base sm:text-lg font-mono font-black text-[#C81E27] tracking-wider block">
                      {submittedCode}
                    </span>
                  </div>
                )}

                <div className="pt-2 flex flex-col gap-2">
                  {waLink && (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84a8.196 8.196 0 0 1-5.83 2.41c-1.47 0-2.92-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.24-8.25" />
                      </svg>
                      <span>Buka Chat WhatsApp</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        propertyType: "",
                        pestType: "",
                        complaint: "",
                        location: "",
                      });
                    }}
                    className="text-xs text-zinc-500 hover:text-zinc-800 font-semibold py-1 transition-colors cursor-pointer"
                  >
                    ← Kirim Formulir Baru
                  </button>
                </div>
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
                <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a3e48] tracking-tight leading-tight">
                  <span className="block">Pertanyaan</span>
                  <span className="block">Seputar</span>
                  <span className="block">Pengendalian Hama</span>
                  <span className="block text-primary">Vecos</span>
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
          <div className="w-full px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12 pb-8 sm:pb-12 border-b border-white/20">
            {/* 1. Baris Teks Bahan Kimia & Logo Produsen Terpercaya */}
            <div className="space-y-3 sm:space-y-4 max-w-4xl">
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                Kami menggunakan bahan kimia berstandar industri<br className="hidden sm:inline" />
                {" "}dari produsen terpercaya yang ramah lingkungan<br className="hidden sm:inline" />
                {" "}dan aman untuk area hunian
              </p>

              {/* Strip Logo Bahan Kimia Terpercaya (Siap diganti oleh user) */}
              <div className="pt-1">
                <div className="relative max-w-2xl w-full">
                  <Image
                    src="/images/footer-chemical-partners.png"
                    alt="Mitra Bahan Kimia Berstandar Industri: Sumitomo Chemical, Bayer, BASF, Exterra, Envu, Syngenta"
                    width={725}
                    height={75}
                    className="w-full h-auto object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 2. Grid Navigasi, Layanan & Kontak Brand VECOS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-2 sm:pt-4 items-start">
              {/* Kolom 1: Navigasi Utama */}
              <div className="md:col-span-3 lg:col-span-3">
                <ul className="space-y-2.5 sm:space-y-3.5 text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed">
                  <li><a href="#beranda" className="hover:underline transition-all">Beranda</a></li>
                  <li><Link href="/hubungi-kami" className="hover:underline transition-all">Hubungi kami</Link></li>
                  <li><a href="#layanan" className="hover:underline transition-all">Layanan kami</a></li>
                  <li><Link href="/tentang-vecos" className="hover:underline transition-all">Tentang Vecos</Link></li>
                </ul>
              </div>

              {/* Kolom 2: Layanan Kami */}
              <div className="md:col-span-5 lg:col-span-5">
                <ul className="space-y-2.5 sm:space-y-3.5 text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed">
                  <li><Link href="/artikel/pengendalian-serangga" className="hover:underline transition-all">Pengendalian Serangga</Link></li>
                  <li><Link href="/artikel/pengendalian-tikus" className="hover:underline transition-all">Pengendalian Tikus</Link></li>
                  <li><Link href="/artikel/sistem-proteksi-rayap" className="hover:underline transition-all">Sistem Proteksi Rayap</Link></li>
                  <li><Link href="/artikel/disinfeksi-sterilisasi" className="hover:underline transition-all">Disinfeksi & Sterilisasi</Link></li>
                  <li><Link href="/artikel/prime-shield-01-trap" className="hover:underline transition-all">Prime Shield-01</Link></li>
                  <li><Link href="/artikel/vecos-proofing-defender" className="hover:underline transition-all">Vecos Proofing Defender</Link></li>
                </ul>
              </div>

              {/* Kolom 3: Brand VECOS, Sosmed, NIB & Call Center */}
              <div className="md:col-span-4 lg:col-span-4 space-y-3 sm:space-y-4">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-white block font-sans">
                  VECOS
                </span>

                {/* Ikon Sosial Media (Instagram, Email, WhatsApp, Facebook) */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/vecos.id?cplk=NjViZm5jemRlZGtl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-black/35 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@vecos.co.id"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-black/35 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs"
                    aria-label="Email"
                  >
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6285743681500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-black/35 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.84a8.196 8.196 0 0 1-5.83 2.41c-1.47 0-2.92-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.24-8.25" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1DpUJuH49y/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/20 hover:bg-black/35 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </a>
                </div>

                {/* Detail PT & NIB */}
                <div className="space-y-0.5 text-white">
                  <div className="text-sm sm:text-base font-bold">
                    PT Vecos Intitama Mulya
                  </div>
                  <div className="text-xs sm:text-sm text-white/90">
                    Nomor Induk Berusaha
                  </div>
                  <div className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                    NIB : 1903240165201
                  </div>
                </div>

                {/* Call Center Pill Button */}
                <div className="pt-1">
                  <a
                    href="https://wa.me/6285743681500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#E02428] font-bold text-xs sm:text-sm transition-all shadow-md group"
                  >
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.67.25-1.02A11.36 11.36 0 0 1 8.5 4.31c0-.55-.45-1-1-1H4.11c-.55 0-1 .45-1 1C3.11 13.58 10.42 20.89 19.42 20.89c.55 0 1-.45 1-1v-3.51c0-.55-.45-1-1-1z" />
                    </svg>
                    <span>0857-4368-1500</span>
                  </a>
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
                    PT Vecos Intitama Mulya • Pembaruan Terakhir 2026
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
                  Selamat datang di VECOS (PT Vecos Intitama Mulya). Kami berkomitmen penuh untuk menghormati dan menjaga kerahasiaan data pribadi pelanggan, baik pemilik hunian pribadi maupun entitas bisnis/komersial.
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
                  Ketentuan Layanan ini mengatur penggunaan jasa pengendalian hama terpadu (Integrated Pest Management) yang disediakan oleh PT Vecos Intitama Mulya.
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

      {/* Floating Action Widget & Popup Menu: Fixed di Ujung Bawah Kanan (Warna Merah Transparan) */}
      <div
        ref={chatWidgetRef}
        className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex items-end gap-2.5 sm:gap-3 transition-opacity duration-300 ${isAnyModalOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        {/* Popup Menu Dialog (Tampil saat tombol icon chat diklik) */}
        <div
          className={`bg-[#C81E27]/85 backdrop-blur-md border border-white/20 rounded-[18px] shadow-2xl shadow-red-950/50 p-2 sm:p-2.5 text-white w-64 sm:w-72 transition-all duration-200 ease-out origin-bottom-right ${isChatMenuOpen
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-x-3 scale-95 pointer-events-none"
            }`}
        >
          {/* Menu 1: Amankan Properti Anda */}
          <button
            type="button"
            onClick={handleAmankanPropertiClick}
            className="w-full flex items-center gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-xl hover:bg-white/15 active:scale-98 transition-all cursor-pointer text-left group"
          >
            {/* Icon Headset / Amankan Properti Sesuai Referensi */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
            </div>
            <span className="font-bold text-xs sm:text-sm text-white flex-1">Amankan Properti Anda</span>
            {/* Arrow diagonal ↗ */}
            <svg
              className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>

          {/* Menu 2: Whatsapp dengan Pesan Template CS Referensi */}
          <a
            href="https://wa.me/6285743681500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full flex items-center gap-3 px-3 py-2.5 sm:px-3.5 sm:py-3 rounded-xl hover:bg-white/15 active:scale-98 transition-all cursor-pointer text-left group mt-0.5"
          >
            {/* Icon WhatsApp Sesuai Referensi */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="font-bold text-xs sm:text-sm text-white flex-1">Whatsapp</span>
            {/* Arrow diagonal ↗ */}
            <svg
              className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        {/* Capsule Widget Vertikal (Warna Merah Transparan) */}
        <div
          className={`flex flex-col items-center justify-between bg-[#C81E27]/85 backdrop-blur-md text-white rounded-[14px] shadow-2xl border border-white/20 w-11 sm:w-12 transition-all duration-300 ease-in-out overflow-hidden ${showScrollTop ? "h-24 sm:h-[102px] py-1.5" : "h-11 sm:h-12 py-0"
            }`}
        >
          {/* Tombol Atas: Scroll Kembali ke Atas (Hilang saat di paling atas, muncul saat scroll turun) */}
          <div
            className={`w-full flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden ${showScrollTop
              ? "h-11 sm:h-12 opacity-100 scale-100 pointer-events-auto"
              : "h-0 opacity-0 scale-75 pointer-events-none"
              }`}
          >
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full h-full flex items-center justify-center text-white/90 hover:text-white hover:scale-110 active:scale-90 transition-all cursor-pointer group"
              title="Kembali ke Atas"
              aria-label="Scroll to top"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>

          {/* Tombol Bawah: Klik untuk Toggle Menu Chat */}
          <div className="w-full h-11 sm:h-12 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsChatMenuOpen((prev) => !prev)}
              className="w-full h-full flex items-center justify-center text-white/90 hover:text-white hover:scale-110 active:scale-90 transition-all cursor-pointer group"
              title="Menu Bantuan & Chat WhatsApp"
              aria-label="Menu Bantuan & Chat WhatsApp"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isChatMenuOpen ? "scale-115 text-white" : "group-hover:scale-105"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <line x1="7.5" y1="9" x2="16.5" y2="9" strokeWidth="2.2" />
                <line x1="7.5" y1="13" x2="13.5" y2="13" strokeWidth="2.2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
