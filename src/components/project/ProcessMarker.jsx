// Import component styles
import "./ProcessMarker.css";

import discoverMarker from "../../assets/images/shared/small-discover.svg";
import defineMarker from "../../assets/images/shared/small-define.svg";
import developMarker from "../../assets/images/shared/small-develop.svg";
import deliverMarker from "../../assets/images/shared/small-deliver.svg";

const markerImages = {
  discover: discoverMarker,
  define: defineMarker,
  develop: developMarker,
  deliver: deliverMarker,
};

function ProcessMarker({ title, number }) {
  const markerKey = title.toLowerCase();
  const markerImage = markerImages[markerKey];

  return (
    <div className="process-marker">
      {markerImage && (
        <img
          className="process-marker__image"
          src={markerImage}
          alt=""
          aria-hidden="true"
        />
      )}

      <h3 className="process-marker__text">
        {title} {number}/04
      </h3>
    </div>
  );
}

export default ProcessMarker;
