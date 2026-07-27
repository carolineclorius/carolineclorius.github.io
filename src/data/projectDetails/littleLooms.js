import littleLoomsHero from "../../assets/images/littlelooms.svg";
import economistLogo from "../../assets/images/littlelooms/economist-logo.svg";
import statisticsLogo from "../../assets/images/littlelooms/statistics-logo.png";
import oneFindingIcon from "../../assets/images/littlelooms/1finding.svg";
import twoFindingIcon from "../../assets/images/littlelooms/2finding.svg";
import threeFindingIcon from "../../assets/images/littlelooms/3finding.svg";
import fourFindingIcon from "../../assets/images/littlelooms/4finding.svg";
import participantsIcon from "../../assets/images/shared/participants.svg";
import timeIcon from "../../assets/images/shared/time.svg";
import agedIcon from "../../assets/images/shared/aged.svg";

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
          value: "15–20 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 25–40",
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
    wireframes: [],
    visualIdentity: {},
    graphicElements: [],
    testing: {},
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
