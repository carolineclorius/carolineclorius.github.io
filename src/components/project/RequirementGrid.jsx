import "./RequirementGrid.css";

function RequirementGrid({
  requirements,
  title = "Design Requirements",
  intro,
  numbered = false,
}) {
  if (!requirements?.length) return null;

  return (
    <section className="requirement-section">
      <h2>{title}</h2>

      <p className="requirement-section__intro">
        {intro ??
          `The research was translated into ${requirements.length} design requirements.`}
      </p>

      <div className="requirement-grid">
        {requirements.map((requirement, index) => (
          <article className="requirement-card" key={requirement.title}>
            <h3>
              {numbered && `${String(index + 1).padStart(2, "0")} - `}
              {requirement.title}
            </h3>
            <small>{requirement.description}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RequirementGrid;
