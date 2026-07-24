import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan layanan StudioDigital. Pelajari aturan dan ketentuan penggunaan layanan kami.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-[#64748B]">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8">
            <p className="text-[#64748B]">
              Dengan menggunakan layanan <strong>{siteConfig.name}</strong>, Anda setuju untuk terikat dengan syarat dan ketentuan ini. Silakan baca dengan seksama sebelum menggunakan layanan kami.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">1. Penerimaan Syarat</h2>
          <p className="text-[#64748B] mb-6">
            Dengan mengakses atau menggunakan layanan kami, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">2. Layanan yang Disediakan</h2>
          <p className="text-[#64748B] mb-6">
            {siteConfig.name} menyediakan layanan pembuatan website dan digital solutions termasuk namun tidak terbatas pada:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B]">
            <li>Website Company Profile</li>
            <li>Website Restaurant/Cafe</li>
            <li>E-commerce dan Online Store</li>
            <li>Landing Page</li>
            <li>Custom Web Application</li>
            <li>Website Maintenance dan Support</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">3. Proses Kerja</h2>

          <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">3.1 Konsultasi Awal</h3>
          <p className="text-[#64748B] mb-6">
            Kami akan melakukan konsultasi untuk memahami kebutuhan, tujuan, dan ekspektasi Anda terhadap proyek website.
          </p>

          <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">3.2 Proposal dan Kontrak</h3>
          <p className="text-[#64748B] mb-6">
            Setelah konsultasi, kami akan memberikan proposal detail termasuk spesifikasi, timeline, dan harga. Project baru dimulai setelah kontrak ditandatangani dan DP diterima.
          </p>

          <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">3.3 Design dan Development</h3>
          <p className="text-[#64748B] mb-6">
            Kami akan mengembangkan website sesuai spesifikasi yang disepakati. Anda akan diberikan akses ke staging environment untuk preview dan feedback.
          </p>

          <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">3.4 Revisi</h3>
          <p className="text-[#64748B] mb-6">
            Setiap paket termasuk jumlah revisi yang sudah ditentukan. Revisi tambahan akan dikenakan biaya terpisah sesuai kompleksitasnya.
          </p>

          <h3 className="text-xl font-semibold text-[#0F172A] mt-6 mb-3">3.5 Launch</h3>
          <p className="text-[#64748B] mb-6">
            Setelah persetujuan final dan pelunasan pembayaran, website akan di-launch ke server production dan siap digunakan.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">4. Pembayaran</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B]">
            <li>Pembayaran dilakukan dengan DP 50% di awal project dan lunas setelah website selesai</li>
            <li>Untuk project besar (di atas Rp 10.000.000), dapat dicicil 3x tanpa bunga</li>
            <li>Semua harga belum termasuk pajak jika berlaku</li>
            <li>Biaya perpanjangan domain dan hosting adalah tanggung jawab klien</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">5. Hak atas Karya</h2>
          <p className="text-[#64748B] mb-6">
            Setelah pembayaran lunas, seluruh source code, desain, dan aset akan menjadi milik klien sepenuhnya. Kami retain hak untuk menampilkan project di portfolio kami untuk keperluan promotional.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">6. Dukungan dan Maintenance</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B]">
            <li>Setiap paket sudah termasuk periode support sesuai ketentuan</li>
            <li>Perpanjangan support dapat dilakukan dengan biaya bulanan/tahunan</li>
            <li>Perubahan konten oleh klien sendiri tidak termasuk dalam scope support</li>
            <li>Backup regular tersedia untuk semua project</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">7. Garansi</h2>
          <p className="text-[#64748B] mb-6">
            Kami memberikan garansi untuk bug fixing gratis selama periode support. Garansi tidak mencakup perubahan yang diminta klien setelah persetujuan final, atau masalah yang disebabkan oleh modifikasi pihak ketiga.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">8. Kebijakan Refund</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B]">
            <li>DP yang sudah dibayarkan tidak dapat di-refund setelah project dimulai</li>
            <li>Jika project dibatalkan di tengah jalan, klien bertanggung jawab untuk pembayaran pekerjaan yang sudah selesai</li>
            <li>Permintaan refund harus dilakukan secara tertulis via email</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">9. Batasan Tanggung Jawab</h2>
          <p className="text-[#64748B] mb-6">
            {siteConfig.name} tidak bertanggung jawab untuk:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[#64748B]">
            <li>Kerugian tidak langsung atau konsekuensial</li>
            <li>Keuntungan yang tidak tercapai karena penggunaan website</li>
            <li>Masalah yang disebabkan oleh pihak ketiga atau force majeure</li>
            <li>Content yang disediakan oleh klien</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">10. Kerahasiaan</h2>
          <p className="text-[#64748B] mb-6">
            Kedua belah pihak setuju untuk menjaga kerahasiaan semua informasi yang dipertukarkan selama project. Informasi klien tidak akan dibagikan ke pihak ketiga tanpa persetujuan.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">11. Perubahan Syarat</h2>
          <p className="text-[#64748B] mb-6">
            Kami berhak mengubah syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan diinformasikan via email atau di posting di website ini. Kelanjutan penggunaan layanan setelah perubahan berarti persetujuan Anda terhadap syarat baru.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">12. Hukum yang Berlaku</h2>
          <p className="text-[#64748B] mb-6">
            Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan akan diselesaikan melalui negosiasi terlebih dahulu, dan jika tidak berhasil, akan diselesaikan melalui pengadilan yang berwenang.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mt-10 mb-4">13. Hubungi Kami</h2>
          <p className="text-[#64748B] mb-6">
            Untuk pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
          </p>
          <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-6">
            <p className="text-[#64748B]">
              <strong>Email:</strong> {siteConfig.email}<br />
              <strong>Telepon:</strong> {siteConfig.phone}<br />
              <strong>Alamat:</strong> {siteConfig.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
