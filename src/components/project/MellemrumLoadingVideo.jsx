import { useEffect, useRef, useState } from "react";

import "./MellemrumLoadingVideo.css";

function MellemrumLoadingVideo({ before, after }) {
  const containerRef = useRef(null);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeVideo, setActiveVideo] = useState("after");

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videos = {
      before: beforeRef.current,
      after: afterRef.current,
    };

    Object.entries(videos).forEach(([key, video]) => {
      if (!video) return;

      if (isVisible && activeVideo === key) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeVideo, isVisible]);

  useEffect(() => {
    return () => {
      beforeRef.current?.pause();
      afterRef.current?.pause();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mellemrum-loading-videos"
      onMouseLeave={() => setActiveVideo("after")}
    >
      <button
        type="button"
        className={`mellemrum-loading-videos__item ${
          activeVideo === "before"
            ? "mellemrum-loading-videos__item--active"
            : ""
        }`}
        onMouseEnter={() => setActiveVideo("before")}
        onFocus={() => setActiveVideo("before")}
        onClick={() => setActiveVideo("before")}
        aria-label="Play before loading video"
      >
        <video
          ref={beforeRef}
          src={before}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </button>

      <button
        type="button"
        className={`mellemrum-loading-videos__item ${
          activeVideo === "after"
            ? "mellemrum-loading-videos__item--active"
            : ""
        }`}
        onMouseEnter={() => setActiveVideo("after")}
        onFocus={() => setActiveVideo("after")}
        onClick={() => setActiveVideo("after")}
        aria-label="Play after loading video"
      >
        <video
          ref={afterRef}
          src={after}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </button>
    </div>
  );
}

export default MellemrumLoadingVideo;
