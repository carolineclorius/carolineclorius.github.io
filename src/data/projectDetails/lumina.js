import luminaHero from "../../assets/images/lumina.svg";

// Discover
import oneOnlineFindingIcon from "../../assets/images/lumina/discover/online1finding.svg";
import twoOnlineFindingIcon from "../../assets/images/lumina/discover/online2finding.svg";
import threeOnlineFindingIcon from "../../assets/images/lumina/discover/online3finding.svg";
import oneFindingIcon from "../../assets/images/lumina/discover/1finding.svg";
import twoFindingIcon from "../../assets/images/lumina/discover/2finding.svg";
import threeFindingIcon from "../../assets/images/lumina/discover/3finding.svg";
import participantsIcon from "../../assets/images/shared/participants.svg";
import timeIcon from "../../assets/images/shared/time.svg";
import agedIcon from "../../assets/images/shared/aged.svg";

//define
// Key insights
import sharedMomentsIcon from "../../assets/images/rumly/1finding.svg";

//Persona
import mariaPersona from "../../assets/images/lumina/define/persona-maria.svg";

// Develop
// Wireframes
import luminaWireframe from "../../assets/images/lumina/develop/wireframes/wireframe.svg";

// Visual identity
import luminaMoodboard from "../../assets/images/lumina/develop/visual-identity/moodboard.svg";

import luminaPrimaryColors from "../../assets/images/lumina/develop/visual-identity/primary-colors.svg";
import luminaSecondaryColors from "../../assets/images/lumina/develop/visual-identity/secondary-colors.svg";

import luminaPrimaryButtons from "../../assets/images/lumina/develop/visual-identity/primary-buttons.svg";
import luminaSecondaryButtons from "../../assets/images/lumina/develop/visual-identity/secondary-buttons.svg";
import luminaInputField from "../../assets/images/lumina/develop/visual-identity/input-field.svg";
import luminaDayNightMode from "../../assets/images/lumina/develop/visual-identity/day-night-mode.svg";

import luminaTopNavIcons from "../../assets/images/lumina/develop/visual-identity/top-nav-icons.svg";
import luminaFolderIcons from "../../assets/images/lumina/develop/visual-identity/folder-icons.svg";
import luminaOtherIcons from "../../assets/images/lumina/develop/visual-identity/other-icons.svg";

import luminaColorRating from "../../assets/images/lumina/develop/visual-identity/color-rating.svg";
import luminaProductCard from "../../assets/images/lumina/develop/visual-identity/product-card.svg";

import luminaGraphicElements from "../../assets/images/lumina/develop/visual-identity/graphic-elements.svg";
import luminaPrimaryLogo from "../../assets/images/lumina/develop/visual-identity/primary-logo.svg";

// Design process
import luminaSketching from "../../assets/images/lumina/develop/design-process/sketching.svg";
import luminaDesignWireframe from "../../assets/images/lumina/develop/design-process/wireframe.svg";
import luminaPrototype from "../../assets/images/lumina/develop/design-process/prototype.svg";

// Testing
import luminaTestingBefore from "../../assets/images/lumina/develop/testing/before.png";
import luminaTestingAfter from "../../assets/images/lumina/develop/testing/after.png";

const lumina = {
  slug: "lumina-audio",
  number: "03",
  title: "Lumina Audio",
  heroImage: luminaHero,
  summary:
    "A product landing page designed to showcase and sell the Lumina One speaker.",

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
      value: "4 designers",
    },
    {
      label: "My role",
      value:
        "UX Research, UX/UI Design, Interactive Prototyping & Front-end Development",
    },
    {
      label: "Design tools",
      value: "Figma and FigJam",
    },
    {
      label: "Technologies",
      value: "Visual Studio Code",
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
        "Online survey",
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
      items: ["Prototyping", "Coded prototype", "Mockup"],
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Portable speakers are often presented through technical specifications, while the lifestyle and moments they are part of receive less attention.",
      ],
      conclusion:
        "This project explores how Lumina One can be presented as both a product and part of a social, music-driven lifestyle.",
    },

    researchApproach: {
      title: "Research approach",
      description:
        "To understand how young adults experience music and what they value in a portable speaker, we combined an online survey with semi-structured interviews. The survey identified broader patterns, while the interviews explored the everyday behaviours and motivations behind them.",
    },

    onlineSurvey: {
      title: "Online survey",

      description: "Based on an online survey with 23 respondents.",

      facts: [
        {
          icon: participantsIcon,
          value: "23 respondents",
        },
        {
          icon: timeIcon,
          value: "5-10 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 20-29",
        },
      ],

      findings: [
        {
          icon: oneOnlineFindingIcon,
          title: "Finding 1",

          heading: "Music creates shared moments",

          statistic: "91% listen to music with friends",

          summary:
            "Music was strongly connected to shared moments, particularly with friends.",

          quotes: [
            {
              text: "It sounds better on a speaker when you listen to music with others",
            },
          ],
        },

        {
          icon: twoOnlineFindingIcon,
          title: "Finding 2",

          heading: "Quality and design drive interest",

          statistic: "91% prioritised quality and 83% valued design",

          summary:
            "Users expected strong performance without compromising on appearance.",

          quotes: [
            {
              text: "Good quality and beautiful design.",
            },
          ],
        },

        {
          icon: threeOnlineFindingIcon,
          title: "Finding 3",

          heading: "Portability shapes product value",

          statistic: "87% expected a premium speaker to be portable",

          summary:
            "Users valued speakers that could move easily between everyday and social settings.",

          quotes: [
            {
              text: "Portable, small, but with good sound",
            },
          ],
        },
      ],
    },

    interviews: {
      title: "Semi-structured interviews",

      description:
        "We conducted semi-structured interviews to explore how young adults experience music in everyday life and social settings, and what they value in a portable speaker.",

      facts: [
        {
          icon: participantsIcon,
          value: "6 participants",
        },
        {
          icon: timeIcon,
          value: "15-20 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 20-29",
        },
      ],

      findings: [
        {
          icon: oneFindingIcon,
          title: "Finding 1",

          heading: "Music shifts between personal and social moments",

          summary:
            "Music moved between personal everyday routines and shared social experiences, showing that the speaker needed to feel relevant across different moments.",

          quotes: [
            {
              text: "When I’m alone, I can really dive into the music. With others, it becomes more about the moment",
              participant: "Participant 2",
            },
          ],
        },

        {
          icon: twoFindingIcon,
          title: "Finding 2",

          heading: "The speaker is part of the home",

          summary:
            "Participants saw the speaker as part of their surroundings, not something to hide away after use. Its visual expression therefore mattered alongside its function.",

          quotes: [
            {
              text: "If it’s going to be visible in my home, I want it to look good too",
              participant: "Participant 1",
            },
          ],
        },

        {
          icon: threeFindingIcon,
          title: "Finding 3",

          heading: "The speaker needs to move with everyday life",

          summary:
            "Portability made the speaker relevant across changing settings, from everyday routines at home to shared moments with others.",

          quotes: [
            {
              text: "I want something I can move around easily without giving up good sound",
              participant: "Participant 4",
            },
          ],
        },
      ],
    },
  },

  define: {
    insights: [
      {
        icon: sharedMomentsIcon,
        text: "Music creates shared moments",
      },
      {
        icon: twoOnlineFindingIcon,
        text: "Performance and aesthetics matter equally",
      },
      {
        icon: threeFindingIcon,
        text: "Portability extends product relevance",
      },
    ],

    personas: {
      title: "Persona",
      intro:
        "The persona bring the key user needs and behaviours together into representative user profiles.",
      items: [
        {
          image: mariaPersona,
          name: "Maria",
          age: 25,
          description:
            "Looking for a portable speaker that fits her social lifestyle",
          details: [
            {
              icon: "home",
              text: "Student living with friends",
            },
          ],

          quote:
            "I want a speaker that looks good in my home and makes it easy to bring music into the moments I share with others.",

          motivations: [
            "Bring music into social moments",
            "Find a speaker that fits her personal style",
            "Choose quality that lasts",
          ],

          behaviours: [
            "Researches products before buying",
            "Looks for recommendations and reviews",
            "Uses music throughout her everyday life",
          ],

          frustrations: [
            "Technical information can feel overwhelming",
            "Difficult to judge quality online",
            "Hard to imagine how a speaker fits into everyday life",
          ],

          needs: [
            "Clear product and quality information",
            "A portable and visually appealing design",
            "An inspiring and easy-to-explore experience",
          ],
        },
      ],
    },

    questions: [
      "How might we present a portable speaker as part of the user’s lifestyle rather than just a product?",
      "How might we create a digital experience that feels relevant across different moods and moments?",
      "How might we make the speaker’s features and qualities easy to explore without overwhelming the user?",
    ],
    requirements: [
      {
        title: "Relevant across everyday moments",
        description:
          "Present the speaker as part of an active and social lifestyle.",
      },
      {
        title: "Social and experience-driven",
        description:
          "Connect the product to shared moments, music and social experiences.",
      },
      {
        title: "Clear product presentation",
        description:
          "Make features, quality and product options easy to understand.",
      },
      {
        title: "Flexible day and night experience",
        description:
          "Allow users to switch between visual expressions that reflect different moods and moments.",
      },
    ],
  },

  develop: {
    wireframes: {
      title: "Wireframes",
      description:
        "Low-fidelity wireframes were used to explore layouts, user flows and screen hierarchy before moving into visual design.",

      groups: [
        {
          title: "Desktop",

          images: [
            {
              src: luminaWireframe,
              alt: "Low-fidelity wireframe of the Lumina Audio landing page",
              caption: "Landing page",
            },
          ],
        },
      ],
    },

    visualIdentity: {
      title: "Visual identity",
      description:
        "The visual identity was designed to feel urban, social and dynamic, reflecting how music moves between everyday moments and shared experiences.",

      moodboard: {
        title: "Moodboard",

        image: {
          src: luminaMoodboard,
          alt: "Lumina Audio moodboard expressing an urban, social and dynamic visual direction",
        },
      },

      typography: {
        title: "Typography",

        items: [
          {
            label: "Heading",
            font: "JetBrains Mono",
            description:
              "Adds a modern and distinctive feel to the visual identity.",
          },
          {
            label: "Body",
            font: "Jura",
            description:
              "Keeps body text clear and easy to read throughout the experience.",
          },
        ],
      },

      colors: {
        primary: {
          title: "Primary colors",

          image: {
            src: luminaPrimaryColors,
            alt: "Lumina Audio primary color palette",
          },
        },

        secondary: {
          title: "Secondary colors",

          image: {
            src: luminaSecondaryColors,
            alt: "Lumina Audio secondary color palette",
          },
        },
      },

      uiComponents: {
        title: "UI components",

        items: [
          {
            title: "Primary button",

            image: {
              src: luminaPrimaryButtons,
              alt: "Lumina Audio primary button styles",
            },
          },
          {
            title: "Secondary buttons",

            image: {
              src: luminaSecondaryButtons,
              alt: "Lumina Audio secondary button styles",
            },
          },
          {
            title: "Input field",

            image: {
              src: luminaInputField,
              alt: "Lumina Audio search input field",
            },
          },
          {
            title: "Day/night mode swipe",

            image: {
              src: luminaDayNightMode,
              alt: "Lumina Audio day and night mode controls",
            },
          },
          {
            title: "Icon style",

            items: [
              {
                title: "Top-nav",

                image: {
                  src: luminaTopNavIcons,
                  alt: "Lumina Audio top navigation icons",
                },
              },
              {
                title: "Folder",

                image: {
                  src: luminaFolderIcons,
                  alt: "Lumina Audio feature icons",
                },
              },
              {
                title: "Other examples",

                image: {
                  src: luminaOtherIcons,
                  alt: "Additional Lumina Audio interface icons",
                },
              },
            ],
          },
          {
            title: "Color and rating indications",

            image: {
              src: luminaColorRating,
              alt: "Lumina Audio color selectors and rating indicators",
            },
          },
          {
            title: "Product card",

            image: {
              src: luminaProductCard,
              alt: "Lumina Audio product card component",
            },
          },
        ],
      },

      graphicElements: {
        title: "Graphic elements",
        description:
          "Graphic elements used across the landing page to strengthen the musical identity and add subtle brand details.",

        image: {
          src: luminaGraphicElements,
          alt: "Musical graphic elements from the Lumina Audio identity",
        },
      },

      logos: {
        title: "Logo",

        items: [
          {
            title: "Primary logo",
            description: "The complete logo used as the main brand identifier.",

            image: {
              src: luminaPrimaryLogo,
              alt: "Lumina Audio primary logo",
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
          image: luminaSketching,
          alt: "Initial hand-drawn sketch of the Lumina Audio landing page",
        },
        {
          title: "Wireframes",
          image: luminaDesignWireframe,
          alt: "Low-fidelity wireframe of the Lumina Audio landing page",
        },
        {
          title: "Prototyping",
          image: luminaPrototype,
          alt: "Finished Lumina Audio landing page design",
        },
      ],
    },

    testing: {
      title: "Testing",
      description:
        "We conducted multiple Think Aloud tests with different participants throughout the design process.",

      feedback: [
        "The purpose of the gift section was unclear to users.",
        "It felt disconnected from the rest of the page and interrupted the overall experience.",
        "One participant felt that the section looked more like advertising than relevant product content.",
      ],

      changes: [
        "Removed the gift section from the final design.",
        "Simplified the page by removing content that did not support the user journey.",
        "Improved the overall flow and created a more focused product experience.",
      ],

      quote:
        "I don’t think it makes sense, and it feels like an advertisement.",

      before: {
        src: luminaTestingBefore,
        alt: "Lumina Audio landing page before usability testing with the gift section included",
      },

      after: {
        src: luminaTestingAfter,
        alt: "Lumina Audio landing page after usability testing with the gift section removed",
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

export default lumina;
