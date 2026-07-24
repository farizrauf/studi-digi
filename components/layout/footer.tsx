"use client";

import * as React from "react";
import Link from "next/link";
import { Globe, Share2, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig, navigationItems } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Kami membantu bisnis berkembang dengan website modern, cepat, SEO friendly, dan siap menghasilkan lebih banyak pelanggan.
            </p>
            <div className="flex space-x-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Share2 className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#2563EB] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  Website Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  Restaurant Website
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  E-Commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  Landing Page
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  Custom Web App
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">{siteConfig.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-[#94A3B8] text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
