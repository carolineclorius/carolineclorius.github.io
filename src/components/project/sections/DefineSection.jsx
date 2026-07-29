import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import InsightList from "../InsightList";
import PersonaSection from "../PersonaSection";
import QuestionList from "../QuestionList";
import RequirementGrid from "../RequirementGrid";

function DefineSection({ data }) {
  const hasContent =
    data.insights?.length > 0 ||
    data.personas?.length > 0 ||
    data.questions?.length > 0 ||
    data.requirements?.length > 0;

  if (!hasContent) return null;

  return (
    <section id="define" className="define-section">
      <SectionDivider />

      <ProcessMarker title="Define" number="02" progress={50} />

      {data.insights?.length > 0 && (
        <InsightList title="Key insights" items={data.insights} />
      )}

      {data.personas?.length > 0 && <PersonaSection personas={data.personas} />}

      {data.questions?.length > 0 && (
        <QuestionList questions={data.questions} />
      )}

      {data.requirements?.length > 0 && (
        <RequirementGrid requirements={data.requirements} />
      )}
    </section>
  );
}

export default DefineSection;
