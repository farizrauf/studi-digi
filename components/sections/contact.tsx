"use client";

import * as React from "react";
import { MapPin, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { siteConfig, services } from "@/lib/data";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ${formData.name}.\n\nPerusahaan: ${formData.company || "-"}\nLayanan yang dibutuhkan: ${formData.service || "-"}\n\nPesan:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Siap untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Memulai?
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan diskusi tentang kebutuhan website Anda
          </p>
        </AnimatedSection>

        {/* Top Row - Form and Quick Contact with more spacing */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-8">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <Card className="h-full min-h-[600px] lg:min-h-[700px] dark:bg-slate-800 dark:border-slate-700 rounded-2xl">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-semibold text-[#0F172A] dark:text-white mb-6">
                  Kirim Pesan
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Nama Lengkap"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="No. Telepon"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                    <Input
                      label="Nama Perusahaan (Opsional)"
                      placeholder="Nama perusahaan Anda"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] dark:text-white mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea
                    label="Pesan"
                    placeholder="Ceritakan tentang kebutuhan website Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full dark:bg-[#2563EB] dark:text-white dark:hover:bg-blue-700" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Quick Contact and Office Info */}
          <AnimatedSection direction="right">
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="dark:bg-slate-800 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-5">
                    Hubungi Kami Langsung
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/${siteConfig.phone.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A] dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          WhatsApp
                        </p>
                        <p className="text-[#64748B] dark:text-slate-400">{siteConfig.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                          Email
                        </p>
                        <p className="text-[#64748B] dark:text-slate-400">{siteConfig.email}</p>
                      </div>
                    </a>

                    <a
                      href={siteConfig.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-sky-50 dark:bg-sky-900/20 hover:bg-sky-100 dark:hover:bg-sky-900/30 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A] dark:text-white group-hover:text-[#0A66C2] dark:group-hover:text-sky-400 transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-[#64748B] dark:text-slate-400">Fariz Abdul Rauf</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card className="dark:bg-slate-800 dark:border-slate-700 rounded-2xl">
                <CardContent className="p-6 lg:p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 dark:bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-[#2563EB] dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A] dark:text-white mb-1">Alamat</p>
                        <p className="text-[#64748B] dark:text-slate-400">{siteConfig.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 dark:bg-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-[#06B6D4] dark:text-cyan-400" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0F172A] dark:text-white mb-1">Jam Operasional</p>
                        <p className="text-[#64748B] dark:text-slate-400">{siteConfig.businessHours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Map - Full Width with rounded corners */}
        <AnimatedSection>
          <Card className="dark:bg-slate-800 dark:border-slate-700 overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="w-full h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56253942854!2d106.68943162822967!3d-6.229728100524568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b109%3A0x6df2c20b5a1a3e3a!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1699000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StudioDigital Location"
                  className="grayscale-[50%] dark:grayscale-[80%]"
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
