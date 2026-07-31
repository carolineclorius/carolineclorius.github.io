import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import InsightList from "../InsightList";
import PersonaSection from "../PersonaSection";
import QuestionList from "../QuestionList";
import RequirementGrid from "../RequirementGrid";

import ScrollReveal from "./ScrollReveal";

import "./ProcessSections.css";

function DefineSection({ data }) {
  const hasContent =
    data.insights?.length > 0 ||
    data.personas?.length > 0 ||
    data.questions?.length > 0 ||
    data.requirements?.length > 0;

  if (!hasContent) return null;

  return (
    <section id="define" className="define-section">
      <ScrollReveal>
        <SectionDivider />
      </ScrollReveal>

      <ScrollReveal delay={75} distance="0.75rem">
        <ProcessMarker title="Define" number="02" progress={50} />
      </ScrollReveal>

      {data.insights?.length > 0 && (
        <ScrollReveal delay={100}>
          <InsightList title="Key insights" items={data.insights} />
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

      {data.requirements?.length > 0 && (
        <ScrollReveal delay={100}>
          <RequirementGrid requirements={data.requirements} />
        </ScrollReveal>
      )}
    </section>
  );
}

export default DefineSection;
