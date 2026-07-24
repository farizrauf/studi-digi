"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8FAFC] dark:bg-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 dark:bg-slate-700 dark:text-white">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Pertanyaan yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Sering Diajukan
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="dark:border-slate-700">
                <AccordionTrigger className="text-left text-[#0F172A] dark:text-white hover:text-[#2563EB] dark:hover:text-blue-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-12">
          <p className="text-[#64748B] dark:text-slate-400 mb-4">
            Tidak menemukan jawaban yang Anda cari?
          </p>
          <Button asChild>
            <Link href="/contact">
              Hubungi Kami
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
