import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ProjectSection from "../ProjectSection";
import ContentCard from "../ContentCard";
import ResearchSummary from "../ResearchSummary";
import ResearchFindings from "../ResearchFindings";

import "./DiscoverSection.css";

function DiscoverSection({ data }) {
  return (
    <section id="discover" className="discover-section">
      <SectionDivider />

      <ProcessMarker title="Discover" number="01" progress={25} />

      {data.problem?.title && (
        <ProjectSection
          title={data.problem.title}
          className="discover-section__problem"
        >
          {data.problem.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {data.problem.conclusion && (
            <p className="fed-h3">{data.problem.conclusion}</p>
          )}
        </ProjectSection>
      )}

      {data.researchApproach?.description && (
        <ContentCard title={data.researchApproach.title} variant="sand">
          <p>{data.researchApproach.description}</p>
        </ContentCard>
      )}

      {data.competitors?.items?.length > 0 && (
        <ResearchSummary
          title={data.competitors.title}
          items={data.competitors.items}
        />
      )}

      {data.secondaryResearch?.items?.length > 0 && (
        <ResearchSummary
          title={data.secondaryResearch.title}
          items={data.secondaryResearch.items}
        />
      )}

      {data.primaryResearch?.findings?.length > 0 && (
        <ResearchFindings
          title={data.primaryResearch.title}
          description={data.primaryResearch.description}
          facts={data.primaryResearch.facts}
          findings={data.primaryResearch.findings}
        />
      )}

      {data.onlineSurvey?.findings?.length > 0 && (
        <ResearchFindings
          title={data.onlineSurvey.title}
          description={data.onlineSurvey.description}
          facts={data.onlineSurvey.facts}
          findings={data.onlineSurvey.findings}
        />
      )}

      {data.interviews?.findings?.length > 0 && (
        <ResearchFindings
          title={data.interviews.title}
          description={data.interviews.description}
          facts={data.interviews.facts}
          findings={data.interviews.findings}
        />
      )}
    </section>
  );
}

export default DiscoverSection;
