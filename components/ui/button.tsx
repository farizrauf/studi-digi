"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/20 hover:bg-[#1d4ed8] hover:shadow-xl hover:shadow-[#2563EB]/30 active:scale-[0.98]",
        destructive:
          "bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/30 active:scale-[0.98]",
        outline:
          "border-2 border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB] active:scale-[0.98]",
        secondary:
          "bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0] active:scale-[0.98]",
        ghost:
          "text-[#0F172A] hover:bg-[#F8FAFC] active:scale-[0.98]",
        link: "text-[#2563EB] underline-offset-4 hover:underline",
        accent:
          "bg-[#06B6D4] text-white shadow-lg shadow-[#06B6D4]/20 hover:bg-[#0891b2] hover:shadow-xl hover:shadow-[#06B6D4]/30 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
