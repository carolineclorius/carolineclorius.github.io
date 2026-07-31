import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleNavigationClick = (event) => {
      const link = event.target.closest("a");

      if (!link) return;

      const url = new URL(link.href, window.location.href);

      // Ignore external links and links to sections on the same page
      if (
        url.origin !== window.location.origin ||
        (url.pathname === window.location.pathname && url.hash)
      ) {
        return;
      }

      const html = document.documentElement;

      // Disable smooth scrolling before React Router changes the page
      html.style.setProperty("scroll-behavior", "auto", "important");

      html.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    document.addEventListener("click", handleNavigationClick, true);

    return () => {
      document.removeEventListener("click", handleNavigationClick, true);
    };
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;

    // Ensure every new route begins at the top
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    const frameId = window.requestAnimationFrame(() => {
      html.style.removeProperty("scroll-behavior");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;
