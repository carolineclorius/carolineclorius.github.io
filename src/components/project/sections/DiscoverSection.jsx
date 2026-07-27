import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ProjectSection from "../ProjectSection";
import ContentCard from "../ContentCard";
import ResearchSummary from "../ResearchSummary";
import ResearchFindings from "../ResearchFindings";

function DiscoverSection({ data }) {
  return (
    <section className="discover-section">
      <SectionDivider />

      <ProcessMarker title="Discover" number="01" progress={25} />

      {data.problem && (
        <ProjectSection title={data.problem.title}>
          {data.problem.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {data.problem.conclusion && (
            <p className="fed-h3">{data.problem.conclusion}</p>
          )}
        </ProjectSection>
      )}

      {data.researchApproach?.description && (
        <ContentCard title={data.researchApproach.title}>
          <p>{data.researchApproach.description}</p>
        </ContentCard>
      )}

      {data.secondaryResearch?.length > 0 && (
        <ResearchSummary items={data.secondaryResearch} />
      )}

      {data.findings?.length > 0 && (
        <ResearchFindings findings={data.findings} />
      )}
    </section>
  );
}

export default DiscoverSection;
