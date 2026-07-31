import { useCallback, useState } from "react";

import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import PrototypeSection from "../PrototypeSection";
import CodedSolutionSection from "../CodedSolutionSection";
import ImageGallery from "../ImageGallery";
import ReflectionSection from "../ReflectionSection";

import ScrollReveal from "./ScrollReveal";

import "./ProcessSections.css";

function DeliverSection({ data }) {
  const [isCodedSolutionVisible, setIsCodedSolutionVisible] = useState(false);

  const handleCodedSolutionVisibility = useCallback((isVisible) => {
    setIsCodedSolutionVisible(isVisible);
  }, []);

  const hasContent =
    Object.keys(data.prototype ?? {}).length > 0 ||
    Object.keys(data.codedSolution ?? {}).length > 0 ||
    data.socialMedia?.length > 0 ||
    data.animations?.length > 0 ||
    Object.keys(data.mockup ?? {}).length > 0 ||
    data.reflection?.length > 0;

  if (!hasContent) return null;

  return (
    <section id="deliver" className="deliver-section">
      <ScrollReveal>
        <SectionDivider />
      </ScrollReveal>

      <ScrollReveal delay={75} distance="0.75rem">
        <ProcessMarker title="Deliver" number="04" progress={100} />
      </ScrollReveal>

      {data.prototype?.items?.length > 0 && (
        <ScrollReveal delay={100}>
          <PrototypeSection
            data={data.prototype}
            isPaused={isCodedSolutionVisible}
          />
        </ScrollReveal>
      )}

      {data.codedSolution?.media?.src && (
        <ScrollReveal delay={100}>
          <CodedSolutionSection
            data={data.codedSolution}
            onVisibilityChange={handleCodedSolutionVisibility}
          />
        </ScrollReveal>
      )}

      {data.socialMedia?.length > 0 && (
        <ScrollReveal delay={100}>
          <ImageGallery
            title="Social media content"
            images={data.socialMedia}
          />
        </ScrollReveal>
      )}

      {data.animations?.length > 0 && (
        <ScrollReveal delay={100}>
          <ImageGallery title="Animations – Jitter" images={data.animations} />
        </ScrollReveal>
      )}

      {data.mockup?.image && (
        <ScrollReveal delay={100}>
          <ImageGallery
            title={data.mockup.title}
            description={data.mockup.description}
            images={[
              {
                src: data.mockup.image,
                alt: data.mockup.alt,
              },
            ]}
            layout="single"
            className={data.mockup.className}
          />
        </ScrollReveal>
      )}

      {data.reflection?.length > 0 && (
        <ScrollReveal delay={100}>
          <ReflectionSection items={data.reflection} />
        </ScrollReveal>
      )}
    </section>
  );
}

export default DeliverSection;
