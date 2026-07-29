// Import routing tools
import { Link, useParams } from "react-router";

// Import project data
import projectDetails from "../data/projectDetails";

// Import project components
import ProjectHero from "../components/project/ProjectHero";
import ProjectProcess from "../components/project/ProjectProcess";
import DiscoverSection from "../components/project/sections/DiscoverSection";
import DefineSection from "../components/project/sections/DefineSection";
import DevelopSection from "../components/project/sections/DevelopSection";
import DeliverSection from "../components/project/sections/DeliverSection";
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

      {project.process?.length > 0 && (
        <ProjectProcess steps={project.process} />
      )}

      {project.discover && <DiscoverSection data={project.discover} />}

      {project.define && <DefineSection data={project.define} />}

      {project.develop && (
        <DevelopSection data={project.develop} project={project.project} />
      )}

      {project.deliver && <DeliverSection data={project.deliver} />}

      <ScrollToTopButton />
    </main>
  );
}

export default ProjectPage;
