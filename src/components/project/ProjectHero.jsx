import "./ProjectHero.css";

import ScrollReveal from "./sections/ScrollReveal";

import ProjectOverview from "./ProjectOverview";

function ProjectHero({ project }) {
  return (
    <header className="project-hero">
      <ScrollReveal>
        <h1 className="project-hero__number">Work - {project.number}</h1>
      </ScrollReveal>

      <div className="project-hero__content">
        <ScrollReveal delay={100}>
          <div className="project-hero__visual">
            <img
              className="project-hero__image"
              src={project.heroImage}
              alt={`Preview of ${project.title}`}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={175}>
          <div className="project-hero__information">
            <h2>{project.title}</h2>
            <p>{project.summary}</p>

            <ProjectOverview items={project.overview} />
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}

export default ProjectHero;
