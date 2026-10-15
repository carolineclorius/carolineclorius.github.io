import "./DefineSection.css";

import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import InsightList from "../InsightList";
import PersonaSection from "../PersonaSection";
import QuestionList from "../QuestionList";
import RequirementGrid from "../RequirementGrid";
import PriorityFindings from "../PriorityFindings";

import ScrollReveal from "./ScrollReveal";

import "./ProcessSections.css";

function DefineSection({ data }) {
  const hasContent =
    data.insights?.length > 0 ||
    data.personas?.length > 0 ||
    data.questions?.length > 0 ||
    data.requirements?.length > 0 ||
    data.findings?.items?.length > 0 ||
    data.optimizationAreas?.items?.length > 0 ||
    Boolean(data.optimizationGoal?.description);

  if (!hasContent) return null;

  return (
    <section id="define" className="define-section">
      <ScrollReveal>
        <SectionDivider />
      </ScrollReveal>

      <ScrollReveal delay={75} distance="0.75rem">
        <ProcessMarker title="Define" number="02" progress={50} />
      </ScrollReveal>

      {data.findings?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <PriorityFindings data={data.findings} />
        </ScrollReveal>
      )}

      {data.optimizationGoal?.description && (
        <ScrollReveal delay={100}>
          <div className="define-section__goal">
            <h2>{data.optimizationGoal.title}</h2>
            <p>{data.optimizationGoal.description}</p>
          </div>
        </ScrollReveal>
      )}

      {data.insights?.length > 0 && (
        <ScrollReveal delay={100}>
          <InsightList
            title="Key insights"
            description={data.insightsDescription}
            items={data.insights}
          />
        </ScrollReveal>
      )}

      {data.personas && (
        <ScrollReveal delay={100}>
          <PersonaSection
            title={data.personas.title}
            intro={data.personas.intro}
            personas={data.personas.items}
          />
        </ScrollReveal>
      )}

      {data.questions?.length > 0 && (
        <ScrollReveal delay={100}>
          <QuestionList questions={data.questions} />
        </ScrollReveal>
      )}

      {data.optimizationAreas?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <RequirementGrid
            requirements={data.optimizationAreas.items}
            title={data.optimizationAreas.title}
            intro={data.optimizationAreas.description}
            numbered={data.optimizationAreas.numbered}
          />
        </ScrollReveal>
      )}

      {data.requirements?.length > 0 && (
        <ScrollReveal delay={100}>
          <RequirementGrid requirements={data.requirements} />
        </ScrollReveal>
      )}
    </section>
  );
}

export default DefineSection;
