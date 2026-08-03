// Import the sections used on the About page
import AboutHero from "../components/about/AboutHero";
import AboutValues from "../components/about/AboutValues";
import AboutLife from "../components/about/AboutLife";
import AboutQuotes from "../components/about/AboutQuotes";

import ScrollReveal from "../components/project/sections/ScrollReveal";

// Import page styles
import "./AboutPage.css";

/* About Page */
function AboutPage() {
  return (
    // Main content of the page
    <main className="page about-page">
      {/* Page heading */}
      <div className="about-page__intro">
        <h1>About</h1>

        {/* Hero section */}
        <AboutHero />
      </div>

      {/* Personal values section */}
      <ScrollReveal delay={50} distance="0.75rem">
        <AboutValues />
      </ScrollReveal>

      {/* Life and interests section */}
      <ScrollReveal delay={50} distance="0.75rem">
        <AboutLife />
      </ScrollReveal>

      {/* Quotes and recommendations section */}
      <ScrollReveal delay={50} distance="0.75rem">
        <AboutQuotes />
      </ScrollReveal>
    </main>
  );
}

export default AboutPage;
