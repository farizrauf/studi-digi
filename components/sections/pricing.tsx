"use client";

import * as React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { pricingPlans } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Harga
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Pilihan Harga yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Transparan
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk fitur essential
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 100}>
              <Card
                className={`h-full relative ${
                  plan.highlighted
                    ? "border-[#2563EB] shadow-xl shadow-[#2563EB]/10 scale-105"
                    : "hover:shadow-lg"
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#2563EB] text-white px-4 py-1">
                      Populer
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-4">
                  {plan.price === "Hubungi Kami" ? (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#0F172A]">Custom</span>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[#0F172A]">
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

        <AnimatedSection className="text-center mt-12">
          <p className="text-[#64748B]">
            Butuh solusi custom?{" "}
            <Link href="/contact" className="text-[#2563EB] font-medium hover:underline">
              Hubungi kami
            </Link>{" "}
            untuk diskusi lebih lanjut
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
