import "./ProjectHero.css";

import ProjectOverview from "./ProjectOverview";

function ProjectHero({ project }) {
  return (
    <header className="project-hero">
      <h1 className="project-hero__number">Work - {project.number}</h1>

      <div className="project-hero__content">
        <div className="project-hero__visual">
          <img
            className="project-hero__image"
            src={project.heroImage}
            alt={`Preview of ${project.title}`}
          />
        </div>

        <div className="project-hero__information">
          <h2>{project.title}</h2>
          <p>{project.summary}</p>

          <ProjectOverview items={project.overview} />
        </div>
      </div>
    </header>
  );
}

export default ProjectHero;
