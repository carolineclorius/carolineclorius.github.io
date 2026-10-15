import "./ProductDiscoverySection.css";

function ProductDiscoverySection({ data }) {
  if (!data) return null;

  return (
    <section className="product-discovery">
      <div className="product-discovery__header">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="product-discovery__grid">
        {data.items.map((item) => (
          <article className="product-discovery__card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={item.image} alt={item.imageAlt} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductDiscoverySection;
