"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Apa Kata{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Klien Kami
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
            Kepercayaan klien adalah prioritas utama kami. Berikut testimoni dari klien yang telah bekerja sama dengan kami
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 100}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-[#2563EB]/20 dark:text-blue-400/30 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>

                  <p className="text-[#64748B] dark:text-slate-400 mb-6 leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F172A] dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-[#64748B] dark:text-slate-400">
                        {testimonial.role}, {testimonial.company}
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
  );
}
