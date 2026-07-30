import { useCallback, useState } from "react";

import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import PrototypeSection from "../PrototypeSection";
import CodedSolutionSection from "../CodedSolutionSection";
import ImageGallery from "../ImageGallery";
import ReflectionSection from "../ReflectionSection";

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
      <SectionDivider />

      <ProcessMarker title="Deliver" number="04" progress={100} />

      {data.prototype?.items?.length > 0 && (
        <PrototypeSection
          data={data.prototype}
          isPaused={isCodedSolutionVisible}
        />
      )}

      {data.codedSolution?.media?.src && (
        <CodedSolutionSection
          data={data.codedSolution}
          onVisibilityChange={handleCodedSolutionVisibility}
        />
      )}

      {data.socialMedia?.length > 0 && (
        <ImageGallery title="Social media content" images={data.socialMedia} />
      )}

      {data.animations?.length > 0 && (
        <ImageGallery title="Animations – Jitter" images={data.animations} />
      )}

      {data.mockup?.image && (
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
      )}

      {data.reflection?.length > 0 && (
        <ReflectionSection items={data.reflection} />
      )}
    </section>
  );
}

export default DeliverSection;
