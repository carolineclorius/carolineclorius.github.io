import "./RequirementGrid.css";

function RequirementGrid({ requirements }) {
  if (!requirements?.length) return null;

  return (
    <section className="requirement-section">
      <h2>Design Requirements</h2>

      <p className="requirement-section__intro">
        The research was translated into {requirements.length} design
        requirements.
      </p>

      <div className="requirement-grid">
        {requirements.map((requirement) => (
          <article className="requirement-card" key={requirement.title}>
            <h3>{requirement.title}</h3>
            <small>{requirement.description}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RequirementGrid;
