import FeaturedProject from "../components/FeaturedProject";
import projects from "../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="projects-intro">
        <h1 className="main-title">Projects</h1>

        <h2 className="below-title">Ideas I've brought to life</h2>
        <h3>
          A selection of my work, where strategy, design and content come
          together to create{" "}
          <span className="fed-h3">meaningful digital platforms.</span>
        </h3>
      </section>

      <section className="featured-projects-section" aria-label="Project list">
        {projects.map((project, index) => (
          <FeaturedProject
            key={project.slug}
            number={String(index + 1).padStart(2, "0")}
            title={project.title}
            description={project.summary}
            image={project.image}
            imageAlt={`Preview of ${project.title}`}
            slug={project.slug}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
