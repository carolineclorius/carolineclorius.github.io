import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

import arrowUp from "../../assets/images/shared/arrow-up.svg";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);

      const footer = document.querySelector("footer");

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setFooterVisible(footerTop < window.innerHeight);
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (!visible) return null;

  return (
    <button
      className={`scroll-to-top-button ${
        footerVisible ? "scroll-to-top-button--footer" : ""
      }`}
      type="button"
      onClick={handleClick}
    >
      <span>Scroll to top</span>

      <img src={arrowUp} alt="" aria-hidden="true" />
    </button>
  );
}

export default ScrollToTopButton;
