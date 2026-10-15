import lasecondeImage from "../../assets/images/laseconde.svg";

/* Discover */
import vintedScreenshot from "../../assets/images/laseconde/discover/vinted.png";
import tiseScreenshot from "../../assets/images/laseconde/discover/tise.png";
import marketplaceScreenshot from "../../assets/images/laseconde/discover/marketplace.png";

import laRougeScreenshot from "../../assets/images/laseconde/discover/la-rouge.png";
import laRougeSecondhandScreenshot from "../../assets/images/laseconde/discover/la-rouge-secondhand.png";
import conditionScreenshot from "../../assets/images/laseconde/discover/condition.png";
import flawsScreenshot from "../../assets/images/laseconde/discover/flaws.png";
import laRougeSortingScreenshot from "../../assets/images/laseconde/discover/la-rouge-sorting.png";
import vintedFilteringScreenshot from "../../assets/images/laseconde/discover/vinted-filtering.png";

/* Define */
import visibilityIcon from "../../assets/images/mellemrum/define/finding-2.svg";
import transparencyIcon from "../../assets/images/laseconde/define/lack-finding.svg";
import discoveryIcon from "../../assets/images/littlelooms/define/search.svg";

import christinaPersona from "../../assets/images/laseconde/define/persona-christina.svg";
import mathildePersona from "../../assets/images/laseconde/define/persona-mathilde.svg";

/* Develop */
import firstDirection from "../../assets/images/laseconde/develop/first-direction.png";
import secondDirection from "../../assets/images/laseconde/develop/second-direction.png";
import thirdDirection from "../../assets/images/laseconde/develop/third-direction.png";

import firstLogo from "../../assets/images/laseconde/develop/first-logo.svg";
import secondLogo from "../../assets/images/laseconde/develop/second-logo.svg";
import thirdLogo from "../../assets/images/laseconde/develop/third-logo.svg";
import fourthLogo from "../../assets/images/laseconde/develop/fourth-logo.svg";
import fifthLogo from "../../assets/images/laseconde/develop/fifth-logo.svg";

import finalMoodboard from "../../assets/images/laseconde/develop/final-moodboard.png";
import figmaHand from "../../assets/images/laseconde/develop/figma-hand.svg";
import primaryLogo from "../../assets/images/laseconde/develop/primary-logo.svg";
import secondaryLogo from "../../assets/images/laseconde/develop/secondary-logo.svg";
import submarkLogo from "../../assets/images/laseconde/develop/submark-logo.svg";

import brandIdentityImage from "../../assets/images/laseconde/develop/brand-identity.svg";

import filteringComponent from "../../assets/images/laseconde/develop/filtering-component.svg";
import productCard from "../../assets/images/laseconde/develop/product-card.svg";

/* Deliver */
import shoppingVideo from "../../assets/images/laseconde/deliver/shopping.mp4";
import sellingVideo from "../../assets/images/laseconde/deliver/selling.mp4";

const laSeconde = {
  slug: "la-seconde",
  project: "LA SECONDE by LA ROUGE",
  number: "06",
  title: "LA SECONDE by LA ROUGE",
  summary:
    "Redesigning LA ROUGE’s secondhand experience through a distinct subbrand and improved buying and selling journeys.",
  heroImage: lasecondeImage,

  overview: [
    { label: "Client", value: "Semester project" },
    { label: "Duration", value: "2 weeks" },
    { label: "Team", value: "2 designers" },
    { label: "My role", value: "UX/UI & Brand Designer" },
    {
      label: "Design tools",
      value: "Figma, FigJam, Photoshop, Illustrator",
    },
    { label: "Technologies", value: "Figma prototype" },
    {
      label: "Methods",
      value: "Brand analysis, competitor review, prototyping",
    },
  ],

  process: [
    {
      title: "Discover",
      items: ["Existing experience", "Brand analysis", "Competitor research"],
    },
    {
      title: "Define",
      items: ["Key insights", "Personas", "Optimization areas"],
    },
    {
      title: "Develop",
      items: ["Visual exploration", "Brand identity", "UX/UI design"],
    },
    {
      title: "Deliver",
      items: ["Interactive prototype", "Buying & selling flows", "Reflection"],
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "LA ROUGE already offers a secondhand concept, but its visual identity and visibility leave room for improvement.",
      ],
      conclusion:
        "The challenge was to create a distinct subbrand that strengthens the secondhand experience while maintaining a clear connection to LA ROUGE.",
    },

    researchApproach: {
      title: "Optimization approach",
      description:
        "We explored LA ROUGE’s existing secondhand experience, brand identity and competitors to identify opportunities for improvement. These insights guided the development of LA SECONDE.",
    },

    competitors: {
      variant: "la-seconde",
      title: "Competitor research",
      description: "We compared Vinted, Tise and Marketplace.",
      items: [
        {
          title: "Vinted",
          description:
            "Vinted inspired clearer pricing, photos and product details.",
        },
        {
          title: "Tise & Marketplace",
          description: "Tise and Marketplace inspired filtering and browsing.",
        },
      ],

      screenshots: [
        {
          title: "Vinted",
          image: vintedScreenshot,
          alt: "Vinted secondhand product listings",
        },
        {
          title: "Tise",
          image: tiseScreenshot,
          alt: "Tise secondhand product listings",
        },
        {
          title: "Marketplace",
          image: marketplaceScreenshot,
          alt: "Facebook Marketplace product listings",
        },
      ],
    },

    performance: {
      title: "Existing secondhand performance",
      description: "LA ROUGE’s secondhand activity, year to date.",
      items: [
        { value: "5,722", label: "Secondhand visitors YTD" },
        { value: "101", label: "Secondhand orders YTD" },
        { value: "68", label: "Items submitted directly YTD" },
        { value: "500+", label: "LA ROUGE listings on Vinted" },
      ],
      conclusion: "Activity alone cannot explain purchasing behaviour.",
    },

    findingsReview: {
      title: "Findings",
      description: "We reviewed visibility, product details and browsing.",
      items: [
        {
          title: "01 Limited visibility & identity",
          observation:
            "Secondhand had limited visibility and visual distinction.",
          implication: "The offer could be easy to overlook.",
          screenshots: [
            {
              title: "LA ROUGE",
              images: [laRougeScreenshot],
            },
            {
              title: "LA ROUGE secondhand",
              images: [laRougeSecondhandScreenshot],
            },
          ],
        },
        {
          title: "02 Missing transparency & trust",
          observation:
            "Price comparisons and photos of flaws were unclear or missing.",
          implication:
            "Buyers had less information to assess value and condition.",
          screenshots: [
            {
              title: "Missing condition and savings",
              images: [conditionScreenshot],
            },
            {
              title: "Missing flaw photos and price comparisons",
              images: [flawsScreenshot],
            },
          ],
        },
        {
          title: "03 Limited product discovery",
          observation:
            "LA ROUGE offered sorting options, but lacked detailed product filters.",
          implication:
            "Limited filtering made it harder to narrow down relevant secondhand pieces.",
          screenshots: [
            {
              title: "LA ROUGE secondhand - Sorting options",
              images: [laRougeSortingScreenshot],
            },
            {
              title: "Vinted - Filtering options",
              images: [vintedFilteringScreenshot],
            },
          ],
        },
      ],
    },
  },

  define: {
    insightsDescription:
      "The research revealed three key insights that shaped the design direction.",

    insights: [
      {
        text: "Limited visibility & identity",
        icon: visibilityIcon,
      },
      {
        text: "Lack of transparency & trust",
        icon: transparencyIcon,
      },
      {
        text: "Limited product discovery",
        icon: discoveryIcon,
      },
    ],

    personas: {
      title: "Personas",
      intro:
        "We developed two personas to represent the different motivations and needs of people selling and buying pre-owned LA ROUGE clothing.",

      items: [
        {
          name: "Christina",
          age: 49,
          description: "The existing LA ROUGE customer",
          image: christinaPersona,

          quote:
            "I have LA ROUGE pieces I no longer wear. I want them to have a second life, but the process should be simple and trustworthy.",

          motivations: [
            "Give unused clothing a new life",
            "Keep the quality she values",
            "Receive fair value for her items",
          ],

          behaviours: [
            "Already owns LA ROUGE clothing",
            "Keeps pieces for several seasons",
          ],

          frustrations: [
            "Unsure how the buy-back works",
            "Unclear value information",
            "Uncertainty about next steps",
          ],

          needs: [
            "Simple selling instructions",
            "Transparent gift-card value",
            "Reassurance throughout the process",
          ],
        },

        {
          name: "Mathilde",
          age: 27,
          description: "The secondhand buyer",
          image: mathildePersona,

          quote:
            "I want to discover timeless LA ROUGE pieces at a better price and feel confident about what I'm buying.",

          motivations: [
            "Discover timeless styles",
            "Shop quality at a lower price",
            "Make more conscious purchases",
          ],

          behaviours: [
            "Browses secondhand fashion",
            "Compares prices and condition",
            "Looks for unique wardrobe pieces",
          ],

          frustrations: [
            "Missing price comparisons",
            "No clear photos of flaws",
            "Condition hidden in listings",
          ],

          needs: [
            "Original vs. resale prices",
            "Clear photos of defects",
            "Condition visible on cards",
          ],
        },
      ],
    },

    optimizationAreas: {
      title: "Selected optimization areas",
      description: "The findings were grouped into three optimization areas.",
      numbered: true,
      items: [
        {
          title: "Visibility & identity",
          description: "Build a distinct identity linked to LA ROUGE.",
        },
        {
          title: "Transparency & trust",
          description: "Show prices, condition and any flaws clearly.",
        },
        {
          title: "Product discovery",
          description:
            "Improve browsing with filters, sorting and condition labels.",
        },
      ],
    },
  },

  develop: {
    visualIdentity: {
      title: "Visual exploration",
      description: "Exploring the identity through moodboards and naming.",

      directions: {
        title: "Exploring three directions",
        description:
          "We explored three visual directions to find the right identity.",
        items: [
          {
            title: "Direction 01",
            image: firstDirection,
          },
          {
            title: "Direction 02",
            image: secondDirection,
          },
          {
            title: "Direction 03",
            image: thirdDirection,
          },
        ],
      },

      naming: {
        title: "Naming & logo exploration",
        description:
          "We explored different names and logo directions before choosing LA SECONDE.",
        items: [
          {
            image: firstLogo,
          },
          {
            image: secondLogo,
          },
          {
            image: thirdLogo,
          },
          {
            image: fourthLogo,
          },
          {
            image: fifthLogo,
          },
        ],
      },
    },

    finalVisualIdentity: {
      title: "Visual identity",
      description: "A distinct identity rooted in LA ROUGE.",

      moodboard: {
        title: "Moodboard",
        description: "Timeless meets expressive.",
        image: {
          src: finalMoodboard,
          alt: "Final moodboard for LA SECONDE",
        },
      },

      colors: {
        title: "Color palette",
        description:
          "While LA ROUGE is known for its red identity, we chose green to give LA SECONDE a distinct look and symbolize new life for pre-owned clothing. Neutral tones maintain a balanced, timeless aesthetic that connects to the main brand.",
        primary: {
          title: "Primary colors",
          values: ["#A6A140", "#383610"],
        },
        secondary: {
          title: "Secondary colors",
          values: ["#FAFAFA", "#F9F4EA", "#DBDBDB", "#767676", "#161313"],
        },
      },

      typography: {
        title: "Typography",
        description:
          "We reused Italiana and Assistant to maintain a connection to LA ROUGE. Figma Hand adds a personal, handwritten feel that reflects the secondhand concept.",

        items: [
          {
            label: "Assistant Light",
            font: "Give clothes a new life",
            fontFamily: "Assistant",
            fontWeight: 300,
          },
          {
            label: "Italiana",
            font: "Give clothes a new life",
            fontFamily: "Italiana",
            fontWeight: 400,
          },
          {
            label: "Assistant Regular",
            font: "Give clothes a new life",
            fontFamily: "Assistant",
            fontWeight: 400,
          },
          {
            label: "Figma Hand",
            font: "Give clothes a new life",
            image: figmaHand,
          },
          {
            label: "Assistant Bold",
            font: "Give clothes a new life",
            fontFamily: "Assistant",
            fontWeight: 700,
          },
        ],
      },

      logos: {
        title: "Logo variations",
        description:
          "We chose LA SECONDE to reflect a second life for clothing. The elegant typography maintains a connection to LA ROUGE, while the handwritten “Secondhand” gives the subbrand its own identity.",

        items: [
          {
            title: "Primary logo",
            image: {
              src: primaryLogo,
              alt: "LA SECONDE primary logo",
            },
          },
          {
            title: "Secondary logo",
            image: {
              src: secondaryLogo,
              alt: "LA SECONDE secondary logo",
            },
          },
          {
            title: "Submark logo",
            image: {
              src: submarkLogo,
              alt: "LA SECONDE LS monogram",
            },
          },
        ],
      },
    },
    brandIdentity: {
      title: "Brand identity",
      description:
        "We embrace imperfection while staying connected to LA ROUGE.",
      subtitle: "Who we want to be",
      text: "We wanted LA SECONDE to feel welcoming and trustworthy, while embracing the imperfections that make pre-owned clothing unique.",
      image: brandIdentityImage,
      imageAlt:
        "LA SECONDE brand values: Welcoming, Trustworthy and Imperfect.",
    },

    productDiscovery: {
      title: "Product discovery & trust",
      description:
        "We designed filtering and product cards to make browsing easier and provide clearer information about pricing and garment condition.",
      items: [
        {
          title: "Filtering component",
          description:
            "Filters help users narrow down products by size, condition, color and other preferences.",
          image: filteringComponent,
          imageAlt: "Filtering options for LA SECONDE secondhand clothing",
        },
        {
          title: "Product card",
          description:
            "Clear condition labels and price comparisons help users assess each item before clicking.",
          image: productCard,
          imageAlt:
            "LA SECONDE product card with condition and price information",
        },
      ],
    },
  },

  deliver: {
    prototype: {
      title: "Final optimized solution",
      description:
        "The final Figma prototype combines LA SECONDE's identity with redesigned buying and selling journeys.",
      links: [
        {
          label: "Open in Figma",
          href: "https://www.figma.com/proto/xxqrFpifkEE0qSSYx8thRR/Case-3?node-id=476-5202&t=d7BgV3OvNgpmaeyh-1&scaling=scale-down&content-scaling=fixed&page-id=146%3A4070&starting-point-node-id=476%3A5202",
        },
        {
          label: "View brand guideline",
          href: "https://www.figma.com/proto/xxqrFpifkEE0qSSYx8thRR/Case-3?node-id=672-5407&t=BK1B70FNu9jrtdWy-1&scaling=scale-down-width&content-scaling=fixed&page-id=41%3A39",
        },
      ],
      layout: "la-seconde",
      items: [
        {
          id: "shopping",
          title: "Shopping secondhand",
          device: "phone",
          presentation: "framed-video",
          media: {
            src: shoppingVideo,
            alt: "Shopping secondhand prototype walkthrough",
          },
        },
        {
          id: "selling",
          title: "Selling secondhand",
          device: "phone",
          presentation: "framed-video",
          media: {
            src: sellingVideo,
            alt: "Selling secondhand prototype walkthrough",
          },
        },
      ],
    },
    reflection: [
      "Clearer product information and filtering can build buyer trust, while a simpler selling journey can benefit sellers and strengthen LA ROUGE’s secondhand concept.",

      "I learned how to translate research findings into concrete UX/UI improvements while balancing a new subbrand identity with an established brand.",

      "The project strengthened my understanding of how visual identity, transparency and product discovery work together to create a more cohesive secondhand shopping experience.",

      "As a next step, I would test the prototype with potential buyers and sellers to evaluate whether the redesigned journeys are intuitive and meet their needs.",
    ],
  },
};

export default laSeconde;
