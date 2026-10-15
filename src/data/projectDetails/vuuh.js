import vuuhImage from "../../assets/images/vuuh.svg";

/* Discover */
import participantsIcon from "../../assets/images/shared/participants.svg";
import amountIcon from "../../assets/images/shared/amount.svg";
import prioritizedIcon from "../../assets/images/shared/prioritized.svg";

import transitionIcon from "../../assets/images/shared/transition.svg";
import checkmarkIcon from "../../assets/images/shared/checkmark.svg";
import circleArrowIcon from "../../assets/images/shared/circle-arrow.svg";
import warningIcon from "../../assets/images/mellemrum/define/finding-3.svg";

import installation1 from "../../assets/images/vuuh/discover/installation-1.png";
import installation2 from "../../assets/images/vuuh/discover/installation-2.png";
import installation3 from "../../assets/images/vuuh/discover/installation-3.png";

import connectionTrial1 from "../../assets/images/vuuh/discover/connection-trial-1.png";
import connectionTrial2 from "../../assets/images/vuuh/discover/connection-trial-2.png";
import connectionTrial3 from "../../assets/images/vuuh/discover/connection-trial-3.png";

import successImage from "../../assets/images/vuuh/discover/success.png";

import connection1 from "../../assets/images/vuuh/discover/connection-1.png";
import connection2 from "../../assets/images/vuuh/discover/connection-2.png";

import ordersImage from "../../assets/images/vuuh/discover/orders.png";

/* Define */
import overviewIcon from "../../assets/images/vuuh/define/lack-of-overview.svg";
import feedbackIcon from "../../assets/images/mellemrum/define/finding-2.svg";
import systemStatusIcon from "../../assets/images/vuuh/define/unclear-system-status.svg";

import personaImage from "../../assets/images/vuuh/define/persona-maria.svg";

/* Develop */
/* Images */
import vuuhInstallationBefore from "../../assets/images/vuuh/develop/installation-before.png";
import vuuhShopifyBefore1 from "../../assets/images/vuuh/develop/shopify-before-1.png";
import vuuhShopifyBefore2 from "../../assets/images/vuuh/develop/shopify-before-2.png";
import vuuhDashboardBefore from "../../assets/images/vuuh/develop/dashboard-before.png";

/* Videos */
import vuuhInstallationAfter from "../../assets/images/vuuh/develop/installation-after.mp4";
import vuuhShopifyAfter from "../../assets/images/vuuh/develop/shopify-after.mp4";
import vuuhDashboardAfter from "../../assets/images/vuuh/develop/dashboard-after.mp4";

/* Deliver */
import finalSolutionVideo from "../../assets/images/vuuh/deliver/final-solution.mp4";

const vuuh = {
  slug: "vuuh",
  project: "Vuuh",

  number: "05",
  title: "Vuuh.",
  heroImage: vuuhImage,

  summary:
    "A semester project in collaboration with Vuuh, focused on improving the onboarding experience of their Shopify plugin through usability evaluations and interactive prototyping.",

  overview: [
    {
      label: "Client",
      value: "Semester project",
    },
    {
      label: "Duration",
      value: "2 weeks",
    },
    {
      label: "Team",
      value: "5 designers",
    },
    {
      label: "My role",
      value: "UX/UI Designer",
    },
    {
      label: "Design tools",
      value: "Figma, FigJam, Jitter",
    },
    {
      label: "Technologies",
      value: "Figma prototyping",
    },
    {
      label: "Methods",
      value: "Heuristic evaluation, cognitive walkthrough",
    },
  ],

  process: [
    {
      title: "Discover",
      items: ["Heuristic evaluation", "Cognitive walkthrough", "UX findings"],
    },
    {
      title: "Define",
      items: ["Optimization areas", "Key insights", "persona", "HMW questions"],
    },
    {
      title: "Develop",
      items: ["UI improvements", "Interactive prototyping"],
    },
    {
      title: "Deliver",
      items: ["Final Figma prototype", "Impact & reflection"],
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Vuuh is a Shopify plugin designed to help merchants manage product data and imagery. The existing onboarding experience presented usability challenges that could make it difficult for users to understand and complete the setup process.",
      ],
      conclusion:
        "The goal was to identify usability issues and improve the onboarding experience through UX/UI design.",
    },

    researchApproach: {
      title: "UX evaluation",
      description:
        "We used heuristic evaluation and cognitive walkthroughs to examine the existing onboarding flow, focusing on navigation, feedback and clarity of the setup process.",
    },

    findings: {
      title: "Heuristic evaluation & cognitive walkthrough",

      stats: [
        {
          icon: participantsIcon,
          value: "4 areas reviewed",
        },
        {
          icon: amountIcon,
          value: "27 observations identified",
        },
        {
          icon: prioritizedIcon,
          value: "Prioritized",
        },
      ],

      evaluationLink:
        "https://www.figma.com/board/yxGvzW2VbagWsor0o4AjMQ/Case-2---Vuuh?node-id=0-1&t=ieqW9yMsD18268ro-1",

      items: [
        {
          icon: transitionIcon,
          title: "Finding 1 - Unclear transition from the success page to Vuuh",
          priority: "5/5 - HIGH PRIORITY",

          observation:
            "After installation and connection trial, the user reaches a success page, but it is unclear how to continue the onboarding process in Vuuh.",

          impact:
            "The user may think the onboarding is complete or become unsure where to continue.",

          screenshots: [
            {
              title: "Installation",
              images: [installation1, installation2, installation3],
            },
            {
              title: "Connection trial",
              images: [connectionTrial1, connectionTrial2, connectionTrial3],
            },
          ],
        },

        {
          icon: checkmarkIcon,
          title: "Finding 2 - Lack of confirmation after installation",
          priority: "5/5 - HIGH PRIORITY",

          observation:
            "The user does not receive clear feedback confirming that the installation was completed successfully.",

          impact:
            "This can create uncertainty about whether the installation was successful and whether the user can safely continue.",

          screenshots: [
            {
              title: "Success",
              images: [successImage],
            },
          ],
        },

        {
          icon: circleArrowIcon,
          title: "Finding 3 - Unclear Shopify connection status",
          priority: "5/5 - HIGH PRIORITY",

          observation:
            "The Shopify integration can be accessed from multiple places, but it is unclear whether the connection has been successfully completed.",

          impact:
            "The user may be unsure whether Shopify is connected correctly and may repeat actions or interrupt the onboarding process.",

          screenshots: [
            {
              title: "Connection",
              images: [connection1, connection2, connection1],
            },
          ],
        },

        {
          icon: warningIcon,
          title: "Finding 4 - Lack of guidance when downloading demo orders",
          priority: "5/5 - HIGH PRIORITY",

          observation:
            "The user receives limited guidance and reassurance when downloading the demo order.",

          impact:
            "The user may hesitate to complete the task because they are unsure what the download will do or whether it could affect their live store.",

          screenshots: [
            {
              title: "Orders",
              images: [ordersImage],
            },
          ],
        },
      ],
    },
  },

  define: {
    insightsDescription:
      "The evaluation highlighted three recurring usability issues affecting the onboarding experience.",

    insights: [
      {
        icon: overviewIcon,
        text: "Lack of overview",
      },
      {
        icon: feedbackIcon,
        text: "Insufficient feedback",
      },
      {
        icon: systemStatusIcon,
        text: "Unclear system status",
      },
    ],

    personas: {
      title: "Persona",
      intro:
        "Based on one of Vuuh's existing personas, we adapted the user profile to highlight the needs and frustrations relevant to the onboarding experience.",

      items: [
        {
          name: "Maria",
          age: 25,
          description: "The independent shop owner",
          image: personaImage,

          quote:
            "I want to feel confident that I’m setting up Vuuh correctly, without having to figure everything out on my own.",

          motivations: [
            "Set up Vuuh correctly",
            "Manage her webshop with confidence",
            "Make digital tasks feel manageable",
          ],

          behaviours: [
            "Runs a physical fashion store and a small webshop",
            "Has extensive retail experience",
            "Relies on an external partner for her webshop",
          ],

          frustrations: [
            "Complex onboarding can feel overwhelming",
            "Unsure where to find specific information",
            "Switching between Shopify and Vuuh can be confusing",
          ],

          needs: [
            "Clear step-by-step instructions",
            "Easy access to help when needed",
            "Clear guidance across Vuuh and Shopify",
          ],
        },
      ],
    },

    questions: [
      "How might we help users understand where they are and what comes next during onboarding?",
      "How might we make completed actions and their outcomes clearer to users?",
      "How might we create a more seamless transition between Vuuh and Shopify during setup?",
    ],

    optimizationAreas: {
      title: "Selected optimization areas",
      description: "The findings were grouped into three optimization areas.",
      numbered: true,
      items: [
        {
          title: "Clearer guidance",
          description:
            "Make next steps and progress clear throughout the onboarding flow.",
        },
        {
          title: "Feedback & status",
          description:
            "Use clear loading and success states to show users what is happening and confirm completed actions.",
        },
        {
          title: "Simpler setup flow",
          description:
            "Reduce uncertainty between Vuuh and Shopify with clearer transitions and a more intuitive setup flow.",
        },
      ],
    },
  },

  develop: {
    designProcess: {
      title: "Improvements",
      autoPlayVideos: true,

      intro:
        "Based on the prioritized usability findings, we redesigned key parts of the onboarding flow in Figma, focusing on clearer guidance, better feedback and a more intuitive setup experience.",

      items: [
        {
          title: "01 — Clarifying the transition after installation",
          layout: "comparison",

          description:
            "After installing Vuuh, users reached a success page without clear guidance on how to continue. We redesigned the transition to make the next step more visible and help users continue their onboarding in Vuuh.",

          before: {
            title: "Unclear next steps after installation",
            images: [
              {
                title: "Original installation page",
                image: vuuhInstallationBefore,
              },
            ],
          },

          after: {
            title: "Clearer guidance to continue in Vuuh",
            images: [
              {
                title: "Redesigned installation experience",
                video: vuuhInstallationAfter,
              },
            ],
          },
        },

        {
          title: "02 — Improving the Shopify connection flow",
          layout: "comparison",

          description:
            "The original flow for connecting a Shopify store to Vuuh lacked clear guidance and feedback on the connection status. We redesigned the flow to make the steps easier to follow and the connection status more visible.",

          before: {
            title: "Unclear guidance and connection status",
            images: [
              {
                title: "Original Shopify connection flow in Vuuh",
                image: vuuhShopifyBefore1,
              },
              {
                title: "Original Shopify connection and activation in Vuuh",
                image: vuuhShopifyBefore2,
              },
            ],
          },

          after: {
            title: "A guided setup with clearer feedback",
            images: [
              {
                title: "Redesigned Shopify connection flow",
                video: vuuhShopifyAfter,
              },
            ],
          },
        },

        {
          title: "03 — Making the next steps in Vuuh clearer",
          layout: "comparison",

          description:
            "The existing Vuuh interface did not clearly guide users towards their next action after connecting Shopify. We redesigned the dashboard experience to highlight the next step and help users understand how to get started with Vuuh.",

          before: {
            title: "Unclear next steps in the Vuuh dashboard",
            images: [
              {
                title: "Original Vuuh interface",
                image: vuuhDashboardBefore,
              },
            ],
          },

          after: {
            title: "Clearer next steps and onboarding guidance",
            images: [
              {
                title: "Redesigned Vuuh dashboard",
                video: vuuhDashboardAfter,
              },
            ],
          },
        },
      ],
    },
  },

  deliver: {
    title: "Deliver",
    description:
      "The final Figma prototype brings together the UX improvements to create a clearer and more intuitive onboarding experience.",

    projectDeliver: {
      title: "Final optimized solution",
      description:
        "The final interactive prototype brings together the improvements to the installation process, Shopify connection and Vuuh dashboard. The redesigned flow provides clearer guidance, better feedback and a more structured onboarding experience.",
      video: finalSolutionVideo,
      link: "https://www.figma.com/proto/qxEHsDMTggVACqGxY0fOVG/Case-2---Vuuh?node-id=363-118&p=f&t=goJU3xDwbqx7sC6I-1&scaling=contain&content-scaling=fixed&page-id=269%3A8183&starting-point-node-id=363%3A118",
      auditLink:
        "https://www.figma.com/proto/qxEHsDMTggVACqGxY0fOVG/Case-2---Vuuh?node-id=53-2&scaling=scale-down-width&content-scaling=fixed&page-id=41%3A18",

      impactTitle: "Impact & reflection",
      impactDescription:
        "Clearer guidance, feedback and next steps can reduce uncertainty, help merchants complete onboarding and increase successful setups for Vuuh.",

      reflection: [
        "Through heuristic evaluation and cognitive walkthroughs, I learned how to identify usability issues and translate them into prioritized design improvements.",
        "I gained a better understanding of how feedback, visual hierarchy and clear guidance can reduce uncertainty during onboarding.",
        "As a next step, I would test the prototype with users to evaluate whether the improvements make onboarding easier to complete.",
      ],
    },
  },
};

export default vuuh;
