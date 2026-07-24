"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

interface WhatsAppButtonProps {
  className?: string;
}

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const phoneNumber = siteConfig.phone.replace("+", "");
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center space-x-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40",
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span
        className={cn(
          "font-medium text-sm whitespace-nowrap transition-all duration-300",
          isHovered ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
        )}
      >
        Chat WhatsApp
      </span>
    </a>
  );
}
