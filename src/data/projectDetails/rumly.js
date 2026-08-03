import rumlyHero from "../../assets/images/rumly.svg";

//discover
import facebookLogo from "../../assets/images/rumly/facebook.svg";
import boligPortalLogo from "../../assets/images/rumly/boligportal.svg";
import roomiiLogo from "../../assets/images/rumly/roomii.svg";
import oneFindingIcon from "../../assets/images/rumly/1finding.svg";
import twoFindingIcon from "../../assets/images/rumly/2finding.svg";
import threeFindingIcon from "../../assets/images/rumly/3finding.svg";
import fourFindingIcon from "../../assets/images/rumly/4finding.svg";
import participantsIcon from "../../assets/images/shared/participants.svg";
import timeIcon from "../../assets/images/shared/time.svg";
import agedIcon from "../../assets/images/shared/aged.svg";

//define
//Key insigts
import cognitiveOverloadIcon from "../../assets/images/rumly/define/brain.svg";

//persona
import emmaPersona from "../../assets/images/rumly/define/persona-emma.svg";
import jonasPersona from "../../assets/images/rumly/define/persona-jonas.svg";

// develop
//Wireframes
import preboardingWireframes from "../../assets/images/rumly/preboarding.svg";
import signUpWireframes from "../../assets/images/rumly/sign-up.svg";
import personalisationWireframes from "../../assets/images/rumly/personalisation.svg";
import inAppWireframes from "../../assets/images/rumly/in-app.svg";

//Visual identity
import rumlyMoodboard from "../../assets/images/rumly/moodboard.svg";
import rumlyPrimaryColors from "../../assets/images/rumly/primary-colors.svg";
import rumlySecondaryColors from "../../assets/images/rumly/secondary-colors.svg";

import rumlyPrimaryButton from "../../assets/images/rumly/primary-button.svg";
import rumlySecondaryButtons from "../../assets/images/rumly/secondary-buttons.svg";
import rumlyInputField from "../../assets/images/rumly/input-field.svg";
import rumlyMatchScore from "../../assets/images/rumly/match-score.svg";
import rumlyTopNavIcons from "../../assets/images/rumly/top-nav.svg";
import rumlyFilteringIcons from "../../assets/images/rumly/filtering.svg";
import rumlyBottomNavIcons from "../../assets/images/rumly/bot-nav.svg";
import rumlyProfileCard from "../../assets/images/rumly/profile-card.svg";

import rumlyPrimaryLogo from "../../assets/images/rumly/primary-logo.svg";
import rumlySecondaryLogo from "../../assets/images/rumly/secondary-logo.svg";
import rumlySubmarkLogo from "../../assets/images/rumly/submark-logo.svg";
import rumlyFavicon from "../../assets/images/rumly/favicon.svg";

//From sketching til finished design
import rumlySketching from "../../assets/images/rumly/sketching.svg";
import rumlyPrototypeWireframe from "../../assets/images/rumly/wireframe.svg";
import rumlyPrototype from "../../assets/images/rumly/prototyping.svg";

//Testing
// Testing
import rumlyTestingBefore from "../../assets/images/rumly/testing-before.svg";
import rumlyTestingAfter from "../../assets/images/rumly/testing-after.svg";

//Deliver
import rumlyFigmaVideo from "../../assets/images/rumly/deliver/rumly-figma.mov";
import rumlyCodedVideo from "../../assets/images/rumly/deliver/rumly-figma.mov";
import rumlyMockup from "../../assets/images/rumly/deliver/mockup.svg";

const rumly = {
  project: "rumly",
  slug: "rumly",
  number: "01",
  title: "Rumly",
  heroImage: rumlyHero,
  summary:
    "A roomie app that combines a compatibility quiz, detailed profiles and matching to help users find compatible roomies.",

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
      value: "Figma, FigJam, Jitter, GIFs and Lottie",
    },
    {
      label: "Technologies",
      value: "React, Supabase and Visual Studio Code",
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
        "Competitor analysis",
        "Primary research",
      ],
    },
    {
      title: "Define",
      items: ["Insights", "Personas", "HMW questions", "Design requirements"],
    },
    {
      title: "Develop",
      items: ["Wireframes", "Visual identity", "Design process", "Testing"],
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
        "Most roomie searches happen through Facebook groups or housing portals, where housing is prioritised over compatibility.",
        "As a result, users spend time sorting through irrelevant posts and making important decisions with limited information.",
      ],
      conclusion:
        "This project rethinks roomie search by putting compatibility first.",
    },

    researchApproach: {
      title: "Research approach",
      description:
        "We explored existing solutions and conducted semi-structured interviews to understand users’ needs and decision-making.",
    },

    competitors: {
      title: "Competitors",

      items: [
        {
          logo: facebookLogo,
          title: "Facebook groups",
          description: "Many posts make it overwhelming and time-consuming.",
        },
        {
          logo: boligPortalLogo,
          title: "BoligPortal",
          description:
            "Large selection, but slow responses and no matching feature.",
        },
        {
          logo: roomiiLogo,
          title: "Roomii",
          description: "Many profiles, but many users are inactive.",
        },
      ],
    },

    primaryResearch: {
      title: "Primary research",

      description: "Based on semi-structured interviews",

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
          value: "Aged 18-30",
        },
      ],

      findings: [
        {
          icon: oneFindingIcon,
          title: "Finding 1",

          heading: "Compatibility matters more than price",

          summary:
            "Although budget sets the boundaries, interviewees consistently prioritised compatibility over finding the cheapest option.",

          quotes: [
            {
              text: "I'd rather pay a higher rent if it meant living with someone I genuinely get along with.",
              participant: "Participants 4 and 6",
            },
            {
              text: "Finding the right roomie matters more than finding the cheapest place.",
              participant: "Participant 1",
            },
          ],
        },

        {
          icon: twoFindingIcon,
          title: "Finding 2",

          heading: "Users rely on Facebook despite a poor experience",

          summary:
            "Despite describing Facebook as messy and time-consuming, every participant said they would still use it to find roomies.",

          quotes: [
            {
              text: "I'd still use Facebook, even though I don't really like it.",
              participant: "Participant 3",
            },
            {
              text: "I'd probably look for a Facebook group.",
              participant: "Participant 6",
            },
            {
              text: "I'd probably make a post on Facebook.",
              participant: "Participant 5",
            },
          ],
        },

        {
          icon: threeFindingIcon,
          title: "Finding 3",

          heading: "First impressions happen in seconds",

          summary:
            "Users make fast decisions based on profile photos and short descriptions before reading more.",

          quotes: [
            {
              text: "I look at the photo first, then read the bio.",
              participant: "Participant 1",
            },
            {
              text: "The profile picture comes first.",
              participant: "Participant 3",
            },
            {
              text: "I'd look at the photo first.",
              participant: "Participant 6",
            },
          ],
        },

        {
          icon: fourFindingIcon,
          title: "Finding 4",

          heading: "Compatibility scores increase confidence",

          summary:
            "Nearly every participant believed a compatibility score would make choosing a roomie easier.",

          quotes: [
            {
              text: "It would make the process easier.",
              participant: "Participant 3",
            },
            {
              text: "That would be really useful.",
              participant: "Participant 5",
            },
            {
              text: "It would definitely make the process easier.",
              participant: "Participant 6",
            },
          ],
        },
      ],
    },
  },

  define: {
    insights: [
      {
        icon: oneFindingIcon,
        text: "Compatibility determines the final decision",
      },
      {
        icon: threeFindingIcon,
        text: "First impressions happen instantly",
      },
      {
        icon: cognitiveOverloadIcon,
        text: "Current platforms create cognitive overload",
      },
      {
        icon: fourFindingIcon,
        text: "People want long-term compatibility",
      },
    ],

    personas: {
      title: "Personas",
      intro:
        "The personas bring these insights together into two distinct user journeys.",
      items: [
        {
          image: emmaPersona,
          name: "Emma",
          age: 20,
          description: "Looking for roomies and a home",
          details: [
            {
              icon: "home",
              text: "First time living away from home",
            },
          ],

          quote:
            "I want to find people I genuinely fit with — and a home where I can feel comfortable from day one",

          motivations: [
            "Find a welcoming shared home",
            "Feel safe and comfortable with future roomies",
            "Build a social life in a new city",
          ],

          behaviours: [
            "Looks for shared housing online",
            "Judges potentiel roomies from photos and descriptions",
            "Tries to understand who she would be living with",
          ],

          frustrations: [
            "Hard to judge compatibility",
            "Unclear expectations in listings",
            "Overwhelming Facebook groups",
          ],

          needs: [
            "Insight into everyday life and atmosphere",
            "Matching based on habits and preferences",
            "An easy way to introduce herself",
          ],
        },
        {
          image: jonasPersona,
          name: "Jonas",
          age: 26,
          description: "Looking for roomies for an existing home",
          details: [
            {
              icon: "home",
              text: "Lives in an established shared home",
            },
          ],

          quote:
            "I don’t just need someone to fill a room — I want to find people who fit into the way we live",

          motivations: [
            "Find a compatible new roomie",
            "Maintain a good atmosphere in the home",
            "Make a confident and informed choice",
          ],

          behaviours: [
            "Creates and shares housing listings online",
            "Evaluates applicants through profiles and messages",
            "Discusses potential roomies with the household",
          ],

          frustrations: [
            "Applications provide too little relevant information",
            "Difficult to compare potential roomies",
            "Time-consuming communication with unsuitable applicants",
          ],

          needs: [
            "Clear information about habits and preferences",
            "A simple way to compare potential roomies",
            "Confidence that a person will fit into the household",
          ],
        },
      ],
    },

    questions: [
      "How might we help users evaluate compatibility before they contact each other?",
      "How might we help users form an honest first impression without information overload?",
      "How might we support both users looking for roomies and a home and those looking only for roomies?",
    ],

    requirements: [
      {
        title: "Smart matchmaking",
        description: "Match users based on lifestyle, habits and values.",
      },
      {
        title: "Advanced filtering",
        description: "Filter by price, location and preferences.",
      },
      {
        title: "Structured profiles",
        description: "Present relevant information in a clear format.",
      },
      {
        title: "Easy communication",
        description: "Enable quick contact after the connection is made.",
      },
      {
        title: "Support two user journeys",
        description: "Support both roomie-only and housing + roomie journeys.",
      },
    ],
  },

  develop: {
    wireframes: {
      title: "Wireframes",
      description:
        "Low-fidelity wireframes were used to explore layouts, user flows, and screen hierarchy before moving into visual design.",

      groups: [
        {
          title: "Onboarding",

          images: [
            {
              src: preboardingWireframes,
              alt: "Rumly pre-boarding wireframes",
              caption: "Pre-boarding",
            },
            {
              src: signUpWireframes,
              alt: "Rumly sign-up wireframes",
              caption: "Sign-up",
            },
            {
              src: personalisationWireframes,
              alt: "Rumly personalisation wireframes",
              caption: "Personalisation",
            },
          ],
        },

        {
          title: "In-app",

          images: [
            {
              src: inAppWireframes,
              alt: "Rumly in-app wireframes",
              caption: "In-app",
            },
          ],
        },
      ],
    },

    visualIdentity: {
      title: "Visual identity",
      description:
        "The visual identity was designed to feel reassuring, friendly and social while creating a simple and welcoming user experience.",

      moodboard: {
        title: "Moodboard",
        image: {
          src: rumlyMoodboard,
          alt: "Rumly moodboard expressing a reassuring, friendly and social visual direction",
        },
      },

      typography: {
        title: "Typography",

        items: [
          {
            label: "Heading",
            font: "Otomanopee One",
            fontFamily: '"Otomanopee One", sans-serif',
            description:
              "Adds a friendly and approachable feel to the visual identity.",
          },
          {
            label: "Body",
            font: "Poppins",
            fontFamily: '"Poppins", sans-serif',
            description:
              "Keeps information clear and easy to scan throughout the user journey.",
          },
        ],
      },

      colors: {
        primary: {
          title: "Primary colors",
          image: {
            src: rumlyPrimaryColors,
            alt: "Rumly primary color palette",
          },
        },

        secondary: {
          title: "Secondary colors",
          image: {
            src: rumlySecondaryColors,
            alt: "Rumly secondary color palette",
          },
        },
      },

      uiComponents: {
        title: "UI components",

        items: [
          {
            title: "Primary button",
            image: {
              src: rumlyPrimaryButton,
              alt: "Rumly primary button",
            },
          },
          {
            title: "Secondary buttons",
            image: {
              src: rumlySecondaryButtons,
              alt: "Rumly secondary buttons",
            },
          },
          {
            title: "Input field",
            image: {
              src: rumlyInputField,
              alt: "Rumly message input field",
            },
          },
          {
            title: "Match score",
            image: {
              src: rumlyMatchScore,
              alt: "Rumly compatibility match score component",
            },
          },
          {
            title: "Icon style",
            items: [
              {
                title: "Top-nav",
                layout: "top-nav",
                image: {
                  src: rumlyTopNavIcons,
                  alt: "Rumly top navigation icons",
                },
              },
              {
                title: "Filtering",
                layout: "filtering",
                image: {
                  src: rumlyFilteringIcons,
                  alt: "Rumly filtering icon",
                },
              },
              {
                title: "Bot-nav",
                layout: "bottom-nav",
                image: {
                  src: rumlyBottomNavIcons,
                  alt: "Rumly bottom navigation icons",
                },
              },
            ],
          },
          {
            title: "Profile card",
            image: {
              src: rumlyProfileCard,
              alt: "Rumly roommate profile card",
            },
          },
        ],
      },

      logos: {
        title: "Logo variations",

        items: [
          {
            title: "Primary logo",
            description:
              "The complete logo used for brand communication and larger layouts.",
            image: {
              src: rumlyPrimaryLogo,
              alt: "Rumly primary logo",
            },
          },
          {
            title: "Secondary logo",
            description:
              "The logo mark used in onboarding and smaller interface elements.",
            image: {
              src: rumlySecondaryLogo,
              alt: "Rumly secondary logo",
            },
          },
          {
            title: "Submark logo",
            description:
              "The wordmark used when a cleaner and more minimal look is needed.",
            image: {
              src: rumlySubmarkLogo,
              alt: "Rumly submark logo",
            },
          },
          {
            title: "Favicon",
            description:
              "The icon used as the app icon, favicon and in small-scale branding.",
            image: {
              src: rumlyFavicon,
              alt: "Rumly favicon",
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
          image: rumlySketching,
          alt: "Rumly sketch",
        },
        {
          title: "Wireframes",
          image: rumlyPrototypeWireframe,
          alt: "Rumly wireframe",
        },
        {
          title: "Prototyping",
          image: rumlyPrototype,
          alt: "Rumly prototype",
        },
      ],
    },

    testing: {
      title: "Testing",
      description:
        "We conducted multiple Think Aloud tests with different participants throughout the design process.",

      feedback: [
        "Users wanted to connect with potential roomies faster and more easily.",
        "Users expected the connect button to be visible directly on each profile card.",
      ],

      changes: [
        "Added a connect button directly to each profile card.",
        "Reduced the number of steps required to connect.",
        "Made the primary action more visible and accessible.",
      ],

      imageSize: "small",

      before: {
        src: rumlyTestingBefore,
        alt: "Rumly profile cards before usability testing",
      },

      after: {
        src: rumlyTestingAfter,
        alt: "Rumly profile cards after usability testing with visible Connect buttons",
      },
    },
  },

  deliver: {
    prototype: {
      title: "High fidelity and coded implementation",
      description:
        "Compare the final Figma prototype with the coded implementation.",

      items: [
        {
          id: "figma",
          title: "High fidelity - Figma",
          device: "phone",
          presentation: "framed-video",

          media: {
            type: "video",
            src: rumlyFigmaVideo,
            alt: "Rumly high fidelity prototype",
          },

          link: {
            label: "Open in Figma",
            href: "https://www.figma.com/proto/yiLh5FD1vqunvvlJpx0qGb/Webapp-Eksamensprojekt?node-id=1109-3265&t=IwatLmBI1ZEXqVR3-1&scaling=scale-down&content-scaling=fixed&page-id=51%3A30&starting-point-node-id=1109%3A3265",
          },
        },

        {
          id: "coded",
          title: "Coded implementation",
          device: "phone",
          presentation: "framed-video",

          media: {
            type: "video",
            src: rumlyCodedVideo,
            alt: "Rumly coded implementation",
          },

          link: {
            label: "Open programmed solution",
            href: "https://cecilieva.github.io/webapp-eksamensprojekt/?fbclid=IwY2xjawSLnOpleHRuA2FlbQIxMABicmlkETFqUmRsYXFlT0VERHZvNk12c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuT8ItRezfG7sRZd69HAPqAKU9KtvDzLQ1C7KVUlzSWXr1GEAGMMidK9Y-B-_aem_9ed94Kho79SAPk9EWKdtCQ",
          },
        },
      ],
    },

    mockup: {
      title: "Real-life mockup",
      description:
        "A campaign poster designed to introduce Rumly in a public space and help potential users understand how the app connects compatible roomies.",
      image: rumlyMockup,
      alt: "Rumly campaign poster displayed at a bus stop",
    },

    reflection: [
      "Research showed me that roomie matching is not only about practical compatibility, but also about trust, personality and everyday habits.",
      "Translating user needs into the visual identity helped me understand how tone, colour and interaction design can make a sensitive process feel more reassuring.",
      "Designing the matching experience taught me to balance detailed information with a simple and approachable user journey.",
    ],
  },
};

export default rumly;
