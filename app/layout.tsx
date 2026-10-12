import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VECOS - Jasa Pengendalian Hama & Pest Control Profesional Bergaransi",
  description: "Solusi perlindungan hama terbaik untuk hunian dan bisnis Anda. Bersertifikasi resmi, aman untuk keluarga & hewan peliharaan, bergaransi dengan teknologi Vecos Proofing Defender.",
  keywords: "pest control, jasa pembasmi hama, anti rayap, pembasmi kecoa, pengendali tikus, disinfeksi ruangan, vecos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-white text-zinc-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
