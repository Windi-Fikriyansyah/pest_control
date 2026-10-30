import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, Article, ArticleElement, ArticleRun } from "@/app/data/articles";
import CallCenterButton from "@/app/components/CallCenterButton";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | VECOS",
    };
  }

  return {
    title: `${article.title} | VECOS Pest Control`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

const heroBannerMap: Record<string, { image: string; imageMobile?: string }> = {
  rumah: { image: "/images/artikel/rumah/bannerpc.png", imageMobile: "/images/artikel/mobile/11.png" },
  disinfeksi: { image: "/images/banner/pc/2.png", imageMobile: "" },
  "layanan-vecos": { image: "/images/banner/pc/3.png", imageMobile: "" },
  kampus: { image: "/images/artikel/kampus/bannerpc.png", imageMobile: "/images/mobile/kampus/7.png" },
  hotel: { image: "/images/artikel/hotel/bannerpc.png", imageMobile: "/images/artikel/mobile/8.png" },
  restauran: { image: "/images/artikel/restauran/bannerpc.png", imageMobile: "/images/artikel/mobile/5.png" },
  "rumah-sakit": { image: "/images/artikel/rumah-sakit/bannerpc.png", imageMobile: "/images/artikel/mobile/10.png" },
  bandara: { image: "/images/artikel/bandara/bannerpc.png", imageMobile: "/images/artikel/mobile/9.png" },
  warehouse: { image: "/images/artikel/warehouse/bannerpc.png", imageMobile: "/images/artikel/mobile/4.png" },
  cafe: { image: "/images/artikel/cafe/bannerpc.png", imageMobile: "/images/artikel/mobile/2.png" },
  hipermarket: { image: "/images/artikel/hipermarket/bannerpc.png", imageMobile: "/images/artikel/mobile/6.png" },
  kantor: { image: "/images/artikel/kantor/bannerpc.png", imageMobile: "/images/artikel/mobile/3.png" },
  "pabrik-makanan": { image: "/images/pabrik-makanan/bannerpc.png", imageMobile: "/images/artikel/mobile/1.png" },
  // Hama articles banner PC & Mobile
  burung: { image: "/images/artikelhama/image hama/burung greja.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/burung greja.jpg" },
  kalelawar: { image: "/images/artikelhama/image hama/kelelawar.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/kelelawar.jpg" },
  kelelawar: { image: "/images/artikelhama/image hama/kelelawar.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/kelelawar.jpg" },
  kecoa: { image: "/images/artikelhama/image hama/kecoa.png", imageMobile: "/images/artikelhama/image hama/mobile image/kecoa.png" },
  kutu: { image: "/images/artikelhama/image hama/kutu.png", imageMobile: "/images/artikelhama/image hama/mobile image/kutu.png" },
  lalat: { image: "/images/artikelhama/image hama/lalat.png", imageMobile: "/images/artikelhama/image hama/mobile image/lalat.png" },
  nyamuk: { image: "/images/artikelhama/image hama/nyamuk.png", imageMobile: "/images/artikelhama/image hama/mobile image/nyamuk.png" },
  rayap: { image: "/images/artikelhama/image hama/rayap.png", imageMobile: "/images/artikelhama/image hama/mobile image/rayap.png" },
  semut: { image: "/images/artikelhama/image hama/semut.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/semut.jpg" },
  tawon: { image: "/images/artikelhama/image hama/tawon.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/tawon.jpg" },
  tikus: { image: "/images/artikelhama/image hama/tikus.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/tikus.jpg" },
  ular: { image: "/images/artikelhama/image hama/ular.jpg", imageMobile: "/images/artikelhama/image hama/mobile image/ular.jpg" },
  // Layanan articles banner PC & Mobile (isi path gambar mobile pada imageMobile jika sudah ada)
  "pengendalian-serangga": {
    image: "/images/artikellayanan/inpeksi.jpg",
    imageMobile: "/images/artikellayanan/image mobile/inpeksi.jpg", // Masukkan path gambar mobile di sini, contoh: "/images/artikellayanan/pengendalian-serangga/mobile.png"
  },
  "pengendalian-tikus": {
    image: "/images/artikellayanan/inspection.jpg",
    imageMobile: "/images/artikellayanan/image mobile/inspection.jpg", // Masukkan path gambar mobile di sini, contoh: "/images/artikellayanan/pengendalian-tikus/mobile.png"
  },
  "sistem-proteksi-rayap": {
    image: "/images/artikellayanan/anti-rayap.jpg",
    imageMobile: "/images/artikellayanan/image mobile/anti-rayap.jpg", // Masukkan path gambar mobile di sini, contoh: "/images/artikellayanan/sistem-proteksi-rayap/mobile.png"
  },
  "disinfeksi-sterilisasi": {
    image: "/images/artikellayanan/disinveksi.jpeg",
    imageMobile: "/images/artikellayanan/image mobile/disinfeksi.jpg", // Masukkan path gambar mobile di sini, contoh: "/images/artikel/disinfeksi/bannermobile.png"
  },
  "prime-shield-01-trap": {
    image: "/images/artikellayanan/prime.jpg",
    imageMobile: "/images/artikellayanan/image mobile/prime.jpg", // Masukkan path gambar mobile di sini, contoh: "/images/artikellayanan/prime-shield-01-trap/mobile.png"
  },
};

const propertyTitleMap: Record<string, string> = {
  rumah: "Rumah Tinggal",
  kantor: "Office / Perkantoran",
  hotel: "Hotel & Resort",
  restauran: "Restoran & Kuliner",
  cafe: "Café & Coffee Shop",
  "pabrik-makanan": "Pabrik Industri Makanan",
  "rumah-sakit": "Rumah Sakit & Medis",
  kampus: "Sekolah & Kampus",
  bandara: "Bandara & Transportasi",
  hipermarket: "Hipermarket & Supermarket",
  warehouse: "Warehouse & Logistik",
  disinfeksi: "Disinfeksi & Sterilisasi",
  "layanan-vecos": "Anti Rayap & Pest Control",
  apartemen: "Apartemen",
  mall: "Mall & Pusat Perbelanjaan",
  "data-center": "Data Center",
  bioskop: "Bioskop & Teater",
  "pabrik-manufaktur": "Pabrik Manufaktur",
  "tempat-ibadah": "Tempat Ibadah",
  gym: "Gym & Pusat Kebugaran",
  // Hama title map
  burung: "Burung",
  kalelawar: "Kelelawar",
  kelelawar: "Kelelawar",
  kecoa: "Kecoa",
  kutu: "Kutu",
  lalat: "Lalat",
  nyamuk: "Nyamuk",
  rayap: "Rayap",
  semut: "Semut",
  tawon: "Lebah",
  tikus: "Tikus",
  ular: "Ular",
  // Layanan title map
  "pengendalian-serangga": "Pengendalian Serangga",
  "pengendalian-tikus": "Pengendalian Tikus",
  "sistem-proteksi-rayap": "Sistem Proteksi Rayap",
  "disinfeksi-sterilisasi": "Disinfeksi & Sterilisasi",
  "prime-shield-01-trap": "Prime Shield-01 Trap",
};

const pestList = [
  {
    name: "Rayap Tanah",
    latin: "Macrotermes",
    slug: "rayap",
    image: "/images/binatang/rayap tanah.png",
    imageClass: "object-contain p-0 scale-110",
  },
  {
    name: "Lalat Hijau",
    latin: "Lucilia Cericata",
    slug: "lalat",
    image: "/images/binatang/lalat hijau.png",
    imageClass: "object-contain p-0 w-full h-full scale-125",
  },
  {
    name: "Kecoa Selokan",
    latin: "Periplaneta Americana",
    slug: "kecoa",
    image: "/images/binatang/kecoa amerikana.png",
    imageClass: "object-contain p-0 w-full h-full scale-125 translate-x-3 sm:translate-x-4",
  },
  {
    name: "Nyamuk DBD",
    latin: "Aydesaygepti",
    slug: "nyamuk",
    image: "/images/binatang/nyamuk aeydes.png",
    imageClass: "object-contain p-1",
  },
  {
    name: "Tikus Atap",
    latin: "Rattus Ratus",
    slug: "tikus",
    image: "/images/binatang/tikus.png",
    imageClass: "object-contain p-2",
  },
  {
    name: "Kutu Kasur",
    latin: "Cimex Lactularius",
    slug: "kutu",
    image: "/images/binatang/kutu kasur.png",
    imageClass: "object-contain p-4.5 sm:p-6",
  },
  {
    name: "Semut Rangrang",
    latin: "Oecophylla smaragdina",
    slug: "semut",
    image: "/images/binatang/semut rang rang.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
  {
    name: "Kelelawar Nighu",
    latin: "Pipistrellus",
    slug: "kalelawar",
    image: "/images/binatang/kelelawar.png",
    imageClass: "object-contain p-2",
  },
  {
    name: "Tawon Vespa",
    latin: "Vespa Affinis",
    slug: "tawon",
    image: "/images/binatang/tawon vespa.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
  {
    name: "Burung Greja",
    latin: "Passer montanus",
    slug: "burung",
    image: "/images/binatang/burung greja.png",
    imageClass: "object-contain p-2",
  },
  {
    name: "Ular Weling",
    latin: "Bungarus.Candidus",
    slug: "ular",
    image: "/images/binatang/ular weling.png",
    imageClass: "object-contain p-2.5 sm:p-3",
  },
];

async function ArticleContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const banner = heroBannerMap[article.slug] || { image: article.coverImage };
  const propertyTitle = propertyTitleMap[article.slug] || article.title;

  return (
    <div className="w-full pb-16">
      {/* ======================================================== */}
      {/* 1. HERO SECTION (FULL 1 SCREEN + CENTERED TEXT & BUTTONS) */}
      {/* ======================================================== */}
      <section className="relative w-full h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] min-h-[580px] overflow-hidden bg-zinc-100 text-white flex items-center justify-center shadow-2xl">
        {/* Background Banner Image Mobile & Desktop dengan overlay sedikit gelap */}
        <div className="absolute inset-0 z-0">
          {banner.imageMobile && banner.imageMobile.trim() !== "" ? (
            <>
              <Image
                src={banner.imageMobile}
                alt={article.title}
                fill
                priority
                className="md:hidden object-cover object-center scale-105"
              />
              <Image
                src={banner.image}
                alt={article.title}
                fill
                priority
                className="hidden md:block object-cover object-center scale-105"
              />
            </>
          ) : (
            <Image
              src={banner.image}
              alt={article.title}
              fill
              priority
              className="object-cover object-center scale-105"
            />
          )}

          {/* Dark Overlay halus agar background sedikit gelap & teks lebih jelas */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        {/* Hero Content Container (Tampil di Tengah Penuh) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="w-full space-y-6 sm:space-y-8 flex flex-col items-center justify-center text-center">
            {/* Judul Hero: Nama Properti di Tengah */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.12] tracking-tight uppercase text-center max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.85)]">
              {propertyTitle}
            </h1>

            {/* Tombol Aksi Hero: Amankan Properti Anda & Call No HP di Tengah */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
              {/* Tombol Amankan Properti Anda */}
              <a
                href="/#form-survey"
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
      {/* 2. KONTEN UTAMA ARTIKEL (FULL WIDTH)                     */}
      {/* ======================================================== */}
      <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* Badan Konten Artikel Dokumen Lengkap */}
        <article className="w-full bg-white p-6 sm:p-10 md:p-14 rounded-3xl border border-zinc-200/90 shadow-sm space-y-6">
          {/* Header Artikel Dokumen */}
          <div className="pb-4 border-b border-zinc-100">
            <span className="text-[11px] font-bold text-[#C81E27] uppercase tracking-wider block pb-1">
              {article.category}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-zinc-950 leading-tight tracking-tight">
              {article.title}
            </h2>
          </div>
          {article.elements.map((el, idx) => {
            // 1. Gambar
            if (el.type === "image" && el.src) {
              const isImage2 = !(el.src || '').includes("artikelhama") && !(el.src || '').includes("artikellayanan") && (/image2\./i.test(el.src) || (el.src || '').toLowerCase().includes("image2"));
              if (isImage2) {
                return (
                  <div key={idx} className="my-10 space-y-8 sm:space-y-10">
                    {/* Grid 4 Kolom di Desktop Sesuai Gambar Referensi (Tanpa Judul & Deskripsi) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-8 text-center justify-items-center">
                      {pestList.map((pest) => (
                        <Link
                          key={pest.name}
                          href={`/artikel/${pest.slug}`}
                          className="flex flex-col items-center group cursor-pointer"
                          title={`Lihat panduan hama ${pest.name}`}
                        >
                          {/* Circle Container (Ukuran sama persis dengan halaman utama) */}
                          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-[#dce0e6] border-2 border-zinc-200 group-hover:border-[#C81E27] shadow-xs group-hover:shadow-md transition-all">
                            <Image
                              src={pest.image}
                              alt={pest.name}
                              fill
                              className={`${pest.imageClass || "object-contain p-2"} group-hover:scale-108 transition-transform duration-300`}
                            />
                          </div>

                          {/* Nama Hama */}
                          <h4 className="mt-3.5 text-xs sm:text-sm md:text-base font-medium text-zinc-800 group-hover:text-[#C81E27] transition-colors leading-tight">
                            {pest.name}
                          </h4>
                          {/* Nama Latin (Bold sesuai gambar) */}
                          <p className="text-[11px] sm:text-xs md:text-sm font-bold text-zinc-950 mt-1 leading-tight">
                            {pest.latin}
                          </p>
                        </Link>
                      ))}
                    </div>

                    {/* VECOS Signature Logo & Red Bar di Bawah Section (Persis Sesuai Gambar Referensi) */}
                    <div className="pt-8 sm:pt-10 flex flex-col items-start border-t border-zinc-100">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#C81E27] tracking-wider uppercase font-sans">
                        VECOS
                      </span>
                      <div className="w-full h-2 sm:h-2.5 bg-[#C81E27] mt-3"></div>
                    </div>
                  </div>
                );
              }

              // 1.1 Khusus Gambar Diagram IPM / Vecos Proofing Defender (image4 pada artikel hama atau properti) -> Tampilan 2 Kolom
              const isIpmDiagram =
                ((el.src || '').includes("artikelhama") && (
                  ((el.src || '').toLowerCase().includes("image4") && !(el.src || '').toLowerCase().includes("kecoa/image4")) ||
                  (el.src || '').toLowerCase().includes("kecoa/image5")
                )) ||
                (!(el.src || '').includes("artikellayanan") && (el.src || '').toLowerCase().includes("image4") && [
                  "bandara", "cafe", "hipermarket", "hotel", "kampus", "kantor", "rumah-sakit"
                ].some((k) => (el.src || '').toLowerCase().includes(k)));

              if (isIpmDiagram) {
                return (
                  <div
                    key={idx}
                    className="my-10 sm:my-14 rounded-3xl bg-gradient-to-br from-zinc-50 via-white to-red-50/25 border border-zinc-200/90 shadow-sm overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 transition-all hover:shadow-md"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      {/* Kolom 1 (Kiri): Judul dan Penjelasan Metode IPM */}
                      <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/70 border border-red-200/80 text-[#C81E27] text-xs font-black uppercase tracking-wider w-fit">
                          <span className="w-2 h-2 rounded-full bg-[#C81E27] animate-pulse" />
                          <span>Integrated Pest Management (IPM)</span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 leading-[1.2] tracking-tight">
                            Solusi Perlindungan Properti Menyeluruh dan Berkelanjutan
                          </h3>
                          <div className="w-24 h-1.5 bg-[#C81E27] rounded-full" />
                        </div>

                        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                          VECOS menerapkan pendekatan <strong>Integrated Pest Management (IPM)</strong> berstandar profesional untuk memberikan perlindungan menyeluruh dan berkelanjutan. Kami menggabungkan inspeksi mendalam, sanitasi, proteksi penutupan celah fisik (<em>Vecos Proofing Defender</em>), serta monitoring rutin agar properti Anda senantiasa bebas dari risiko infestasi hama.
                        </p>

                        {/* 4 Pilar Metode IPM */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C81E27] flex items-center justify-center font-bold text-sm shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">
                                Inspeksi & Survey
                              </h4>
                              <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 leading-snug">
                                Identifikasi dini area & titik rawan sarang hama.
                              </p>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C81E27] flex items-center justify-center font-bold text-sm shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">
                                Eksklusi & Proofing
                              </h4>
                              <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 leading-snug">
                                Penutupan celah akses masuk hama secara presisi.
                              </p>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C81E27] flex items-center justify-center font-bold text-sm shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">
                                Treatment & Sanitasi
                              </h4>
                              <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 leading-snug">
                                Pengendalian chemical & non-chemical ramah lingkungan.
                              </p>
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C81E27] flex items-center justify-center font-bold text-sm shrink-0">
                              4
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-extrabold text-zinc-900 leading-tight">
                                Monitoring Berkala
                              </h4>
                              <p className="text-[11px] sm:text-xs text-zinc-500 mt-0.5 leading-snug">
                                Evaluasi rutin & laporan temuan berkala terpercaya.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <a
                            href="/#form-survey"
                            className="inline-flex items-center gap-2 bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-red-700/20 hover:shadow-red-700/40 transition-all cursor-pointer group"
                          >
                            <span>Jadwalkan Survey Gratis</span>
                            <svg className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                          <CallCenterButton className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-full shadow-xs transition-all cursor-pointer" />
                        </div>
                      </div>

                      {/* Kolom 2 (Kanan): Gambar Diagram IPM & Proofing Defender */}
                      <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-none rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
                          <img
                            src={el.src}
                            alt={el.alt || "Solusi Perlindungan Properti Menyeluruh dan Berkelanjutan - VECOS"}
                            loading="lazy"
                            className="w-full h-auto object-contain rounded-xl max-h-[520px] mx-auto block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <figure key={idx} className="my-8">
                  <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-200 bg-white p-2 sm:p-4 flex justify-center items-center">
                    <img
                      src={el.src}
                      alt={el.alt || article.title}
                      loading="lazy"
                      className="w-full max-w-full h-auto object-contain rounded-xl max-h-[85vh] mx-auto block"
                    />
                  </div>
                  {el.caption && (
                    <figcaption className="text-center text-xs text-zinc-500 italic mt-2.5">
                      {el.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            // 2. Heading
            if (el.type === "heading" && el.text) {
              // Jangan duplikasi jika heading 1 sama persis dengan judul artikel di atas
              if (idx === 0 && el.text.trim() === article.title.trim()) {
                return null;
              }

              if (el.level === 1) {
                return (
                  <h2
                    key={idx}
                    className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-950 mt-10 mb-4 pt-4 border-t border-zinc-100 leading-tight"
                  >
                    {el.text}
                  </h2>
                );
              }
              if (el.level === 2) {
                return (
                  <h3
                    key={idx}
                    className="text-lg sm:text-xl md:text-2xl font-extrabold text-zinc-900 mt-8 mb-3 leading-snug"
                  >
                    {el.text}
                  </h3>
                );
              }
              return (
                <h4
                  key={idx}
                  className="text-base sm:text-lg font-bold text-zinc-800 mt-6 mb-2 leading-snug"
                >
                  {el.text}
                </h4>
              );
            }

            // 3. Tabel
            if (el.type === "table" && el.rows) {
              return (
                <div key={idx} className="my-8 overflow-hidden rounded-2xl border border-zinc-300 shadow-sm bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <tbody>
                        {el.rows.map((row, rIdx) => {
                          const isHeaderRow = rIdx === 0;
                          return (
                            <tr
                              key={rIdx}
                              className={
                                isHeaderRow
                                  ? "bg-[#edf0f5] border-b-2 border-zinc-300 text-zinc-950 font-black"
                                  : rIdx % 2 === 0
                                    ? "bg-zinc-50/70 text-zinc-800 hover:bg-zinc-100/70 transition-colors"
                                    : "bg-white text-zinc-800 hover:bg-zinc-100/70 transition-colors"
                              }
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-3.5 sm:p-4 border-b border-zinc-200/80 align-top ${isHeaderRow
                                    ? "border-b-2 border-zinc-300 font-black text-zinc-950 text-xs sm:text-sm tracking-wide bg-[#edf0f5]"
                                    : "text-zinc-700"
                                    }`}
                                >
                                  {/* Render runs jika ada styling */}
                                  {cell.runs && cell.runs.length > 0 ? (
                                    <span>
                                      {cell.runs.map((r, runIdx) => (
                                        <span
                                          key={runIdx}
                                          className={`${r.bold
                                            ? "font-black text-zinc-950"
                                            : isHeaderRow
                                              ? "font-extrabold text-zinc-950"
                                              : "text-zinc-700"
                                            } ${r.italic ? "italic" : ""} ${r.underline ? "underline" : ""
                                            }`}
                                        >
                                          {r.text}
                                        </span>
                                      ))}
                                    </span>
                                  ) : (
                                    <span className={isHeaderRow ? "font-black text-zinc-950" : "text-zinc-700"}>
                                      {cell.text}
                                    </span>
                                  )}

                                  {/* Cell Images jika ada */}
                                  {cell.images && cell.images.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                      {cell.images.map((imgSrc, imgIdx) => (
                                        <div
                                          key={imgIdx}
                                          className="relative w-24 h-16 rounded overflow-hidden shadow-xs border border-zinc-200 bg-white p-1"
                                        >
                                          <img
                                            src={imgSrc}
                                            alt="Tabel ilustrasi"
                                            className="w-full h-full object-contain"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            }

            // 4. Paragraf Normal & List Item
            if (el.type === "paragraph") {
              // Jika paragraf kosong tapi punya gambar
              if (el.images && el.images.length > 0 && (!el.text || el.text.trim().length === 0)) {
                return (
                  <div key={idx} className="my-8 space-y-6">
                    {el.images.map((imgSrc, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="w-full rounded-2xl overflow-hidden shadow-sm border border-zinc-200 bg-white p-2 sm:p-4 flex justify-center items-center"
                      >
                        <img
                          src={imgSrc}
                          alt={article.title}
                          loading="lazy"
                          className="w-full max-w-full h-auto object-contain rounded-xl max-h-[85vh] mx-auto block"
                        />
                      </div>
                    ))}
                  </div>
                );
              }

              if (!el.text || el.text.trim().length === 0) {
                return null;
              }

              // Jika list item
              if (el.isList) {
                return (
                  <div key={idx} className="flex items-start gap-3 my-2 pl-2 sm:pl-4">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#C81E27] mt-2"></span>
                    <div className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                      {el.runs && el.runs.length > 0
                        ? el.runs.map((r, runIdx) => (
                          <span
                            key={runIdx}
                            className={`${r.bold ? "font-bold text-zinc-950" : ""} ${r.italic ? "italic" : ""
                              } ${r.underline ? "underline" : ""}`}
                          >
                            {r.text}
                          </span>
                        ))
                        : el.text}
                    </div>
                  </div>
                );
              }

              // Paragraf biasa
              return (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-zinc-700 leading-relaxed tracking-normal font-normal text-justify sm:text-left"
                >
                  {el.runs && el.runs.length > 0
                    ? el.runs.map((r, runIdx) => (
                      <span
                        key={runIdx}
                        className={`${r.bold ? "font-bold text-zinc-950" : ""} ${r.italic ? "italic" : ""
                          } ${r.underline ? "underline" : ""}`}
                      >
                        {r.text}
                      </span>
                    ))
                    : el.text}
                </p>
              );
            }

            return null;
          })}


          {/* Bagian Penutup Artikel */}
          <div className="pt-8 mt-12 border-t border-zinc-200 space-y-6">
            {/* CTA Penutup: Amankan Properti Anda & Tombol Call */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 py-2">
              <a
                href="/#form-survey"
                className="bg-[#C81E27] hover:bg-[#b01820] active:scale-95 text-white font-extrabold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-red-700/30 hover:shadow-red-700/50 transition-all cursor-pointer inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Amankan Properti Anda</span>
              </a>

              <CallCenterButton className="bg-zinc-200 hover:bg-zinc-300 active:scale-95 text-zinc-900 font-extrabold text-xs sm:text-sm md:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all cursor-pointer inline-flex items-center gap-2 border border-zinc-300 shadow-sm" />
            </div>

            {/* Footer Meta Artikel */}
            <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C81E27] text-white flex items-center justify-center font-black text-sm">
                  V
                </div>
                <span className="text-xs font-bold text-zinc-600">
                  PT Vecos Intitama Mulya • Layanan Pengendalian Hama Profesional
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-xs font-bold text-zinc-700 hover:text-[#C81E27] bg-zinc-100 hover:bg-zinc-200 px-4 py-2 rounded-full transition-colors"
                >
                  ← Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-[60vh] flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-4 w-full">
            <div className="h-8 bg-zinc-200 rounded-lg w-2/3"></div>
            <div className="h-4 bg-zinc-200 rounded w-1/3"></div>
            <div className="h-72 bg-zinc-200 rounded-2xl w-full mt-6"></div>
          </div>
        </div>
      }
    >
      <ArticleContent params={params} />
    </Suspense>
  );
}
