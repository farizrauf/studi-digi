"use client";

import * as React from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactSection } from "@/components/sections/contact";
import { pricingPlans } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Badge variant="secondary" className="mb-6">
              Harga
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
              Harga yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Transparan
              </span>
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk fitur essential untuk memulai kehadiran online yang profesional
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 100}>
                <Card
                  className={`h-full relative ${
                    plan.highlighted
                      ? "border-[#2563EB] shadow-xl shadow-[#2563EB]/10 md:scale-105"
                      : "hover:shadow-lg"
                  } transition-all duration-300`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#2563EB] text-white px-4 py-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Populer
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="mt-3">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pb-4">
                    {plan.price === "Hubungi Kami" ? (
                      <div className="py-4">
                        <span className="text-3xl font-bold text-[#0F172A]">Custom</span>
                      </div>
                    ) : (
                      <div className="py-4">
                        <span className="text-4xl font-bold text-[#0F172A]">
                          {formatCurrency(parseInt(plan.price))}
                        </span>
                        <span className="text-[#64748B]">/proyek</span>
                      </div>
                    )}
                  </CardContent>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="w-5 h-5 text-[#2563EB] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748B]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-6">
                    <Button
                      asChild
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                    >
                      <Link href={plan.buttonLink}>
                        {plan.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-20 lg:py-32 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">
              Pertanyaan Umum tentang Harga
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                  Apakah sudah termasuk hosting dan domain?
                </h3>
                <p className="text-[#64748B]">
                  Ya, semua paket sudah termasuk domain .com untuk 1 tahun dan hosting managed. Setelah 1 tahun, biaya perpanjangan adalah Rp 500.000 - 1.500.000/tahun.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                  Bagaimana sistem pembayarannya?
                </h3>
                <p className="text-[#64748B]">
                  Pembayaran bisa dilakukan dengan DP 50% di awal dan lunas setelah website selesai. Untuk project besar, bisa dicicil 3x tanpa bunga.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-3">
                  Apakah bisa revisi desain?
                </h3>
                <p className="text-[#64748B]">
                  Ya, setiap paket sudah termasuk jumlah revisi. Starter mendapat 2x revisi, Professional 3x, dan Enterprise unlimited revisi.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-[#64748B] mb-8">
              Tim kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan website bisnis Anda.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Konsultasi Gratis
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
