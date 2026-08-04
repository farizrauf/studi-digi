"use client";

import * as React from "react";
import Link from "next/link";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

const stats = [
  { icon: Users, value: "100+", label: "Klien Puas" },
  { icon: Award, value: "150+", label: "Proyek Selesai" },
  { icon: Clock, value: "5+", label: "Tahun Pengalaman" },
  { icon: ThumbsUp, value: "98%", label: "Tingkat Kepuasan" }
];

const values = [
  {
    title: "Quality First",
    description: "Kami tidak pernah mengorbankan kualitas. Setiap detail diperhatikan untuk hasil terbaik."
  },
  {
    title: "Transparent Process",
    description: "Proses kerja yang transparan dengan progress tracking real-time dan komunikasi terbuka."
  },
  {
    title: "Customer-Centric",
    description: "Kebutuhan klien adalah prioritas utama. Kami mendengarkan dan memberikan solusi terbaik."
  },
  {
    title: "Continuous Support",
    description: "Dukungan teknis yang berkelanjutan untuk memastikan website Anda selalu optimal."
  }
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <AnimatedSection direction="left">
            <Badge variant="secondary" className="mb-6 dark:bg-slate-800 dark:text-white">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
              Partner Digital untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Pertumbuhan Bisnis Anda
              </span>
            </h2>
            <p className="text-lg text-[#64748B] dark:text-slate-400 mb-6 leading-relaxed">
              Studio Digi adalah agency yang berfokus pada pembuatan website profesional untuk UMKM, restoran, kafe, dan bisnis lokal di Indonesia.
            </p>
            <p className="text-lg text-[#64748B] dark:text-slate-400 mb-8 leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun dan 100+ proyek yang sukses, kami berkomitmen untuk memberikan solusi digital terbaik yang membantu bisnis Anda berkembang di era modern.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Mulai Konsultasi
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Tim Kami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl">
                <p className="text-3xl font-bold text-[#2563EB] dark:text-blue-400">5+</p>
                <p className="text-sm text-[#64748B] dark:text-slate-400">Tahun Pengalaman</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 100}>
              <div className="text-center p-6 bg-[#F8FAFC] dark:bg-slate-800 rounded-2xl">
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-[#2563EB] dark:text-blue-400" />
                </div>
                <p className="text-3xl font-bold text-[#0F172A] dark:text-white mb-1">{stat.value}</p>
                <p className="text-[#64748B] dark:text-slate-400">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Values */}
        <AnimatedSection className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white text-center mb-12">
            Mengapa Memilih Kami?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="p-6 bg-[#F8FAFC] dark:bg-slate-800 rounded-2xl h-full">
                  <h4 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-[#64748B] dark:text-slate-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Siap untuk Berkembang Bersama Kami?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Mari diskusikan kebutuhan website Anda dan mulai perjalanan digital bisnis Anda bersama Studio Digi.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#2563EB] hover:bg-[#F8FAFC]"
              asChild
            >
              <Link href="/contact">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
