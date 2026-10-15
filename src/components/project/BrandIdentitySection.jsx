import "./BrandIdentitySection.css";

function BrandIdentitySection({ data }) {
  if (!data) return null;

  return (
    <section className="brand-identity">
      <h2>{data.title}</h2>

      {data.description && <p>{data.description}</p>}

      <div className="brand-identity__card">
        <h3>{data.subtitle}</h3>

        {data.text && <p>{data.text}</p>}

        {data.image && <img src={data.image} alt={data.imageAlt || ""} />}
      </div>
    </section>
  );
}

export default BrandIdentitySection;
