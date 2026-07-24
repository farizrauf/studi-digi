import { Service, Project, Testimonial, PricingPlan, FAQ, Feature } from "@/types";

export const services: Service[] = [
  {
    title: "Website Company Profile",
    description: "Website profesional untuk memperkenalkan bisnis Anda kepada calon pelanggan dengan desain modern dan elegan.",
    icon: "Briefcase",
    features: ["Desain Eksklusif", "Responsif Mobile", "SEO Friendly", " loading cepat"]
  },
  {
    title: "Restaurant Website",
    description: "Website restoran dengan menu interaktif, reservasi online, dan sistem pemesanan yang mudah.",
    icon: "UtensilsCrossed",
    features: ["Menu Digital", "Reservasi Online", "Galeri Foto", "Lokasi Maps"]
  },
  {
    title: "Cafe Website",
    description: "Website kafe dengan nuansa hangat yang menampilkan menu, suasana, dan informasi acara.",
    icon: "Coffee",
    features: ["Profil Kafe", "Menu & Harga", "Event Calendar", "Social Integration"]
  },
  {
    title: "UMKM Website",
    description: "Website khusus untuk pelaku UMKM dengan fitur lengkap untuk meningkatkan penjualan dan branding.",
    icon: "Store",
    features: ["Katalog Produk", "WhatsApp Order", "Testimoni", "Statistik Kunjungan"]
  },
  {
    title: "Online Catalog",
    description: "Katalog online yang memukau untuk menampilkan produk dengan cara yang menarik dan professional.",
    icon: "BookOpen",
    features: ["Galeri Produk", "Filter Kategori", "Zoom Gambar", "Share Media Sosial"]
  },
  {
    title: "Landing Page",
    description: "Halaman landing yang dioptimalkan untuk konversi tinggi, cocok untuk campaign dan promosi.",
    icon: "Rocket",
    features: ["A/B Testing Ready", "Lead Generation", "Analytics Integration", "CTA Optimization"]
  },
  {
    title: "Custom Web Application",
    description: "Aplikasi web custom sesuai kebutuhan bisnis Anda dengan fitur advanced dan skalabilitas tinggi.",
    icon: "Code",
    features: ["Custom Features", "API Integration", "Database Management", "User Authentication"]
  },
  {
    title: "POS Integration",
    description: "Integrasi sistem kasir online dengan website untuk pengalaman bisnis yang seamless.",
    icon: "CreditCard",
    features: ["Payment Gateway", "Inventory Management", "Sales Report", "Multi Outlet"]
  },
  {
    title: "Reservation System",
    description: "Sistem reservasi online untuk restoran, klinik, salon, dan bisnis berbasis appointment.",
    icon: "CalendarCheck",
    features: ["Booking Online", "Reminders", "Calendar Sync", "SMS/Email Notification"]
  },
  {
    title: "Online Ordering",
    description: "Sistem pemesanan online dengan keranjang belanja, checkout, dan tracking pesanan.",
    icon: "ShoppingCart",
    features: ["Cart System", "Order Tracking", "Payment Integration", "Order History"]
  },
  {
    title: "Website Maintenance",
    description: "Layanan perawatan website untuk memastikan website Anda selalu berjalan optimal.",
    icon: "Wrench",
    features: ["Regular Update", "Security Patch", "Backup Data", "Performance Monitoring"]
  },
  {
    title: "Website Redesign",
    description: "Memperbarui tampilan website lama menjadi lebih modern, responsif, dan sesuai tren terbaru.",
    icon: "RefreshCw",
    features: ["Fresh Design", "Content Migration", "SEO Preservation", "Faster Loading"]
  },
  {
    title: "SEO Optimization",
    description: "Optimasi SEO untuk meningkatkan ranking website di Google dan meningkatkan traffic organik.",
    icon: "Search",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Report"]
  },
  {
    title: "Google Business Integration",
    description: "Integrasi lengkap dengan Google Business untuk meningkatkan visibilitas lokal bisnis Anda.",
    icon: "Globe",
    features: ["Google Maps", "Business Listing", "Review Management", "Local SEO"]
  }
];

export const features: Feature[] = [
  {
    title: "Performa Cepat",
    description: "Website load dalam hitungan detik dengan teknologi terbaru untuk pengalaman terbaik.",
    icon: "Zap"
  },
  {
    title: "SEO Friendly",
    description: "Dioptimalkan untuk mesin pencari agar bisnis Anda mudah ditemukan di Google.",
    icon: "Search"
  },
  {
    title: "Responsif Mobile",
    description: "Tampilan sempurna di semua ukuran layar, dari smartphone hingga desktop.",
    icon: "Smartphone"
  },
  {
    title: "Desain Modern",
    description: "Tampilan profesional dengan desain terkini yang membuat bisnis Anda tampil premium.",
    icon: "Palette"
  },
  {
    title: "Aman & Terpercaya",
    description: "Sertifikat SSL dan keamanan data untuk menjaga kepercayaan pelanggan Anda.",
    icon: "Shield"
  },
  {
    title: "Mudah Dikelola",
    description: "Dashboard admin yang intuitif untuk mengelola konten website tanpa perlu teknis.",
    icon: "LayoutDashboard"
  },
  {
    title: "Google Analytics",
    description: "Pantau traffic dan perilaku pengunjung dengan integrasi analytics lengkap.",
    icon: "BarChart3"
  },
  {
    title: "WhatsApp Integration",
    description: "Tombol chat langsung ke WhatsApp untuk kemudahan komunikasi dengan pelanggan.",
    icon: "MessageCircle"
  },
  {
    title: "Google Maps",
    description: "Peta interaktif untuk membantu pelanggan menemukan lokasi bisnis Anda.",
    icon: "MapPin"
  },
  {
    title: "Contact Form",
    description: "Form kontak profesional untuk menangkap leads dan inquiry dari pelanggan.",
    icon: "Mail"
  }
];

export const projects: Project[] = [
  {
    id: "warung-sederhana",
    title: "Warung Sederhana",
    category: "Restaurant",
    description: "Website restaurant tradisional Indonesia dengan nuansa modern, fitur menu digital dan reservasi meja online.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    link: "#"
  },
  {
    id: "coffee-society",
    title: "Coffee Society",
    category: "Coffee Shop",
    description: "Website kafe hipster dengan desain minimalis, menu interaktif, dan sistem booking untuk komunitas.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: "vogue-fashion",
    title: "Vogue Fashion",
    category: "Fashion",
    description: "E-commerce fashion dengan katalog produk lengkap, filtering advanced, dan checkout yang smooth.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    technologies: ["Next.js", "Stripe", "Prisma"],
    link: "#"
  },
  {
    id: "properti-maju",
    title: "Properti Maju",
    category: "Property",
    description: "Portal properti dengan pencarian advanced, gallery 360°, dan virtual tour untuk listing rumah.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["Next.js", "Three.js", "Mapbox"],
    link: "#"
  },
  {
    id: "beauty-clinic",
    title: "Beauty Clinic Plus",
    category: "Clinic",
    description: "Website klinik kecantikan dengan booking treatment online, konsultasi, dan portofolio hasil treatment.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    id: "artisan-bakery",
    title: "Artisan Bakery",
    category: "Bakery",
    description: "Website bakery artisan dengan katalog produk segar harian, pre-order cake, dan delivery tracking.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "#"
  },
  {
    id: "retail-modern",
    title: "Retail Modern",
    category: "Retail",
    description: "Website retail store dengan sistem inventory real-time, member card, dan promo management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React", "Express", "MySQL"],
    link: "#"
  },
  {
    id: "tech-corporate",
    title: "TechCorp Indonesia",
    category: "Corporate",
    description: "Website corporate untuk perusahaan teknologi dengan investor relations, career portal, dan newsroom.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    technologies: ["Next.js", "Contentful", "Vercel"],
    link: "#"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "Owner",
    company: "Warung Sederhana",
    content: "Website yang dibuat sangat membantu bisnis kami. Pelanggan bisa lihat menu dan booking meja langsung dari website. Penjualan meningkat 40% sejak website launching!",
    rating: 5
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "Founder",
    company: "Coffee Society",
    content: "Design yang modern dan professional. Customer kami suka dengan tampilan website yang clean dan easy to navigate. Recommended untuk bisnis kafe!",
    rating: 5
  },
  {
    id: "3",
    name: "Ahmad Wijaya",
    role: "Director",
    company: "Properti Maju",
    content: "Fitur pencarian properti yang sangat lengkap. Klien kami bisa filter berdasarkan lokasi, harga, dan tipe dengan sangat mudah. Worth the investment!",
    rating: 5
  },
  {
    id: "4",
    name: "Dewi Kusuma",
    role: "Manager",
    company: "Beauty Clinic Plus",
    content: "Booking treatment jadi lebih rapi dan customer suka. Kami bisa manage jadwal dengan lebih efisien. Thank you untuk website yang bagus!",
    rating: 5
  },
  {
    id: "5",
    name: "Rudi Hermawan",
    role: "CEO",
    company: "TechCorp Indonesia",
    content: "Website corporate yang very professional. Investor dan talent acquisition jadi lebih mudah tertarik. UI/UX nya premium banget!",
    rating: 5
  },
  {
    id: "6",
    name: "Maya Putri",
    role: "Owner",
    company: "Artisan Bakery",
    content: "Website baru kamibeautiful banget! Pre-order cake meningkat drastis. Customer love the design dan easy to order. Best decision untuk bisnis kami!",
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "2.500.000",
    description: "Cocok untuk bisnis kecil yang baru memulai kehadiran online.",
    features: [
      "1 Halaman Landing Page",
      "Desain Responsif Mobile",
      "Domain .com 1 Tahun",
      "Hosting 1 Tahun",
      "SSL Certificate",
      "Form Kontak",
      "Google Maps Integration",
      "WhatsApp Button",
      "SEO Basic",
      "Support 30 Hari"
    ],
    buttonText: "Mulai Sekarang",
    buttonLink: "/contact"
  },
  {
    name: "Professional",
    price: "5.000.000",
    description: "Paket lengkap untuk bisnis yang serius meningkatkan brand presence.",
    features: [
      "5-7 Halaman Website",
      "Desain Premium Custom",
      "Dashboard Admin",
      "Domain .com 1 Tahun",
      "Hosting 1 Tahun",
      "SSL Certificate",
      "Form Kontak Advanced",
      "Google Maps Integration",
      "WhatsApp Integration",
      "Social Media Integration",
      "SEO Optimization",
      "Google Analytics",
      "Galeri Foto",
      "Support 90 Hari",
      "Revisi 3x"
    ],
    highlighted: true,
    buttonText: "Pilih Professional",
    buttonLink: "/contact"
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    description: "Solusi custom untuk kebutuhan bisnis skala besar.",
    features: [
      "Unlimited Halaman",
      "Desain Ultra Premium",
      "Custom Functionality",
      "Advanced Dashboard",
      "Multi-language Support",
      "E-commerce Integration",
      "API Integration",
      "Custom Domain",
      "Priority Hosting",
      "SSL Premium",
      "Advanced SEO",
      "Google Business Integration",
      "CRM Integration",
      "Priority Support 1 Tahun",
      "Unlimited Revisi",
      "Dedicated Account Manager"
    ],
    buttonText: "Konsultasi Sekarang",
    buttonLink: "/contact"
  }
];

export const faqs: FAQ[] = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer: "Untuk website company profile standar, waktu pengerjaan adalah 7-14 hari kerja. Untuk website dengan fitur kompleks atau custom, bisa memakan waktu 3-6 minggu tergantung kebutuhan dan revisi."
  },
  {
    question: "Apakah saya bisa revisi desain?",
    answer: "Ya, setiap paket sudah termasuk jumlah revisi. Starter mendapat 2x revisi, Professional 3x, dan Enterprise unlimited revisi. Setiap tambahan revisi akan ada biaya tambahan."
  },
  {
    question: "Apakah termasuk hosting dan domain?",
    answer: "Ya, semua paket sudah termasuk domain .com untuk 1 tahun dan hosting managed. Setelah 1 tahun, biaya perpanjangan adalah Rp 500.000 - 1.500.000/tahun tergantung paket hosting."
  },
  {
    question: "Bagaimana jika saya tidak punya konten untuk website?",
    answer: "Kami bisa membantu menyusun konten website termasuk copywriting, photography suggestions, dan structuring. Biaya tergantung jumlah dan kompleksitas konten yang dibutuhkan."
  },
  {
    question: "Apakah website bisa di-update sendiri?",
    answer: "Ya, semua website dilengkapi dashboard admin yang user-friendly. Anda bisa update teks, gambar, dan konten lainnya tanpa perlu keahlian coding."
  },
  {
    question: "Apakah support teknis tersedia?",
    answer: "Ya, kami提供 berbagai tingkat support sesuai paket. Starter mendapat 30 hari support, Professional 90 hari, dan Enterprise mendapat priority support selama 1 tahun."
  },
  {
    question: "Apakah bisa integrasi dengan WhatsApp Business?",
    answer: "Tentu! Semua paket sudah termasuk WhatsApp integration dengan floating button yang bisa langsung chat ke nomor bisnis Anda."
  },
  {
    question: "Bagaimana dengan SEO dan Google ranking?",
    answer: "Semua website kami dioptimalkan untuk SEO dengan meta tags, structured data, fast loading, dan mobile-friendly. Untuk SEO advanced dan ranking improvement, kami tawarkan paket terpisah."
  },
  {
    question: "Apakah bisa setelah jadi di-transfer ke developer lain?",
    answer: "Ya, source code dan semua akses akan ditransfer penuh setelah pembayaran lunas. Anda memiliki full control dan ownership atas website."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran bisa dilakukan dengan DP 50% di awal dan lunas setelah website selesai. Untuk project besar, bisa dicicil 3x tanpa bunga."
  },
  {
    question: "Apakah bisa bantu upload ke server sendiri?",
    answer: "Ya, kami bisa bantu setup dan deploy di server/VPS pilihan Anda dengan biaya tambahan tergantung kompleksitas server."
  },
  {
    question: "Bagaimana jika ingin tambah fitur baru nanti?",
    answer: "Website kami built dengan modular, jadi sangat fleksibel untuk add-on. Hubungi kami untuk discuss kebutuhan dan kami akan provide quotation."
  },
  {
    question: "Apakah ada garansi?",
    answer: "Kami berikan garansi bug fixing gratis selama periode support. Jika ada issue critical, kami akan fix secepat mungkin."
  },
  {
    question: "Bagaimana dengan keamanan website?",
    answer: "Semua website dilengkapi SSL certificate, secure coding practices, regular security updates, dan backup system. Untuk enterprise, kami tawarkan advanced security package."
  },
  {
    question: "Bisakah melihat progress selama development?",
    answer: "Ya! Kami gunakan staging environment di mana Anda bisa login dan lihat progress development secara real-time. Feedback bisa langsung kami implement."
  }
];

export const navigationItems = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Harga", href: "/pricing" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/contact" }
];

export const siteConfig = {
  name: "StudioDigital",
  description: "Website Profesional untuk UMKM, Restoran & Bisnis Anda. Kami membantu bisnis berkembang dengan website modern, cepat, dan SEO friendly.",
  url: "https://studiodigital.id",
  ogImage: "/og-image.jpg",
  phone: "+6281234567890",
  email: "hello@studiodigital.id",
  address: "Jl. Sudirman No. 123, Jakarta Selatan, Indonesia",
  businessHours: "Senin - Jumat: 09:00 - 18:00 WIB",
  socialLinks: {
    instagram: "https://instagram.com/studiodigital.id",
    facebook: "https://facebook.com/studiodigital.id",
    linkedin: "https://linkedin.com/company/studiodigital"
  }
};
