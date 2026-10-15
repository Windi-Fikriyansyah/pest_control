import { Suspense } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles, Article, ArticleElement, ArticleRun } from "@/app/data/articles";

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

  // Articles for recommendation
  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <div className="w-full pb-20">
      {/* ======================================================== */}
      {/* 1. BREADCRUMBS & ARTICLE HEADER                          */}
      {/* ======================================================== */}
      <section className="bg-white border-b border-zinc-200 pt-6 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-500 pb-4">
            <Link href="/" className="hover:text-[#C81E27] transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-zinc-800 font-bold truncate max-w-xs sm:max-w-md">
              {article.category}
            </span>
          </nav>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pb-3">
            <span className="bg-[#C81E27] text-white text-[11px] sm:text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-xs tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-zinc-500 font-medium">
              📅 {article.date}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs text-zinc-500 font-medium">
              ⏱️ {article.readTime}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs text-zinc-500 font-medium">
              📝 {article.wordCount} Kata
            </span>
          </div>

          {/* Judul Utama Artikel (Persis Dokumen Asli) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-zinc-950 leading-tight tracking-tight max-w-5xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. KONTEN UTAMA ARTIKEL & SIDEBAR CTA                    */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sisi Kiri: Badan Konten Artikel Dokumen Lengkap */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            {article.elements.map((el, idx) => {
              // 1. Gambar
              if (el.type === "image" && el.src) {
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
                                    className={`p-3.5 sm:p-4 border-b border-zinc-200/80 align-top ${
                                      isHeaderRow
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
                                            className={`${
                                              r.bold
                                                ? "font-black text-zinc-950"
                                                : isHeaderRow
                                                ? "font-extrabold text-zinc-950"
                                                : "text-zinc-700"
                                            } ${r.italic ? "italic" : ""} ${
                                              r.underline ? "underline" : ""
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
                                className={`${r.bold ? "font-bold text-zinc-950" : ""} ${
                                  r.italic ? "italic" : ""
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
                            className={`${r.bold ? "font-bold text-zinc-950" : ""} ${
                              r.italic ? "italic" : ""
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
            <div className="pt-8 mt-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C81E27] text-white flex items-center justify-center font-black text-sm">
                  V
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">Ditinjau oleh Tim Teknis VECOS</p>
                  <p className="text-[11px] text-zinc-500">Divisi Pengendalian Hama & Sanitasi Lingkungan</p>
                </div>
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
          </article>

          {/* Sisi Kanan: Sidebar Interaktif & Sticky CTA */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Card CTA Konsultasi Langsung */}
            <div className="bg-gradient-to-br from-[#17181c] to-[#252830] text-white p-6 sm:p-7 rounded-3xl border border-zinc-800 shadow-xl space-y-4">
              <div className="inline-block bg-[#C81E27] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Layanan Bebas Biaya Survey
              </div>

              <h3 className="text-lg sm:text-xl font-black leading-snug">
                Butuh Solusi {article.category}?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Hubungi teknisi ahli Vecos untuk inspeksi menyeluruh ke lokasi Anda. Kami siap menangani permasalahan hama dengan garansi tuntas.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/6285743681500?text=Halo%20Vecos,%20saya%20membaca%20artikel%20"${encodeURIComponent(
                    article.title
                  )}"%20dan%20ingin%20konsultasi%20langsung`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer hover:scale-102"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp 0857-4368-1500</span>
                </a>

                <Link
                  href="/#form-survey"
                  className="w-full flex items-center justify-center bg-[#C81E27] hover:bg-[#b01820] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all text-center hover:scale-102"
                >
                  Ajukan Jadwal Survey Gratis
                </Link>
              </div>
            </div>

            {/* Quick List Artikel Lainnya */}
            <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4">
              <h4 className="text-sm font-black text-zinc-900 uppercase tracking-wider pb-2 border-b border-zinc-100">
                Panduan Terkait Lainnya
              </h4>

              <div className="space-y-3.5">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/artikel/${rel.slug}`}
                    className="flex gap-3 group items-center"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-zinc-100 border border-zinc-200">
                      <Image
                        src={rel.coverImage}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-[#C81E27] uppercase block">
                        {rel.category}
                      </span>
                      <h5 className="text-xs font-bold text-zinc-800 group-hover:text-[#C81E27] line-clamp-2 transition-colors leading-snug">
                        {rel.title}
                      </h5>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/#penawaran"
                  className="block text-center text-xs font-extrabold text-[#C81E27] hover:underline"
                >
                  Lihat Solusi Properti Lainnya →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. REKOMENDASI ARTIKEL DI BAGIAN BAWAH                   */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pt-12 border-t border-zinc-200">
        <div className="flex items-center justify-between pb-6">
          <h3 className="text-xl sm:text-2xl font-black text-zinc-950">
            Artikel Pilihan Lainnya
          </h3>
          <Link
            href="/#penawaran"
            className="text-xs sm:text-sm font-bold text-[#C81E27] hover:underline"
          >
            Lihat Solusi Properti Lainnya →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.slug}
              href={`/artikel/${rel.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg transition-all group p-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-zinc-100">
                  <Image
                    src={rel.coverImage}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#C81E27] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    {rel.category}
                  </span>
                </div>

                <div className="text-[11px] text-zinc-500 flex items-center gap-2">
                  <span>⏱️ {rel.readTime}</span>
                  <span>•</span>
                  <span>📅 {rel.date}</span>
                </div>

                <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#C81E27] line-clamp-2 leading-snug">
                  {rel.title}
                </h4>
              </div>

              <div className="pt-3 mt-3 border-t border-zinc-100 text-xs font-bold text-[#C81E27] flex items-center justify-between">
                <span>Baca Selengkapnya</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
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
        <div className="w-full min-h-[60vh] flex items-center justify-center p-8 sm:p-12">
          <div className="animate-pulse space-y-4 max-w-4xl w-full">
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
