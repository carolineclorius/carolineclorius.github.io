import "./InsightList.css";

function InsightList({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="insight-list">
      <h2>{title}</h2>

      <p className="insight-list__description">
        The research revealed {items.length} key insights that shaped the design
        direction.
      </p>

      <ul className="insight-list__grid">
        {items.map((item) => (
          <li className="insight-list__item" key={item.text}>
            {item.icon && (
              <img
                className="insight-list__icon"
                src={item.icon}
                alt=""
                aria-hidden="true"
              />
            )}

            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InsightList;
