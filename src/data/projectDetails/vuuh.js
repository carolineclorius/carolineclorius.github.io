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
  hideProcessVisuals: true,
  project: "Vuuh",

  number: "05",
  title: "Vuuh.",
  heroImage: vuuhImage,

  summary:
    "A semester project with Vuuh, focused on improving their Shopify plugin's onboarding through usability evaluations and interactive prototyping.",

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

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Vuuh helps Shopify users manage product data and imagery, but usability issues made the onboarding process difficult to navigate.",
      ],
      conclusion:
        "Our goal was to identify usability issues and redesign the onboarding experience.",
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
            "After installation and connection trial, users lacked clear guidance on how to continue in Vuuh.",

          impact:
            "Users could mistake the success page for the end of onboarding.",

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

          observation: "Installation lacked clear success confirmation.",

          impact: "Users could be unsure whether setup was successful.",

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
            "Shopify connection status was unclear across the interface.",

          impact: "Users could repeat actions or abandon setup.",

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

          observation: "Downloading demo orders lacked clear guidance.",

          impact: "Users could worry about affecting their live store.",

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
    personas: {
      title: "Persona",
      intro:
        "We adapted an existing Vuuh persona to focus on onboarding needs and frustrations.",

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
          ],

          behaviours: [
            "Runs a physical fashion store and a small webshop",
            "Relies on an external partner for her webshop",
          ],

          frustrations: [
            "Complex onboarding can feel overwhelming",
            "Switching between Shopify and Vuuh can be confusing",
          ],

          needs: [
            "Clear step-by-step instructions",
            "Easy access to help when needed",
          ],
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
          title: "1 - Clarifying the transition after installation",
          layout: "comparison",

          description:
            "We redesigned the success page to highlight the next step and guide users into Vuuh.",

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
          title: "2 - Improving the Shopify connection flow",
          layout: "comparison",

          description:
            "We redesigned the connection flow with clearer instructions, feedback and connection status.",

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
          title: "3 - Making the next steps in Vuuh clearer",
          layout: "comparison",

          description:
            "We redesigned the dashboard to make the next onboarding action more visible.",

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
    projectDeliver: {
      title: "Final optimized solution",
      description:
        "The interactive Figma prototype demonstrates the redesigned installation, Shopify connection and dashboard experience.",
      video: finalSolutionVideo,
      link: "https://www.figma.com/proto/qxEHsDMTggVACqGxY0fOVG/Case-2---Vuuh?node-id=363-118&p=f&t=goJU3xDwbqx7sC6I-1&scaling=contain&content-scaling=fixed&page-id=269%3A8183&starting-point-node-id=363%3A118",
      auditLink:
        "https://www.figma.com/proto/qxEHsDMTggVACqGxY0fOVG/Case-2---Vuuh?node-id=53-2&scaling=scale-down-width&content-scaling=fixed&page-id=41%3A18",
    },
    reflection: [
      "Clearer onboarding could increase successful setups and reduce support needs, creating business value for Vuuh. I learned to translate usability findings into design improvements through clearer feedback, visual hierarchy and guidance. Next, I would test the prototype with users to validate whether onboarding has become easier to complete.",
    ],
  },
};

export default vuuh;
