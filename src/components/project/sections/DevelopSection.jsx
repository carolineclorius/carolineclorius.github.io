import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ComparisonSection from "../ComparisonSection";

import WireframesSection from "../WireframesSection";
import VisualIdentitySection from "../VisualIdentitySection";
import DesignProcessSection from "../DesignProcessSection";

import ProjectImprovements from "../ProjectImprovements";

import BrandIdentitySection from "../BrandIdentitySection";

import ProductDiscoverySection from "../ProductDiscoverySection";

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
        <ScrollReveal delay={0}>
          <WireframesSection data={data.wireframes} />
        </ScrollReveal>
      )}

      {data.visualIdentity && (
        <ScrollReveal delay={100}>
          <VisualIdentitySection data={data.visualIdentity} project={project} />
        </ScrollReveal>
      )}

      {data.finalVisualIdentity && (
        <ScrollReveal delay={100}>
          <VisualIdentitySection
            data={data.finalVisualIdentity}
            project={project}
            variant="final"
          />
        </ScrollReveal>
      )}

      {data.brandIdentity && (
        <ScrollReveal delay={100}>
          <BrandIdentitySection data={data.brandIdentity} />
        </ScrollReveal>
      )}

      {data.productDiscovery && (
        <ScrollReveal delay={100}>
          <ProductDiscoverySection data={data.productDiscovery} />
        </ScrollReveal>
      )}

      {data.designProcess?.items?.length > 0 && (
        <ScrollReveal delay={0}>
          {["Mellemrum", "Vuuh"].includes(project) ? (
            <ProjectImprovements data={data.designProcess} />
          ) : (
            <DesignProcessSection data={data.designProcess} />
          )}
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
