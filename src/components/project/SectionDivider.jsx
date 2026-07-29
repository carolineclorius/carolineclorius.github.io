// Import component styles
import "./SectionDivider.css";

// Import divider graphic
import horizontalVectorLine from "../../assets/images/shared/horizontal-vector-line.svg";

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <img
        className="section-divider__image"
        src={horizontalVectorLine}
        alt=""
      />
    </div>
  );
}

export default SectionDivider;
