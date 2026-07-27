import "./PersonaSection.css";

function PersonaSection({ personas }) {
  return (
    <div className="persona-grid">
      {personas.map((persona) => (
        <article className="persona-card" key={persona.name}>
          <img src={persona.image} alt={persona.name} />
          <h3>
            {persona.name}, {persona.age}
          </h3>
          <p>{persona.description}</p>

          {/* Motivation, behaviour, frustrations and needs */}
        </article>
      ))}
    </div>
  );
}

export default PersonaSection;
