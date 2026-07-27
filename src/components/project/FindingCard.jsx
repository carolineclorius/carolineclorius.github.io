function FindingCard({ finding }) {
  return (
    <article className="finding-card">
      <div className="finding-card__heading">
        {finding.icon && <img src={finding.icon} alt="" aria-hidden="true" />}

        <h3>{finding.title}</h3>
      </div>

      <p className="finding-card__summary">{finding.summary}</p>

      {finding.quote && (
        <blockquote className="finding-card__quote">
          <p>{finding.quote}</p>
          {finding.participant && <cite>{finding.participant}</cite>}
        </blockquote>
      )}

      <p>{finding.explanation}</p>

      {finding.moreQuotes?.length > 0 && (
        <details className="finding-card__details">
          <summary>Read more quotes</summary>

          {finding.moreQuotes.map((quote) => (
            <blockquote key={quote}>{quote}</blockquote>
          ))}
        </details>
      )}
    </article>
  );
}

export default FindingCard;
