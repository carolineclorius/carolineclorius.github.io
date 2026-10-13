import { useEffect, useRef } from "react";

import PrototypeDevice from "./PrototypeDevice";

import "./MellemrumDeliver.css";
import ReflectionSection from "./ReflectionSection";

export default function MellemrumDeliver({ data }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div className="mellemrum-deliver">
      <div className="mellemrum-deliver__solution">
        <h2>{data.title}</h2>
        <p>{data.description}</p>

        <PrototypeDevice
          ref={videoRef}
          device="desktop"
          video={data.video}
          alt="The final optimized Mellemrum platform"
        />

        <div className="mellemrum-deliver__links">
          <a
            className="mellemrum-deliver__link"
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the programmed solution
          </a>

          <a
            className="mellemrum-deliver__link mellemrum-deliver__link--secondary"
            href={data.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      {data.impactDescription && (
        <ReflectionSection
          items={[data.impactDescription]}
          title={data.impactTitle}
        />
      )}

      <ReflectionSection items={data.reflection} title={data.reflectionTitle} />
    </div>
  );
}
