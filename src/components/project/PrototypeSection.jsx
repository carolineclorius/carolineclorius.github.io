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

  // Activate the prototype that reaches the middle of the screen on mobile.
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 720px)");

    const observer = new IntersectionObserver(
      (entries) => {
        if (!mobileMediaQuery.matches) return;

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        const itemId = visibleEntry.target.dataset.prototypeId;

        const visibleItem = data.items.find(
          (item) => String(item.id) === itemId,
        );

        if (visibleItem) {
          setActiveItem(visibleItem.id);
        }
      },
      {
        /*
         * Only observe the middle part of the viewport.
         * The next video becomes active when it reaches this area.
         */
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    Object.values(itemRefs.current).forEach((itemElement) => {
      observer.observe(itemElement);
    });

    return () => {
      observer.disconnect();
    };
  }, [data.items]);

  // Play only the active prototype video.
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([itemId, videoElement]) => {
      if (!videoElement) return;

      const shouldPlay = isVisible && !isPaused && itemId === activeItem;

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
