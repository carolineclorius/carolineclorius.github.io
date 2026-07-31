import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ComparisonSection from "../ComparisonSection";

import WireframesSection from "../WireframesSection";
import VisualIdentitySection from "../VisualIdentitySection";
import DesignProcessSection from "../DesignProcessSection";

import ScrollReveal from "./ScrollReveal";

import "./ProcessSections.css";

function DevelopSection({ data = {}, project }) {
  return (
    <section id="develop" className="develop-section">
      <ScrollReveal>
        <SectionDivider />
      </ScrollReveal>

      <ScrollReveal delay={75} distance="0.75rem">
        <ProcessMarker title="Develop" number="03" />
      </ScrollReveal>

      {data.wireframes?.groups?.length > 0 && (
        <ScrollReveal delay={100}>
          <WireframesSection data={data.wireframes} />
        </ScrollReveal>
      )}

      {data.visualIdentity && (
        <ScrollReveal delay={100}>
          <VisualIdentitySection data={data.visualIdentity} project={project} />
        </ScrollReveal>
      )}

      {data.designProcess?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <DesignProcessSection data={data.designProcess} />
        </ScrollReveal>
      )}

      {data.testing?.before && data.testing?.after && (
        <ScrollReveal delay={100}>
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
        </ScrollReveal>
      )}
    </section>
  );
}

export default DevelopSection;
