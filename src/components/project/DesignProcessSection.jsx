// Import component styles
import "./DesignProcessSection.css";

function DesignProcessSection({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="design-process">
      <h2>{data.title}</h2>

      <div className="design-process__grid">
        {data.items.map((item) => (
          <article className="design-process__item" key={item.title}>
            <h3>{item.title}</h3>

            <img
              className="design-process__image"
              src={item.image}
              alt={item.alt}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default DesignProcessSection;
