import "./MellemrumAudit.css";

function MellemrumAudit({ data }) {
  return (
    <div className="mellemrum-audit">
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div className="mellemrum-audit__grid">
        {data.items.map((item) => (
          <article className="mellemrum-audit__card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      {data.auditLink && (
        <a
          className="mellemrum-audit__link"
          href={data.auditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full Code & UX audit ↗
        </a>
      )}
    </div>
  );
}

export default MellemrumAudit;
