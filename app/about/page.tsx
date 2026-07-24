import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali StudioDigital - partner digital terpercaya untuk pertumbuhan bisnis Anda dengan pengalaman lebih dari 5 tahun dan 100+ proyek sukses.",
  openGraph: {
    title: `Tentang Kami | ${siteConfig.name}`,
    description: "Kenali StudioDigital - partner digital terpercaya untuk pertumbuhan bisnis Anda.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  );
}
