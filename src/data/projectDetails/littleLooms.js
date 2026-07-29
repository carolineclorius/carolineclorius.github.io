import littleLoomsHero from "../../assets/images/littlelooms.svg";

//Disover
import economistLogo from "../../assets/images/littlelooms/discover/economist-logo.svg";
import statisticsLogo from "../../assets/images/littlelooms/discover/statistics-logo.png";
import oneFindingIcon from "../../assets/images/littlelooms/discover/1finding.svg";
import twoFindingIcon from "../../assets/images/littlelooms/discover/2finding.svg";
import threeFindingIcon from "../../assets/images/littlelooms/discover/3finding.svg";
import fourFindingIcon from "../../assets/images/littlelooms/discover/4finding.svg";
import participantsIcon from "../../assets/images/shared/participants.svg";
import timeIcon from "../../assets/images/shared/time.svg";
import agedIcon from "../../assets/images/shared/aged.svg";

//Develop
//Wireframes
import littleLoomsDesktopLandingpage from "../../assets/images/littlelooms/develop/wireframes/desktop-landingpage.svg";
import littleLoomsDesktopProductPage from "../../assets/images/littlelooms/develop/wireframes/desktop-product-page.svg";
import littleLoomsDesktopDetailPage from "../../assets/images/littlelooms/develop/wireframes/desktop-detail-page.svg";
import littleLoomsDesktopCheckoutPage from "../../assets/images/littlelooms/develop/wireframes/desktop-checkout-page.svg";

import littleLoomsPhoneLandingpage from "../../assets/images/littlelooms/develop/wireframes/phone-landingpage.svg";
import littleLoomsPhoneProductPage from "../../assets/images/littlelooms/develop/wireframes/phone-product-page.svg";
import littleLoomsPhoneDetailPage from "../../assets/images/littlelooms/develop/wireframes/phone-detail-page.svg";
import littleLoomsPhoneCheckoutPage from "../../assets/images/littlelooms/develop/wireframes/phone-checkout-page.svg";

//visual identity
import littleLoomsMoodboard from "../../assets/images/littlelooms/develop/visual-identity/moodboard.svg";

import littleLoomsPrimaryColors from "../../assets/images/littlelooms/develop/visual-identity/primary-colors.svg";
import littleLoomsSecondaryColors from "../../assets/images/littlelooms/develop/visual-identity/secondary-colors.svg";

import littleLoomsPrimaryButtons from "../../assets/images/littlelooms/develop/visual-identity/primary-buttons.svg";
import littleLoomsSecondaryButtons from "../../assets/images/littlelooms/develop/visual-identity/secondary-buttons.svg";
import littleLoomsInputField from "../../assets/images/littlelooms/develop/visual-identity/input-field.svg";

import littleLoomsTopNavIcons from "../../assets/images/littlelooms/develop/visual-identity/top-nav-icons.svg";
import littleLoomsFilteringIcon from "../../assets/images/littlelooms/develop/visual-identity/filtering-icon.svg";
import littleLoomsOtherIcons from "../../assets/images/littlelooms/develop/visual-identity/other-icons.svg";

import littleLoomsProductCard from "../../assets/images/littlelooms/develop/visual-identity/product-card.svg";
import littleLoomsProductCardHover from "../../assets/images/littlelooms/develop/visual-identity/product-card-hover.svg";

import littleLoomsGraphicElements from "../../assets/images/littlelooms/develop/visual-identity/graphic-elements.svg";

import littleLoomsPrimaryLogo from "../../assets/images/littlelooms/develop/visual-identity/logo-primary.svg";
import littleLoomsSecondaryLogo from "../../assets/images/littlelooms/develop/visual-identity/logo-secondary.svg";
import littleLoomsSubmarkLogo from "../../assets/images/littlelooms/develop/visual-identity/logo-submark.svg";
import littleLoomsFavicon from "../../assets/images/littlelooms/develop/visual-identity/favicon.svg";

//Design process
import littleLoomsSketching from "../../assets/images/littlelooms/develop/design-process/sketch.svg";
import littleLoomsDesignWireframe from "../../assets/images/littlelooms/develop/design-process/wireframe.svg";
import littleLoomsPrototype from "../../assets/images/littlelooms/develop/design-process/prototype.svg";

//Testing
import littleLoomsTestingBefore from "../../assets/images/littlelooms/develop/testing/before.svg";
import littleLoomsTestingAfter from "../../assets/images/littlelooms/develop/testing/after.svg";

const littleLooms = {
  slug: "little-looms",
  number: "02",
  title: "Little Looms",
  heroImage: littleLoomsHero,
  summary:
    "A retail concept bringing together carefully selected children's fashion brands.",

  overview: [
    {
      label: "Client",
      value: "Semester project",
    },
    {
      label: "Duration",
      value: "4 weeks",
    },
    {
      label: "Team",
      value: "5 designers",
    },
    {
      label: "My role",
      value:
        "UX Research, UX/UI Design, Interactive Prototyping & Front-end Development",
    },
    {
      label: "Design tools",
      value: "Figma, FigJam and Photoshop",
    },
    {
      label: "Technologies",
      value: "React and Visual Studio Code",
    },
    {
      label: "Methods",
      value: "Research and design",
    },
  ],

  process: [
    {
      title: "Discover",
      items: [
        "Problem and context",
        "Research approach",
        "Secondary research",
        "Semi-structured interview",
      ],
    },
    {
      title: "Define",
      items: ["HMW questions", "Personas", "Insights", "Design requirements"],
    },
    {
      title: "Develop",
      items: ["Wireframes", "Visual identity", "Process", "Testing"],
    },
    {
      title: "Deliver",
      items: ["Prototyping", "Coded prototype", "Social media", "Mockup"],
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Shopping for children’s clothing online can make it difficult to assess quality, materials and sizing.",
        "At the same time, purchase decisions are influenced by aesthetics, inspiration and trust.",
      ],
      conclusion:
        "This project explores how Little Looms can create a clear, inspiring and trustworthy shopping experience.",
    },

    researchApproach: {
      title: "Research approach",
      description:
        "We combined secondary research with primary research to identify key patterns in shopping behaviour.",
    },

    secondaryResearch: {
      title: "Secondary research",

      items: [
        {
          logo: economistLogo,
          title: "Women drive purchasing",
          description:
            "87% of children's sleep products are purchased by women.",
        },

        {
          logo: statisticsLogo,
          title: "Online shopping is widespread",
          description: "82% of Danes shopped online within three months.",
        },

        {
          logo: statisticsLogo,
          title: "Social media inspires",
          description: "Instagram is widely used by women aged 25–34.",
        },
      ],
    },

    primaryResearch: {
      title: "Primary research",

      description: "Based on seven semi-structured interviews.",

      facts: [
        {
          icon: participantsIcon,
          value: "7 participants",
        },
        {
          icon: timeIcon,
          value: "15-20 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 25-40",
        },
      ],

      findings: [
        {
          icon: oneFindingIcon,
          title: "Finding 1",

          heading: "Primary decision-makers",

          summary:
            "Mothers took primary responsibility for buying their children's clothes.",

          quotes: [
            {
              text: "I’m primarily the one who buys the clothes. My husband may buy something occasionally, but I’m usually the one keeping track of what they need.",
              participant: "Participant 1",
            },
            {
              text: "I do it most of the time. My husband only buys something occasionally if they urgently need it.",
              participant: "Participant 3",
            },
            {
              text: "I’m almost always the one who buys the clothes.",
              participant: "Participant 5",
            },
          ],
        },

        {
          icon: twoFindingIcon,
          title: "Finding 2",

          heading: "Quality over price",

          summary:
            "Quality, materials and design were prioritised over the lowest price.",

          quotes: [
            {
              text: "I’d say quality. If it’s well made and lasts a long time, I think the price is easier to justify.",
              participant: "Participant 1",
            },
            {
              text: "Quality is important to me because the clothes get used a lot. I also care about materials, and design matters too.",
              participant: "Participant 3",
            },
            {
              text: "I think a lot about design, quality and how the material feels.",
              participant: "Participant 2",
            },
          ],
        },

        {
          icon: threeFindingIcon,
          title: "Finding 3",

          heading: "Sustainability vs. aesthetics",

          summary: "Aesthetics still strongly influenced sustainable choices.",

          quotes: [
            {
              text: "Yes, but I also have to admit that I still choose something because I think it looks beautiful.",
              participant: "Participant 2",
            },
            {
              text: "Yes, but I also choose a lot based on what I think looks beautiful.",
              participant: "Participant 6",
            },
            {
              text: "Yes, but it still has to be something I think looks beautiful.",
              participant: "Participant 4",
            },
          ],
        },

        {
          icon: fourFindingIcon,
          title: "Finding 4",

          heading: "Product information matters",

          summary:
            "Materials and sizing were key to reducing purchase uncertainty.",

          quotes: [
            {
              text: "I almost always look at materials and the size guide.",
              participant: "Participant 1",
            },
            {
              text: "I almost always look at materials and sizing.",
              participant: "Participant 3",
            },
            {
              text: "Yes, especially materials.",
              participant: "Participant 4",
            },
          ],
        },
      ],
    },
  },

  define: {
    insights: [],
    personas: [],
    questions: [],
    requirements: [],
  },

  develop: {
    wireframes: {
      title: "Wireframes",
      description:
        "Low-fidelity wireframes were used to explore the webshop structure, responsive layouts and the user flow before moving into visual design.",

      groups: [
        {
          title: "Desktop",

          images: [
            {
              src: littleLoomsDesktopLandingpage,
              alt: "Little Looms desktop landing page wireframe",
              caption: "Landing page",
            },
            {
              src: littleLoomsDesktopProductPage,
              alt: "Little Looms desktop product page wireframe",
              caption: "Product page",
            },
            {
              src: littleLoomsDesktopDetailPage,
              alt: "Little Looms desktop product detail page wireframe",
              caption: "Detail product page",
            },
            {
              src: littleLoomsDesktopCheckoutPage,
              alt: "Little Looms desktop checkout page wireframe",
              caption: "Checkout page",
            },
          ],
        },

        {
          title: "Phone",

          images: [
            {
              src: littleLoomsPhoneLandingpage,
              alt: "Little Looms mobile landing page wireframe",
              caption: "Landing page",
            },
            {
              src: littleLoomsPhoneProductPage,
              alt: "Little Looms mobile product page wireframe",
              caption: "Product page",
            },
            {
              src: littleLoomsPhoneDetailPage,
              alt: "Little Looms mobile product detail page wireframe",
              caption: "Detail page",
            },
            {
              src: littleLoomsPhoneCheckoutPage,
              alt: "Little Looms mobile checkout page wireframe",
              caption: "Checkout page",
            },
          ],
        },
      ],
    },

    visualIdentity: {
      project: "little-looms",
      title: "Visual identity",
      description:
        "The visual identity combines a playful, harmonious and naïve expression with a clear and easy-to-navigate shopping experience.",

      moodboard: {
        title: "Moodboard",
        image: {
          src: littleLoomsMoodboard,
          alt: "Little Looms moodboard expressing a playful, harmonious and naïve visual direction",
        },
      },

      typography: {
        title: "Typography",

        items: [
          {
            label: "Heading",
            font: "Schoolbell",
            description:
              "Adds a playful and childlike feel to the visual identity.",
          },
          {
            label: "Body",
            font: "Inter",
            description:
              "Keeps body text clear and easy to read throughout the shopping experience.",
          },
        ],
      },

      colors: {
        primary: {
          title: "Primary colors",
          image: {
            src: littleLoomsPrimaryColors,
            alt: "Little Looms primary color palette",
          },
        },

        secondary: {
          title: "Secondary colors",
          image: {
            src: littleLoomsSecondaryColors,
            alt: "Little Looms secondary color palette",
          },
        },
      },

      uiComponents: {
        title: "UI components",

        items: [
          {
            title: "Primary buttons",
            image: {
              src: littleLoomsPrimaryButtons,
              alt: "Little Looms primary buttons",
            },
          },
          {
            title: "Secondary buttons",
            image: {
              src: littleLoomsSecondaryButtons,
              alt: "Little Looms secondary buttons",
            },
          },
          {
            title: "Input field",
            image: {
              src: littleLoomsInputField,
              alt: "Little Looms search input field",
            },
          },
          {
            title: "Profile card",
            image: {
              src: littleLoomsProductCard,
              alt: "Little Looms product card",
            },
          },
          {
            title: "Icon style",
            items: [
              {
                title: "Top-nav",
                image: {
                  src: littleLoomsTopNavIcons,
                  alt: "Little Looms top navigation icons",
                },
              },
              {
                title: "Filtering",
                image: {
                  src: littleLoomsFilteringIcon,
                  alt: "Little Looms filtering icon",
                },
              },
              {
                title: "Other examples",
                image: {
                  src: littleLoomsOtherIcons,
                  alt: "Additional Little Looms interface icons",
                },
              },
            ],
          },
          {
            title: "With hover effect",
            image: {
              src: littleLoomsProductCardHover,
              alt: "Little Looms product card with hover effect",
            },
          },
        ],
      },

      graphicElements: {
        title: "Graphic elements",
        description:
          "Hand-drawn graphic elements used across the website and social media to support the playful and naïve visual identity.",

        image: {
          src: littleLoomsGraphicElements,
          alt: "Hand-drawn graphic elements used in the Little Looms visual identity",
        },
      },

      logos: {
        title: "Logo variations",

        items: [
          {
            title: "Primary logo",
            description:
              "The complete logo with the hand-drawn icons integrated. Used for website hero sections and larger brand applications.",
            image: {
              src: littleLoomsPrimaryLogo,
              alt: "Little Looms primary logo",
            },
          },
          {
            title: "Secondary logo",
            description:
              "A simplified version with a more compact composition. Used in onboarding and smaller interface elements.",
            image: {
              src: littleLoomsSecondaryLogo,
              alt: "Little Looms secondary logo",
            },
          },
          {
            title: "Submark logo",
            description:
              "The “LOOMS” wordmark with the icon. Used where space is limited.",
            image: {
              src: littleLoomsSubmarkLogo,
              alt: "Little Looms submark logo",
            },
          },
          {
            title: "Favicon",
            description:
              "The hand-drawn icon. Used as a favicon, app icon and for small-scale branding.",
            image: {
              src: littleLoomsFavicon,
              alt: "Little Looms favicon",
            },
          },
        ],
      },
    },

    designProcess: {
      title: "From sketching to finished design",

      items: [
        {
          title: "Sketching",
          image: littleLoomsSketching,
          alt: "Initial Little Looms landing page sketch",
        },
        {
          title: "Wireframes",
          image: littleLoomsDesignWireframe,
          alt: "Little Looms landing page wireframe",
        },
        {
          title: "Prototyping",
          image: littleLoomsPrototype,
          alt: "Finished Little Looms landing page design",
        },
      ],
    },

    testing: {
      title: "Testing",
      description:
        "We conducted multiple Think Aloud tests with different participants throughout the design process.",

      feedback: ["The size guide was difficult to scan and compare."],

      changes: [
        "Added clear sections and a more structured table layout.",
        "Improved readability while keeping the visual identity consistent.",
      ],

      before: {
        src: littleLoomsTestingBefore,
        alt: "Little Looms size guide before usability testing",
      },

      after: {
        src: littleLoomsTestingAfter,
        alt: "Little Looms size guide after usability testing with clearer sections",
      },
    },
  },

  deliver: {
    prototype: {},
    codedSolution: {},
    socialMedia: [],
    mockup: {},
    reflection: [],
  },
};

export default littleLooms;
