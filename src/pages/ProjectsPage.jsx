// Import the reusable project component
import FeaturedProject from "../components/FeaturedProject";

// Import project data
import projects from "../data/projects";

// Import page styles
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="page">
      {/* Introduce the projects page */}
      <section className="projects-intro">
        <h1 className="main-title">Projects</h1>

        <h2 className="below-title">Ideas I've brought to life</h2>
        <h3>
          A selection of my work, where strategy, design and content come
          together to create{" "}
          <span className="fed-h3">meaningful digital platforms.</span>
        </h3>
      </section>

      {/* Display all projects using the reusable component */}
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
