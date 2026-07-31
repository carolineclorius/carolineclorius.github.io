import { useEffect, useRef, useState } from "react";

import "./ScrollReveal.css";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  distance = "1rem",
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${
        isVisible ? "scroll-reveal--visible" : ""
      } ${className}`}
      style={{
        "--scroll-reveal-delay": `${delay}ms`,
        "--scroll-reveal-distance": distance,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
