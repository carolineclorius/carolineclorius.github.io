// Import project images
import rumlyImage from "../assets/images/rumly.svg";
import littleloomsImage from "../assets/images/littlelooms.svg";
import luminaImage from "../assets/images/lumina.svg";
import mellemrumImage from "../assets/images/mellemrum.svg";
import vuuhImage from "../assets/images/vuuh.svg";
import laSecondeImage from "../assets/images/laseconde.svg";

// Project data used across the portfolio
const projects = [
  {
    slug: "rumly",
    title: "Rumly",
    year: "2026",
    summary:
      "A roomie app that combines a compatibility quiz, detailed profiles and matching to help users find compatible roomies.",
    description:
      "A roomie app that combines a compatibility quiz, detailed profiles and matching to help users find compatible roomies.",
    tags: ["UX/UI", "Research", "Prototyping"],
    image: rumlyImage,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "little-looms",
    title: "Little Looms",
    year: "2026",
    summary:
      "A online retail concept bringing together carefully selected children's fashion brands.",
    description:
      "A online retail concept bringing together carefully selected children's fashion brands",
    tags: ["Branding", "UI", "Visual design"],
    image: littleloomsImage,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
  {
    slug: "lumina-audio",
    title: "Lumina Audio",
    year: "2026",
    summary:
      "A product landing page designed to showcase and sell the Lumina One speaker.",
    description:
      "A product landing page designed to showcase and sell the Lumina One speaker.",
    tags: ["UX", "Frontend", "Interaction design"],
    image: luminaImage,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },

  {
    slug: "mellemrum",
    title: "Mellemrum",
    year: "2026",
    summary:
      "A local event platform for discovering and signing up for cultural experiences in Aarhus.",
    description:
      "A local event platform for discovering and signing up for cultural experiences in Aarhus.",
    tags: ["UX/UI", "Frontend", "React"],
    image: mellemrumImage,
    links: [],
  },

  {
    slug: "vuuh",
    title: "Vuuh",
    year: "2026",
    summary:
      "A UX optimization project focused on improving the onboarding experience for Vuuh, a Shopify plugin.",
    description:
      "A UX optimization project focused on improving the onboarding experience for Vuuh, a Shopify plugin.",
    tags: ["UX/UI", "UX Evaluation", "Prototyping"],
    image: vuuhImage,
    links: [],
  },

  {
    slug: "la-seconde",
    title: "LA SECONDE",
    year: "2026",
    summary:
      "Redesigning LA ROUGE’s secondhand experience through a distinct subbrand and improved buying and selling journeys.",
    description:
      "Redesigning LA ROUGE’s secondhand experience through a distinct subbrand and improved buying and selling journeys.",
    tags: ["UX/UI", "Branding", "Prototyping"],
    image: laSecondeImage,
    links: [],
  },
];

export default projects;
