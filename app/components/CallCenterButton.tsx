"use client";

import React from "react";

export default function CallCenterButton({
  className = "",
  children,
  showIcon = true,
}: {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}) {
  const handleCallCenterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const now = new Date();
    const y = String(now.getFullYear()).slice(-2);
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
    const code = `${y}${m}${d}-${rand}`;
    const text = `Halo Customer Service, saya ingin menyampaikan pertanyaan/komplain. (Kode Referensi CS ${code})`;
    window.open(
      `https://wa.me/6285743681500?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <a
      href="https://wa.me/6285743681500"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCallCenterClick}
      className={className}
    >
      {showIcon && (
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C81E27]"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      )}
      {children || <span>Call Center : 0857-4368-1500</span>}
    </a>
  );
}
