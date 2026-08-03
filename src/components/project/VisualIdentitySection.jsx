// Import component styles
import "./VisualIdentitySection.css";

function VisualIdentitySection({ data, project }) {
  if (!data) return null;

  return (
    <section
      className={`visual-identity ${
        project ? `visual-identity--${project}` : ""
      }`}
    >
      <div className="visual-identity__inner">
        <div className="visual-identity__header">
          <h2>{data.title}</h2>

          {data.description && (
            <p className="visual-identity__description">{data.description}</p>
          )}
        </div>

        <div className="visual-identity__layout">
          <div className="visual-identity__main">
            {data.moodboard && (
              <article className="visual-identity__card">
                <h3>{data.moodboard.title}</h3>

                <img
                  className="visual-identity__image"
                  src={data.moodboard.image.src}
                  alt={data.moodboard.image.alt}
                />
              </article>
            )}

            {data.typography?.items?.length > 0 && (
              <article className="visual-identity__card">
                <h3>{data.typography.title}</h3>

                <div className="visual-identity__typography">
                  {data.typography.items.map((item) => (
                    <div className="visual-identity__type" key={item.label}>
                      <h4>{item.label}</h4>

                      <p
                        className="visual-identity__font-name"
                        style={{ fontFamily: item.fontFamily }}
                      >
                        {item.font}
                      </p>

                      {item.description && (
                        <p className="visual-identity__type-description">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            )}

            {data.uiComponents?.items?.length > 0 && (
              <article className="visual-identity__card">
                <h3>{data.uiComponents.title}</h3>

                <div className="visual-identity__components">
                  {data.uiComponents.items.map((item) => (
                    <section
                      className={`visual-identity__component ${
                        item.layout
                          ? `visual-identity__component--${item.layout}`
                          : ""
                      }`}
                      key={item.title}
                    >
                      <h4>{item.title}</h4>

                      {item.image && (
                        <img
                          className="visual-identity__component-image"
                          src={item.image.src}
                          alt={item.image.alt}
                        />
                      )}

                      {item.items?.length > 0 && (
                        <div className="visual-identity__subcomponents">
                          {item.items.map((subitem) => (
                            <div
                              className={`visual-identity__subcomponent ${
                                subitem.layout
                                  ? `visual-identity__subcomponent--${subitem.layout}`
                                  : ""
                              }`}
                              key={subitem.title}
                            >
                              <h5>{subitem.title}</h5>

                              <img
                                className="visual-identity__subcomponent-image"
                                src={subitem.image.src}
                                alt={subitem.image.alt}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>
            )}
          </div>

          {data.colors && (
            <aside className="visual-identity__colors">
              {data.colors.primary && (
                <section className="visual-identity__color-group">
                  <h3>{data.colors.primary.title}</h3>

                  <img
                    className="visual-identity__color-image"
                    src={data.colors.primary.image.src}
                    alt={data.colors.primary.image.alt}
                  />
                </section>
              )}

              {data.colors.secondary && (
                <section className="visual-identity__color-group">
                  <h3>{data.colors.secondary.title}</h3>

                  <img
                    className="visual-identity__color-image"
                    src={data.colors.secondary.image.src}
                    alt={data.colors.secondary.image.alt}
                  />
                </section>
              )}
            </aside>
          )}
        </div>

        <div className="visual-identity__bottom">
          {data.graphicElements && (
            <article className="visual-identity__graphic-elements">
              <h3>{data.graphicElements.title}</h3>

              {data.graphicElements.description && (
                <p>{data.graphicElements.description}</p>
              )}

              <img
                className="visual-identity__graphic-elements-image"
                src={data.graphicElements.image.src}
                alt={data.graphicElements.image.alt}
              />
            </article>
          )}

          {data.logos?.items?.length > 0 && (
            <article className="visual-identity__logos">
              <h3>{data.logos.title}</h3>

              <div className="visual-identity__logo-grid">
                {data.logos.items.map((item) => (
                  <div className="visual-identity__logo" key={item.title}>
                    <img
                      className="visual-identity__logo-image"
                      src={item.image.src}
                      alt={item.image.alt}
                    />

                    <h4>{item.title}</h4>

                    {item.description && <p>{item.description}</p>}
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}

export default VisualIdentitySection;
