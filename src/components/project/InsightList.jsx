import "./InsightList.css";

function InsightList({ title, description, items, conclusion, variant }) {
  if (!items?.length) return null;

  return (
    <section
      className={`insight-list ${
        variant === "performance" ? "insight-list--performance" : ""
      }`}
    >
      <h2>{title}</h2>

      <p className="insight-list__description">
        {description ||
          `The research revealed ${items.length} key insights that shaped the design direction.`}
      </p>

      <ul className="insight-list__grid">
        {items.map((item) => (
          <li className="insight-list__item" key={item.text || item.label}>
            {variant === "performance" ? (
              <>
                <h2 className="insight-list__value">{item.value}</h2>
                <p>{item.label}</p>
              </>
            ) : (
              <>
                {item.icon && (
                  <img
                    className="insight-list__icon"
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                  />
                )}

                <p>{item.text}</p>
              </>
            )}
          </li>
        ))}
      </ul>
      {conclusion && <p className="insight-list__conclusion">{conclusion}</p>}
    </section>
  );
}

export default InsightList;
