"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  threshold?: number;
  className?: string;
}

export function BackToTop({ threshold = 300, className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > threshold);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg shadow-[#2563EB]/20 transition-all duration-300 hover:scale-110",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none",
        className
      )}
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
