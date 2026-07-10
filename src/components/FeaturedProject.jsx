import { Link } from "react-router";
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
  const projectUrl = `/projects/${slug}`;

  return (
    <article
      className={`featured-project ${
        reverse ? "featured-project--reverse" : ""
      }`}
    >
      <div className="featured-project__content">
        <h1 className="featured-project__number">{number}</h1>

        <h2>{title}</h2>

        <h3 className="featured-project__description">{description}</h3>
      </div>

      <div className="featured-project__visual">
        <Link
          to={projectUrl}
          className="featured-project__image-link"
          aria-label={`Læs casen om ${title}`}
        >
          <img src={image} alt={imageAlt} className="featured-project__image" />
        </Link>

        <Link to={projectUrl} className="featured-project__button">
          <h3>View project</h3>
        </Link>
      </div>
    </article>
  );
}

export default FeaturedProject;
