import "./ResearchSummary.css";

function ResearchSummary({ title, description, items, screenshots, variant }) {
  return (
    <section
      className={`research-summary ${
        variant === "la-seconde" ? "research-summary--la-seconde" : ""
      }`}
    >
      <h2 className="research-summary__title">{title}</h2>
      {description && <p className="research-summary__intro">{description}</p>}

      <div className="research-summary__content">
        {variant === "la-seconde" ? (
          <div className="research-summary__groups">
            <div className="research-summary__group">
              <h3 className="fed-h3">{items[0].title}</h3>
              <p>{items[0].description}</p>

              <img src={screenshots[0].image} alt={screenshots[0].alt} />
            </div>

            <div className="research-summary__group">
              <h3 className="fed-h3">{items[1].title}</h3>
              <p>{items[1].description}</p>

              <div className="research-summary__group-images">
                {screenshots.slice(1).map((screenshot) => (
                  <img
                    key={screenshot.title}
                    src={screenshot.image}
                    alt={screenshot.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="research-summary__grid">
              {items.map((item) => (
                <article className="research-summary__card" key={item.title}>
                  {item.logo && (
                    <div className="research-summary__logo-wrapper">
                      <img
                        className="research-summary__logo"
                        src={item.logo}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <h3 className="fed-h3">{item.title}</h3>
                  <p className="research-summary__description">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            {screenshots?.length > 0 && (
              <div className="research-summary__screenshots">
                {screenshots.map((screenshot) => (
                  <figure
                    className="research-summary__screenshot"
                    key={screenshot.title}
                  >
                    <figcaption>{screenshot.title}</figcaption>
                    <img src={screenshot.image} alt={screenshot.alt} />
                  </figure>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ResearchSummary;
