import { forwardRef } from "react";

import desktopFrame from "../../assets/images/shared/desktop.svg";
import phoneFrame from "../../assets/images/shared/phone.svg";

import "./PrototypeDevice.css";

const PrototypeDevice = forwardRef(function PrototypeDevice(
  { device, video, alt },
  videoRef,
) {
  const frame = device === "desktop" ? desktopFrame : phoneFrame;

  return (
    <div className={`prototype-device prototype-device--${device}`}>
      <img
        className="prototype-device__frame"
        src={frame}
        alt=""
        aria-hidden="true"
      />

      <video
        ref={videoRef}
        className="prototype-device__video"
        src={video}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    </div>
  );
});

export default PrototypeDevice;
