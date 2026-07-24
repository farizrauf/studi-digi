import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "404 - Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-[120px] sm:text-[180px] font-bold text-[#F8FAFC] leading-none">
            404
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-[#64748B] mb-8 text-lg">
          Maaf, halaman yang Anda cari tidak tersedia. Mungkin telah dipindahkan atau dihapus.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Hubungi Kami
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
