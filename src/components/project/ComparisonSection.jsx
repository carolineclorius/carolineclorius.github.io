// Import component styles
import "./ComparisonSection.css";

import quoteFrame from "../../assets/images/shared/long-quote-frame.svg";

function ComparisonSection({
  title,
  description,
  before,
  after,
  feedback = [],
  changes = [],
  quote,
  imageSize = "normal",
}) {
  return (
    <section className={`comparison-section comparison-section--${imageSize}`}>
      <div className="comparison-section__header">
        <h2>{title}</h2>

        {description && (
          <h3 className="comparison-section__description">{description}</h3>
        )}
      </div>

      <div className="comparison-section__text-grid">
        <article className="comparison-section__text">
          <h3>Feedback</h3>

          <ul>
            {feedback.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="comparison-section__text">
          <h3>Changes made</h3>

          <ul>
            {changes.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      {quote && (
        <blockquote className="comparison-section__quote">
          <img
            className="comparison-section__quote-frame"
            src={quoteFrame}
            alt=""
            aria-hidden="true"
          />

          <p className="comparison-section__quote-text">{quote}</p>
        </blockquote>
      )}

      <div className="comparison-section__images">
        <figure className="comparison-section__figure">
          <p className="fed-h3">Before</p>

          <img
            className="comparison-section__image"
            src={before.src}
            alt={before.alt}
          />
        </figure>

        <figure className="comparison-section__figure">
          <p className="fed-h3">After</p>

          <img
            className="comparison-section__image"
            src={after.src}
            alt={after.alt}
          />
        </figure>
      </div>
    </section>
  );
}

export default ComparisonSection;
