import * as React from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  fade: "",
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  text: "reveal-text",
} as const;

type RevealVariant = keyof typeof variantClasses;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  duration = 700,
  immediate = false,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (immediate) {
      const timer = window.setTimeout(() => setVisible(true), delay);
      return () => window.clearTimeout(timer);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, delay]);

  return (
    <div
      ref={ref}
      className={cn("reveal", variantClasses[variant], visible && "reveal-visible", className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
