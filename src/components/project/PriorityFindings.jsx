import "./PriorityFindings.css";

function PriorityFindings({ data }) {
  return (
    <div className="priority-findings">
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div className="priority-findings__stats">
        {data.stats?.map((stat) => (
          <div className="priority-findings__stat" key={stat.value}>
            {stat.icon && (
              <img
                className="priority-findings__stat-icon"
                src={stat.icon}
                alt=""
                aria-hidden="true"
              />
            )}

            <p className="fed-h3">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="priority-findings__scroll">
        {data.items?.map((item) => (
          <article className="priority-findings__card" key={item.title}>
            <div className="priority-findings__card-heading">
              {item.icon && (
                <img
                  className="priority-findings__icon"
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                />
              )}

              <h3 className="priority-findings__title">{item.title}</h3>
            </div>

            <p className="priority-findings__priority">{item.priority}</p>

            <p className="priority-findings__description">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PriorityFindings;
