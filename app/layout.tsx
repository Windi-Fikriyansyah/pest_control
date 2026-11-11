import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vecos.co.id"),
  title: "VECOS - Jasa Pengendalian Hama & Pest Control Profesional Bergaransi",
  description: "Solusi perlindungan hama terbaik untuk hunian dan bisnis Anda. Bersertifikasi resmi, aman untuk keluarga & hewan peliharaan, bergaransi dengan teknologi Vecos Proofing Defender.",
  keywords: "pest control, jasa pembasmi hama, anti rayap, pembasmi kecoa, pengendali tikus, disinfeksi ruangan, vecos",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "gBrCtAW0efqOiPXAMB-0RS8wVOVT9wk9sBHxHtZeMYk",
  },
  alternates: {
    canonical: "https://vecos.co.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/banner/mobile/1.webp"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/banner/pc/1.webp"
          type="image/webp"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-zinc-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
