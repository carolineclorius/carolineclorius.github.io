// Import component styles
import "./ComparisonSection.css";

function ComparisonSection({
  title,
  description,
  before,
  after,
  feedback = [],
  changes = [],
}) {
  return (
    <section className="comparison-section">
      <h2>{title}</h2>

      {description && (
        <p className="comparison-section__description">{description}</p>
      )}

      <div className="comparison-section__grid">
        <article className="comparison-section__column">
          <div className="comparison-section__text">
            <h3>Feedback</h3>

            <ul>
              {feedback.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="comparison-section__figure">
            <figcaption>Before</figcaption>

            <img src={before.src} alt={before.alt} />
          </figure>
        </article>

        <article className="comparison-section__column">
          <div className="comparison-section__text">
            <h3>Changes made</h3>

            <ul>
              {changes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="comparison-section__figure">
            <figcaption>After</figcaption>

            <img src={after.src} alt={after.alt} />
          </figure>
        </article>
      </div>
    </section>
  );
}

export default ComparisonSection;
