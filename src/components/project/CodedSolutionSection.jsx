import { useEffect, useRef } from "react";

import PrototypeDevice from "./PrototypeDevice";

import "./CodedSolutionSection.css";

function CodedSolutionSection({ data, onVisibilityChange }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const videoElement = videoRef.current;

    if (!sectionElement || !videoElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.intersectionRatio >= 0.15;

        onVisibilityChange(isVisible);

        if (isVisible) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: [0, 0.15],
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
      videoElement.pause();
    };
  }, [onVisibilityChange]);

  if (!data?.media?.src) return null;

  return (
    <section ref={sectionRef} className="coded-solution">
      <div className="coded-solution__header">
        <h2 className="coded-solution__title">{data.title}</h2>

        {data.description && (
          <p className="coded-solution__description">{data.description}</p>
        )}
      </div>

      <div className="coded-solution__content">
        <PrototypeDevice
          ref={videoRef}
          device={data.device}
          video={data.media.src}
          alt={data.media.alt}
        />

        {data.link?.href && (
          <a
            className="coded-solution__link"
            href={data.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {data.link.label}
          </a>
        )}
      </div>
    </section>
  );
}

export default CodedSolutionSection;
