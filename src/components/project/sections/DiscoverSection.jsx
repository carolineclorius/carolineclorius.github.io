import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ProjectSection from "../ProjectSection";
import ContentCard from "../ContentCard";
import ResearchSummary from "../ResearchSummary";
import ResearchFindings from "../ResearchFindings";

import "./ProcessSections.css";
import "./DiscoverSection.css";
import ScrollReveal from "./ScrollReveal";

function DiscoverSection({ data }) {
  return (
    <section id="discover" className="discover-section">
      <ScrollReveal>
        <SectionDivider />
      </ScrollReveal>

      <ScrollReveal delay={75} distance="0.75rem">
        <ProcessMarker title="Discover" number="01" progress={25} />
      </ScrollReveal>

      {data.problem?.title && (
        <ScrollReveal delay={100}>
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
        </ScrollReveal>
      )}

      {data.researchApproach?.description && (
        <ScrollReveal delay={100}>
          <ContentCard title={data.researchApproach.title} variant="sand">
            <p>{data.researchApproach.description}</p>
          </ContentCard>
        </ScrollReveal>
      )}

      {data.competitors?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchSummary
            title={data.competitors.title}
            items={data.competitors.items}
          />
        </ScrollReveal>
      )}

      {data.secondaryResearch?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchSummary
            title={data.secondaryResearch.title}
            items={data.secondaryResearch.items}
          />
        </ScrollReveal>
      )}

      {data.primaryResearch?.findings?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchFindings
            title={data.primaryResearch.title}
            description={data.primaryResearch.description}
            facts={data.primaryResearch.facts}
            findings={data.primaryResearch.findings}
          />
        </ScrollReveal>
      )}

      {data.onlineSurvey?.findings?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchFindings
            title={data.onlineSurvey.title}
            description={data.onlineSurvey.description}
            facts={data.onlineSurvey.facts}
            findings={data.onlineSurvey.findings}
          />
        </ScrollReveal>
      )}

      {data.interviews?.findings?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchFindings
            title={data.interviews.title}
            description={data.interviews.description}
            facts={data.interviews.facts}
            findings={data.interviews.findings}
          />
        </ScrollReveal>
      )}
    </section>
  );
}

export default DiscoverSection;
