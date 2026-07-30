import "./ImageGallery.css";

function ImageGallery({
  title,
  description,
  images,
  layout = "grid",
  className = "",
}) {
  if (!images?.length) return null;

  return (
    <section
      className={`image-gallery image-gallery--${layout} ${className}`.trim()}
    >
      <div className="image-gallery__header">
        {title && <h2 className="image-gallery__title">{title}</h2>}

        {description && (
          <p className="image-gallery__description">{description}</p>
        )}
      </div>

      <div className="image-gallery__items">
        {images.map((image) => (
          <img
            key={image.src}
            className="image-gallery__image"
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;
