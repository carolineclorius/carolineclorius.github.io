import discoverGraphic from "../../assets/images/shared/discover.svg";
import defineGraphic from "../../assets/images/shared/define.svg";
import developGraphic from "../../assets/images/shared/develop.svg";
import deliverGraphic from "../../assets/images/shared/deliver.svg";

import "./ProjectProcess.css";

const processGraphics = {
  Discover: discoverGraphic,
  Define: defineGraphic,
  Develop: developGraphic,
  Deliver: deliverGraphic,
};

function ProjectProcess({ steps }) {
  return (
    <section className="project-process">
      <div className="project-process__inner">
        <h2>Work process</h2>

        <div className="project-process__grid">
          {steps.map((step) => (
            <article className="process-card" key={step.title}>
              <img
                className="process-card__graphic"
                src={processGraphics[step.title]}
                alt=""
                aria-hidden="true"
              />

              <div className="process-card__content">
                <h3>{step.title}</h3>

                <ul>
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectProcess;
