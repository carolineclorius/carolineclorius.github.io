import SectionDivider from "../SectionDivider";
import ProcessMarker from "../ProcessMarker";
import ProjectLinks from "../ProjectLinks";
import ReflectionSection from "../ReflectionSection";

function DeliverSection({ data }) {
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

      {data.prototype?.image && (
        <ProjectLinks
          title={data.prototype.title}
          description={data.prototype.description}
          image={data.prototype.image}
          links={data.prototype.links}
        />
      )}

      {data.codedSolution?.image && (
        <ProjectLinks
          title={data.codedSolution.title}
          description={data.codedSolution.description}
          image={data.codedSolution.image}
          links={data.codedSolution.links}
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
          images={[
            {
              src: data.mockup.image,
              alt: data.mockup.alt,
            },
          ]}
          layout="single"
        />
      )}

      {data.reflection?.length > 0 && (
        <ReflectionSection items={data.reflection} />
      )}
    </section>
  );
}

export default DeliverSection;
