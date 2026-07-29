// Import component styles
import "./WireframesSection.css";

function WireframesSection({ data }) {
  if (!data?.groups?.length) return null;

  const onboardingGroup = data.groups.find(
    (group) => group.title === "Onboarding",
  );

  const inAppGroup = data.groups.find((group) => group.title === "In-app");

  const usesRumlyLayout = Boolean(onboardingGroup || inAppGroup);

  const preboarding = onboardingGroup?.images.find(
    (image) => image.caption === "Pre-boarding",
  );

  const signUp = onboardingGroup?.images.find(
    (image) => image.caption === "Sign-up",
  );

  const personalisation = onboardingGroup?.images.find(
    (image) => image.caption === "Personalisation",
  );

  const inApp = inAppGroup?.images?.[0];

  return (
    <section className="wireframes-section">
      <div className="wireframes-section__inner">
        <header className="wireframes-section__header">
          <h2>{data.title}</h2>

          {data.description && (
            <p className="wireframes-section__description">
              {data.description}
            </p>
          )}
        </header>

        {usesRumlyLayout ? (
          <>
            {onboardingGroup && (
              <section className="wireframes-section__group">
                <h3 className="wireframes-section__group-title fed-h3">
                  {onboardingGroup.title}
                </h3>

                <div className="wireframes-section__onboarding">
                  {preboarding && (
                    <figure className="wireframes-section__item wireframes-section__item--preboarding">
                      <figcaption>{preboarding.caption}</figcaption>

                      <img
                        className="wireframes-section__image"
                        src={preboarding.src}
                        alt={preboarding.alt}
                      />
                    </figure>
                  )}

                  {signUp && (
                    <figure className="wireframes-section__item wireframes-section__item--signup">
                      <figcaption>{signUp.caption}</figcaption>

                      <img
                        className="wireframes-section__image"
                        src={signUp.src}
                        alt={signUp.alt}
                      />
                    </figure>
                  )}

                  {personalisation && (
                    <figure className="wireframes-section__item wireframes-section__item--personalisation">
                      <figcaption>{personalisation.caption}</figcaption>

                      <img
                        className="wireframes-section__image"
                        src={personalisation.src}
                        alt={personalisation.alt}
                      />
                    </figure>
                  )}
                </div>
              </section>
            )}

            {inApp && (
              <section className="wireframes-section__group">
                <h3 className="wireframes-section__group-title fed-h3">
                  {inAppGroup.title}
                </h3>

                <figure className="wireframes-section__item wireframes-section__item--in-app">
                  <img
                    className="wireframes-section__image"
                    src={inApp.src}
                    alt={inApp.alt}
                  />
                </figure>
              </section>
            )}
          </>
        ) : (
          data.groups.map((group) => (
            <section
              className={`wireframes-section__group ${
                group.title === "Phone"
                  ? "wireframes-section__group--phone"
                  : "wireframes-section__group--desktop"
              }`}
              key={group.title}
            >
              <h3 className="wireframes-section__group-title fed-h3">
                {group.title}
              </h3>

              <div className="wireframes-section__grid">
                {group.images?.map((image) => (
                  <figure
                    className={`wireframes-section__item ${
                      group.title === "Phone" &&
                      image.caption === "Product page"
                        ? "wireframes-section__item--phone-product"
                        : ""
                    }`}
                    key={`${group.title}-${image.caption ?? image.src}`}
                  >
                    {image.caption && <figcaption>{image.caption}</figcaption>}

                    <img
                      className="wireframes-section__image"
                      src={image.src}
                      alt={image.alt}
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </section>
  );
}

export default WireframesSection;
