// Import navigation links from React Router
import { Link } from "react-router";

// Import component styles
import "./FeaturedProject.css";

function FeaturedProject({
  number,
  title,
  description,
  image,
  imageAlt,
  slug,
  reverse = false,
}) {
  // Create the URL for the selected project
  const projectUrl = `/projects/${slug}`;

  return (
    <article
      className={`featured-project ${
        reverse ? "featured-project--reverse" : ""
      }`}
    >
      {/* Project number and description */}
      <div className="featured-project__content">
        <h1 className="featured-project__number">{number}</h1>

        <h2>{title}</h2>

        <h3 className="featured-project__description">{description}</h3>
      </div>

      {/* Project image and link */}
      <div className="featured-project__visual">
        <Link
          to={projectUrl}
          className="featured-project__image-link"
          aria-label={`View the project ${title}`}
        >
          <img src={image} alt={imageAlt} className="featured-project__image" />
        </Link>

        {/* Link to the project details */}
        <Link to={projectUrl} className="featured-project__button">
          <h3>View project</h3>
        </Link>
      </div>
    </article>
  );
}

export default FeaturedProject;
