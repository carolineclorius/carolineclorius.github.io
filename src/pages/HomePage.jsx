// Import page styles
import "./HomePage.css";

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
        <h3 className="hero-text">Caroline Majlandt Clorius</h3>
        <h1>
          Designing <span className="fed-h1">intuitive</span> interfaces and
          <br />
          <span className="fed-h1">meaningful</span> experiences
        </h1>
      </section>

      {/* Designer introduction */}
      <section className="designer-section">
        <img
          src={carolineImage}
          alt="Caroline Majlandt Clorius"
          className="designer-image"
        />

        {/* Designer description */}
        <div className="designer-content">
          <h2>Who am I as a UX/UI designer</h2>
          <h3>
            I’m passionate about{" "}
            <span className="fed-h3">UX, UI and branding</span>, with a
            particular interest in transforming ideas into intuitive and
            engaging digital experiences. Through{" "}
            <span className="fed-h3">
              research, visual design and interactive prototyping
            </span>
            , I enjoy creating solutions that are both{" "}
            <span className="fed-h3">meaningful and user-friendly.</span>
          </h3>
        </div>
      </section>

      {/* Featured projects */}
      <section className="featured-projects-section">
        {/* Introduce the selected projects */}
        <div className="featured-projects-intro">
          <h2 className="projects-intro-title">Ideas I’ve brought to life</h2>

          <h3>
            A selection of my work, where strategy, design and content come
            together to create <span className="fed-h3">meaningful</span>{" "}
            digital platforms.
          </h3>
        </div>

        {/* Generate a featured project for each project */}
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.slug}
            number={String(index + 1).padStart(2, "0")}
            title={project.title}
            description={project.summary}
            image={project.image}
            imageAlt={`Preview of ${project.title}`}
            slug={project.slug}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
