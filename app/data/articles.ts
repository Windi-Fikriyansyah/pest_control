// Auto-generated full article content parsed from D:\pest_control\public\artikel
// Content preserved 100% without modification as requested.

export interface ArticleRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  images?: string[];
}

export interface ArticleTableCell {
  text: string;
  runs?: ArticleRun[];
  images?: string[];
}

export interface ArticleElement {
  type: 'heading' | 'paragraph' | 'image' | 'table';
  level?: number;
  text?: string;
  runs?: ArticleRun[];
  isList?: boolean;
  images?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  rows?: ArticleTableCell[][];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  wordCount: number;
  coverImage: string;
  excerpt: string;
  elements: ArticleElement[];
}

const propertyArticles: Article[] = [
  {
    "slug": "bandara",
    "title": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara",
    "category": "Transportasi & Fasilitas Publik",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 291,
    "coverImage": "/images/artikel/bandara/image1.jpg",
    "excerpt": "Bandara adalah gerbang utama mobilitas internasional dan domestik dengan aktivitas ribuan orang setiap harinya. Sebagai infrastruktur vital transportasi, bandara menuntut standar kebersihan yang sangat tinggi. Kehadiran ...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/bandara/image1.jpg",
        "alt": "bandara"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara",
        "runs": [
          {
            "text": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Bandara adalah gerbang utama mobilitas internasional dan domestik dengan aktivitas ribuan orang setiap harinya. Sebagai infrastruktur vital transportasi, bandara menuntut standar kebersihan yang sangat tinggi. Kehadiran hama seperti tikus atau burung di area vital dapat mengganggu sistem navigasi, membahayakan penerbangan, serta merusak citra pelayanan publik.",
        "runs": [
          {
            "text": "Bandara adalah gerbang utama mobilitas internasional dan domestik dengan aktivitas ribuan orang setiap harinya. Sebagai infrastruktur vital transportasi, bandara menuntut standar kebersihan yang sangat tinggi. Kehadiran hama seperti tikus atau burung di area vital dapat mengganggu sistem navigasi, membahayakan penerbangan, serta merusak citra pelayanan publik.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/bandara/image2.png",
        "alt": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Bandara, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area Bandara, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Bandara",
              "runs": [
                {
                  "text": "Area Bandara",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Terminal Penumpang & Boarding Lounge",
              "runs": [
                {
                  "text": "Terminal Penumpang & Boarding Lounge",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Kecoa, Lalat",
              "runs": [
                {
                  "text": "Semut, Kecoa, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Mengurangi kenyamanan penumpang, kesan kotor, dan risiko penyebaran penyakit di fasilitas publik.",
              "runs": [
                {
                  "text": "Mengurangi kenyamanan penumpang, kesan kotor, dan risiko penyebaran penyakit di fasilitas publik.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Tenant Kuliner & Restoran",
              "runs": [
                {
                  "text": "Area Tenant Kuliner & Restoran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Tikus, Lalat",
              "runs": [
                {
                  "text": "Kecoa Jerman, Tikus, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi makanan, pelanggaran standar higienitas bandara, menarik perhatian regulator kesehatan.",
              "runs": [
                {
                  "text": "Kontaminasi makanan, pelanggaran standar higienitas bandara, menarik perhatian regulator kesehatan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Bagasi & Cargo Warehouse",
              "runs": [
                {
                  "text": "Bagasi & Cargo Warehouse",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu, Tikus, Rayap",
              "runs": [
                {
                  "text": "Kutu, Tikus, Rayap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan barang kiriman/bagasi penumpang, risiko kerugian finansial dan komplain klaim.",
              "runs": [
                {
                  "text": "Kerusakan barang kiriman/bagasi penumpang, risiko kerugian finansial dan komplain klaim.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Landasan / Apron & Sekitar Hanggar",
              "runs": [
                {
                  "text": "Landasan / Apron & Sekitar Hanggar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Burung (Bird Pest), Tikus, Hama Liar",
              "runs": [
                {
                  "text": "Burung (Bird Pest), Tikus, Hama Liar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Risiko *bird strike* pada mesin pesawat (bahaya fatal penerbangan), kerusakan infrastruktur luar.",
              "runs": [
                {
                  "text": "Risiko *bird strike* pada mesin pesawat (bahaya fatal penerbangan), kerusakan infrastruktur luar.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Saluran Utilitas & Basement",
              "runs": [
                {
                  "text": "Saluran Utilitas & Basement",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Besar, Tikus, Nyamuk",
              "runs": [
                {
                  "text": "Kecoa Besar, Tikus, Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pusat perkembangbiakan hama yang dapat bermigrasi ke seluruh penjuru gedung terminal.",
              "runs": [
                {
                  "text": "Pusat perkembangbiakan hama yang dapat bermigrasi ke seluruh penjuru gedung terminal.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Pengendalian Hama Skala Besar untuk Fasilitas Publik",
        "runs": [
          {
            "text": "Pengendalian Hama Skala Besar untuk Fasilitas Publik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pengelolaan hama di kawasan bandara memerlukan protokol keamanan yang sangat ketat, sistem terpadu berstandar internasional, serta penanganan khusus yang tidak mengganggu operasional penerbangan. Kami menyediakan solusi pest control komersial skala besar untuk memastikan kawasan bandara Anda tetap steril, aman, dan mematuhi regulasi penerbangan nasional maupun internasional. Hubungi kami untuk konsultasi profesional.",
        "runs": [
          {
            "text": "Pengelolaan hama di kawasan bandara memerlukan protokol keamanan yang sangat ketat, sistem terpadu berstandar internasional, serta penanganan khusus yang tidak mengganggu operasional penerbangan. Kami menyediakan solusi pest control komersial skala besar untuk memastikan kawasan bandara Anda tetap steril, aman, dan mematuhi regulasi penerbangan nasional maupun internasional. Hubungi kami untuk konsultasi profesional.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/bandara/image3.png",
        "alt": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah Lingkungan:",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi Bersertifikat:",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi & Evaluasi Berkala:",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/bandara/image4.png",
        "alt": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara"
      },
      {
        "type": "image",
        "src": "/images/artikel/bandara/image5.png",
        "alt": "Menjaga Standar Keamanan & Sterilitas: Solusi Pest Control untuk Bandara"
      }
    ],
    "id": 1
  },
  {
    "slug": "cafe",
    "title": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda",
    "category": "F&B & Kuliner",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 281,
    "coverImage": "/images/artikel/cafe/image1.png",
    "excerpt": "Café adalah tempat di mana suasana dan kebersihan menjadi magnet bagi pengunjung. Kehadiran hama sekecil apa pun di area café dapat merusak pengalaman pelanggan, menurunkan reputasi merek, dan memicu ulasan negatif. Peng...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/cafe/image1.png",
        "alt": "cafe"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda",
        "runs": [
          {
            "text": "Menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Kenyamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pelanggan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ": Solusi Pengendalian Hama untuk Café Anda",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Café adalah tempat di mana suasana dan kebersihan menjadi magnet bagi pengunjung. Kehadiran hama sekecil apa pun di area café dapat merusak pengalaman pelanggan, menurunkan reputasi merek, dan memicu ulasan negatif. Pengendalian hama yang proaktif sangat krusial untuk menjaga standar higienitas bisnis kopi dan makanan Anda.",
        "runs": [
          {
            "text": "Café ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tempat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di mana suasana dan kebersihan menjadi magnet bagi pengunjung. Kehadiran hama sekecil apa pun di area café dapat merusak pengalaman pelanggan, menurunkan reputasi merek, dan memicu ulasan negatif. Pengendalian hama yang proaktif sangat ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "krusial",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "higienitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bisnis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kopi dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/cafe/image2.png",
        "alt": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Café, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area Café, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Café",
              "runs": [
                {
                  "text": "Area Café",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Bar & Mesin Kopi",
              "runs": [
                {
                  "text": "Area Bar & ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Mesin",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Kopi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Semut, Lalat Buah",
              "runs": [
                {
                  "text": "Kecoa, Semut, Lalat Buah",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi bahan minuman, menarik pelanggan untuk tidak kembali, risiko bakteri.",
              "runs": [
                {
                  "text": "Kontaminasi bahan minuman, menarik pelanggan untuk tidak kembali, risiko bakteri.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Tempat Duduk (Dining)",
              "runs": [
                {
                  "text": "Area Tempat Duduk (Dining)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Lalat, Kutu",
              "runs": [
                {
                  "text": "Semut, Lalat, Kutu",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Gangguan langsung pada kenyamanan pelanggan, risiko citra negatif (viral).",
              "runs": [
                {
                  "text": "Gangguan langsung pada kenyamanan pelanggan, risiko citra negatif (viral).",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Penyimpanan (Storage)",
              "runs": [
                {
                  "text": "Area Penyimpanan (Storage)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Kecoa, Kutu Tepung",
              "runs": [
                {
                  "text": "Tikus, Kecoa, Kutu Tepung",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan stok biji kopi/makanan, risiko kontaminasi produk.",
              "runs": [
                {
                  "text": "Kerusakan stok biji kopi/makanan, risiko kontaminasi produk.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Sampah & Pembuangan",
              "runs": [
                {
                  "text": "Area Sampah & Pembuangan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Lalat, Tikus, Kecoa",
              "runs": [
                {
                  "text": "Lalat, Tikus, Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Sumber utama bau dan pusat berkumpulnya hama di sekitar café.",
              "runs": [
                {
                  "text": "Sumber utama bau dan pusat berkumpulnya hama di sekitar café.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Saluran Air (Drainase)",
              "runs": [
                {
                  "text": "Area Saluran Air (Drainase)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Lalat Buah, Nyamuk",
              "runs": [
                {
                  "text": "Kecoa, Lalat Buah, Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Penyebaran kuman melalui drainase yang tidak tertutup ke area bar.",
              "runs": [
                {
                  "text": "Penyebaran kuman melalui drainase yang tidak tertutup ke area bar.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Mengapa Café Membutuhkan Layanan Profesional?",
        "runs": [
          {
            "text": "Mengapa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Café ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Membutuhkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Profesional?",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Bisnis café beroperasi dengan mobilitas tinggi, sehingga risiko hama masuk sangatlah besar. Kami menawarkan solusi pengendalian hama yang diskret dan efektif tanpa mengganggu suasana santai café Anda. Dengan perlindungan rutin, Anda dapat fokus menyajikan kopi terbaik sementara kami memastikan lingkungan café Anda tetap higienis dan bebas hama. Hubungi kami untuk konsultasi dan inspeksi area café Anda hari ini!",
        "runs": [
          {
            "text": "Bisnis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " café ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "beroperasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " mobilitas tinggi, sehingga risiko hama masuk sangatlah besar. Kami menawarkan solusi pengendalian hama yang diskret dan efektif tanpa mengganggu suasana santai café Anda. Dengan perlindungan rutin, Anda dapat fokus menyajikan kopi terbaik sementara kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "memastikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " café Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "higienis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan bebas hama. Hubungi kami untuk konsultasi dan inspeksi area café Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "!",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/cafe/image3.png",
        "alt": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/cafe/image4.png",
        "alt": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda"
      },
      {
        "type": "image",
        "src": "/images/artikel/cafe/image5.png",
        "alt": "Menjaga Kenyamanan Pelanggan: Solusi Pengendalian Hama untuk Café Anda"
      }
    ],
    "id": 2
  },
  {
    "slug": "disinfeksi",
    "title": "Panduan Komprehensif: Pemetaan Jenis Virus, Area Risiko, & Solusi Disinfeksi",
    "category": "Sterilisasi & Disinfeksi Medis",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 386,
    "coverImage": "/images/artikel/disinfeksi/image1.jpg",
    "excerpt": "Setiap jenis virus memiliki karakteristik penyebaran, ketahanan di permukaan benda, dan target area penularan yang berbeda-beda. Untuk memberikan perlindungan yang efektif, proses disinfeksi harus disesuaikan secara spes...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/disinfeksi/image1.jpg",
        "alt": "disinfeksi"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Panduan Komprehensif: Pemetaan Jenis Virus, Area Risiko, & Solusi Disinfeksi",
        "runs": [
          {
            "text": "Panduan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Komprehensif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ": ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pemetaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Jenis Virus, Area Risiko, & Solusi Disinfeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Setiap jenis virus memiliki karakteristik penyebaran, ketahanan di permukaan benda, dan target area penularan yang berbeda-beda. Untuk memberikan perlindungan yang efektif, proses disinfeksi harus disesuaikan secara spesifik dengan karakteristik patogen dan tata letak area fasilitas Anda.",
        "runs": [
          {
            "text": "Setiap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jenis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " virus ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "memiliki",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " karakteristik penyebaran, ketahanan di permukaan benda, dan target area penularan yang berbeda-beda. Untuk memberikan perlindungan yang efektif, proses disinfeksi harus disesuaikan secara spesifik dengan karakteristik patogen dan tata letak area fasilitas Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Matriks Pemetaan Virus, Area Risiko, & Metode Disinfeksi",
        "runs": [
          {
            "text": "Matriks",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pemetaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Virus, Area Risiko, & Metode Disinfeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Jenis Virus / Patogen",
              "runs": [
                {
                  "text": "Jenis Virus / ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Patogen",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Area Risiko Utama",
              "runs": [
                {
                  "text": "Area Risiko Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Metode & Agen Disinfeksi Spesifik",
              "runs": [
                {
                  "text": "Metode & Agen Disinfeksi Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "SARS-CoV-2 (COVID-19)",
              "runs": [
                {
                  "text": "SARS-CoV-2 (COVID-19)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Perkantoran, Ruang Rapat, Lift, Ruang Tunggu Publik",
              "runs": [
                {
                  "text": "Perkantoran, Ruang Rapat, Lift, Ruang Tunggu Publik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "ULV Fogging & Mist Spraying pada titik sentuh tinggi (gagang pintu, tombol lift).",
              "runs": [
                {
                  "text": "ULV Fogging & Mist Spraying pada titik sentuh tinggi (gagang pintu, tombol lift).",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Influenza A & B (Flu Musiman)",
              "runs": [
                {
                  "text": "Influenza A & B (Flu Musiman)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Sekolah, Kampus, Perkantoran, Area Publik",
              "runs": [
                {
                  "text": "Sekolah, Kampus, Perkantoran, Area Publik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Penyemprotan rutin pada meja kerja, kursi, pegangan tangga, dan fasilitas bersama.",
              "runs": [
                {
                  "text": "Penyemprotan rutin pada meja kerja, kursi, pegangan tangga, dan fasilitas bersama.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Norovirus & Rotavirus",
              "runs": [
                {
                  "text": "Norovirus & Rotavirus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Restoran, Café, Dapur Komersial, Hotel, Toilet",
              "runs": [
                {
                  "text": "Restoran, Café, Dapur Komersial, Hotel, Toilet",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Deep Disinfection permukaan dapur, wastafel, dan area makanan untuk cegah muntaber.",
              "runs": [
                {
                  "text": "Deep Disinfection ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "permukaan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "dapur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", wastafel, dan area makanan untuk cegah muntaber.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Hand, Foot, and Mouth Disease / HFMD (Flu Singapura)",
              "runs": [
                {
                  "text": "Hand, Foot, and Mouth Disease / HFMD (Flu Singapura)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Daycare, Taman Kanak-Kanak (TK), Area Bermain Anak",
              "runs": [
                {
                  "text": "Daycare, Taman Kanak-Kanak (TK), Area Bermain Anak",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pembersihan total mainan, matras, dan lantai dengan disinfektan *food-grade* / aman anak.",
              "runs": [
                {
                  "text": "Pembersihan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " total ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "mainan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "matras",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", dan lantai dengan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "disinfektan *food-grade* / aman anak.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Avian Influenza (Flu Burung)",
              "runs": [
                {
                  "text": "Avian Influenza (Flu Burung)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pasar Tradisional, Gudang Unggas, Peternakan",
              "runs": [
                {
                  "text": "Pasar ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Tradisional",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Gudang ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Unggas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Peternakan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Biosafety Disinfection bertekanan tinggi untuk sterilisasi total dari penularan zoonosis.",
              "runs": [
                {
                  "text": "Biosafety Disinfection bertekanan tinggi untuk sterilisasi total dari penularan zoonosis.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Hepatitis A & Bakteri Enterik",
              "runs": [
                {
                  "text": "Hepatitis A & Bakteri Enterik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Toilet Umum, Kantin, Area Sanitasi & Pembuangan",
              "runs": [
                {
                  "text": "Toilet Umum, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kantin",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Area Sanitasi & Pembuangan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Disinfeksi tingkat tinggi (*High-Level Disinfection*) pada lantai, kloset, dan saluran air.",
              "runs": [
                {
                  "text": "Disinfeksi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "tingkat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "tinggi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (*High-Level Disinfection*) pada lantai, kloset, dan saluran air.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Mengapa Pendekatan Spesifik Sangat Penting?",
        "runs": [
          {
            "text": "Mengapa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pendekatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Spesifik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Sangat Penting?",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Tidak semua cairan disinfektan memiliki kemampuan yang sama dalam membunuh berbagai jenis virus. Virus berselubung (seperti COVID-19 dan Influenza) relatif lebih mudah dinetralkan oleh zat aktif tertentu dibandingkan virus tanpa selubung (seperti Norovirus atau Rotavirus) yang lebih tahan terhadap bahan kimia ringan.",
        "runs": [
          {
            "text": "Tidak ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "semua",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cairan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " memiliki kemampuan yang sama dalam membunuh berbagai jenis virus. Virus berselubung (seperti COVID-19 dan Influenza) relatif lebih mudah dinetralkan oleh zat aktif tertentu dibandingkan virus tanpa selubung (seperti Norovirus atau Rotavirus) yang lebih tahan terhadap bahan kimia ringan.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Oleh karena itu, layanan disinfeksi profesional kami dirancang untuk mengidentifikasi potensi ancaman di setiap area spesifik—mulai dari ruang kerja, dapur komersial, fasilitas pendidikan, hingga area publik—guna memastikan pemilihan zat aktif dan metode aplikasi yang paling tepat sasaran.",
        "runs": [
          {
            "text": "Oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karena",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "itu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " disinfeksi profesional kami dirancang untuk mengidentifikasi potensi ancaman di setiap area spesifik—mulai dari ruang kerja, dapur komersial, fasilitas pendidikan, hingga area publik—guna memastikan pemilihan zat aktif dan metode aplikasi yang paling tepat sasaran.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Lindungi Fasilitas Anda Sekarang",
        "runs": [
          {
            "text": "Lindungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Fasilitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Sekarang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pastikan tempat tinggal, kantor, atau tempat usaha Anda selalu berada di tingkat higienitas tertinggi dan terlindungi dari berbagai ancaman wabah penyakit. Hubungi tim profesional kami untuk konsultasi dan penjadwalan sterilisasi ruangan Anda.",
        "runs": [
          {
            "text": "Pastikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tempat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tinggal",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kantor",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", atau tempat usaha Anda selalu berada di tingkat higienitas tertinggi dan terlindungi dari berbagai ancaman wabah penyakit. Hubungi tim profesional kami untuk konsultasi dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penjadwalan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sterilisasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ruangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      }
    ],
    "id": 3
  },
  {
    "slug": "hipermarket",
    "title": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket",
    "category": "Retail & Supermarket",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 269,
    "coverImage": "/images/artikel/hipermarket/image1.jpg",
    "excerpt": "Hipermarket adalah pusat perbelanjaan dengan volume inventaris yang sangat besar dan pergerakan stok yang cepat. Kehadiran hama di area ritel tidak hanya merusak kemasan produk, tetapi juga mengancam kepercayaan konsumen...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/hipermarket/image1.jpg",
        "alt": "hipermarket"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket",
        "runs": [
          {
            "text": "Menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Higienitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Retail: Solusi Pest Control untuk Hipermarket",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Hipermarket adalah pusat perbelanjaan dengan volume inventaris yang sangat besar dan pergerakan stok yang cepat. Kehadiran hama di area ritel tidak hanya merusak kemasan produk, tetapi juga mengancam kepercayaan konsumen serta standar keamanan pangan yang ditetapkan oleh otoritas kesehatan.",
        "runs": [
          {
            "text": "Hipermarket",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pusat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perbelanjaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dengan volume inventaris yang sangat besar dan pergerakan stok yang cepat. Kehadiran hama di area ritel tidak hanya merusak kemasan produk, tetapi juga ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengancam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepercayaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsumen",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ditetapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "otoritas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hipermarket/image2.png",
        "alt": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Hipermarket, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hipermarket",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Hipermarket",
              "runs": [
                {
                  "text": "Area ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Hipermarket",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Rak Display",
              "runs": [
                {
                  "text": "Area ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Rak",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Display",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Semut, Laba-laba",
              "runs": [
                {
                  "text": "Kecoa, Semut, Laba-laba",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Mencemari area pajangan, memberikan kesan tidak bersih kepada pelanggan.",
              "runs": [
                {
                  "text": "Mencemari area pajangan, memberikan kesan tidak bersih kepada pelanggan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Gudang (Stockroom)",
              "runs": [
                {
                  "text": "Area Gudang (Stockroom)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Kutu, Kecoa Jerman, Rayap",
              "runs": [
                {
                  "text": "Tikus, Kutu, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Rayap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan kemasan (gigitan tikus), kontaminasi silang produk, kerugian stok.",
              "runs": [
                {
                  "text": "Kerusakan kemasan (gigitan tikus), kontaminasi silang produk, kerugian stok.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Departemen Makanan Segar",
              "runs": [
                {
                  "text": "Departemen Makanan Segar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Lalat, Kecoa Jerman, Tikus",
              "runs": [
                {
                  "text": "Lalat, Kecoa Jerman, Tikus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Risiko kontaminasi makanan siap saji, penyebaran bakteri berbahaya (Salmonella, E. coli).",
              "runs": [
                {
                  "text": "Risiko kontaminasi makanan siap saji, penyebaran bakteri berbahaya (Salmonella, E. coli).",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Loading Dock / Receiving",
              "runs": [
                {
                  "text": "Area Loading Dock / Receiving",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Lalat, Kecoa Amerika",
              "runs": [
                {
                  "text": "Tikus, Lalat, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Amerika",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Titik masuk utama hama yang terbawa melalui kontainer atau truk logistik dari luar.",
              "runs": [
                {
                  "text": "Titik masuk utama hama yang terbawa melalui kontainer atau truk logistik dari luar.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Sampah & Drainase",
              "runs": [
                {
                  "text": "Area Sampah & Drainase",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Nyamuk, Lalat",
              "runs": [
                {
                  "text": "Kecoa Amerika, Nyamuk, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pusat sumber bau dan berkembang biaknya hama yang mencemari lingkungan belanja.",
              "runs": [
                {
                  "text": "Pusat sumber bau dan berkembang biaknya hama yang mencemari lingkungan belanja.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Pentingnya Proteksi Terpadu untuk Ritel Modern",
        "runs": [
          {
            "text": "Pentingnya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Proteksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Terpadu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Ritel Modern",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Kami menyediakan program pengendalian hama komersial yang dirancang khusus untuk lingkungan hipermarket yang sibuk. Dengan metode yang aman, diskret, dan terjadwal, kami membantu Anda menjaga standar higienitas toko, melindungi inventaris, dan menjamin kenyamanan setiap pelanggan Anda. Hubungi kami hari ini untuk inspeksi menyeluruh di hipermarket Anda.",
        "runs": [
          {
            "text": "Kami menyediakan program pengendalian hama komersial yang dirancang khusus untuk lingkungan hipermarket yang sibuk. Dengan metode yang aman, diskret, dan terjadwal, kami membantu Anda menjaga standar higienitas toko, melindungi inventaris, dan menjamin kenyamanan setiap pelanggan Anda. ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hubungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "inspeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menyeluruh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hipermarket",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hipermarket/image3.png",
        "alt": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hipermarket/image4.png",
        "alt": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket"
      },
      {
        "type": "image",
        "src": "/images/artikel/hipermarket/image5.png",
        "alt": "Menjaga Higienitas Retail: Solusi Pest Control untuk Hipermarket"
      }
    ],
    "id": 4
  },
  {
    "slug": "hotel",
    "title": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel",
    "category": "Hospitality & Pariwisata",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 273,
    "coverImage": "/images/artikel/hotel/image1.jpg",
    "excerpt": "Bagi industri perhotelan, kepuasan tamu dan kenyamanan kamar adalah prioritas utama. Kehadiran hama sekecil apa pun, seperti kutu kasur atau kecoa, dapat berakibat fatal bagi reputasi hotel, memicu ulasan buruk di platfo...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/hotel/image1.jpg",
        "alt": "hotel"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel",
        "runs": [
          {
            "text": "Menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Reputasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Bintang Lima: Solusi Pengendalian Hama untuk Hotel",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Bagi industri perhotelan, kepuasan tamu dan kenyamanan kamar adalah prioritas utama. Kehadiran hama sekecil apa pun, seperti kutu kasur atau kecoa, dapat berakibat fatal bagi reputasi hotel, memicu ulasan buruk di platform online, serta menurunkan tingkat hunian secara drastis.",
        "runs": [
          {
            "text": "Bagi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "industri",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perhotelan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepuasan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tamu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan kenyamanan kamar adalah prioritas utama. Kehadiran hama sekecil apa pun, seperti kutu kasur atau kecoa, dapat berakibat fatal bagi reputasi hotel, memicu ulasan buruk di platform online, ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menurunkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tingkat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hunian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "drastis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hotel/image2.png",
        "alt": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Hotel, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area Hotel, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Hotel",
              "runs": [
                {
                  "text": "Area Hotel",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Kamar Tamu (Guest Room)",
              "runs": [
                {
                  "text": "Kamar Tamu (Guest Room)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu Busuk (Bed Bugs), Tungau, Nyamuk, Kecoa Jerman",
              "runs": [
                {
                  "text": "Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Busuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (Bed Bugs), ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Tungau",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Gigitan gatal pada tamu, keluhan serius, ulasan buruk (viral), dan kerugian reputasi.",
              "runs": [
                {
                  "text": "Gigitan gatal pada tamu, keluhan serius, ulasan buruk (viral), dan kerugian reputasi.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Restoran & Kitchen Hotel",
              "runs": [
                {
                  "text": "Restoran & Kitchen Hotel",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Tikus, Lalat",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman, Tikus, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi makanan, pelanggaran standar higienitas, risiko keracunan makanan.",
              "runs": [
                {
                  "text": "Kontaminasi makanan, pelanggaran standar higienitas, risiko keracunan makanan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Publik & Lobby",
              "runs": [
                {
                  "text": "Area Publik & Lobby",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Kecoa, Nyamuk",
              "runs": [
                {
                  "text": "Semut",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Mengurangi kenyamanan tamu saat pertama kali datang, memberikan kesan tidak terawat.",
              "runs": [
                {
                  "text": "Mengurangi kenyamanan tamu saat pertama kali datang, memberikan kesan tidak terawat.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Laundry & Linen Room",
              "runs": [
                {
                  "text": "Laundry & Linen Room",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu Busuk, Ngengat, Serangga Kecil",
              "runs": [
                {
                  "text": "Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Busuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Ngengat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Serangga",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Kecil",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Penyebaran hama antar kamar melalui pertukaran linen atau handuk bersih.",
              "runs": [
                {
                  "text": "Penyebaran hama antar kamar melalui pertukaran linen atau handuk bersih.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Basement & Utilitas",
              "runs": [
                {
                  "text": "Area Basement & Utilitas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Kecoa Amerika, Rayap",
              "runs": [
                {
                  "text": "Tikus, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Amerika, Rayap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan struktur bangunan, kabel utilitas, serta pusat berkembang biaknya hama.",
              "runs": [
                {
                  "text": "Kerusakan struktur bangunan, kabel utilitas, serta pusat berkembang biaknya hama.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Layanan Pest Control Profesional untuk Hotel",
        "runs": [
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Control ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " untuk Hotel",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Hotel membutuhkan program pengendalian hama terpadu yang diskret, cepat, dan terjadwal agar tidak mengganggu aktivitas istirahat tamu. Kami menyediakan solusi profesional khusus perhotelan untuk memastikan setiap sudut hotel Anda tetap steril, aman, and bebas hama. Hubungi kami sekarang untuk konsultasi dan audit perlindungan hotel Anda.",
        "runs": [
          {
            "text": "Hotel ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membutuhkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " program ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terpadu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "diskret",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cepat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terjadwal",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " agar ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tidak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengganggu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aktivitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "istirahat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tamu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". Kami menyediakan solusi profesional khusus perhotelan untuk memastikan setiap sudut hotel Anda tetap steril, aman, and bebas hama. Hubungi kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sekarang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan audit ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perlindungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " hotel Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hotel/image3.png",
        "alt": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/hotel/image4.png",
        "alt": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel"
      },
      {
        "type": "image",
        "src": "/images/artikel/hotel/image5.png",
        "alt": "Menjaga Reputasi Bintang Lima: Solusi Pengendalian Hama untuk Hotel"
      }
    ],
    "id": 5
  },
  {
    "slug": "kampus",
    "title": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah",
    "category": "Pendidikan & Universitas",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 308,
    "coverImage": "/images/artikel/kampus/image1.jpg",
    "excerpt": "Lingkungan pendidikan yang higienis sangat penting untuk mendukung konsentrasi belajar siswa dan mahasiswa. Kehadiran hama di area sekolah atau kampus bukan hanya mengganggu kenyamanan, tetapi juga menjadi vektor penyaki...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/kampus/image1.jpg",
        "alt": "kampus"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah",
        "runs": [
          {
            "text": "Menciptakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Belajar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang Sehat: Solusi Pest Control untuk Kampus & Sekolah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Lingkungan pendidikan yang higienis sangat penting untuk mendukung konsentrasi belajar siswa dan mahasiswa. Kehadiran hama di area sekolah atau kampus bukan hanya mengganggu kenyamanan, tetapi juga menjadi vektor penyakit yang dapat mengancam kesehatan seluruh komunitas akademik.",
        "runs": [
          {
            "text": "Lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pendidikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "higienis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " sangat penting untuk mendukung konsentrasi belajar siswa dan mahasiswa. Kehadiran hama di area sekolah atau kampus bukan hanya mengganggu kenyamanan, tetapi juga menjadi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "vektor",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dapat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengancam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "seluruh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "komunitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "akademik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kampus/image2.png",
        "alt": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Institusi Pendidikan, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Institusi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pendidikan, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Institusi",
              "runs": [
                {
                  "text": "Area ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Institusi",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Ruang Kelas & Aula",
              "runs": [
                {
                  "text": "Ruang Kelas & Aula",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Kecoa, Nyamuk, Kutu",
              "runs": [
                {
                  "text": "Semut",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ",",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ",",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Gangguan konsentrasi, risiko alergi/asma bagi siswa, dan penyebaran kuman.",
              "runs": [
                {
                  "text": "Gangguan konsentrasi, risiko alergi/asma bagi siswa, dan penyebaran kuman.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Kantin Sekolah/Kampus",
              "runs": [
                {
                  "text": "Kantin Sekolah/Kampus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Tikus, Lalat",
              "runs": [
                {
                  "text": "Kecoa Jerman, Tikus, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi makanan siswa, risiko keracunan makanan, sanitasi kantin buruk.",
              "runs": [
                {
                  "text": "Kontaminasi makanan siswa, risiko keracunan makanan, sanitasi kantin buruk.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Perpustakaan & Ruang Arsip",
              "runs": [
                {
                  "text": "Perpustakaan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " & Ruang ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Arsip",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Rayap, Silverfish, Kutu Buku",
              "runs": [
                {
                  "text": "Rayap, Silverfish, Kutu Buku",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan permanen pada buku, dokumen penting, dan aset sejarah institusi.",
              "runs": [
                {
                  "text": "Kerusakan permanen pada buku, dokumen penting, dan aset sejarah institusi.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Taman & Lapangan",
              "runs": [
                {
                  "text": "Area Taman & ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Lapangan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Nyamuk, Semut Api, Lebah",
              "runs": [
                {
                  "text": "Nyamuk, Semut Api, Lebah",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Risiko gigitan/sengatan pada siswa, penyebaran penyakit seperti DBD/Chikungunya.",
              "runs": [
                {
                  "text": "Risiko gigitan/sengatan pada siswa, penyebaran penyakit seperti DBD/Chikungunya.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Toilet & Drainase",
              "runs": [
                {
                  "text": "Area Toilet & Drainase",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Nyamuk, Lalat",
              "runs": [
                {
                  "text": "Kecoa Amerika, Nyamuk, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Sumber utama kuman di area yang sering diakses siswa, potensi penyebaran penyakit.",
              "runs": [
                {
                  "text": "Sumber utama kuman di area yang sering diakses siswa, potensi penyebaran penyakit.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Lobby & Office",
              "runs": [
                {
                  "text": "Lobby & Office",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Lalat",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Amerika, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Memberikan kesan jorok, reputasi yang buruk dan mengganggu produktifitas guru",
              "runs": [
                {
                  "text": "Memberikan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kesan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "jorok",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "reputasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " yang ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "buruk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "mengganggu",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "produktifitas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " guru",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Asrama",
              "runs": [
                {
                  "text": "Asrama",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Kutu Busuk, Tikus",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman, Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Busuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Tikus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Area asrama yang menjadi tempat tinggal siswa sangat sensitif dan dapat menjadi\nSumber penularan penyakit",
              "runs": [
                {
                  "text": "Area asrama yang ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "menjadi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "tempat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "tinggal",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "siswa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " sangat ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "sensitif",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "dapat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "menjadi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Sumber",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penularan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penyakit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Keamanan Maksimal untuk Lingkungan Akademik",
        "runs": [
          {
            "text": "Keamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Maksimal",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Akademik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Kami memahami bahwa lingkungan sekolah dan kampus membutuhkan penanganan hama yang aman bagi anak-anak dan mahasiswa. Kami menggunakan metode pest control yang ramah lingkungan, tidak berbau tajam, dan tidak mengganggu jam belajar. Pastikan fasilitas pendidikan Anda tetap nyaman dan higienis sebagai tempat menuntut ilmu. Hubungi kami untuk konsultasi dan inspeksi sekolah/kampus Anda.",
        "runs": [
          {
            "text": "Kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "memahami",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahwa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sekolah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan kampus membutuhkan penanganan hama yang aman bagi anak-anak dan mahasiswa. Kami menggunakan metode pest control yang ramah lingkungan, tidak berbau tajam, dan tidak mengganggu jam belajar. Pastikan fasilitas pendidikan Anda tetap nyaman dan higienis sebagai tempat menuntut ilmu. ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hubungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "inspeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sekolah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kampus",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kampus/image3.png",
        "alt": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kampus/image4.png",
        "alt": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah"
      },
      {
        "type": "image",
        "src": "/images/artikel/kampus/image5.png",
        "alt": "Menciptakan Lingkungan Belajar yang Sehat: Solusi Pest Control untuk Kampus & Sekolah"
      }
    ],
    "id": 6
  },
  {
    "slug": "kantor",
    "title": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran",
    "category": "Komersial & Perkantoran",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 275,
    "coverImage": "/images/artikel/kantor/image1.png",
    "excerpt": "Lingkungan kantor yang bersih dan bebas hama adalah kunci utama kenyamanan serta produktivitas karyawan. Kehadiran hama di ruang kerja bukan hanya mengganggu konsentrasi, tetapi juga membawa risiko kesehatan serius dan p...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/kantor/image1.png",
        "alt": "kantor"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran",
        "runs": [
          {
            "text": "Menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Produktivitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Kantor: Solusi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Gedung ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Perkantoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Lingkungan kantor yang bersih dan bebas hama adalah kunci utama kenyamanan serta produktivitas karyawan. Kehadiran hama di ruang kerja bukan hanya mengganggu konsentrasi, tetapi juga membawa risiko kesehatan serius dan potensi kerusakan pada infrastruktur digital maupun dokumen penting perusahaan.",
        "runs": [
          {
            "text": "Lingkungan kantor yang bersih dan bebas hama adalah kunci utama kenyamanan serta produktivitas karyawan. Kehadiran hama di ruang kerja bukan hanya mengganggu konsentrasi, tetapi juga membawa risiko ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serius",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "potensi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerusakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " pada ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "infrastruktur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " digital ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "maupun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dokumen",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penting",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perusahaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kantor/image2.png",
        "alt": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Perkantoran, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Perkantoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Jenis Hama, dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Area Kantor",
        "runs": [
          {
            "text": "Area Kantor",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Jenis Hama Spesifik",
        "runs": [
          {
            "text": "Jenis Hama Spesifik",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Bahaya Utama",
        "runs": [
          {
            "text": "Bahaya",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Utama",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Ruang Kerja & Cubicle",
        "runs": [
          {
            "text": "Ruang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & Cubicle",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Semut, Kecoa, Kutu Debu",
        "runs": [
          {
            "text": "Semut, Kecoa, Kutu Debu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Gangguan konsentrasi, risiko alergi, dan penyebaran kuman di meja kerja.",
        "runs": [
          {
            "text": "Gangguan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsentrasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "risiko",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "alergi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan penyebaran kuman di meja kerja.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Server Room / Ruang IT",
        "runs": [
          {
            "text": "Server Room / Ruang IT",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Tikus, Semut",
        "runs": [
          {
            "text": "Tikus, Semut",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Risiko korsleting kabel, kerusakan hardware mahal, dan gangguan data kritis.",
        "runs": [
          {
            "text": "Risiko",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "korsleting",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kabel",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerusakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " hardware mahal, dan gangguan data kritis.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Pantry & Ruang Istirahat",
        "runs": [
          {
            "text": "Pantry & Ruang Istirahat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Kecoa, Lalat, Semut",
        "runs": [
          {
            "text": "Kecoa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Lalat, ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Semut",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Kontaminasi makanan, penyebaran penyakit (Salmonella), dan bau tak sedap.",
        "runs": [
          {
            "text": "Kontaminasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyebaran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (Salmonella), dan bau tak sedap.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Area Gudang / Arsip",
        "runs": [
          {
            "text": "Area Gudang / Arsip",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Rayap, Silverfish, Kutu Buku",
        "runs": [
          {
            "text": "Rayap, Silverfish, Kutu Buku",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Kerusakan permanen pada dokumen fisik, arsip penting, dan furnitur kantor.",
        "runs": [
          {
            "text": "Kerusakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "permanen",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " pada ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dokumen",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " fisik, arsip penting, dan furnitur kantor.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Area Toilet & Drainase",
        "runs": [
          {
            "text": "Area Toilet & Drainase",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Kecoa, Nyamuk, Lalat",
        "runs": [
          {
            "text": "Kecoa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Nyamuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Lalat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Sumber kuman dan penyakit yang terbawa oleh karyawan ke area kerja.",
        "runs": [
          {
            "text": "Sumber",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kuman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang terbawa oleh karyawan ke area kerja.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Pentingnya Pest Control Profesional untuk Perkantoran",
        "runs": [
          {
            "text": "Pentingnya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Control ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " untuk Perkantoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pengendalian hama di gedung perkantoran memerlukan pendekatan yang sistematis dan tidak mengganggu jam operasional. Kami menawarkan layanan pest control komersial yang aman, efektif, dan berbasis pada standar K3. Dengan perlindungan rutin, Anda dapat memastikan lingkungan kerja tetap higienis dan aset perusahaan tetap terjaga. Lindungi karyawan dan bisnis Anda hari ini dengan solusi pengendalian hama terbaik.",
        "runs": [
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "gedung",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " perkantoran memerlukan pendekatan yang sistematis dan tidak mengganggu jam operasional. Kami menawarkan layanan pest control komersial yang aman, efektif, dan berbasis pada standar K3. Dengan perlindungan rutin, Anda dapat memastikan lingkungan kerja tetap higienis dan aset perusahaan tetap terjaga. ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lindungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bisnis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "solusi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terbaik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kantor/image3.png",
        "alt": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/kantor/image4.png",
        "alt": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran"
      },
      {
        "type": "image",
        "src": "/images/artikel/kantor/image5.png",
        "alt": "Menjaga Produktivitas Kantor: Solusi Pengendalian Hama untuk Gedung Perkantoran"
      }
    ],
    "id": 7
  },
  {
    "slug": "layanan-vecos",
    "title": "Layanan Vecos",
    "category": "Panduan & Layanan Terpadu",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 270,
    "coverImage": "/images/artikel/layanan-vecos/image1.png",
    "excerpt": "Solusi Rumah dan Bisnis Bebas Hama Bersama Vecos Pest Control...",
    "elements": [
      {
        "type": "heading",
        "level": 1,
        "text": "Layanan Vecos",
        "runs": [
          {
            "text": "Layanan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Vecos",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "image",
        "src": "/images/artikel/layanan-vecos/image1.png",
        "alt": "Layanan Vecos"
      },
      {
        "type": "paragraph",
        "text": "Solusi Rumah dan Bisnis Bebas Hama Bersama Vecos Pest Control",
        "runs": [
          {
            "text": "Solusi Rumah dan ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bisnis",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bebas",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama Bersama ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Vecos",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Control",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Keberadaan hama seperti rayap, tikus, kecoa, dan nyamuk tidak hanya mengganggu kenyamanan, tetapi juga dapat merusak struktur bangunan serta mengancam kesehatan. Vecos Pest Control hadir sebagai penyedia layanan pengendalian hama profesional yang siap memberikan solusi cepat, tuntas, dan aman untuk hunian pribadi, kantor, hingga area komersial.",
        "runs": [
          {
            "text": "Keberadaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "seperti",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rayap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tikus",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kecoa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "nyamuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tidak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengganggu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kenyamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetapi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " juga ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dapat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "struktur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bangunan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengancam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Vecos",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Control",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hadir",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sebagai",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyedia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "siap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "solusi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cepat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tuntas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hunian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pribadi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kantor",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hingga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "komersial",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Layanan Unggulan Vecos Pest Control",
        "runs": [
          {
            "text": "Layanan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Unggulan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Vecos",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Contro",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "l",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Termite Control (Pengendalian Rayap): Perlindungan bangunan dari serangan rayap tanah maupun kayu kering melalui metode pra-konstruksi dan pasca-konstruksi.",
        "runs": [
          {
            "text": "Termite Control (",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Rayap):",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Perlindungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bangunan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rayap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "maupun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kayu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kering",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "melalui",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "metode",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pra-konstruksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pasca-konstruksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Rodent Control (Pengendalian Tikus): Mencegah dan membasmi populasi tikus di area hunian, gudang, serta bisnis kuliner menggunakan metode pemantauan yang terukur.",
        "runs": [
          {
            "text": "Rodent Control (",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Tikus):",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Mencegah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membasmi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "populasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tikus",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hunian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "gudang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bisnis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kuliner",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "metode",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pemantauan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terukur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "General Pest Control (Kecoa, Nyamuk, & Lalat): Treatment khusus menggunakan teknik spraying, fogging, dan pengumpanan (baiting) untuk menekan populasi serangga pengganggu.",
        "runs": [
          {
            "text": "General Pest Control (",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Kecoa",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Nyamuk",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", & Lalat):",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Treatment ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "khusus",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "spraying",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "fogging",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengumpanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "baiting",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": ") ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menekan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "populasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serangga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengganggu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Bed Bug Treatment (Pengendalian Kutu Busuk): Penanganan intensif pada area tempat tidur dan furnitur untuk membasmi kutu busuk beserta telurnya secara efektif.",
        "runs": [
          {
            "text": "Bed Bug Treatment (",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Kutu ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Busuk",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "):",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "intensif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " pada area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tempat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tidur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "furnitur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membasmi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kutu ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "busuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "beserta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "telurnya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Layanan Disinfeksi & Sterilisasi: Penyemprotan disinfektan (cold fogging / misting) untuk membasmi kuman, bakteri, dan virus pada permukaan serta udara di dalam ruangan, menjaga lingkungan tetap steril dan sehat.",
        "runs": [
          {
            "text": "Layanan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Disinfeksi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Sterilisasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Penyemprotan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cold fogging",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": " / ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "misting",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": ") ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membasmi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kuman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bakteri",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan virus pada ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "permukaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "udara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dalam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ruangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "steril",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sehat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/layanan-vecos/image2.png",
        "alt": "Layanan Vecos"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/layanan-vecos/image3.png",
        "alt": "Layanan Vecos"
      },
      {
        "type": "paragraph",
        "text": "Lindungi aset dan jaga kesehatan lingkungan Anda dari ancaman hama serta kuman penyakit. Hubungi tim Vecos Pest Control hari ini untuk menjadwalkan inspeksi lokasi dan konsultasi solusi penanganan yang tepat.",
        "runs": [
          {
            "text": "Lindungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aset",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan jaga ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ancaman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kuman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penyakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hubungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tim",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Vecos",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pest Control",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menjadwalkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "inspeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lokasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "solusi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tepat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      }
    ],
    "id": 8
  },
  {
    "slug": "pabrik-makanan",
    "title": "Menjaga Keamanan Pangan: Solusi Pest Control untuk Industri Pabrik Makanan",
    "category": "Industri Manufaktur & Pangan",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 221,
    "coverImage": "/images/artikel/pabrik-makanan/image1.jpg",
    "excerpt": "Dalam industri manufaktur makanan, standar higienitas bukanlah pilihan, melainkan keharusan mutlak. Kehadiran hama di fasilitas produksi dapat memicu kontaminasi silang, penarikan produk (product recall), kerugian finans...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/pabrik-makanan/image1.jpg",
        "alt": "pabrik-makanan"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Penerapan Pengendalian Hama Terpadu (IPM) demi Menjamin Higienitas Pabrik Makanan",
        "runs": [
          {
            "text": "Menjaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Keamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pangan: Solusi Pest Control untuk Industri Pabrik Makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Dalam industri manufaktur makanan, standar higienitas bukanlah pilihan, melainkan keharusan mutlak. Kehadiran hama di fasilitas produksi dapat memicu kontaminasi silang, penarikan produk (product recall), kerugian finansial yang masif, serta kegagalan dalam audit sertifikasi pangan seperti ISO 22000, HACCP, atau BPOM.",
        "runs": [
          {
            "text": "Dalam ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "industri",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "manufaktur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " higienitas bukanlah pilihan, melainkan keharusan mutlak. Kehadiran hama di fasilitas produksi dapat memicu kontaminasi silang, penarikan produk (product recall), kerugian finansial yang masif, serta kegagalan dalam audit sertifikasi pangan seperti ISO 22000, HACCP, ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "atau",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " BPOM.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/pabrik-makanan/image2.png",
        "alt": "Menjaga Keamanan Pangan: Solusi Pest Control untuk Industri Pabrik Makanan"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Pabrik, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pabrik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Pabrik",
              "runs": [
                {
                  "text": "Area ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Pabrik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Produksi",
              "runs": [
                {
                  "text": "Area ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Produksi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Semut, Lalat, Laba-laba",
              "runs": [
                {
                  "text": "Kecoa, Semut, Lalat, Laba-laba",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi fisik pada produk, penyebaran bakteri (Salmonella, Listeria) ke lini produksi.",
              "runs": [
                {
                  "text": "Kontaminasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "fisik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " pada ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "produk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", penyebaran bakteri (Salmonella, Listeria) ke lini produksi.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Gudang Bahan Baku (Raw Material)",
              "runs": [
                {
                  "text": "Gudang Bahan Baku (Raw Material)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu Beras, Tikus, Rayap",
              "runs": [
                {
                  "text": "Kutu Beras, Tikus, Rayap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan inventaris, penurunan kualitas bahan, kerugian akibat produk terbuang.",
              "runs": [
                {
                  "text": "Kerusakan inventaris, penurunan kualitas bahan, kerugian akibat produk terbuang.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Gudang Produk Jadi (Finished Goods)",
              "runs": [
                {
                  "text": "Gudang Produk Jadi (Finished Goods)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Kecoa, Kumbang",
              "runs": [
                {
                  "text": "Tikus, Kecoa, Kumbang",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pencemaran kemasan (gigitan tikus), risiko temuan benda asing dalam produk jadi.",
              "runs": [
                {
                  "text": "Pencemaran kemasan (gigitan tikus), risiko temuan benda asing dalam produk jadi.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Loading Dock / Pintu Masuk",
              "runs": [
                {
                  "text": "Area Loading Dock / Pintu Masuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Lalat, Kecoa Besar",
              "runs": [
                {
                  "text": "Tikus, Lalat, Kecoa Besar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Titik akses utama hama masuk dari lingkungan luar ke dalam pabrik.",
              "runs": [
                {
                  "text": "Titik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "akses",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "utama",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "hama",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " masuk dari lingkungan luar ke dalam pabrik.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Utilitas & Saluran Air",
              "runs": [
                {
                  "text": "Area Utilitas & Saluran Air",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Lalat Drainase",
              "runs": [
                {
                  "text": "Kecoa Amerika, Lalat Drainase",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jalur migrasi hama antar ruangan melalui sistem pipa dan drainase.",
              "runs": [
                {
                  "text": "Jalur ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "migrasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "hama",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "antar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ruangan melalui sistem pipa dan drainase.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Mengapa Pabrik Makanan Membutuhkan IPM (Integrated Pest Management)?",
        "runs": [
          {
            "text": "Mengapa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pabrik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Membutuhkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " IPM (Integrated Pest Management)?",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Di lingkungan pabrik, pest control konvensional tidaklah cukup. Kami menerapkan pendekatan *Integrated Pest Management* (IPM) yang fokus pada pencegahan, monitoring ketat, dan pelaporan audit yang akurat. Dengan perlindungan kami, Anda dapat memastikan integritas produk terjaga dan fasilitas produksi Anda selalu memenuhi standar keamanan pangan internasional. Hubungi tim kami untuk konsultasi teknis fasilitas pabrik Anda hari ini.",
        "runs": [
          {
            "text": "Di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pabrik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", pest control konvensional tidaklah cukup. Kami menerapkan pendekatan *Integrated Pest Management* (IPM) yang fokus pada pencegahan, monitoring ketat, dan pelaporan audit yang akurat. Dengan perlindungan kami, Anda dapat memastikan integritas produk terjaga dan fasilitas produksi Anda selalu memenuhi standar keamanan pangan internasional. Hubungi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tim",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "fasilitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pabrik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },

      {
        "type": "image",
        "src": "/images/artikel/pabrik-makanan/image3.png",
        "alt": "Menjaga Keamanan Pangan: Solusi Pest Control untuk Industri Pabrik Makanan"
      },
      {
        "type": "image",
        "src": "/images/artikel/pabrik-makanan/image5.png",
        "alt": "Menjaga Keamanan Pangan: Solusi Pest Control untuk Industri Pabrik Makanan"
      },
      {
        "type": "image",
        "src": "/images/artikel/pabrik-makanan/image4.png",
        "alt": "Menjaga Keamanan Pangan: Solusi Pest Control untuk Industri Pabrik Makanan"
      }
    ],
    "id": 9
  },
  {
    "slug": "restauran",
    "title": "Keamanan Pangan & Reputasi Restoran: Solusi Pengendalian Hama Profesional",
    "category": "F&B & Restoran",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 254,
    "coverImage": "/images/artikel/restauran/image1.jpeg",
    "excerpt": "ProfesionalBagi industri restoran, kebersihan adalah segalanya. Kehadiran hama di area dapur atau ruang makan bukan hanya merusak reputasi, tetapi juga melanggar standar kesehatan (HACCP/Sanitasi). Hama di restoran beris...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/restauran/image1.jpeg",
        "alt": "restauran"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Keamanan Pangan & Reputasi Restoran: Solusi Pengendalian Hama Profesional",
        "runs": [
          {
            "text": "Keamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Pangan & ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Reputasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ": Solusi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "ProfesionalBagi industri restoran, kebersihan adalah segalanya. Kehadiran hama di area dapur atau ruang makan bukan hanya merusak reputasi, tetapi juga melanggar standar kesehatan (HACCP/Sanitasi). Hama di restoran berisiko mencemari makanan, menyebabkan keracunan, hingga penutupan tempat usaha oleh otoritas kesehatan.",
        "runs": [
          {
            "text": "ProfesionalBagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "industri",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kebersihan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "segalanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Kehadiran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dapur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "atau",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ruang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "makan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "reputasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetapi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " juga ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "melanggar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (HACCP/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Sanitasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "). Hama di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "berisiko",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mencemari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "makanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menyebabkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keracunan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hingga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penutupan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tempat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "usaha",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "otoritas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/restauran/image2.png",
        "alt": "Keamanan Pangan & Reputasi Restoran: Solusi Pengendalian Hama Profesional"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Restoran, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", Jenis Hama, dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Restoran",
              "runs": [
                {
                  "text": "Area Restoran",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Dapur & Penyimpanan",
              "runs": [
                {
                  "text": "Dapur & Penyimpanan",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Tikus, Lalat",
              "runs": [
                {
                  "text": "Kecoa Jerman, Tikus, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi silang bakteri (Salmonella, E. coli), kerusakan bahan makanan.",
              "runs": [
                {
                  "text": "Kontaminasi silang bakteri (Salmonella, E. coli), kerusakan bahan makanan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Ruang Makan (Dining Area)",
              "runs": [
                {
                  "text": "Ruang Makan (Dining Area)",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Lalat, Tikus",
              "runs": [
                {
                  "text": "Semut, Lalat, Tikus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Mengganggu kenyamanan pelanggan, kesan kotor, risiko penyakit berbahaya.",
              "runs": [
                {
                  "text": "Mengganggu kenyamanan pelanggan, kesan kotor, risiko penyakit berbahaya.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Pembuangan Sampah & Loading Dock",
              "runs": [
                {
                  "text": "Area Pembuangan Sampah & Loading Dock",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Lalat, Tikus, Kecoa Americana",
              "runs": [
                {
                  "text": "Lalat, Tikus, Kecoa Americana",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tempat berkembang biak utama (breeding ground), sumber bau tak sedap.",
              "runs": [
                {
                  "text": "Tempat berkembang biak utama (breeding ground), sumber bau tak sedap.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Gudang / Stockroom",
              "runs": [
                {
                  "text": "Area Gudang / Stockroom",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu Beras, Tikus, Rayap",
              "runs": [
                {
                  "text": "Kutu Beras, Tikus, Rayap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan inventaris stok, kerugian finansial akibat produk terbuang.",
              "runs": [
                {
                  "text": "Kerusakan inventaris stok, kerugian finansial akibat produk terbuang.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Saluran Air (Drainase)",
              "runs": [
                {
                  "text": "Area Saluran Air (Drainase)",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Nyamuk, Lalat Buah",
              "runs": [
                {
                  "text": "Kecoa, Nyamuk, Lalat Buah",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Penyebaran kuman ke seluruh area dapur melalui pipa.",
              "runs": [
                {
                  "text": "Penyebaran kuman ke seluruh area dapur melalui pipa.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Mengapa Restoran Anda Membutuhkan Proteksi Profesional?",
        "runs": [
          {
            "text": "Mengapa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Membutuhkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Proteksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "?",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pest control mandiri tidak cukup untuk lingkungan komersial. Kami menyediakan layanan terintegrasi yang mencakup inspeksi rutin, pelaporan audit, dan penanganan spesifik agar restoran Anda selalu memenuhi standar kebersihan tertinggi. Jangan biarkan hama merusak bisnis yang telah Anda bangun.",
        "runs": [
          {
            "text": "Pest control ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mandiri",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tidak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cukup",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "komersial",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". Kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menyediakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terintegrasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mencakup",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "inspeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rutin",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pelaporan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " audit, dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "spesifik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " agar ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "restoran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selalu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "memenuhi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kebersihan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tertinggi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Jangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biarkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bisnis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "telah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bangun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/restauran/image3.png",
        "alt": "Keamanan Pangan & Reputasi Restoran: Solusi Pengendalian Hama Profesional"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/restauran/image4.png",
        "alt": "Keamanan Pangan & Reputasi Restoran: Solusi Pengendalian Hama Profesional"
      }
    ],
    "id": 10
  },
  {
    "slug": "rumah-sakit",
    "title": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit",
    "category": "Fasilitas Kesehatan & Medis",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 279,
    "coverImage": "/images/artikel/rumah-sakit/image1.jpg",
    "excerpt": "Rumah sakit adalah fasilitas pelayanan kesehatan yang menuntut standar kebersihan dan sterilitas paling ketat. Kehadiran hama di lingkungan medis bukan hanya masalah estetika, melainkan ancaman nyata bagi keselamatan pas...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/rumah-sakit/image1.jpg",
        "alt": "rumah-sakit"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit",
        "runs": [
          {
            "text": "Standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Higienitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ": Solusi Pengendalian Hama untuk Rumah Sakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Rumah sakit adalah fasilitas pelayanan kesehatan yang menuntut standar kebersihan dan sterilitas paling ketat. Kehadiran hama di lingkungan medis bukan hanya masalah estetika, melainkan ancaman nyata bagi keselamatan pasien, peningkatan risiko infeksi nosokomial (HAI), serta pelanggaran regulasi akreditasi kesehatan.",
        "runs": [
          {
            "text": "Rumah ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "fasilitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pelayanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kesehatan yang menuntut standar kebersihan dan sterilitas paling ketat. Kehadiran hama di lingkungan medis bukan hanya masalah estetika, melainkan ancaman nyata bagi keselamatan pasien, peningkatan risiko infeksi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "nosokomial",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (HAI), ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pelanggaran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "regulasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "akreditasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/rumah-sakit/image2.png",
        "alt": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Rumah Sakit, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area Rumah Sakit, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Rumah Sakit",
              "runs": [
                {
                  "text": "Area Rumah Sakit",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Ruang Rawat Inap",
              "runs": [
                {
                  "text": "Ruang Rawat ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Inap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Semut, Kecoa, Kutu",
              "runs": [
                {
                  "text": "Semut, Kecoa, Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Risiko infeksi pada pasien rentan, memicu alergi, dan menurunkan kenyamanan pemulihan.",
              "runs": [
                {
                  "text": "Risiko infeksi pada pasien rentan, memicu alergi, dan menurunkan kenyamanan pemulihan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Kamar Operasi & Steril",
              "runs": [
                {
                  "text": "Kamar Operasi & Steril",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa, Lalat",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Membawa patogen berbahaya yang berisiko mencemari alat medis dan ruang steril.",
              "runs": [
                {
                  "text": "Membawa patogen berbahaya yang berisiko mencemari alat medis dan ruang steril.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Dapur Gizi / Instalasi Gizi",
              "runs": [
                {
                  "text": "Dapur Gizi / Instalasi Gizi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Tikus, Lalat",
              "runs": [
                {
                  "text": "Kecoa Jerman, Tikus, Lalat",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kontaminasi makanan pasien, penyebaran bakteri (Salmonella, E. coli).",
              "runs": [
                {
                  "text": "Kontaminasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "makanan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "pasien",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penyebaran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " bakteri (Salmonella, E. coli).",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Pembuangan Limbah Medis",
              "runs": [
                {
                  "text": "Area Pembuangan Limbah Medis",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Lalat, Kecoa Americana,\nKecoa Germanica",
              "runs": [
                {
                  "text": "Tikus, Lalat, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Americana,",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Germanica",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Penyebaran penyakit menular dari limbah medis ke area lingkungan sekitar rumah sakit.",
              "runs": [
                {
                  "text": "Penyebaran penyakit menular dari limbah medis ke area lingkungan sekitar rumah sakit.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Saluran Air & Utilitas",
              "runs": [
                {
                  "text": "Saluran Air & Utilitas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Americana, Nyamuk, Tikus",
              "runs": [
                {
                  "text": "Kecoa Ameri",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "cana",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Nyamuk, Tikus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Menjadi jalur migrasi hama antar lantai dan sumber penyebaran kuman melalui pipa.",
              "runs": [
                {
                  "text": "Menjadi jalur migrasi hama antar lantai dan sumber penyebaran kuman melalui pipa.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Standar Tinggi Pengendalian Hama Rumah Sakit",
        "runs": [
          {
            "text": "Standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Tinggi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama Rumah Sakit",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pengendalian hama di rumah sakit harus mematuhi protokol kesehatan yang ketat, menggunakan metode ramah lingkungan, serta bahan kimia yang aman bagi pasien dan tenaga medis. Kami menyediakan layanan pengendalian hama terpadu (IPM) khusus fasilitas kesehatan untuk memastikan rumah sakit Anda selalu steril dan memenuhi standar akreditasi. Hubungi kami untuk konsultasi profesional.",
        "runs": [
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " sakit harus mematuhi protokol kesehatan yang ketat, menggunakan metode ramah lingkungan, serta ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pasien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". Kami menyediakan layanan pengendalian hama terpadu (IPM) khusus fasilitas kesehatan untuk memastikan rumah sakit Anda selalu steril dan memenuhi standar akreditasi. ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hubungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/rumah-sakit/image3.png",
        "alt": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/rumah-sakit/image4.png",
        "alt": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit"
      },
      {
        "type": "image",
        "src": "/images/artikel/rumah-sakit/image5.png",
        "alt": "Standar Higienitas Medis: Solusi Pengendalian Hama untuk Rumah Sakit"
      }
    ],
    "id": 11
  },
  {
    "slug": "rumah",
    "title": "Waspada Ancaman Hama di Rumah Anda : Kenali Jenis dan Solusi",
    "category": "Residensial & Perumahan",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 312,
    "coverImage": "/images/artikel/rumah/image1.png",
    "excerpt": "Rumah seharusnya menjadi tempat paling aman dan nyaman bagi Anda dan keluarga. Namun, kehadiran hama pengganggu sering kali merusak kenyamanan tersebut, bahkan mengancam kesehatan serta merusak struktur bangunan....",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/rumah/image1.png",
        "alt": "rumah"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Waspada Ancaman Hama di Rumah Anda : Kenali Jenis dan Solusi",
        "runs": [
          {
            "text": "Waspada",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Ancaman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama di Rumah ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Anda :",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Kenali Jenis dan Solusi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Pengendaliannya",
        "runs": [
          {
            "text": "Pengendaliannya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Rumah seharusnya menjadi tempat paling aman dan nyaman bagi Anda dan keluarga. Namun, kehadiran hama pengganggu sering kali merusak kenyamanan tersebut, bahkan mengancam kesehatan serta merusak struktur bangunan.",
        "runs": [
          {
            "text": "Rumah ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "seharusnya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menjadi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tempat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " paling ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "nyaman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kehadiran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pengganggu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sering",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kali ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kenyamanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tersebut",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengancam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "struktur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bangunan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Bagi Anda yang tinggal di kawasan perkotaan dan permukiman padat penduduk seperti di Indonesia, masalah serangan hama rumahan merupakan tantangan yang kerap ditemui akibat faktor cuaca, kelembapan, hingga kepadatan lingkungan.",
        "runs": [
          {
            "text": "Bagi Anda yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tinggal",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kawasan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perkotaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "permukiman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "padat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penduduk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "seperti",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di Indonesia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merupakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tantangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ditemui",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "akibat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "faktor",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "cuaca",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kelembapan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hingga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepadatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/rumah/image2.png",
        "alt": "Waspada Ancaman Hama di Rumah Anda : Kenali Jenis dan Solusi"
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Rumah Tinggal",
              "runs": [
                {
                  "text": "Area Rumah Tinggal",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama ",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Plafon & Atap",
              "runs": [
                {
                  "text": "Plafon",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " & Atap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus Atap (Roof Rat) & Kelelawar",
              "runs": [
                {
                  "text": "Tikus Atap (Roof Rat) & ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kelelawar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Merusak kabel listrik (risiko korsleting/kebakaran) dan mencemari plafon dengan kotoran.",
              "runs": [
                {
                  "text": "Merusak",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kabel",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "listrik",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "risiko",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "korsleting",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "/",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kebakaran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ") dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "mencemari",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "plafon",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "dengan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kotoran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ".",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Dapur & Ruang Makan",
              "runs": [
                {
                  "text": "Dapur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " & Ruang Makan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Jerman, Semut Hitam, & Lalat Rumah",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Semut",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Hitam, & Lalat Rumah",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Mencemari makanan serta menyebarkan bakteri patogen (Salmonella, E. coli).",
              "runs": [
                {
                  "text": "Mencemari",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "makanan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "serta",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "menyebarkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "bakteri",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "patogen",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (Salmonella, E. coli).",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Kamar Tidur",
              "runs": [
                {
                  "text": "Kamar Tidur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kutu Busuk (Bed Bugs) & Tungau Debu",
              "runs": [
                {
                  "text": "Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Busuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (Bed Bugs) & ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Tungau",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Debu",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Menyebabkan gatal, iritasi kulit, alergi, dan gangguan tidur.",
              "runs": [
                {
                  "text": "Menyebabkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "gatal",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "iritasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kulit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "alergi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "gangguan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "tidur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ".",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Kamar Mandi & Area Lembap",
              "runs": [
                {
                  "text": "Kamar Mandi & Area ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Lembap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Nyamuk Culex, & Lipan",
              "runs": [
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Amerika, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Culex, & Lipan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Menularkan penyakit serta bersarang di saluran air yang kotor.",
              "runs": [
                {
                  "text": "Menularkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penyakit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "serta",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "bersarang",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " di ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "saluran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " air yang ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kotor",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ".",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Struktur Kayu & Rangka Rumah",
              "runs": [
                {
                  "text": "Struktur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Kayu & Rangka Rumah",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Rayap Tanah & Rayap Kayu Kering",
              "runs": [
                {
                  "text": "Rayap Tanah & Rayap Kayu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kering",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Merusak kusen, plafon, dan fondasi kayu hingga mengancam struktur bangunan.",
              "runs": [
                {
                  "text": "Merusak",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kusen",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "plafon",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "fondasi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kayu",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "hingga",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "mengancam",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "struktur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "bangunan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ".",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Taman & Pekarangan",
              "runs": [
                {
                  "text": "Taman & ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Pekarangan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Nyamuk Aedes aegypti, Semut Api, & Hama Tanaman, Ular",
              "runs": [
                {
                  "text": "Nyamuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Aedes aegypti, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Semut",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Api",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", & Hama ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Tanaman",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", Ular",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Menularkan penyakit berbahaya (DBD/Chikungunya) dan menyebabkan senggakit/gatal.",
              "runs": [
                {
                  "text": "Menularkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penyakit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "berbahaya",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (DBD/Chikungunya) dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "menyebabkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "senggakit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "/",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "gatal",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ".",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      // {
      //   "type": "image",
      //   "src": "/images/artikel/rumah/image3.png",
      //   "alt": "Waspada Ancaman Hama di Rumah Anda : Kenali Jenis dan Solusi"
      // },
      {
        "type": "image",
        "src": "/images/artikel/rumah/image4.png",
        "alt": "Waspada Ancaman Hama di Rumah Anda : Kenali Jenis dan Solusi"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Solusi Profesional Pengendalian Hama Bersama Kami",
        "runs": [
          {
            "text": "Solusi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Hama Bersama Kami",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Menyerahkan perlindungan rumah kepada jasa pest control profesional adalah langkah paling efisien dan aman untuk jangka panjang. Kami hadir dengan layanan komprehensif yang menawarkan:",
        "runs": [
          {
            "text": "Menyerahkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perlindungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepada",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jasa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pest control",
            "bold": false,
            "italic": true,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "langkah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " paling ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jangka",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "panjang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". Kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hadir",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "komprehensif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menawarkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Inspeksi Menyeluruh: Mengidentifikasi titik rawan dan jenis spesies hama secara spesifik di rumah Anda.",
        "runs": [
          {
            "text": "Inspeksi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menyeluruh",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Mengidentifikasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "titik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jenis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "spesies",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "spesifik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Metode Ramah Lingkungan & Aman: Menggunakan bahan kimia berstandar tinggi yang aman bagi anggota keluarga, hewan peliharaan, serta ramah lingkungan.",
        "runs": [
          {
            "text": "Metode Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & Aman:",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "berstandar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tinggi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "anggota",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ramah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "lingkungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ". ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Tersertifikasi: Ditangani oleh tenaga ahli berpengalaman yang menguasai teknik penanganan hama secara tepat sasaran.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Tersertifikasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Ditangani",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ahli",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "berpengalaman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menguasai",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tepat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sasaran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi Layanan: Memberikan perlindungan berkelanjutan demi ketenangan pikiran Anda di rumah.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "perlindungan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "berkelanjutan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " demi ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ketenangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pikiran",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda di ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Jangan tunggu sampai hama merusak properti dan mengancam kesehatan keluarga Anda. Hubungi kami sekarang juga untuk mendapatkan jadwal inspeksi gratis dan konsultasi penanganan hama terbaik untuk rumah Anda!",
        "runs": [
          {
            "text": "Jangan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tunggu",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sampai",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "merusak",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "properti",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mengancam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kesehatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Hubungi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " kami ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "sekarang",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " juga",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mendapatkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jadwal",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "inspeksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " gratis dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "konsultasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terbaik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "rumah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda!",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      }
    ],
    "id": 12
  },
  {
    "slug": "warehouse",
    "title": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse",
    "category": "Logistik & Pergudangan",
    "date": "15 Oktober 2026",
    "readTime": "2 Menit Baca",
    "wordCount": 312,
    "coverImage": "/images/artikel/warehouse/image1.jpg",
    "excerpt": "Gudang atau warehouse adalah pusat rantai pasok yang menyimpan berbagai inventaris dalam jumlah besar. Kehadiran hama di area penyimpanan dapat menimbulkan kerugian finansial yang masif akibat kerusakan produk, kontamina...",
    "elements": [
      {
        "type": "image",
        "src": "/images/artikel/warehouse/image1.jpg",
        "alt": "warehouse"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse",
        "runs": [
          {
            "text": "Melindungi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Aset & ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Inventaris",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ": Solusi Pest Control untuk Gudang & Warehouse",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Gudang atau warehouse adalah pusat rantai pasok yang menyimpan berbagai inventaris dalam jumlah besar. Kehadiran hama di area penyimpanan dapat menimbulkan kerugian finansial yang masif akibat kerusakan produk, kontaminasi kemasan, serta kegagalan dalam audit kualitas logistik.",
        "runs": [
          {
            "text": "Gudang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "atau",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " warehouse ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "adalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "pusat",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " rantai pasok yang menyimpan berbagai inventaris dalam jumlah besar. Kehadiran hama di area penyimpanan dapat menimbulkan kerugian finansial yang masif akibat ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerusakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "produk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kontaminasi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kemasan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "serta",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kegagalan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dalam",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " audit ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kualitas",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "logistik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/warehouse/image2.png",
        "alt": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse"
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Area Gudang / Warehouse, Jenis Hama, dan Bahayanya",
        "runs": [
          {
            "text": "Area Gudang / Warehouse, Jenis Hama, dan Bahayanya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "table",
        "rows": [
          [
            {
              "text": "Area Warehouse",
              "runs": [
                {
                  "text": "Area Warehouse",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Jenis Hama Spesifik",
              "runs": [
                {
                  "text": "Jenis Hama Spesifik",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Bahaya Utama",
              "runs": [
                {
                  "text": "Bahaya Utama",
                  "bold": true,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Penyimpanan Rak (Racking)",
              "runs": [
                {
                  "text": "Area ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Penyimpanan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Rak",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (Racking)",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Kutu, Kumbang, Kecoa Jerman",
              "runs": [
                {
                  "text": "Tikus, Kutu, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kumbang",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Jerman",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan kemasan kardus dan produk (gigitan tikus), penurunan kualitas barang simpanan.",
              "runs": [
                {
                  "text": "Kerusakan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kemasan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kardus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " dan produk (gigitan tikus), penurunan kualitas barang simpanan.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Loading Dock",
              "runs": [
                {
                  "text": "Area Loading Dock",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Tikus, Lalat, Kecoa Americana",
              "runs": [
                {
                  "text": "Tikus, Lalat, ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Americana",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Titik masuk utama hama dari luar yang terbawa melalui truk pengangkut atau kontainer logistik.",
              "runs": [
                {
                  "text": "Titik masuk utama hama dari luar yang terbawa melalui truk pengangkut atau kontainer logistik.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Zona Arsip & Produk Kertas",
              "runs": [
                {
                  "text": "Zona Arsip & Produk Kertas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Rayap, Silverfish, Kutu",
              "runs": [
                {
                  "text": "Rayap, Silverfish, Kutu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan permanen pada dokumen penting, kardus arsip, dan bahan berbasis selulosa.",
              "runs": [
                {
                  "text": "Kerusakan permanen pada dokumen penting, kardus arsip, dan bahan berbasis selulosa.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Palet Kayu",
              "runs": [
                {
                  "text": "Area Palet Kayu",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Rayap Kayu Kering, Kumbang Bubuk, Kecoa",
              "runs": [
                {
                  "text": "Rayap Kayu ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kering",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kumbang",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Bubuk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Kecoa",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kerusakan struktur palet kayu yang berisiko merobohkan tumpukan barang di atasnya.",
              "runs": [
                {
                  "text": "Kerusakan struktur palet kayu yang berisiko merobohkan tumpukan barang di atasnya.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Saluran Air & Utilitas",
              "runs": [
                {
                  "text": "Area Saluran Air & Utilitas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kecoa Amerika, Nyamuk, Tikus",
              "runs": [
                {
                  "text": "Kecoa Amerika, Nyamuk, Tikus",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Pusat sarang dan jalur migrasi hama untuk menyebar ke seluruh penjuru gudang.",
              "runs": [
                {
                  "text": "Pusat sarang dan jalur migrasi hama untuk menyebar ke seluruh penjuru gudang.",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ],
          [
            {
              "text": "Area Rongga Atap",
              "runs": [
                {
                  "text": "Area ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Rongga",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " Atap",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Kelelawar, Burung Greja",
              "runs": [
                {
                  "text": "Kelelawar",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Burung",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "Greja",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            },
            {
              "text": "Menyebabkan pencemaran lingkungan kerja, penurunan kualitas udara, risiko penularan penyakit berbahaya (zoonosis), serta potensi kerusakan struktur bangunan dan produk di dalam  gudang",
              "runs": [
                {
                  "text": "Menyebabkan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "pencemaran",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "lingkungan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kerja",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penurunan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kualitas",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "udara",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": ", ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "risiko",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penularan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "penyakit",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "berbahaya",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " (zoonosis), ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "serta",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "potensi",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "kerusakan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "struktur",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "bangunan",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " dan ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "produk",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": " di ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "dalam",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "  ",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                },
                {
                  "text": "gudang",
                  "bold": false,
                  "italic": false,
                  "underline": false,
                  "images": []
                }
              ],
              "images": []
            }
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Proteksi Profesional untuk Logistik & Rantai Pasok",
        "runs": [
          {
            "text": "Proteksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Profesional",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Logistik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & Rantai Pasok",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Pengendalian hama di warehouse membutuhkan sistem monitoring yang ketat, seperti penempatan *bait station* berkala, *rodent trap*, serta pencegahan jalur masuk hama secara menyeluruh. Lindungi aset, inventaris, dan kelancaran rantai pasok bisnis Anda bersama layanan pest control profesional kami. Hubungi kami hari ini untuk audit dan proteksi gudang Anda.",
        "runs": [
          {
            "text": "Pengendalian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " di warehouse membutuhkan sistem monitoring yang ketat, seperti penempatan *bait station* berkala, *rodent trap*, serta pencegahan jalur masuk hama secara menyeluruh. Lindungi aset, inventaris, dan kelancaran rantai pasok bisnis Anda bersama layanan pest control profesional kami. Hubungi kami ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hari",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ini",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "untuk",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " audit dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "proteksi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "gudang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " Anda.",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": false,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/warehouse/image3.png",
        "alt": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse"
      },
      // {
      //   "type": "image",
      //   "src": "/images/artikel/warehouse/image4.png",
      //   "alt": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse"
      // },
      {
        "type": "heading",
        "level": 3,
        "text": "Keunggulan Layanan",
        "runs": [
          {
            "text": "Keunggulan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Layanan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ]
      },
      {
        "type": "paragraph",
        "text": "Aman & Ramah Lingkungan: Menggunakan bahan kimia dan disinfektan standar medis/terdaftar yang efektif membunuh hama dan mikroorganisme, namun tetap aman bagi keluarga, karyawan, dan hewan peliharaan.",
        "runs": [
          {
            "text": "Aman & Ramah ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Lingkungan",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Menggunakan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kimia",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "disinfektan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "standar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "medis",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "/",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terdaftar",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efektif",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "membunuh",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "mikroorganisme",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "namun",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tetap",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "aman",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "bagi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keluarga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "karyawan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ", dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hewan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "peliharaan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Teknisi Bersertifikat: Dilakukan oleh tenaga terlatih yang menerapkan prosedur keselamatan kerja (K3) dan teknik penanganan secara efisien.",
        "runs": [
          {
            "text": "Teknisi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Bersertifikat",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Dilakukan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " oleh ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tenaga",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "terlatih",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " yang ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "menerapkan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "prosedur",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "keselamatan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kerja",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " (K3) dan ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "teknik",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "secara",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "efisien",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "paragraph",
        "text": "Garansi & Evaluasi Berkala: Memberikan kepastian hasil dengan penanganan ulang tanpa biaya tambahan jika masalah hama muncul kembali selama masa garansi.",
        "runs": [
          {
            "text": "Garansi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " & ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Evaluasi",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Berkala",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ":",
            "bold": true,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "Memberikan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kepastian",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hasil",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "dengan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "penanganan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "ulang",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tanpa",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "biaya",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "tambahan",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "jika",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "masalah",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "hama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "muncul",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "kembali",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "selama",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": " masa ",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": "garansi",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          },
          {
            "text": ".",
            "bold": false,
            "italic": false,
            "underline": false,
            "images": []
          }
        ],
        "isList": true,
        "images": []
      },
      {
        "type": "image",
        "src": "/images/artikel/warehouse/image5.png",
        "alt": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse"
      },
      {
        "type": "image",
        "src": "/images/artikel/warehouse/image6.png",
        "alt": "Melindungi Aset & Inventaris: Solusi Pest Control untuk Gudang & Warehouse"
      }
    ],
    "id": 13
  },
  {
    "id": 14,
    "slug": "apartemen",
    "title": "Menjaga Kenyamanan Hunian Vertikal: Solusi Pest Control untuk Apartemen & Kondominium",
    "category": "Residensial & Hunian Vertikal",
    "date": "15 Oktober 2026",
    "readTime": "3 Menit Baca",
    "wordCount": 420,
    "coverImage": "/images/offer_rumah.jpg",
    "excerpt": "Hunian bertingkat seperti apartemen dan kondominium memiliki tantangan pengendalian hama yang unik karena saluran utilitas (pipa shaft, ventilasi, dan tangga darurat) saling terhubung antar unit. VECOS menghadirkan solusi terpadu untuk memutus migrasi hama.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Apartemen dan kondominium adalah kawasan hunian padat bertingkat yang memerlukan pendekatan pengendalian hama holistik. Keterhubungan antar lantai melalui jalur instalasi listrik, pipa air bersih, saluran pembuangan, dan rongga dinding memudahkan hama seperti kecoa Jerman, kutu kasur (bed bugs), dan tikus berpindah dari satu unit ke unit lain secara cepat."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Titik Rawan Hama di Kompleks Apartemen",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "1. Shaft Utilitas & Jalur Pipa: Menjadi jalur utama pergerakan kecoa dan tikus antar lantai."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2. Ruang Sampah (Refuse Chute): Area lembap penuh sisa makanan yang menjadi sarang lalat dan belatung."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "3. Unit Hunian & Kamar Tidur: Rawan penyebaran kutu busuk yang menempel pada koper dan perabot."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "4. Basement & Parkiran: Sarang berkembang biaknya nyamuk genangan dan tikus got besar."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Metode Pengendalian VECOS untuk Apartemen",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "VECOS menerapkan Integrated Pest Management (IPM) khusus gedung hunian tinggi yang mengutamakan gel baiting tanpa bau untuk kecoa di dalam unit, dusting serbuk non-toksik pada rongga dinding shaft, serta pemasangan tamper-resistant rodent bait box di sekeliling perimeter gedung dan ruang pembuangan sampah."
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "slug": "mall",
    "title": "Standar Higienitas Retail Skala Besar: Solusi Pest Control untuk Mall & Pusat Perbelanjaan",
    "category": "Pusat Perbelanjaan & Retail",
    "date": "15 Oktober 2026",
    "readTime": "4 Menit Baca",
    "wordCount": 460,
    "coverImage": "/images/penawaran/6.png",
    "excerpt": "Pusat perbelanjaan dan mall modern menampung ratusan tenant makanan, supermarket, dan ribuan pengunjung harian. Kehadiran hama di area umum atau tenant kuliner dapat mencoreng reputasi manajemen gedung dalam sekejap.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Mall adalah ekosistem komersial kompleks dengan aktivitas logistik penerimaan barang harian dan konsentrasi restoran di Food Court. Ketiadaan kontrol sanitasi ketat akan mengundang koloni tikus atap, kecoa amerika, dan lalat yang mengganggu kenyamanan pengunjung serta membahayakan lisensi operasional tenant."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Zona Kritis Pengawasan di Pusat Perbelanjaan",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Loading Dock: Pintu gerbang masuknya hama yang terbawa bersama palet karton kiriman logistik."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Food Court & Area Makan: Sumber air dan remah makanan yang menarik kecoa dan lalat hijau."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Plafon Gantung & Void Mall: Jalur kabel yang sering dilalui tikus dan rawan disinggahi burung gereja."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Program Kemitraan VECOS Hospitality & Commercial",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Kami menghadirkan perlakuan senyap di luar jam operasional mall (night service), pemasangan insect light trap (ILT) dekoratif berstandar estetika tinggi, audit celah fisik (proofing), dan pelaporan digital real-time untuk memudahkan audit manajemen properti."
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "slug": "data-center",
    "title": "Nol Toleransi Gangguan: Solusi Pengendalian Hama untuk Fasilitas Data Center & Server",
    "category": "Infrastruktur Kritis & Teknologi",
    "date": "15 Oktober 2026",
    "readTime": "3 Menit Baca",
    "wordCount": 390,
    "coverImage": "/images/penawaran/7.png",
    "excerpt": "Fasilitas data center dan ruang server menyimpan infrastruktur digital berharga tinggi yang rentan terhadap bahaya korsleting akibat gigitan kabel oleh tikus. VECOS menyediakan solusi proteksi khusus tanpa cairan basah.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Bagi pengelola pusat data (data center) dan ruang server telekomunikasi, hewan pengerat adalah ancaman tersembunyi yang berisiko menyebabkan downtime sistem berskala masif bernilai miliaran rupiah. Tikus memiliki naluri biologis untuk mengasah giginya dengan mengerat pelindung kabel tembaga dan serat optik."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Protokol Proteksi Khusus Fasilitas Data Center",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "1. Zero Liquid Hazard: Tidak menggunakan cairan semprot atau misting konduktif yang dapat merusak sirkuit elektronik."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2. Underfloor Raised-Deck Monitoring: Pemasangan sensor dan perangkap mekanis di bawah lantai panggung."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "3. Perimeter Sealing & Proofing: Menutup rapat lubang jalur pipa pendingin (CRAC) dan celah kabel masukan."
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "slug": "bioskop",
    "title": "Kenyamanan Penonton & Sanitasi Maksimal: Solusi Pest Control untuk Bioskop & Hiburan",
    "category": "Hiburan & Rekreasi",
    "date": "15 Oktober 2026",
    "readTime": "3 Menit Baca",
    "wordCount": 410,
    "coverImage": "/images/penawaran/8.png",
    "excerpt": "Studio bioskop yang gelap, berkarpet tebal, dan memiliki kursi busa merupakan habitat ideal bagi kutu busuk dan serangga kecil jika tidak dirawat secara teratur. Jaga rating ulasan bioskop Anda bersama VECOS.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Satu insiden penonton tergigit kutu busuk atau menemukan kecoa di kursi bioskop dapat viral di media sosial dan menghancurkan reputasi jaringan bioskop. Lingkungan theater yang kedap cahaya dan hangat menuntut penanganan berkala berkecepatan tinggi."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Layanan Khusus Bioskop dari VECOS",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Steam Heat Treatment: Uap panas bertekanan tinggi untuk membunuh kutu busuk dan telurnya di sela jok kursi hingga tuntas tanpa merusak bahan kain atau kulit."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Concession Stand IPM: Penanganan higienis di area popcorn, sirup minuman, dan penyimpanan jagung tanpa kontaminasi kimia."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Formula Fast-Drying Tanpa Bau: Memungkinkan studio digunakan kembali dalam waktu singkat sebelum pemutaran film berikutnya dimulai."
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "slug": "pabrik-manufaktur",
    "title": "Proteksi Mesin & Kontinuitas Produksi: Solusi Pest Control Pabrik Manufaktur Industri",
    "category": "Industri Manufaktur & Perakitan",
    "date": "15 Oktober 2026",
    "readTime": "4 Menit Baca",
    "wordCount": 440,
    "coverImage": "/images/offer/warehouse.jpeg",
    "excerpt": "Fasilitas pabrik manufaktur otomotif, tekstil, elektronik, dan industri berat memerlukan perlindungan terhadap hama perusak mesin, instalasi panel listrik, dan palet kayu penyimpanan bahan baku.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Pada pabrik manufaktur non-makanan, hama tikus dan rayap tetap merupakan ancaman besar. Tikus sering bersarang di dalam panel distribusi listrik (MCCB) dan menyebabkan kebakaran pabrik, sedangkan rayap dapat merusak palet kayu dan kardus packing komponen siap ekspor."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Ruang Lingkup Proteksi Manufaktur VECOS",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "1. Perimeter Chemical Barrier: Mengamankan fondasi pabrik dari serangan rayap bawah tanah."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "2. Heavy-Duty Rodent Station: Penempatan umpan tamper-resistant di sepanjang pagar dan dinding luar pabrik."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "3. Bird Control & Netting: Pemasangan jaring dan duri anti-burung di rangka atap hanggar pabrik."
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "slug": "tempat-ibadah",
    "title": "Kekhusyukan & Kehigienisan Rumah Ibadah: Solusi Pengendalian Hama Fasilitas Keagamaan",
    "category": "Fasilitas Sosial & Rumah Ibadah",
    "date": "15 Oktober 2026",
    "readTime": "3 Menit Baca",
    "wordCount": 380,
    "coverImage": "/images/penawaran/2.png",
    "excerpt": "Masjid, gereja, pura, dan wihara memiliki ornamen kayu antik, kubah tinggi, dan karpet luas yang memerlukan perawatan hama ramah lingkungan untuk kenyamanan dan kekhusyukan umat yang beribadah.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Tempat ibadah adalah pusat berkumpulnya umat dengan lalu lintas manusia yang sangat ramai pada hari-hari tertentu. Karpet ibadah yang luas rentan menjadi sarang tungau dan kutu debu, sementara mimbar dan plafon kayu sering kali menjadi sasaran empuk rayap kayu kering."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Perlakuan Spesialis VECOS untuk Fasilitas Keagamaan",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Sterilisasi Karpet & Cold Fogging: Membasmi kuman, tungau, dan bau apek dengan bahan terdaftar resmi Kemenkes RI yang suci dan aman bagi jamaah."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Termite Baiting System: Membasmi koloni rayap tanpa perlu pengeboran merusak pada lantai marmer atau ornamen kayu bersejarah."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Pengendalian Jentik & Nyamuk: Menjaga tempat wudhu dan taman sekitar rumah ibadah bebas jentik nyamuk demam berdarah."
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "slug": "gym",
    "title": "Sanitasi & Kebersihan Ruang Latihan: Solusi Pest Control untuk Pusat Kebugaran & Gym",
    "category": "Kebugaran & Wellness",
    "date": "15 Oktober 2026",
    "readTime": "3 Menit Baca",
    "wordCount": 390,
    "coverImage": "/images/penawaran/4.png",
    "excerpt": "Pusat kebugaran, fitness center, dan studio gym memiliki kelembapan tinggi dari keringat dan ruang shower yang rentan terhadap jamur, kuman patogen, dan serangga pengganggu.",
    "elements": [
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "Member gym menuntut standar kebersihan tinggi saat berolahraga. Ruang loker yang tertutup dan area shower yang basah dapat menjadi sarang berkembang biaknya jamur kulit, kecoa pembuangan, dan bakteri jika tidak ditangani dengan protokol sanitasi medis profesional."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "runs": [
          {
            "text": "Program Higienitas Gym VECOS",
            "bold": true
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Disinfeksi ULV Cold Fogging pada matras yoga, bench press, dan dumbbell."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Pengendalian kecoa dan serangga drainase di saluran air kamar bilas dan sauna."
          }
        ]
      },
      {
        "type": "paragraph",
        "runs": [
          {
            "text": "• Perlakuan residu non-lengket dan aman bagi kontak langsung kulit manusia."
          }
        ]
      }
    ]
  }
];

import { hamaArticles } from "./hamaArticles";

export const articles: Article[] = [...propertyArticles, ...hamaArticles];
