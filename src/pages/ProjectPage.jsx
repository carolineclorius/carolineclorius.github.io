// Import routing tools
import { Link, useParams } from "react-router";

// Import project data
import projects from "../data/projects";

// Import page styles
import "./ProjectPage.css";

function ProjectPage() {
  // Get the project slug from the URL
  const { slug } = useParams();

  // Find the matching project
  const project = projects.find((item) => item.slug === slug);

  // Display an error message if the project does not exist
  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Project not found</h1>
        <p>The project does not exist in the list yet.</p>
        <Link className="button" to="/projects">
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="page narrow">
      {/* Link back to the project overview */}
      <Link className="back-link" to="/projects">
        Go back to projects
      </Link>

      {/* Project image */}
      <img className="detail-image" src={project.image} alt="" />

      {/* Project information */}
      <p className="eyebrow">{project.year}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.description}</p>

      {/* Project tags */}
      <ul className="tag-list">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* External project links */}
      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectPage;
