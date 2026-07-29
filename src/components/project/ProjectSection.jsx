function ProjectSection({
  id,
  title,
  description,
  variant = "default",
  className = "",
  children,
}) {
  return (
    <section
      className={`project-section project-section--${variant} ${className}`}
      id={id}
    >
      <div className="project-section__inner">
        {title && <h2>{title}</h2>}
        {description && (
          <p className="project-section__description">{description}</p>
        )}

        {children}
      </div>
    </section>
  );
}

export default ProjectSection;
