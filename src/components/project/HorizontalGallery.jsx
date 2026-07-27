import "./HorizontalGallery.css";

function HorizontalGallery({ children, label }) {
  return (
    <div
      className="horizontal-gallery"
      role="region"
      aria-label={label}
      tabIndex="0"
    >
      <div className="horizontal-gallery__track">{children}</div>
    </div>
  );
}

export default HorizontalGallery;
