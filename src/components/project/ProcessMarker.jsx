// Import component styles
import "./ProcessMarker.css";

function ProcessMarker({ title, number }) {
  return (
    <div className="process-marker">
      <div className="process-marker__circle" aria-hidden="true" />

      <p>
        {title} {number}/04
      </p>
    </div>
  );
}

export default ProcessMarker;
