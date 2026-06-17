import { useEffect, useRef, useState } from "react";

type CountAnimationOptions = {
  start?: number;
  direction?: "up" | "down";
  duration?: number;
  decimals?: number;
};

export function useCountAnimation(end: number, options: CountAnimationOptions = {}) {
  const { direction = "up", duration = 1800, decimals = 0 } = options;
  const start = options.start ?? (direction === "up" ? 0 : end * 1.3);

  const [value, setValue] = useState(start);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let frame = 0;
    const factor = Math.pow(10, decimals);

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current =
        direction === "up" ? start + eased * (end - start) : start - eased * (start - end);
      setValue(Math.round(current * factor) / factor);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, start, end, duration, direction, decimals]);

  return { value, ref };
}

export function useCountUp(end: number, duration = 1800) {
  return useCountAnimation(end, { direction: "up", duration });
}

export function formatCurrency(value: number) {
  return `R$ ${Math.round(value).toLocaleString("pt-BR")}`;
}

export function formatMonths(value: number) {
  return `~${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} meses`;
}
