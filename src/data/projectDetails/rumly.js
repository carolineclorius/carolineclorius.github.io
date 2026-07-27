import rumlyHero from "../../assets/images/rumly.svg";
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

const rumly = {
  slug: "rumly",
  number: "01",
  title: "Rumly",
  heroImage: rumlyHero,
  summary:
    "A roommate-matching app that helps users find compatible roommates through a personalised quiz.",

  overview: [
    {
      label: "Client",
      value: "Semester project",
    },
    {
      label: "Duration",
      value: "4 weeks",
      highlight: true,
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
        "Semi-structured interviews",
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
      items: ["Prototyping", "Coded prototype", "Animations", "Mockup"],
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
        "This project rethinks roommate search by putting compatibility first.",
    },

    researchApproach: {
      title: "Research approach",
      description:
        "We combined secondary research with primary research to identify key patterns in shopping behaviour.",
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

      description: "Based on a semi-structured interview",

      facts: [
        {
          icon: participantsIcon,
          value: "6 participants",
        },
        {
          icon: timeIcon,
          value: "15–20 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 18–30",
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
              participant: "Participants  4 & 6)",
            },
            {
              text: "Finding the right roommate matters more than finding the cheapest place.",
              participant: "Participant 1",
            },
          ],
        },

        {
          icon: twoFindingIcon,
          title: "Finding 2",

          heading: "Users rely on Facebook despite a poor experience",

          summary:
            "Despite describing Facebook as messy and time-consuming, every participant said they would still use it to find roommates.",

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
            "Nearly every participant believed a compatibility score would make choosing a roommate easier.",

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
      "Compatibility determines the final decision",
      "First impressions happen instantly",
      "Current platforms create cognitive overload",
      "People want long-term compatibility",
    ],

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
    ],
  },

  develop: {
    wireframes: [],
    visualIdentity: {},
    testing: {},
  },

  deliver: {
    prototype: {},
    codedSolution: {},
    animations: [],
    reflection: [
      "Research showed me that roommate matching is not only about practical compatibility, but also about trust, personality and everyday habits.",
      "Translating user needs into the visual identity helped me understand how tone, colour and interaction design can make a sensitive process feel more reassuring.",
      "Designing the matching experience taught me to balance detailed information with a simple and approachable user journey.",
    ],
  },
};

export default rumly;
