"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
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
    // Handle form submission
    const whatsappMessage = `Halo, saya ${formData.name}.\n\nPerusahaan: ${formData.company || "-"}\nLayanan yang dibutuhkan: ${formData.service || "-"}\n\nPesan:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${siteConfig.phone.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 lg:py-32 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Siap untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Memulai?
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan diskusi tentang kebutuhan website Anda
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                  Kirim Pesan
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger>
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
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
                  Hubungi Kami Langsung
                </h3>
                <div className="space-y-6">
                  <a
                    href={`https://wa.me/${siteConfig.phone.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A] group-hover:text-green-600 transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-[#64748B]">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        Email
                      </p>
                      <p className="text-[#64748B]">{siteConfig.email}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#06B6D4]/10">
                    <div className="w-12 h-12 rounded-xl bg-[#06B6D4] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A]">Telepon</p>
                      <p className="text-[#64748B]">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Info */}
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A] mb-1">Alamat</p>
                      <p className="text-[#64748B]">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#0F172A] mb-1">Jam Operasional</p>
                      <p className="text-[#64748B]">{siteConfig.businessHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-2xl">
                <div className="aspect-video bg-[#F8FAFC] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#2563EB] mx-auto mb-3" />
                    <p className="text-[#64748B]">Jakarta Selatan, Indonesia</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-[#2563EB] font-medium hover:underline"
                    >
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
