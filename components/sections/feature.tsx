"use client";

import * as React from "react";
import {
  Zap,
  Search,
  Smartphone,
  Palette,
  Shield,
  LayoutDashboard,
  BarChart3,
  MessageCircle,
  MapPin,
  Mail
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Search,
  Smartphone,
  Palette,
  Shield,
  LayoutDashboard,
  BarChart3,
  MessageCircle,
  MapPin,
  Mail
};

export function FeatureSection() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Fitur Unggulan untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Bisnis Anda
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
            Website kami dilengkapi dengan fitur-fitur canggih yang membantu bisnis Anda berkembang di era digital
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap;
            return (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 group dark:bg-slate-800 dark:border-slate-700">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#06B6D4]/10 dark:from-[#2563EB]/20 dark:to-[#06B6D4]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-[#2563EB] dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#64748B] dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
