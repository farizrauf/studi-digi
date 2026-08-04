"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigationItems, siteConfig } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isDark = mounted && (resolvedTheme === "dark");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] dark:border-slate-700"
          : "bg-white dark:bg-slate-900"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center",
              "dark:bg-white dark:shadow-sm"
            )}>
              <img
                src="/logo-studigi.png"
                alt="Studio Digi"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="ml-3 text-xl font-bold text-[#0F172A] dark:text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  isActive(item.href)
                    ? "text-[#2563EB] dark:text-blue-400 bg-[#2563EB]/10 dark:bg-blue-400/10"
                    : "text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F8FAFC] dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {mounted ? (
                isDark ? (
                  <Sun className="h-5 w-5 text-[#64748B] dark:text-slate-400" />
                ) : (
                  <Moon className="h-5 w-5 text-[#64748B] dark:text-slate-400" />
                )
              ) : (
                <Moon className="h-5 w-5 text-[#64748B] dark:text-slate-400" />
              )}
            </Button>

            {/* CTA Button */}
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200",
                    isActive(item.href)
                      ? "text-[#2563EB] dark:text-blue-400 bg-[#2563EB]/10 dark:bg-blue-400/10"
                      : "text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white hover:bg-[#F8FAFC] dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                >
                  {mounted ? (
                    isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
              <Button asChild className="mt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
