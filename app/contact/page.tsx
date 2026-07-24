import { ContactSection } from "@/components/sections/contact";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Hubungi StudioDigital untuk konsultasi gratis tentang kebutuhan website bisnis Anda. Tim kami siap membantu 24/7.",
  openGraph: {
    title: `Hubungi Kami | ${siteConfig.name}`,
    description: "Hubungi kami untuk konsultasi gratis tentang kebutuhan website bisnis Anda.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
