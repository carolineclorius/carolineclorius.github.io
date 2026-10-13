import "./MellemrumDevelop.css";

import { useEffect, useRef, useState } from "react";

import arrowDown from "../../assets/images/shared/arrow-down.svg";
import arrowUp from "../../assets/images/shared/arrow-up.svg";

function MellemrumDevelop({ data }) {
  const loadingRef = useRef(null);
  const beforeVideoRef = useRef(null);
  const afterVideoRef = useRef(null);

  const [loadingVisible, setLoadingVisible] = useState(false);
  const [activeLoadingVideo, setActiveLoadingVideo] = useState("after");

  useEffect(() => {
    const element = loadingRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLoadingVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const videos = {
      before: beforeVideoRef.current,
      after: afterVideoRef.current,
    };

    Object.entries(videos).forEach(([key, video]) => {
      if (!video) return;

      if (loadingVisible && activeLoadingVideo === key) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [loadingVisible, activeLoadingVideo]);

  if (!data?.items?.length) return null;

  return (
    <section className="mellemrum-develop">
      <h2>{data.title}</h2>

      {data.intro && <p>{data.intro}</p>}

      <div className="mellemrum-develop__list">
        {data.items.map((item) => (
          <article className="mellemrum-develop__item" key={item.title}>
            <div className="mellemrum-develop__intro">
              <h3 className="fed-h3">{item.title}</h3>
              <p>{item.description}</p>
            </div>

            {item.layout === "comparison" && (
              <div
                className="mellemrum-develop__comparison"
                onMouseLeave={() => setActiveLoadingVideo("after")}
              >
                <div className="mellemrum-develop__panel">
                  <h3>Before</h3>

                  {item.before?.title && <p>{item.before.title}</p>}

                  {item.before?.images?.map((image) => (
                    <div
                      className="mellemrum-develop__comparison-image"
                      key={image.title}
                    >
                      <p>{image.title}</p>

                      {image.video ? (
                        <button
                          type="button"
                          ref={loadingRef}
                          className={`mellemrum-develop__video-button ${
                            activeLoadingVideo === "before"
                              ? "mellemrum-develop__video-button--active"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveLoadingVideo("before")}
                          onFocus={() => setActiveLoadingVideo("before")}
                          onClick={() => setActiveLoadingVideo("before")}
                          aria-label="Play Before loading video"
                        >
                          <video
                            ref={beforeVideoRef}
                            src={image.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={image.title}
                          />
                        </button>
                      ) : (
                        <img
                          src={image.image}
                          alt={image.title}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mellemrum-develop__panel">
                  <h3>After</h3>

                  {item.after?.title && <p>{item.after.title}</p>}

                  {item.after?.images?.map((image) => (
                    <div
                      className="mellemrum-develop__comparison-image"
                      key={image.title}
                    >
                      <p>{image.title}</p>

                      {image.video ? (
                        <button
                          type="button"
                          className={`mellemrum-develop__video-button ${
                            activeLoadingVideo === "after"
                              ? "mellemrum-develop__video-button--active"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveLoadingVideo("after")}
                          onFocus={() => setActiveLoadingVideo("after")}
                          onClick={() => setActiveLoadingVideo("after")}
                          aria-label="Play After loading video"
                        >
                          <video
                            ref={afterVideoRef}
                            src={image.video}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            aria-label={image.title}
                          />
                        </button>
                      ) : (
                        <img
                          src={image.image}
                          alt={image.title}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.layout === "scroll" && (
              <>
                {item.before && (
                  <div className="mellemrum-develop__before">
                    <h3>Before</h3>

                    {item.beforeDescription && <p>{item.beforeDescription}</p>}

                    <img
                      src={item.before}
                      alt={`${item.title} before optimization`}
                      loading="lazy"
                    />
                  </div>
                )}

                {item.after?.slides?.length > 0 && (
                  <div className="mellemrum-develop__after">
                    <h3>After</h3>

                    {item.after.title && <p>{item.after.title}</p>}

                    <div className="mellemrum-develop__scroll">
                      {item.after.slides.map((slide) => (
                        <div
                          className="mellemrum-develop__slide"
                          key={slide.title}
                        >
                          <p>{slide.title}</p>

                          {slide.images?.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${slide.title} ${index + 1}`}
                              loading="lazy"
                            />
                          ))}

                          {slide.image && (
                            <img
                              src={slide.image}
                              alt={slide.title}
                              loading="lazy"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {item.code?.snippets?.length > 0 && (
              <details className="mellemrum-develop__code">
                <summary className="mellemrum-develop__code-toggle">
                  <span className="mellemrum-develop__code-show">
                    Show some code
                  </span>

                  <span className="mellemrum-develop__code-hide">
                    Hide the code
                  </span>

                  <img
                    className="mellemrum-develop__code-arrow mellemrum-develop__code-arrow--down"
                    src={arrowDown}
                    alt=""
                    aria-hidden="true"
                  />

                  <img
                    className="mellemrum-develop__code-arrow mellemrum-develop__code-arrow--up"
                    src={arrowUp}
                    alt=""
                    aria-hidden="true"
                  />
                </summary>

                <div className="mellemrum-develop__code-content">
                  {item.code.description && <p>{item.code.description}</p>}

                  {item.code.snippets.map((snippet) => (
                    <div
                      className="mellemrum-develop__snippet"
                      key={snippet.title}
                    >
                      <h3>{snippet.title}</h3>

                      {snippet.images?.map((image, index) => (
                        <div
                          className="mellemrum-develop__snippet-image"
                          key={index}
                        >
                          {image.description && <p>{image.description}</p>}

                          <img
                            src={image.image}
                            alt={`${snippet.title} code example ${index + 1}`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default MellemrumDevelop;
