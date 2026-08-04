"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactSection } from "@/components/sections/contact";
import { testimonials } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Badge variant="secondary" className="mb-6 dark:bg-slate-800 dark:text-white">
              Testimoni
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] dark:text-white mb-6">
              Apa Kata{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Klien Kami
              </span>
            </h1>
            <p className="text-xl text-[#64748B] dark:text-slate-400 max-w-3xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah bekerja sama dengan kami
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="p-6">
                    <svg className="w-12 h-12 text-[#2563EB]/10 dark:text-blue-400/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>

                    <p className="text-[#64748B] dark:text-slate-300 mb-6 leading-relaxed text-lg">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0] dark:border-slate-700">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F172A] dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-[#64748B] dark:text-slate-400">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-[#2563EB] dark:text-blue-400 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-[#F8FAFC] dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">
              Numbers That Speak
            </h2>
            <p className="text-xl text-[#64748B] dark:text-slate-400">
              Kepercayaan yang dibangun dari hasil nyata
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "100+", label: "Klien Puas" },
              { value: "98%", label: "Tingkat Kepuasan" },
              { value: "150+", label: "Proyek Selesai" },
              { value: "5+", label: "Tahun Pengalaman" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-2xl">
                  <p className="text-4xl font-bold text-[#2563EB] dark:text-blue-400 mb-2">{stat.value}</p>
                  <p className="text-[#64748B] dark:text-slate-400">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white mb-6">
              Siap Menjadi Klien Kami?
            </h2>
            <p className="text-xl text-[#64748B] dark:text-slate-400 mb-8">
              Bergabunglah dengan ratusan bisnis yang telah berkembang bersama StudioDigital.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Mulai Konsultasi
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
