import "./PersonaSection.css";

import quoteFrame from "../../assets/images/shared/long-quote-frame.svg";

import motivationIcon from "../../assets/images/shared/heart.svg";
import behaviourIcon from "../../assets/images/shared/bag.svg";
import frustrationIcon from "../../assets/images/shared/sad.svg";
import needsIcon from "../../assets/images/shared/star.svg";

import homeIcon from "../../assets/images/shared/home.svg";
import ageIcon from "../../assets/images/shared/small-aged.svg";
import workIcon from "../../assets/images/shared/work.svg";

const detailIcons = {
  home: homeIcon,
  age: ageIcon,
  work: workIcon,
};

function PersonaSection({ title, intro, personas }) {
  return (
    <section className="persona-section">
      <h2>{title}</h2>

      {intro && <p className="persona-section__intro">{intro}</p>}

      <div className="persona-grid">
        {personas.map((persona) => (
          <article className="persona-card" key={persona.name}>
            <div className="persona-card__profile">
              <img
                className="persona-card__image"
                src={persona.image}
                alt={`${persona.name}, ${persona.age}`}
              />

              <h3 className="persona-card__name">
                {persona.name}, {persona.age}
              </h3>

              <p className="persona-card__description">{persona.description}</p>

              {persona.details?.length > 0 && (
                <ul className="persona-card__details">
                  {persona.details.map((detail) => (
                    <li key={detail.text}>
                      <img
                        src={detailIcons[detail.icon]}
                        alt=""
                        aria-hidden="true"
                      />
                      <small>{detail.text}</small>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="persona-card__content">
              {persona.quote && (
                <blockquote className="persona-card__quote">
                  <img
                    className="persona-card__quote-frame"
                    src={quoteFrame}
                    alt=""
                    aria-hidden="true"
                  />

                  <p className="persona-card__quote-text">{persona.quote}</p>
                </blockquote>
              )}

              <div className="persona-card__categories">
                {persona.motivations?.length > 0 && (
                  <section className="persona-card__category">
                    <p className="persona-card__category-title">
                      <img src={motivationIcon} alt="" aria-hidden="true" />
                      Motivations
                    </p>

                    <ul>
                      {persona.motivations.map((motivation) => (
                        <li key={motivation}>
                          <small>{motivation}</small>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {persona.behaviours?.length > 0 && (
                  <section className="persona-card__category">
                    <p className="persona-card__category-title">
                      <img src={behaviourIcon} alt="" aria-hidden="true" />
                      Behaviours
                    </p>

                    <ul>
                      {persona.behaviours.map((behaviour) => (
                        <li key={behaviour}>
                          <small>{behaviour}</small>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {persona.frustrations?.length > 0 && (
                  <section className="persona-card__category">
                    <p className="persona-card__category-title">
                      <img src={frustrationIcon} alt="" aria-hidden="true" />
                      Frustrations
                    </p>

                    <ul>
                      {persona.frustrations.map((frustration) => (
                        <li key={frustration}>
                          <small>{frustration}</small>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {persona.needs?.length > 0 && (
                  <section className="persona-card__category">
                    <p className="persona-card__category-title">
                      <img src={needsIcon} alt="" aria-hidden="true" />
                      Needs
                    </p>

                    <ul>
                      {persona.needs.map((need) => (
                        <li key={need}>
                          <small>{need}</small>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonaSection;
