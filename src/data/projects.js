// Import project images
import rumlyImage from "../assets/images/rumly.svg";
import littleloomsImage from "../assets/images/littlelooms.svg";
import luminaImage from "../assets/images/lumina.svg";

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
];

export default projects;
