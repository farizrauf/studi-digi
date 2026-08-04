"use client";

import * as React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactSection } from "@/components/sections/contact";
import { faqs } from "@/lib/data";

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F8FAFC] to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <Badge variant="secondary" className="mb-6 dark:bg-slate-800 dark:text-white">
              FAQ
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] dark:text-white mb-6">
              Pertanyaan yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                Sering Diajukan
              </span>
            </h1>
            <p className="text-xl text-[#64748B] dark:text-slate-400 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami, proses kerja, dan everything yang perlu Anda ketahui
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="dark:border-slate-700">
                  <AccordionTrigger className="text-left text-[#0F172A] dark:text-white hover:text-[#2563EB] dark:hover:text-blue-400 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B] dark:text-slate-300 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-32 bg-[#F8FAFC] dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-white mb-4">
              Topik FAQ
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Process & Timeline", count: "4 pertanyaan" },
              { title: "Harga & Pembayaran", count: "3 pertanyaan" },
              { title: "Teknis & Fitur", count: "5 pertanyaan" },
              { title: "Support & Maintenance", count: "3 pertanyaan" }
            ].map((topic, index) => (
              <AnimatedSection key={topic.title} delay={index * 100}>
                <div className="p-6 bg-white dark:bg-slate-700 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group">
                  <HelpCircle className="w-8 h-8 text-[#2563EB] dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-[#0F172A] dark:text-white mb-1">{topic.title}</h3>
                  <p className="text-sm text-[#64748B] dark:text-slate-400">{topic.count}</p>
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
              Tidak Menemukan Jawaban?
            </h2>
            <p className="text-xl text-[#64748B] dark:text-slate-400 mb-8">
              Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Hubungi Kami
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
