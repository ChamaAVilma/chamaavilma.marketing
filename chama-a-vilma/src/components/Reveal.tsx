
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
} from "react";

import "./Reveal.css";

type RevealDirection = "left" | "right" | "top" | "bottom";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  direction?: RevealDirection;
  delay?: number;
}

export function Reveal({
  children,
  direction = "bottom",
  delay = 0,
  className = "",
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    // Exibe o conteúdo normalmente quando o navegador não suporta
    // IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    ...style,
    "--reveal-delay": `${Math.max(0, delay)}ms`,
  } as CSSProperties;

  const classes = [
    "reveal",
    `reveal--${direction}`,
    isVisible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={elementRef}
      className={classes}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}
