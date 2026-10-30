"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LayananDropdownMenu from "@/app/components/LayananDropdownMenu";

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
// DATA SPECIAL OFFER (12 LAYANAN BERDASARKAN FORM HERO SECTION)
// =========================================================================
const specialOfferServices = [
  {
    id: 1,
    title: "RUMAH TINGGAL",
    image: "/images/offer_rumah.jpg",
    slug: "rumah",
  },
  {
    id: 2,
    title: "OFFICE / PERKANTORAN",
    image: "/images/offer_office.jpg",
    slug: "kantor",
  },
  {
    id: 3,
    title: "HOTEL & RESORT",
    image: "/images/offer_hotel.jpg",
    slug: "hotel",
  },
  {
    id: 4,
    title: "RESTORAN & KULINER",
    image: "/images/offer/restaurant.jpeg",
    slug: "restauran",
  },
  {
    id: 5,
    title: "KEDAI KOPI",
    image: "/images/penawaran/cafe.png",
    slug: "cafe",
  },
  {
    id: 6,
    title: "MANUFAKTUR",
    image: "/images/penawaran/manufaktur.png",
    slug: "pabrik-makanan",
  },
  {
    id: 7,
    title: "RUMAH SAKIT & MEDIS",
    image: "/images/offer/hospital.jpeg",
    slug: "rumah-sakit",
  },
  {
    id: 8,
    title: "SEKOLAH & KAMPUS",
    image: "/images/offer/kampus.jpeg",
    slug: "kampus",
  },
  {
    id: 9,
    title: "BANDARA & TRANSPORTASI",
    image: "/images/penawaran/5.png",
    slug: "bandara",
  },
  {
    id: 10,
    title: "HIPERMARKET & SUPERMARKET",
    image: "/images/penawaran/retail.jpg",
    slug: "hipermarket",
  },
  {
    id: 11,
    title: "WAREHOUSE & LOGISTIK",
    image: "/images/offer/warehouse.jpeg",
    slug: "warehouse",
  },
  {
    id: 12,
    title: "DISINFEKSI & STERILISASI",
    image: "/images/penawaran/1.png",
    slug: "disinfeksi",
  },
];

// =========================================================================
// DATA 11 MACAM HAMA (PEST LIST DENGAN PAGINATION 6 + 5)
// =========================================================================
const pestList = [
  {
    name: "Rayap Tanah",
    slug: "rayap",
    latin: "Coptotermes formosanus",
    image: "/images/binatang/rayap tanah.png",
    imageClass: "object-contain p-0 scale-110",
  },
  {
    name: "Lalat Hijau",
    slug: "lalat",
    latin: "Lucilia sericata",
    image: "/images/binatang/lalat hijau.png",
    imageClass: "object-contain p-0 w-full h-full scale-125",
  },
  {
    name: "Kecoa Amerikana",
    slug: "kecoa",
    latin: "Periplaneta americana",
    image: "/images/binatang/kecoa amerikana.png",
    imageClass: "object-contain p-0 w-full h-full scale-125 translate-x-9",
  },
  {
    name: "Tikus",
    slug: "tikus",
    latin: "Rattus norvegicus",
    image: "/images/binatang/tikus.png",
  },
  {
    name: "Kutu Kasur",
    slug: "kutu",
    latin: "Cimex lectularius",
    image: "/images/binatang/kutu kasur.png",
    imageClass: "object-contain p-4.5 sm:p-6",
  },
  {
    name: "Semut Rang Rang",
    slug: "semut",
    latin: "Oecophylla smaragdina",
    image: "/images/binatang/semut rang rang.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
  {
    name: "Nyamuk Aeydes",
    slug: "nyamuk",
    latin: "Aedes aegypti",
    image: "/images/binatang/nyamuk aeydes.png",
  },
  {
    name: "Tawon Vespa",
    slug: "tawon",
    latin: "Vespa affinis",
    image: "/images/binatang/tawon vespa.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
  {
    name: "Kelelawar",
    slug: "kalelawar",
    latin: "Chiroptera",
    image: "/images/binatang/kelelawar.png",
  },
  {
    name: "Burung Greja",
    slug: "burung",
    latin: "Passer montanus",
    image: "/images/binatang/burung greja.png",
  },
  {
    name: "Ular Weling",
    slug: "ular",
    latin: "Bungarus candidus",
    image: "/images/binatang/ular weling.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
];

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

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#18202f] border border-zinc-700/90 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-150">
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

export default function TentangVecosPage() {
  const router = useRouter();

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

  // Legal Modals State
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "cookie" | null>(null);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [cookieSaved, setCookieSaved] = useState(false);

  // Pest Page State (Pagination 6 + 5)
  const [pestPage, setPestPage] = useState(0);

  // Special Offer Slider Ref
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

  const isAnyModalOpen = Boolean(legalModal || isLangModalOpen);

  // Body overflow lock when modal is open
  useEffect(() => {
    if (isAnyModalOpen) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [isAnyModalOpen]);

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

  // Google Translate init
  useEffect(() => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
      if (match) {
        const parts = match[1].split("/");
        const targetLang = parts[parts.length - 1];
        if (targetLang && targetLang !== "id") {
          setCurrentLang(targetLang);
          const found = countryList.find(
            (c) => c.defaultLang === targetLang || c.supportedLangs.includes(targetLang)
          );
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

  // Survey Form State
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

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
                    isArticlePage={true}
                    variant="desktop"
                  />
                </div>
              )}
            </div>

            <Link
              href="/tentang-vecos"
              className="text-xs lg:text-sm font-extrabold uppercase text-[#C81E27] tracking-wider transition-colors border-b-2 border-[#C81E27] pb-0.5"
            >
              TENTANG VECOS
            </Link>

            {/* Language Button */}
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
                    isArticlePage={true}
                    variant="mobile"
                  />
                </div>
              )}
            </div>
            <Link
              href="/tentang-vecos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold uppercase text-[#C81E27] py-2 border-b border-zinc-100"
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

      {/* ======================================================== */}
      {/* MAIN CONTENT: TENTANG VECOS                              */}
      {/* ======================================================== */}
      <main className="flex-1 w-full">
        {/* Hero Banner Header: Tentang Vecos */}
        <section className="relative w-full bg-[#17181c] text-white py-12 sm:py-16 md:py-20 border-b border-zinc-800 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C81E27]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-4 sm:mb-6 font-medium">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-[#E02428] font-bold">Tentang Vecos</span>
            </div>

            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/70 border border-red-800/80 rounded-full text-[11px] sm:text-xs font-bold text-red-300 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#C81E27] animate-pulse" />
                Profil Perusahaan & Komitmen Layanan
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Tentang <span className="text-[#E02428]">Vecos</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
                Penyedia solusi pengendalian hama dan sterilisasi profesional terpadu yang berdedikasi menjaga keamanan, kesehatan, dan nilai investasi properti Anda di seluruh Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Content Body Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">

          {/* ======================================================== */}
          {/* SECTION 1: PROTECTING WHAT MATTERS MOST                  */}
          {/* ======================================================== */}
          <section className="space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Gambar Utama (ini gambar) */}
              <div className="lg:col-span-6 relative">
                <div className="relative w-full aspect-4/3 sm:aspect-16/11 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 group">
                  <Image
                    src="/images/tentang.png"
                    alt="Solusi Pengendalian Hama Profesional dari Vecos Indonesia"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 sm:p-7">
                    <span className="bg-[#C81E27] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-2 shadow-md">
                      Official Vecos Indonesia
                    </span>
                    <h3 className="text-white font-black text-base sm:text-xl drop-shadow-md">
                      Pest Control & Sterilization Specialist
                    </h3>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:right-6 bg-white border border-zinc-200/90 rounded-2xl p-3.5 sm:p-5 shadow-2xl flex items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-100 text-[#C81E27] flex items-center justify-center font-black text-xl sm:text-2xl shrink-0">
                    ★
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-zinc-900 leading-tight">
                      Terstandarisasi & Berlisensi
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-500 font-medium">
                      Metode Terukur & Ramah Lingkungan
                    </div>
                  </div>
                </div>
              </div>

              {/* Teks Penjelasan */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <div className="inline-block px-3 py-1 bg-red-100 text-[#C81E27] rounded-full text-xs font-bold uppercase tracking-wider">
                  Solusi Profesional Terpadu
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  Protecting What Matters Most: Solusi Pengendalian Hama Profesional dari Vecos Indonesia
                </h2>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  Di tengah pesatnya pertumbuhan sektor properti, komersial, dan industri di Indonesia, ancaman hama bukan sekadar masalah kebersihan biasa. Hama seperti rayap, tikus, kecoak, nyamuk, hingga serangga gudang dapat memicu kerugian material yang signifikan, merusak struktur bangunan, hingga mengancam kesehatan dan reputasi bisnis Anda.
                </p>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                  <strong className="text-zinc-900 font-bold">Vecos Indonesia</strong> hadir sebagai penyedia layanan <em className="text-[#C81E27] not-italic font-semibold">pest control</em> (pengendalian hama) profesional dan terpadu yang berkomitmen menciptakan lingkungan yang aman, higienis, dan bebas dari ancaman hama.
                </p>

                <div className="pt-2">
                  <a
                    href="#form-survey"
                    className="inline-flex items-center gap-2 bg-[#C81E27] hover:bg-[#b01820] text-white px-5 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-red-700/20 transition-all hover:scale-[1.02]"
                  >
                    <span>Konsultasi & Jadwalkan Survey</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* LAYANAN UNGGULAN (FORMAT LIST BULLET)                    */}
            {/* ======================================================== */}
            <div className="space-y-4 pt-2">
              <div className="border-b border-zinc-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                  Layanan Unggulan Vecos Pest Control
                </h3>
              </div>

              <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed font-normal">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Termite Control (Pengendalian Rayap):</strong>{" "}
                    Perlindungan bangunan dari serangan rayap tanah maupun kayu kering melalui metode pra-konstruksi dan pasca-konstruksi.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Rodent Control (Pengendalian Tikus):</strong>{" "}
                    Mencegah dan membasmi populasi tikus di area hunian, gudang, serta bisnis menggunakan metode pemantauan yang terukur.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">General Pest Control (Kecoa, Nyamuk, & Lalat):</strong>{" "}
                    Treatment khusus menggunakan teknik spraying, fogging, dan pengumpanan (baiting) dan metode lainnya untuk menekan populasi serangga pengganggu.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Bed Bug Treatment (Pengendalian Kutu Busuk):</strong>{" "}
                    Penanganan intensif pada area tempat tidur dan furnitur untuk membasmi kutu busuk beserta telurnya secara efektif.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Layanan Disinfeksi & Sterilisasi:</strong>{" "}
                    Penyemprotan disinfektan (cold fogging / misting) untuk membasmi kuman, bakteri, dan virus pada permukaan serta udara di dalam ruangan, menjaga lingkungan tetap steril dan sehat.
                  </div>
                </li>
              </ul>
            </div>

            {/* ======================================================== */}
            {/* SECTION: PENAWARAN SPESIAL (SEPERTI DI HALAMAN UTAMA)    */}
            {/* ======================================================== */}
            <div className="space-y-4 w-full pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                    Penawaran Spesial
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">
                    Geser untuk menjelajahi layanan penawaran khusus properti Anda
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

              {/* Carousel Container */}
              <div className="relative group/carousel">
                <div
                  ref={specialOfferSliderRef}
                  className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-1 scrollbar-none"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {specialOfferServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => {
                        router.push(`/artikel/${service.slug}`);
                      }}
                      className="w-[280px] xs:w-[320px] sm:w-[350px] md:w-[380px] shrink-0 snap-start relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/11 shadow-sm hover:shadow-xl border border-zinc-200/90 group cursor-pointer transition-all duration-300"
                      title={`Lihat panduan penawaran ${service.title}`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex items-center justify-center p-3 sm:p-4 text-center">
                        <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-wider uppercase drop-shadow-md">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Chevron Buttons for Desktop */}
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
            </div>

            {/* ======================================================== */}
            {/* SECTION: JENIS HAMA (SEPERTI DI HALAMAN UTAMA)           */}
            {/* ======================================================== */}
            <div className="space-y-6 w-full pt-4">
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
                      router.push(`/artikel/${pest.slug}`);
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                    title={`Pelajari panduan hama ${pest.name}`}
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#cbd2dc] border-2 border-zinc-300 group-hover:border-[#C81E27] shadow-xs group-hover:shadow-md transition-all">
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

                {/* Slot ke-6 pada Halaman 2: Card Icon Kembali (Sebelumnya) */}
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
            </div>

          </section>

          {/* ======================================================== */}
          {/* SECTION 2: KENAPA MEMPERCAYAKAN VECOS INDONESIA ?        */}
          {/* ======================================================== */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-zinc-200/90 shadow-md space-y-6 sm:space-y-8 w-full">
            <div className="w-full space-y-3">
              <div className="inline-block px-3.5 py-1 bg-red-100 text-[#C81E27] rounded-full text-xs font-bold uppercase tracking-wider">
                Kepercayaan & Nilai Utama
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                Kenapa mempercayakan Vecos Indonesia ?
              </h2>
            </div>

            {/* Konten Teks Full Width & Rata Kiri Kanan (text-justify) */}
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed text-justify w-full font-normal">
              <p className="text-base sm:text-lg text-zinc-800 font-medium leading-relaxed border-l-4 border-[#C81E27] pl-4 sm:pl-5 py-0.5 text-justify">
                Berangkat dari komitmen mendalam untuk menghadirkan ruang yang aman dan higienis, <strong className="text-zinc-950 font-bold">Vecos Indonesia</strong> hadir sebagai penyedia layanan pengendalian hama terpadu yang dapat diandalkan oleh sektor hunian maupun bisnis di seluruh Indonesia.
              </p>
              <p className="leading-relaxed text-justify">
                Kami memadukan pendekatan ilmiah, teknologi modern, serta tenaga ahli yang tersertifikasi untuk merancang strategi penanganan hama yang tepat sasaran—mulai dari deteksi dini, tindakan pencegahan, hingga eliminasi secara tuntas dan ramah lingkungan.
              </p>
              <p className="leading-relaxed text-justify">
                Bersama teknisi profesional kami, Anda tidak hanya mendapatkan solusi teknis yang efektif, tetapi juga mitra kerja yang responsif dan berintegritas tinggi. Kami berkomitmen untuk melindungi nilai investasi, reputasi, dan kenyamanan properti Anda, menjamin lingkungan yang sehat dan sepenuhnya bebas dari gangguan hama.
              </p>
            </div>

            {/* Gambar Utuh Penuh Tanpa Card */}
            <div className="w-full pt-4 sm:pt-6">
              <Image
                src="/images/image4.png"
                alt="Kenapa Mempercayakan Vecos Indonesia"
                width={2901}
                height={3712}
                className="w-full h-auto object-contain block mx-auto rounded-xl sm:rounded-2xl"
                priority
              />
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 3: PERLINDUNGAN HIGIENITAS MAKSIMAL              */}
          {/* ======================================================== */}
          <section className="bg-gradient-to-br from-[#1c2333] to-[#121620] text-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden space-y-6 sm:space-y-8 w-full">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 sm:space-y-6 w-full relative z-10">
              <div className="inline-block px-3.5 py-1 bg-red-900/60 border border-red-700/60 text-red-300 rounded-full text-xs font-bold uppercase tracking-wider">
                Biosafety & Sterilisasi Tingkat Tinggi
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Perlindungan Higienitas Maksimal dari Vecos Indonesia
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed text-justify w-full font-normal">
                <p className="text-justify leading-relaxed">
                  Ciptakan ruang kerja dan hunian yang aman dari bahaya biologis bersama ahli sterilisasi dari Vecos Indonesia. Kami berkomitmen mendukung ketahanan bisnis dan kesehatan lingkungan Anda melalui pendekatan sterilisasi tingkat tinggi yang efektif dan terukur.
                </p>

                <p className="text-justify leading-relaxed">
                  Baik untuk tindakan preventif berkala maupun dekontaminasi area yang terdampak, teknisi profesional kami menerapkan protokol keselamatan ketat untuk membasmi berbagai jenis bakteri, jamur, serta virus patogen—seperti <strong className="text-white font-bold">H5N1, H1N1, dan COVID-19</strong>. Bersama Vecos Indonesia, pastikan setiap sudut bangunan Anda senantiasa steril dan terlindungi secara optimal.
                </p>
              </div>

              {/* Pathogen Target Badges */}
              <div className="pt-2 flex flex-wrap gap-2 sm:gap-3">
                {["Virus H5N1", "Virus H1N1", "COVID-19", "Bakteri Patogen", "Spora Jamur"].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-white flex items-center gap-1.5"
                  >
                    <span className="text-[#C81E27] font-black">✓</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* SECTION 4: MULTI-CABANG                                  */}
          {/* ======================================================== */}
          <section className="space-y-6 sm:space-y-8 w-full">
            <div className="w-full space-y-3">
              <div className="inline-block px-3.5 py-1 bg-red-100 text-[#C81E27] rounded-full text-xs font-bold uppercase tracking-wider">
                Solusi Enterprise & Multi-Site
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                Solusi Pengendalian Hama untuk Perusahaan Multi-Cabang
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed text-justify font-normal">
                Mengelola kebersihan dan standar pest control di banyak lokasi kini lebih mudah bersama Vecos Indonesia. Kami menyediakan layanan terpadu yang dirancang khusus untuk memenuhi kebutuhan perusahaan dengan jaringan cabang yang luas.
              </p>
            </div>

            {/* 4 Poin Multi-Cabang dalam Bentuk List Bullet */}
            <div className="space-y-4 pt-2">
              <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-zinc-700 leading-relaxed font-normal w-full">
                <li className="flex items-start gap-3 text-justify">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Satu Pintu Komunikasi:</strong>{" "}
                    Memudahkan koordinasi dan pemantauan dari kantor pusat untuk seluruh cabang Anda.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-justify">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Kualitas Layanan Seragam:</strong>{" "}
                    Memastikan setiap outlet atau kantor cabang mendapatkan standar penanganan yang sama baiknya.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-justify">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Laporan Terintegrasi:</strong>{" "}
                    Memudahkan evaluasi berkala dan persiapan dokumen pendukung audit.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-justify">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C81E27] mt-2 shrink-0" />
                  <div>
                    <strong className="text-zinc-950 font-bold">Tim Siap Siaga:</strong>{" "}
                    Penanganan cepat oleh teknisi lokal yang berpengalaman di setiap daerah.
                  </div>
                </li>
              </ul>
            </div>

            {/* Closing statement banner */}
            <div className="p-5 sm:p-7 rounded-2xl bg-red-50/80 border border-red-200/80 flex items-center gap-4">
              <span className="text-3xl shrink-0">🤝</span>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-zinc-800 leading-relaxed text-justify">
                Bersama <strong className="text-[#C81E27]">Vecos Indonesia</strong>, Anda dapat memastikan seluruh jaringan bisnis tetap bersih, aman, dan memenuhi standar operasional dengan pengelolaan yang efisien.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* ======================================================== */}
      {/* FOOTER AREA DARI FORM SURVEY SAMPAI FOOTER (PERSIS HOME) */}
      {/* ======================================================== */}
      <div className={`relative w-full mt-10 sm:mt-16 overflow-visible ${isAnyModalOpen ? "z-0" : ""}`}>
        {/* 1. Banner Survey dengan Foto Customer (Full Width) */}
        <div id="form-survey" className="w-full relative z-0 overflow-hidden shadow-2xl border-t-4 border-[#dc2626] min-h-[480px] sm:min-h-[640px] md:min-h-[740px] lg:min-h-[800px] flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/images/image_form.png"
              alt="Survey & Konsultasi Tim Vecos"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </div>

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
              <div className="col-span-5 sm:col-span-4">
                <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a3e48] tracking-tight leading-tight">
                  <span className="block">Pertanyaan</span>
                  <span className="block">Seputar</span>
                  <span className="block">Pengendalian Hama</span>
                  <span className="block text-primary">Vecos</span>
                </h2>
              </div>

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
                  <li><Link href="/" className="hover:underline transition-all">Beranda</Link></li>
                  <li><a href="#form-survey" className="hover:underline transition-all">Hubungi kami</a></li>
                  <li><Link href="/#layanan" className="hover:underline transition-all">Layanan kami</Link></li>
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
                    href="mailto:cs@vecos.co.id"
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
          
<div className="bg-[#f0f3f8] border-t border-zinc-200/90 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-12 text-[11px] sm:text-xs text-zinc-600">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
              <div className="text-zinc-600 font-normal">
                Copyright © 2026 PT Vecos Intitama Mulya . All Rights Reserved
              </div>

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
      {/* GLOBAL MODALS                                            */}
      {/* ======================================================== */}
      {isLangModalOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setIsLangModalOpen(false)}
        >
          <div
            className="bg-[#171c28] border border-zinc-700/80 rounded-2xl max-w-md w-full shadow-2xl p-5 sm:p-6 text-white space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌐</span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Pilih Negara & Bahasa
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLangModalOpen(false)}
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5">
              <SearchableSelect
                label="Pilih Negara / Wilayah:"
                value={tempCountry}
                options={countryList.map((c) => ({
                  value: c.code,
                  label: c.name,
                  subLabel: c.subLabel,
                  icon: c.flag,
                }))}
                onChange={handleCountryChange}
                placeholder="Ketik nama negara..."
              />

              <div>
                <label className="block text-[11px] sm:text-xs text-zinc-400 font-medium mb-1">
                  Pilih Bahasa:
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1 bg-[#141923] rounded-xl border border-zinc-800">
                  {countryList
                    .find((c) => c.code === tempCountry)
                    ?.supportedLangs.map((langCode) => {
                      const isSelected = tempLang === langCode;
                      const langObj = languageList.find((l) => l.code === langCode);
                      return (
                        <button
                          key={langCode}
                          type="button"
                          onClick={() => setTempLang(langCode)}
                          className={`text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${isSelected
                            ? "bg-[#C81E27] text-white shadow-sm"
                            : "bg-[#1c2333] text-zinc-300 hover:bg-[#232c3f]"
                            }`}
                        >
                          <span className="truncate">{langObj?.nativeName || langCode}</span>
                          {isSelected && <span className="text-white font-bold ml-1">✓</span>}
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setIsLangModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => applyLanguagePreference(tempCountry, tempLang)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#C81E27] hover:bg-[#b01820] text-white shadow-md transition-colors cursor-pointer"
              >
                Terapkan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}

      {legalModal === "privacy" && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-4 text-zinc-800 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900">
                Kebijakan Privasi VECOS
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-100 text-zinc-600 hover:text-red-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs sm:text-sm text-zinc-600 space-y-3 leading-relaxed">
              <p>
                PT Vecos Intitama Mulya berkomitmen melindungi dan menjaga privasi data pribadi setiap pelanggan dan pengunjung situs kami. Informasi formulir yang Anda serahkan (Nama, Kontak, Alamat, dan Keluhan Hama) hanya dimanfaatkan untuk penjadwalan survey lokasi, konsultasi teknis, serta peningkatan kualitas layanan.
              </p>
              <p>
                Kami tidak pernah menjual, menyewakan, atau memberikan data pribadi Anda kepada pihak ketiga manapun untuk kepentingan komersial tanpa persetujuan tertulis eksplisit dari Anda.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="bg-[#C81E27] hover:bg-[#b01820] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}

      {legalModal === "terms" && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-4 text-zinc-800 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900">
                Ketentuan Layanan VECOS
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-100 text-zinc-600 hover:text-red-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs sm:text-sm text-zinc-600 space-y-3 leading-relaxed">
              <p>
                Seluruh pelaksanaan tindakan inspeksi, survey, dan pengendalian hama oleh teknisi VECOS mengikuti Standar Operasional Prosedur (SOP) dan regulasi Kementerian Kesehatan RI serta standar IPM internasional.
              </p>
              <p>
                Garansi penanganan hama berlaku sesuai dengan paket perjanjian kerja yang disepakati bersama.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="bg-[#C81E27] hover:bg-[#b01820] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {legalModal === "cookie" && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 space-y-5 text-zinc-800 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900">
                Pengaturan Preferensi Cookie
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-red-100 text-zinc-600 hover:text-red-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div>
                  <h4 className="font-bold text-zinc-900">Cookie Fungsional & Esensial</h4>
                  <p className="text-[11px] text-zinc-500">
                    Dibutuhkan untuk sistem navigasi dan preferensi bahasa situs.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={functionalCookies}
                  disabled
                  className="w-4 h-4 text-[#C81E27] rounded-sm"
                />
              </div>

              <div className="flex items-center justify-between gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                <div>
                  <h4 className="font-bold text-zinc-900">Cookie Analitik & Kinerja</h4>
                  <p className="text-[11px] text-zinc-500">
                    Membantu kami memahami interaksi pengguna demi menyempurnakan fitur.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsCookies}
                  onChange={(e) => setAnalyticsCookies(e.target.checked)}
                  className="w-4 h-4 text-[#C81E27] rounded-sm cursor-pointer"
                />
              </div>

              {cookieSaved && (
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold text-center">
                  Preferensi cookie Anda berhasil disimpan!
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-100">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-600 hover:bg-zinc-100 transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  setCookieSaved(true);
                  setTimeout(() => {
                    setLegalModal(null);
                    setCookieSaved(false);
                  }, 1200);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#C81E27] hover:bg-[#b01820] text-white shadow-md transition-colors cursor-pointer"
              >
                Simpan Preferensi
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
