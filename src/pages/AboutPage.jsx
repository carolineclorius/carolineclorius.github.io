// Import the sections used on the About page
import AboutHero from "../components/about/AboutHero";
import AboutValues from "../components/about/AboutValues";
import AboutLife from "../components/about/AboutLife";
import AboutQuotes from "../components/about/AboutQuotes";

// Import page styles
import "./AboutPage.css";

/* About Page */
function AboutPage() {
  return (
    // Main content of the page
    <main className="page about-page">
      {/* Page heading */}
      <h1>About</h1>

      {/* Hero section */}
      <AboutHero />

      {/* Personal values section */}
      <AboutValues />

      {/* Life and interests section */}
      <AboutLife />

      {/* Quotes and recommendations section */}
      <AboutQuotes />
    </main>
  );
}

export default AboutPage;
