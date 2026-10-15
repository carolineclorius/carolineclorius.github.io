// Import routing tools
import { useParams } from "react-router";

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
import NotFoundPage from "./NotFoundPage";

// Import page styles
function ProjectPage() {
  // Get the project slug from the URL
  const { slug } = useParams();

  // Find the matching project
  const project = projectDetails.find((item) => item.slug === slug);

  // Display an error message if the project does not exist
  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="page project-page">
      <ProjectHero project={project} />

      {!["mellemrum", "vuuh", "la-seconde"].includes(slug) &&
        project.process?.length > 0 && (
          <ProjectProcess steps={project.process} />
        )}

      {project.discover && (
        <DiscoverSection
          data={project.discover}
          hideProcessMarker={["mellemrum", "vuuh", "la-seconde"].includes(slug)}
        />
      )}

      {project.define && (
        <DefineSection
          data={project.define}
          hideProcessMarker={["mellemrum", "vuuh", "la-seconde"].includes(slug)}
        />
      )}

      {project.develop && (
        <DevelopSection
          data={project.develop}
          project={project.project}
          hideProcessMarker={["mellemrum", "vuuh", "la-seconde"].includes(slug)}
        />
      )}

      {project.deliver && (
        <DeliverSection
          data={project.deliver}
          hideIcon={["mellemrum", "vuuh", "la-seconde"].includes(slug)}
          hideProcessMarker={["mellemrum", "vuuh", "la-seconde"].includes(slug)}
        />
      )}

      <ScrollToTopButton />
    </main>
  );
}

export default ProjectPage;
