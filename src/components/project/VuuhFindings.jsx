import "./VuuhFindings.css";
import arrowRight from "../../assets/images/shared/arrow-right.svg";

function VuuhFindings({ data }) {
  return (
    <div className="vuuh-findings">
      <h2>{data.title}</h2>

      <div className="vuuh-findings__stats">
        {data.stats?.map((stat, index) => (
          <div key={index} className="vuuh-findings__stat">
            {stat.icon && <img src={stat.icon} alt="" />}
            <p className="fed-h3">{stat.value}</p>
          </div>
        ))}
      </div>

      {data.evaluationLink && (
        <a
          className="vuuh-findings__evaluation-link"
          href={data.evaluationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full UX evaluation
        </a>
      )}

      <div className="vuuh-findings__list">
        {data.items.map((finding, index) => (
          <article className="vuuh-findings__card" key={index}>
            <div className="vuuh-findings__heading">
              {finding.icon && <img src={finding.icon} alt="" />}
              <h3>{finding.title}</h3>
            </div>
            <p className="vuuh-findings__priority">{finding.priority}</p>

            <div className="vuuh-findings__content">
              <div>
                <h4>Observation</h4>
                <p>{finding.observation}</p>
              </div>

              <div>
                <h4>Impact</h4>
                <p>{finding.impact}</p>
              </div>
            </div>

            {finding.screenshots?.length > 0 && (
              <div className="vuuh-findings__screenshots">
                {finding.screenshots.map((group, groupIndex) => (
                  <div
                    className="vuuh-findings__screenshot-group"
                    key={groupIndex}
                  >
                    <p className="vuuh-findings__screenshot-title">
                      {group.title}
                    </p>

                    <div className="vuuh-findings__screenshot-row">
                      {group.images.map((image, imageIndex) => (
                        <div
                          className="vuuh-findings__screenshot-item"
                          key={imageIndex}
                        >
                          <img
                            src={image}
                            alt={`${group.title} - step ${imageIndex + 1}`}
                            loading="lazy"
                            className="vuuh-findings__screenshot-image"
                          />

                          {imageIndex < group.images.length - 1 && (
                            <img
                              src={arrowRight}
                              alt=""
                              aria-hidden="true"
                              className="vuuh-findings__arrow"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default VuuhFindings;
