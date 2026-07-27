function ImageGallery({ images, layout = "grid" }) {
  if (layout === "horizontal") {
    return (
      <HorizontalGallery label="Project images">
        {images.map((image) => (
          <figure className="image-gallery__item" key={image.src}>
            <img src={image.src} alt={image.alt} />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </HorizontalGallery>
    );
  }

  return (
    <div className={`image-gallery image-gallery--${layout}`}>
      {images.map((image) => (
        <figure className="image-gallery__item" key={image.src}>
          <img src={image.src} alt={image.alt} />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

export default ImageGallery;
