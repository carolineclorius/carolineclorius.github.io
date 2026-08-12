// Import page styles
import "./HomePage.css";

import ScrollReveal from "../components/project/sections/ScrollReveal";

// Import project data
import projects from "../data/projects";

// Import the homepage image
import carolineImage from "../assets/images/caroline-homepage.png";

// Import the featured project component
import FeaturedProject from "../components/FeaturedProject";

function HomePage() {
  // Store the projects displayed on the homepage
  const featuredProjects = projects;

  return (
    <div className="page">
      {/* Homepage introduction */}
      <section className="hero-section">
        <h3 className="hero-text">I'm Caroline Majlandt Clorius</h3>
        <h1>
          <span className="hero-title__line hero-title__line--right">
            Designing <span className="fed-h1">intuitive</span> interfaces and
          </span>
          <span className="hero-title__line hero-title__line--left">
            <span className="fed-h1">meaningful</span> experiences
          </span>
        </h1>
      </section>

      {/* Designer introduction */}
      <ScrollReveal delay={50} distance="0.75rem">
        <section className="designer-section">
          <img
            src={carolineImage}
            alt="Caroline Majlandt Clorius"
            className="designer-image"
          />

          {/* Designer description */}
          <div className="designer-content">
            <h2>Designing with people in mind</h2>
            <h3>
              I’m passionate about{" "}
              <span className="fed-h3">UX, UI and branding</span>, creating
              intuitive and engaging digital experiences through{" "}
              <span className="fed-h3">
                research, visual design and interactive prototyping
              </span>
              . My goal is to design solutions that are both{" "}
              <span className="fed-h3">meaningful and user-friendly.</span>
            </h3>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured projects */}
      <section className="featured-projects-section">
        {/* Introduce the selected projects */}
        <ScrollReveal delay={50} distance="0.75rem">
          <div className="featured-projects-intro">
            <h2 className="projects-intro-title">Ideas I’ve brought to life</h2>

            <h3>
              A selection of my projects, where strategy, design and content
              come together to create <span className="fed-h3">meaningful</span>{" "}
              digital platforms.
            </h3>
          </div>
        </ScrollReveal>

        {/* Generate a featured project for each project */}
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={50} distance="0.75rem">
            <FeaturedProject
              number={String(index + 1).padStart(2, "0")}
              title={project.title}
              description={project.summary}
              image={project.image}
              imageAlt={`Preview of ${project.title}`}
              slug={project.slug}
              reverse={index % 2 === 1}
            />
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
