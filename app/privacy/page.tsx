import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi StudioDigital. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              Kembali ke Beranda
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] dark:text-white mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-[#64748B] dark:text-slate-400">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#F8FAFC] dark:bg-slate-800 rounded-2xl p-6 mb-8">
            <p className="text-[#64748B] dark:text-slate-300">
              Di <strong className="text-[#0F172A] dark:text-white">{siteConfig.name}</strong>, kami sangat menghargai privasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan kami.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">1. Informasi yang Kami Kumpulkan</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, termasuk:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B] dark:text-slate-300">
            <li><strong className="text-[#0F172A] dark:text-white">Nama dan informasi kontak</strong> - saat Anda menghubungi kami atau mengisi formulir</li>
            <li><strong className="text-[#0F172A] dark:text-white">Informasi proyek</strong> - detail tentang bisnis dan kebutuhan website Anda</li>
            <li><strong className="text-[#0F172A] dark:text-white">Data komunikasi</strong> - email, pesan WhatsApp, dan catatan komunikasi lainnya</li>
            <li><strong className="text-[#0F172A] dark:text-white">Data teknis</strong> - alamat IP, jenis browser, dan informasi perangkat</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">2. Bagaimana Kami Menggunakan Informasi</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Kami menggunakan informasi yang dikumpulkan untuk:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B] dark:text-slate-300">
            <li>Menyediakan dan meningkatkan layanan kami</li>
            <li>Berkomunikasi dengan Anda tentang proyek dan layanan</li>
            <li>Memproses pembayaran dan invoice</li>
            <li>Memberikan dukungan teknis</li>
            <li>Memenuhi kewajiban hukum dan regulasi</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">3. Pengumpulan dan Pengungkapan</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami dapat membagikan informasi Anda hanya dalam situasi berikut:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B] dark:text-slate-300">
            <li>Dengan persetujuan explicit Anda</li>
            <li>Untuk mematuhi kewajiban hukum</li>
            <li>Untuk melindungi hak dan keamanan kami atau pengguna lain</li>
            <li>Dengan penyedia layanan yang membantu operasional kami (dengan kontrak kerahasiaan)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">4. Keamanan Data</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Ini termasuk enkripsi SSL, server aman, dan protokol keamanan industry-standard.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">5. Hak Anda</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Anda memiliki hak untuk:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B] dark:text-slate-300">
            <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
            <li>Meminta koreksi informasi yang tidak akurat</li>
            <li>Meminta penghapusan informasi Anda</li>
            <li>Menarik persetujuan Anda kapan saja</li>
            <li>Mengajukan keberatan atas pemrosesan tertentu</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">6. Cookie dan Teknologi Similar</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Website kami menggunakan cookie dan teknologi similar untuk meningkatkan pengalaman pengguna, menganalisis penggunaan website, dan menyediakan fungsionalitas tertentu. Anda dapat mengatur browser Anda untuk memblokir cookie, namun ini dapat mempengaruhi fungsionalitas website.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">7. Perubahan Kebijakan</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan di posting di halaman ini dengan tanggal &quot;Terakhir diperbarui&quot; yang baru. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-10 mb-4">8. Hubungi Kami</h2>
          <p className="text-[#64748B] dark:text-slate-300 mb-6">
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda, silakan hubungi kami:
          </p>
          <div className="bg-[#F8FAFC] dark:bg-slate-800 rounded-2xl p-6 mb-6">
            <p className="text-[#64748B] dark:text-slate-300">
              <strong className="text-[#0F172A] dark:text-white">Email:</strong> {siteConfig.email}<br />
              <strong className="text-[#0F172A] dark:text-white">Telepon:</strong> {siteConfig.phone}<br />
              <strong className="text-[#0F172A] dark:text-white">Alamat:</strong> {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
