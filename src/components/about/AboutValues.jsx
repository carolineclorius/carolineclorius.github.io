// Import component styles
import "./AboutValues.css";

// Import the value icons
import curiousIcon from "../../assets/images/1value.svg";
import collaborativeIcon from "../../assets/images/2value.svg";
import structuredIcon from "../../assets/images/3value.svg";
import empatheticIcon from "../../assets/images/4value.svg";

// Store the values displayed in the section
const values = [
  {
    title: "Curious",
    icon: curiousIcon,
    text: `I’m naturally curious and enjoy exploring new ideas,
    perspectives and ways of working. Whether it’s researching user needs,
    testing a new design approach or learning a new tool, I’m always looking
    for opportunities to grow and improve.`,
  },
  {
    title: "Collaborative",
    icon: collaborativeIcon,
    text: `I thrive in collaborative environments and enjoy exchanging ideas
    with others. I’m often the person who brings structure to a project,
    helps keep an overview and makes sure everyone feels included throughout
    the process.`,
  },
  {
    title: "Structured",
    icon: structuredIcon,
    text: `I enjoy creating structure in complex projects and turning ideas
    into clear, manageable steps. This helps me stay focused while still
    leaving room for exploration and creativity.`,
  },
  {
    title: "Empathetic",
    icon: empatheticIcon,
    text: `I care about understanding people and the situations they are in.
    Empathy helps me make more thoughtful design decisions and create
    experiences that feel relevant and accessible.`,
  },
];

function AboutValues() {
  return (
    <section className="about-values">
      <h2>How I work</h2>

      {/* Generate a card for each value */}
      <div className="about-values__scroller">
        {values.map((value) => (
          <article className="about-value-card" key={value.title}>
            {/* Decorative icon */}
            <div className="about-value-card__icon">
              <img src={value.icon} alt="" aria-hidden="true" />
            </div>

            {/* Value content */}
            <div className="about-value-card__content">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutValues;
