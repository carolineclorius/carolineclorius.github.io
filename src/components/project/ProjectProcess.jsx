import discoverGraphic from "../../assets/images/shared/discover.svg";
import defineGraphic from "../../assets/images/shared/define.svg";
import developGraphic from "../../assets/images/shared/develop.svg";
import deliverGraphic from "../../assets/images/shared/deliver.svg";

import ScrollReveal from "./sections/ScrollReveal";

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
        <ScrollReveal>
          <h2>Work process</h2>
        </ScrollReveal>

        <div className="project-process__grid">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.title}
              delay={index * 75}
              distance="0.75rem"
              className="project-process__reveal"
            >
              <a
                className="process-card"
                href={`#${step.title.toLowerCase()}`}
                key={step.title}
              >
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
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectProcess;
