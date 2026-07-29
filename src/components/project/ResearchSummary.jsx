import "./ResearchSummary.css";

function ResearchSummary({ title, items }) {
  return (
    <section className="research-summary">
      <h2 className="research-summary__title">{title}</h2>

      <div className="research-summary__grid">
        {items.map((item) => (
          <article className="research-summary__card" key={item.title}>
            <div className="research-summary__logo-wrapper">
              <img
                className="research-summary__image"
                src={item.logo}
                alt=""
                aria-hidden="true"
              />
            </div>

            <h3 className="fed-h3">{item.title}</h3>
            <p className="research-summary__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ResearchSummary;
