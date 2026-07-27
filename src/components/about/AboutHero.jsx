// Import the hero image
import abouthero from "../../assets/images/abouthero.svg";

// Import component styles
import "./AboutHero.css";

function AboutHero() {
  return (
    // Hero section
    <section className="about-hero">
      {/* Hero image */}
      <div className="about-hero__visual">
        <img
          src={abouthero}
          alt="Caroline Majlandt Clorius"
          className="about-hero__image"
        />
      </div>

      {/* Introduction content */}
      <div className="about-hero__content">
        <h2>I am Caroline</h2>

        <p>
          I’m a multimedia design student with a passion for UX, UI and
          branding. What excites me most is understanding people and creating
          digital experiences that feel intuitive, engaging and meaningful.
        </p>

        <p>
          I enjoy the process of turning ideas into something real — from early
          concepts and research to visual design and interactive prototypes.
        </p>

        {/* Personal statement */}
        <h3 className="about-hero__statement">
          I’m driven by curiosity and inspired by people.
        </h3>
      </div>
    </section>
  );
}

export default AboutHero;
