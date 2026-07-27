import luminaHero from "../../assets/images/lumina.svg";
import oneOnlineFindingIcon from "../../assets/images/lumina/online1finding.svg";
import twoOnlineFindingIcon from "../../assets/images/lumina/online2finding.svg";
import threeOnlineFindingIcon from "../../assets/images/lumina/online3finding.svg";
import oneFindingIcon from "../../assets/images/lumina/1finding.svg";
import twoFindingIcon from "../../assets/images/lumina/2finding.svg";
import threeFindingIcon from "../../assets/images/lumina/3finding.svg";
import participantsIcon from "../../assets/images/shared/participants.svg";
import timeIcon from "../../assets/images/shared/time.svg";
import agedIcon from "../../assets/images/shared/aged.svg";

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
      paragraphs:
        "Portable speakers are often presented through technical specifications, while the lifestyle and moments they are part of receive less attention.",
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

      description: "Based on seven semi-structured interviews.",

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

          summary: [
            "91% listen to music with friends",
            "Music was strongly connected to shared moments, particularly with friends.",
          ],

          quotes: {
            text: "It sounds better on a speaker when you listen to music with others",
          },
        },

        {
          icon: twoOnlineFindingIcon,
          title: "Finding 2",

          heading: "Quality and design drive interest",

          summary: [
            "91% prioritised quality and 83% valued design",
            "Users expected strong performance without compromising on appearance.",
          ],

          quotes: {
            text: "Good quality and beautiful design.",
          },
        },

        {
          icon: threeOnlineFindingIcon,
          title: "Finding 3",

          heading: "Portability shapes product value",

          summary: [
            "87% expected a premium speaker to be portable",
            "Users valued speakers that could move easily between everyday and social settings.",
          ],

          quotes: {
            text: "Portable, small, but with good sound",
          },
        },
      ],
    },

    SemiStructuredInterviews: {
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
          value: "15–20 min.",
        },
        {
          icon: agedIcon,
          value: "Aged 20–29",
        },
      ],

      findings: [
        {
          icon: oneFindingIcon,
          title: "Finding 1",

          heading: "Music shifts between personal and social moments",

          summary:
            "Music moved between personal everyday routines and shared social experiences, showing that the speaker needed to feel relevant across different moments.",

          quotes: {
            text: "When I’m alone, I can really dive into the music. With others, it becomes more about the moment",
            participant: "Participant 2",
          },
        },

        {
          icon: twoFindingIcon,
          title: "Finding 2",

          heading: "The speaker is part of the home",

          summary:
            "Participants saw the speaker as part of their surroundings, not something to hide away after use. Its visual expression therefore mattered alongside its function.",

          quotes: {
            text: "If it’s going to be visible in my home, I want it to look good too",
            participant: "Participant 1",
          },
        },

        {
          icon: threeFindingIcon,
          title: "Finding 3",

          heading: "Sustainability vs. aesthetics",

          summary:
            "Portability made the speaker relevant across changing settings, from everyday routines at home to shared moments with others.",

          quotes: {
            text: "I want something I can move around easily without giving up good sound",
            participant: "Participant 4",
          },
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

export default lumina;
