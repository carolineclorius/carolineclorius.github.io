import "./ContentCard.css";

function ContentCard({ title, children }) {
  return (
    <section className="content-card">
      <div className="content-card__inner">
        {title && <h2 className="content-card__title">{title}</h2>}

        <div className="content-card__content">{children}</div>
      </div>
    </section>
  );
}

export default ContentCard;
