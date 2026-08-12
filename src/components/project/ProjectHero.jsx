import { useNavigate } from "react-router";

import "./ProjectHero.css";

import backArrow from "../../assets/images/shared/back-arrow.svg";

import ScrollReveal from "./sections/ScrollReveal";

import ProjectOverview from "./ProjectOverview";

function ProjectHero({ project }) {
  const navigate = useNavigate();

  return (
    <header className="project-hero">
      <ScrollReveal>
        <button
          className="project-hero__back"
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <img src={backArrow} alt="" aria-hidden="true" />
          <p>Back</p>
        </button>
      </ScrollReveal>

      <ScrollReveal>
        <h1 className="project-hero__number">Project - {project.number}</h1>
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
