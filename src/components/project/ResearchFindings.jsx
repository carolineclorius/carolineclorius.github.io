import FindingCard from "./FindingCard";
import "./ResearchFindings.css";

function ResearchFindings({ title, description, facts = [], findings = [] }) {
  return (
    <section className="research-findings">
      <div className="research-findings__intro">
        <h2 className="research-findings__title">{title}</h2>

        {description && (
          <p className="research-findings__description">{description}</p>
        )}
      </div>

      {facts.length > 0 && (
        <div className="research-findings__facts">
          {facts.map((fact) => (
            <div className="research-findings__fact" key={fact.value}>
              <img src={fact.icon} alt="" aria-hidden="true" />
              <h3>{fact.value}</h3>
            </div>
          ))}
        </div>
      )}

      <div className="research-findings__scroll">
        <div className="research-findings__track">
          {findings.map((finding) => (
            <FindingCard key={finding.title} finding={finding} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchFindings;
