"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { services } from "@/lib/data";

export function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 dark:bg-slate-800 dark:text-white">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Solusi Digital untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Setiap Kebutuhan
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
            Dari website company profile hingga aplikasi custom, kami menyediakan solusi digital lengkap untuk bisnis Anda
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 100}>
              <Card className="h-full hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 group dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-3 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-[#64748B] dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
