import { useEffect, useRef, useState } from "react";

import PrototypeDevice from "./PrototypeDevice";

import "./PrototypeSection.css";

function PrototypeSection({ data, isPaused = false }) {
  const sectionRef = useRef(null);
  const videoRefs = useRef({});
  const itemRefs = useRef({});

  const firstItemId = data?.items?.[0]?.id;

  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(firstItemId);

  const isFramedComparison = data?.items?.every(
    (item) => item.presentation === "framed-video",
  );

  const isDesktopComparison =
    data?.items?.length > 1 &&
    data.items.every((item) => item.device === "desktop");

  let layoutClass = "";

  if (isFramedComparison) {
    layoutClass = "prototype--phone-comparison";
  } else if (isDesktopComparison) {
    layoutClass = "prototype--desktop-comparison";
  }

  // Reset the active item when a new project is loaded.
  useEffect(() => {
    setActiveItem(firstItemId);
  }, [firstItemId]);

  // Check whether the prototype section is visible.
  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(sectionElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Activate the prototype closest to the center of the screen on mobile.
  useEffect(() => {
    if (!data?.items || data.items.length < 2) return undefined;

    const updateActiveItem = () => {
      if (window.innerWidth > 720) return;

      const viewportCenter = window.innerHeight / 2;

      const visibleItems = data.items
        .map((item) => {
          const element = itemRefs.current[item.id];

          if (!element) return null;

          const rect = element.getBoundingClientRect();
          const isInViewport = rect.bottom > 0 && rect.top < window.innerHeight;

          if (!isInViewport) return null;

          const itemCenter = rect.top + rect.height / 2;

          return {
            id: item.id,
            distanceFromCenter: Math.abs(itemCenter - viewportCenter),
          };
        })
        .filter(Boolean);

      if (visibleItems.length === 0) return;

      const closestItem = visibleItems.reduce((closest, current) =>
        current.distanceFromCenter < closest.distanceFromCenter
          ? current
          : closest,
      );

      setActiveItem(closestItem.id);
    };

    updateActiveItem();

    window.addEventListener("scroll", updateActiveItem, { passive: true });
    window.addEventListener("resize", updateActiveItem);

    return () => {
      window.removeEventListener("scroll", updateActiveItem);
      window.removeEventListener("resize", updateActiveItem);
    };
  }, [data.items]);

  // Play only the active prototype video.
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([itemId, videoElement]) => {
      if (!videoElement) return;

      const shouldPlay =
        isVisible && !isPaused && String(itemId) === String(activeItem);

      if (shouldPlay) {
        videoElement.play().catch(() => {});
      } else {
        videoElement.pause();
      }
    });
  }, [activeItem, isVisible, isPaused]);

  // Pause all videos when the section is removed.
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((videoElement) => {
        videoElement?.pause();
      });
    };
  }, []);

  if (!data?.items?.length) return null;

  const activateItem = (itemId) => {
    setActiveItem(itemId);
  };

  const resetActiveItem = () => {
    setActiveItem(firstItemId);
  };

  return (
    <section
      ref={sectionRef}
      className={`prototype ${layoutClass} ${
        data.layout ? `prototype--${data.layout}` : ""
      }`.trim()}
    >
      <div className="prototype__header">
        <h2 className="prototype__title">{data.title}</h2>

        {data.description && (
          <p className="prototype__description">{data.description}</p>
        )}
      </div>

      <div className="prototype__devices" onMouseLeave={resetActiveItem}>
        {data.items.map((item) => {
          const isActive = activeItem === item.id;

          const setVideoRef = (element) => {
            if (element) {
              videoRefs.current[item.id] = element;
            } else {
              delete videoRefs.current[item.id];
            }
          };

          return (
            <article
              ref={(element) => {
                if (element) {
                  itemRefs.current[item.id] = element;
                } else {
                  delete itemRefs.current[item.id];
                }
              }}
              key={item.id}
              className={`prototype__item prototype__item--${item.device} ${
                isActive ? "prototype__item--active" : ""
              }`}
              onMouseEnter={() => activateItem(item.id)}
              onFocus={() => activateItem(item.id)}
            >
              <button
                className="prototype__device-button"
                type="button"
                onClick={() => activateItem(item.id)}
                aria-label={`Play ${item.title}`}
              >
                {item.presentation === "framed-video" ? (
                  <video
                    ref={setVideoRef}
                    className="prototype__framed-video"
                    src={item.media.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.media.alt}
                  />
                ) : (
                  <PrototypeDevice
                    ref={setVideoRef}
                    device={item.device}
                    video={item.media.src}
                    alt={item.media.alt}
                  />
                )}
              </button>

              {item.link?.href && (
                <a
                  className="prototype__link"
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.link.label}
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default PrototypeSection;
