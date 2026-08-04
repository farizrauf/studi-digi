"use client";

import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  UtensilsCrossed,
  Coffee,
  Store,
  BookOpen,
  Rocket,
  Code,
  CreditCard,
  CalendarCheck,
  ShoppingCart,
  Wrench,
  RefreshCw,
  Search,
  Globe,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactSection } from "@/components/sections/contact";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  UtensilsCrossed,
  Coffee,
  Store,
  BookOpen,
  Rocket,
  Code,
  CreditCard,
  CalendarCheck,
  ShoppingCart,
  Wrench,
  RefreshCw,
  Search,
  Globe
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Badge variant="secondary" className="mb-6 dark:bg-slate-800 dark:text-white">
              Layanan Kami
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] dark:text-white mb-6">
              Solusi Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Lengkap
              </span>
            </h1>
            <p className="text-xl text-[#64748B] dark:text-slate-400 max-w-3xl mx-auto">
              Dari website company profile hingga aplikasi custom, kami menyediakan berbagai layanan digital untuk membantu bisnis Anda berkembang di era modern
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Briefcase;
              return (
                <AnimatedSection key={service.title} delay={index * 100}>
                  <Card className="h-full hover:shadow-xl hover:border-[#2563EB]/30 transition-all duration-300 group dark:bg-slate-800 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white mb-3 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-[#64748B] dark:text-slate-400 mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-[#64748B] dark:text-slate-400">
                            <Check className="w-4 h-4 text-[#2563EB] dark:text-blue-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:bg-slate-600">
                        <Link href="/contact">
                          Konsultasi
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#F8FAFC] dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white mb-6">
              Butuh Solusi Custom?
            </h2>
            <p className="text-xl text-[#64748B] dark:text-slate-400 mb-8">
              Jangan ragu untuk menghubungi kami. Tim kami siap mendiskusikan kebutuhan spesifik bisnis Anda dan memberikan solusi terbaik.
            </p>
            <Button asChild size="lg" className="dark:bg-[#2563EB] dark:text-white dark:hover:bg-blue-700">
              <Link href="/contact">
                Hubungi Kami Sekarang
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
