"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { projects } from "@/lib/data";

export function PortfolioSection() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 dark:bg-slate-800 dark:text-white">
            Portfolio Kami
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] dark:text-white mb-6">
            Hasil Kerja yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Membanggakan
            </span>
          </h2>
          <p className="text-lg text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
            Berbagai proyek successful yang telah kami kerjakan untuk klien dari berbagai industri
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <Card className="overflow-hidden group dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-white/20 text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="accent"
                        size="sm"
                        className="bg-white text-[#0F172A] hover:bg-[#F8FAFC] dark:bg-slate-100 dark:hover:bg-white"
                        asChild
                      >
                        <Link href={project.link || "#"} target="_blank">
                          Kunjungi
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3 dark:border-slate-600 dark:text-slate-300">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#64748B] dark:text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              Lihat Semua Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
