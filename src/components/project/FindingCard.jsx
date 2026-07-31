import { useState } from "react";
import "./FindingCard.css";

import quoteFrame from "../../assets/images/shared/quote-frame.svg";
import smallQuoteFrame from "../../assets/images/shared/small-quote-frame.svg";
import arrowDown from "../../assets/images/shared/arrow-down.svg";
import arrowUp from "../../assets/images/shared/arrow-up.svg";

function FindingCard({ finding }) {
  const [expanded, setExpanded] = useState(false);

  const visibleQuotes = expanded ? finding.quotes : finding.quotes?.slice(0, 1);

  return (
    <article className="finding-card">
      <div className="finding-card__label">
        {finding.icon && (
          <img
            className="finding-card__icon"
            src={finding.icon}
            alt=""
            aria-hidden="true"
          />
        )}

        <h3 className="finding-card__title">{finding.title}</h3>
      </div>

      <p>{finding.heading}</p>

      {finding.statistic && (
        <p className="finding-card__statistic">{finding.statistic}</p>
      )}

      {visibleQuotes?.map((quote) => (
        <blockquote
          className="finding-card__quote"
          key={`${quote.participant ?? "anonymous"}-${quote.text}`}
        >
          <picture className="finding-card__quote-frame">
            <source media="(max-width: 720px)" srcSet={smallQuoteFrame} />

            <img src={quoteFrame} alt="" aria-hidden="true" />
          </picture>

          <div className="finding-card__quote-content">
            <p>{quote.text}</p>

            {quote.participant && (
              <small className="finding-card__participant">
                {quote.participant}
              </small>
            )}
          </div>
        </blockquote>
      ))}

      {finding.summary && (
        <p className="finding-card__summary">{finding.summary}</p>
      )}

      {finding.quotes?.length > 1 && (
        <button
          className="finding-card__toggle"
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
        >
          <span>{expanded ? "Show fewer quotes" : "Read more quotes"}</span>

          <img
            src={expanded ? arrowUp : arrowDown}
            alt=""
            aria-hidden="true"
            className="finding-card__toggle-icon"
          />
        </button>
      )}
    </article>
  );
}

export default FindingCard;
