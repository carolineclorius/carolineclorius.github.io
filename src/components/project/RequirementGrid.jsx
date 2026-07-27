import "./RequirementGrid.css";

function RequirementGrid({ requirements }) {
  return (
    <div className="requirement-grid">
      {requirements.map((requirement) => (
        <article className="requirement-card" key={requirement.title}>
          <h3>{requirement.title}</h3>
          <p>{requirement.description}</p>
        </article>
      ))}
    </div>
  );
}

export default RequirementGrid;
