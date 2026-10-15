import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ResearchSummary from "../ResearchSummary";
import ResearchFindings from "../ResearchFindings";
import MellemrumAudit from "../MellemrumAudit";
import VuuhFindings from "../VuuhFindings";
import InsightList from "../InsightList";

import "./ProcessSections.css";
import "./DiscoverSection.css";
import ScrollReveal from "./ScrollReveal";

function DiscoverSection({ data, hideProcessMarker = false }) {
  return (
    <section id="discover" className="discover-section">
      {!hideProcessMarker && (
        <ScrollReveal>
          <SectionDivider />
        </ScrollReveal>
      )}

      {!hideProcessMarker && (
        <ScrollReveal delay={75} distance="0.75rem">
          <ProcessMarker title="Discover" number="01" progress={25} />
        </ScrollReveal>
      )}

      {(data.problem?.title || data.researchApproach?.title) && (
        <ScrollReveal delay={100}>
          <div className="discover-section__intro">
            {data.problem?.title && (
              <div className="discover-section__intro-column">
                <h2>{data.problem.title}</h2>

                <div className="discover-section__intro-text">
                  {data.problem.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {data.problem.conclusion && (
                    <p className="fed-h3">{data.problem.conclusion}</p>
                  )}
                </div>
              </div>
            )}

            {data.researchApproach?.title && (
              <div className="discover-section__intro-column">
                <h2>{data.researchApproach.title}</h2>

                {data.researchApproach.description && (
                  <p>{data.researchApproach.description}</p>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      )}

      {data.codeAudit?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <MellemrumAudit data={data.codeAudit} />
        </ScrollReveal>
      )}

      {data.findings?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <VuuhFindings data={data.findings} />
        </ScrollReveal>
      )}

      {data.competitors?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <ResearchSummary
            title={data.competitors.title}
            description={data.competitors.description}
            items={data.competitors.items}
            screenshots={data.competitors.screenshots}
            variant={data.competitors.variant}
          />
        </ScrollReveal>
      )}

      {data.performance?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <InsightList {...data.performance} variant="performance" />
        </ScrollReveal>
      )}

      {data.findingsReview?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <VuuhFindings data={data.findingsReview} variant="la-seconde" />
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
