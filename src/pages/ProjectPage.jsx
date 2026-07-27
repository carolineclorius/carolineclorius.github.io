// Import routing tools
import { Link, useParams } from "react-router";

// Import project data
import projectDetails from "../data/projectDetails";

// Import project components
import ProjectHero from "../components/project/ProjectHero";
import ProjectProcess from "../components/project/ProjectProcess";
import ProcessMarker from "../components/project/ProcessMarker";
import ScrollToTopButton from "../components/project/ScrollToTopButton";

// Import page styles
import "./ProjectPage.css";

function ProjectPage() {
  // Get the project slug from the URL
  const { slug } = useParams();

  // Find the matching project
  const project = projectDetails.find((item) => item.slug === slug);

  // Display an error message if the project does not exist
  if (!project) {
    return (
      <main className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Project not found</h1>
        <p>The project does not exist in the list yet.</p>
        <Link className="button" to="/projects">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="page project-page">
      <ProjectHero project={project} />

      {project.process && <ProjectProcess steps={project.process} />}

      {project.discover && (
        <>
          <ProcessMarker title="Discover" number="01" progress={25} />

          {/* Discover content will be added here */}
        </>
      )}

      {project.define && (
        <>
          <ProcessMarker title="Define" number="02" progress={50} />

          {/* Define content will be added here */}
        </>
      )}

      {project.develop && (
        <>
          <ProcessMarker title="Develop" number="03" progress={75} />

          {/* Develop content will be added here */}
        </>
      )}

      {project.deliver && (
        <>
          <ProcessMarker title="Deliver" number="04" progress={100} />

          {/* Deliver content will be added here */}
        </>
      )}

      <ScrollToTopButton />
    </main>
  );
}

export default ProjectPage;
