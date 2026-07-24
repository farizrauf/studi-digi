"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#06B6D4]/5 to-[#2563EB]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-[#2563EB] font-medium">Digital Agency Terpercaya</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Website Profesional untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                UMKM, Restoran & Bisnis Anda
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#64748B] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kami membantu bisnis berkembang dengan website modern, cepat, SEO friendly, dan siap menghasilkan lebih banyak pelanggan.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#2563EB]" />
                </div>
                <span className="text-sm text-[#64748B]">100+ Proyek</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <span className="text-sm text-[#64748B]">98% Klien Puas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-sm text-[#64748B]">Support 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/contact">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                <Link href="/portfolio">
                  Lihat Portfolio
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#2563EB]/10">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Website Development"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 sm:-left-8 bg-white rounded-xl p-4 shadow-xl shadow-[#2563EB]/10 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <span className="text-green-500 font-bold">+40%</span>
                </div>
                <div>
                  <p className="text-xs text-[#64748B]">Peningkatan</p>
                  <p className="text-sm font-semibold text-[#0F172A]">Penjualan</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-xl p-4 shadow-xl shadow-[#06B6D4]/10 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                  <span className="text-[#2563EB] font-bold">100</span>
                </div>
                <div>
                  <p className="text-xs text-[#64748B]">Skor</p>
                  <p className="text-sm font-semibold text-[#0F172A]">Lighthouse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
