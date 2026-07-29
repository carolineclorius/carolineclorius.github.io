import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ComparisonSection from "../ComparisonSection";

import WireframesSection from "../WireframesSection";
import VisualIdentitySection from "../VisualIdentitySection";
import DesignProcessSection from "../DesignProcessSection";

import "./ProcessSections.css";

function DevelopSection({ data = {}, project }) {
  return (
    <section id="develop" className="develop-section">
      <SectionDivider />

      <ProcessMarker title="Develop" number="03" />

      {data.wireframes?.groups?.length > 0 && (
        <WireframesSection data={data.wireframes} />
      )}

      {data.visualIdentity && (
        <VisualIdentitySection data={data.visualIdentity} project={project} />
      )}

      {data.designProcess?.items?.length > 0 && (
        <DesignProcessSection data={data.designProcess} />
      )}

      {data.testing?.before && data.testing?.after && (
        <ComparisonSection
          title={data.testing.title}
          description={data.testing.description}
          before={data.testing.before}
          after={data.testing.after}
          feedback={data.testing.feedback}
          changes={data.testing.changes}
          quote={data.testing.quote}
          imageSize={data.testing.imageSize}
        />
      )}
    </section>
  );
}

export default DevelopSection;
