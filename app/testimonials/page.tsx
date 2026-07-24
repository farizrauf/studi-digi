"use client";

import * as React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Badge variant="secondary" className="mb-6">
              Testimoni
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
              Apa Kata{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Klien Kami
              </span>
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah bekerja sama dengan kami
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Quote className="w-12 h-12 text-[#2563EB]/10 mb-4" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                        />
                      ))}
                    </div>

                    <p className="text-[#64748B] mb-6 leading-relaxed text-lg">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                        <p className="text-sm text-[#64748B]">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-[#2563EB] font-medium">
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
      <section className="py-20 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Numbers That Speak
            </h2>
            <p className="text-xl text-[#64748B]">
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
                <div className="text-center p-6 bg-white rounded-2xl">
                  <p className="text-4xl font-bold text-[#2563EB] mb-2">{stat.value}</p>
                  <p className="text-[#64748B]">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">
              Siap Menjadi Klien Kami?
            </h2>
            <p className="text-xl text-[#64748B] mb-8">
              Bergabunglah dengan ratusan bisnis yang telah berkembang bersama StudioDigital.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Mulai Konsultasi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
