import "./ProjectOverview.css";

function ProjectOverview({ items }) {
  return (
    <div className="project-overview">
      {items.map((item) => (
        <div className="project-overview__row" key={item.label}>
          <p>{item.label}</p>
          <p className="project-overview__value">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectOverview;
