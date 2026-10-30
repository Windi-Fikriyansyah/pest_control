"use client";

import React from "react";
import Link from "next/link";

interface LayananDropdownMenuProps {
  onItemClick?: () => void;
  isArticlePage?: boolean;
  variant?: "desktop" | "mobile";
}

export default function LayananDropdownMenu({
  onItemClick,
  isArticlePage = false,
  variant = "desktop",
}: LayananDropdownMenuProps) {
  const mainServices = [
    {
      id: "serangga",
      title: "Pengendalian Serangga",
      desc: "Pengendalian kecoak, semut, lalat & serangga terbang",
      href: "/artikel/pengendalian-serangga",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Antennae */}
          <path d="M13.5 7C12.5 5 10 4 7.5 5" />
          <path d="M18.5 7C19.5 5 22 4 24.5 5" />
          {/* Head */}
          <circle cx="16" cy="9.5" r="2.5" />
          {/* Body */}
          <path d="M12 13.5C12 12.5 13 12 16 12C19 12 20 12.5 20 13.5C21 15.5 21 21 19.5 24C18 26.5 16 27 16 27C16 27 14 26.5 12.5 24C11 21 11 15.5 12 13.5Z" />
          {/* Wing divider line */}
          <path d="M16 12V27" />
          {/* Left legs */}
          <path d="M12.5 14L8 12.5L5.5 14" />
          <path d="M11.5 18L6.5 18.5L5 21" />
          <path d="M12 22L7.5 24L7 27" />
          {/* Right legs */}
          <path d="M19.5 14L24 12.5L26.5 14" />
          <path d="M20.5 18L25.5 18.5L27 21" />
          <path d="M20 22L24.5 24L25 27" />
        </svg>
      ),
    },
    {
      id: "tikus",
      title: "Pengendalian Tikus",
      desc: "Rodent control & pencegahan akses tikus",
      href: "/artikel/pengendalian-tikus",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ear */}
          <path d="M13 14C12 12 14 10 15.8 11C17 12 16.5 14.5 15 15" />
          {/* Body from nose along back to rump and base */}
          <path d="M7 20C6 19.5 5 18 7 17.2C8.5 16.5 10.5 15.5 12.5 14.8C14.5 14 17 13 20 14C23.5 15 25.5 17.5 25.5 20.5C25.5 23 23.5 24.5 21 24.5H11C9 24.5 7.5 23 7 20Z" />
          {/* Paws */}
          <path d="M10 24.5V26" />
          <path d="M14 24.5V26" />
          <path d="M20 24.5V26" />
          {/* Eye dot */}
          <circle cx="8.8" cy="18" r="0.65" fill="currentColor" />
          {/* Tail coming from rear, curving down and looping under feet to left */}
          <path d="M25.5 21C27.5 22 29 24 28.5 26C27.5 28 24 28.5 20 28.5H10C7.5 28.5 6 27.5 6.5 26.5" />
        </svg>
      ),
    },
    {
      id: "rayap",
      title: "Sistem Proteksi Rayap",
      desc: "Metode pra & pasca-konstruksi, serta baiting",
      href: "/artikel/sistem-proteksi-rayap",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield outline */}
          <path d="M16 4.5L7 8V15C7 21 11 26.5 16 28.5C21 26.5 25 21 25 15V8L16 4.5Z" />
          {/* Termite Antennae */}
          <path d="M14.5 11L13 9" />
          <path d="M17.5 11L19 9" />
          {/* Termite Head */}
          <circle cx="16" cy="12" r="1.3" />
          {/* Termite Body */}
          <ellipse cx="16" cy="18" rx="1.8" ry="3.8" />
          <path d="M16 14.2V21.8" />
          {/* Termite Legs */}
          <path d="M14.2 16L12 15" />
          <path d="M17.8 16L20 15" />
          <path d="M14.2 18.5L11.5 19" />
          <path d="M17.8 18.5L20.5 19" />
          <path d="M14.2 21L12 22.5" />
          <path d="M17.8 21L20 22.5" />
        </svg>
      ),
    },
    {
      id: "disinfeksi",
      title: "Disinfeksi & Sterilisasi",
      desc: "Sanitasi dan pembersihan kuman & virus",
      href: "/artikel/disinfeksi-sterilisasi",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Bottle Body */}
          <rect x="8" y="14" width="12" height="14" rx="2" />
          {/* Bottle Neck */}
          <path d="M11.5 14V11H16.5V14" />
          {/* Spray Trigger & Nozzle */}
          <path d="M14 11V8.5H18.5L20.5 10.5H16.5" />
          <path d="M12.5 8.5H14" />
          {/* Cross in box on bottle */}
          <rect x="11" y="18" width="6" height="6" rx="0.8" />
          <path d="M14 19.5V22.5" />
          <path d="M12.5 21H15.5" />
          {/* Droplets mist */}
          <circle cx="23" cy="8.5" r="0.6" fill="currentColor" />
          <circle cx="25.5" cy="7" r="0.6" fill="currentColor" />
          <circle cx="26" cy="10.5" r="0.6" fill="currentColor" />
          <circle cx="28.5" cy="8" r="0.6" fill="currentColor" />
          <circle cx="28.8" cy="11.5" r="0.6" fill="currentColor" />
        </svg>
      ),
    },
  ];

  const specialServices = [
    {
      id: "prime-shield",
      title: "Prime Shield-01 Trap",
      badgeTitle: "HARDWARE",
      desc: "Sistem perangkap lalat indoor",
      badgeDesc: "BARU",
      href: "/artikel/prime-shield-01-trap",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left Arrow pointing left */}
          <path d="M8 17H3M3 17L5.5 14.5M3 17L5.5 19.5" />
          {/* Right Arrow pointing right */}
          <path d="M24 17H29M29 17L26.5 14.5M29 17L26.5 19.5" />
          {/* Trap Lid */}
          <path d="M12 12C12 10.5 13.8 9.5 16 9.5C18.2 9.5 20 10.5 20 12" />
          <rect x="10.5" y="12" width="11" height="2.2" rx="0.8" />
          {/* Cylinder Body */}
          <path d="M11.5 14.2L12.5 24.5C12.5 25.8 14 26.8 16 26.8C18 26.8 19.5 25.8 19.5 24.5L20.5 14.2" />
          {/* Vertical Grate Bars */}
          <path d="M14.5 14.2V25" />
          <path d="M17.5 14.2V25" />
        </svg>
      ),
    },
    {
      id: "proffing-defender",
      title: "Vecos Proofing Defender",
      badgeTitle: "DEFENDER",
      desc: "Layanan penutupan celah hama di setiap titik properti anda",
      badgeDesc: "PROTEKSI",
      href: "/artikel/vecos-proofing-defender",
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield Outline */}
          <path d="M16 4.5L7 8.5V15.5C7 21.8 10.8 26.8 16 28.5C21.2 26.8 25 21.8 25 15.5V8.5L16 4.5Z" />
          {/* Brick / Proofing Sealing Barrier lines inside */}
          <path d="M11 13H21" />
          <path d="M10 17.5H22" />
          <path d="M12 22H20" />
          <path d="M14 13V17.5" />
          <path d="M18 13V17.5" />
          <path d="M16 17.5V22" />
        </svg>
      ),
    },
  ];

  return (
    <div className={`w-full ${variant === "desktop" ? "space-y-1" : "space-y-1 pt-1"}`}>
      {/* 4 Layanan Utama */}
      {mainServices.map((service) => (
        <Link
          key={service.id}
          href={service.href}
          onClick={onItemClick}
          className="flex items-center gap-3.5 sm:gap-4 px-3 py-2.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors group cursor-pointer text-left w-full"
        >
          {/* Icon Outline */}
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
            {service.icon}
          </div>

          {/* Teks Judul & Deskripsi */}
          <div className="flex-1 min-w-0 pr-2">
            <h4 className="text-[14px] sm:text-[15px] font-bold text-zinc-950 group-hover:text-[#C81E27] transition-colors leading-snug">
              {service.title}
            </h4>
            <p className="text-xs text-zinc-500 leading-normal font-normal mt-0.5 line-clamp-1 sm:line-clamp-none">
              {service.desc}
            </p>
          </div>

          {/* Chevron Panah Kanan */}
          <svg
            className="w-4 h-4 text-zinc-400 group-hover:text-[#C81E27] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}

      {/* Garis Pemisah & Judul Section: PERANGKAT & PROTEKSI KHUSUS */}
      <div className="pt-2 pb-1">
        <div className="border-t border-zinc-200/80 mb-2.5" />
        <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 px-3 block">
          PERANGKAT &amp; PROTEKSI KHUSUS
        </span>
      </div>

      {/* Item Perangkat & Proteksi Khusus */}
      {specialServices.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          onClick={onItemClick}
          className="flex items-center gap-3.5 sm:gap-4 px-3 py-2.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors group cursor-pointer text-left w-full"
        >
          {/* Icon */}
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform">
            {item.icon}
          </div>

          {/* Teks Judul & Deskripsi dengan Badges */}
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-zinc-950 group-hover:text-[#C81E27] transition-colors leading-snug">
                {item.title}
              </h4>
              <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100/80 text-[#C81E27] leading-none shrink-0">
                {item.badgeTitle}
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
              <span className="text-xs text-zinc-500 leading-normal font-normal">
                {item.desc}
              </span>
              <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100/80 text-[#C81E27] leading-none shrink-0">
                {item.badgeDesc}
              </span>
            </div>
          </div>

          {/* Chevron Panah Kanan */}
          <svg
            className="w-4 h-4 text-zinc-400 group-hover:text-[#C81E27] group-hover:translate-x-0.5 transition-all shrink-0 ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
