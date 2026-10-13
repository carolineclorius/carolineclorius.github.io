import mellemrumImage from "../../assets/images/mellemrum.svg";

/* define */
import participantsIcon from "../../assets/images/shared/participants.svg";
import amountIcon from "../../assets/images/shared/amount.svg";
import prioritizedIcon from "../../assets/images/shared/prioritized.svg";

import finding1Icon from "../../assets/images/mellemrum/define/finding-1.svg";
import finding2Icon from "../../assets/images/mellemrum/define/finding-2.svg";
import finding3Icon from "../../assets/images/mellemrum/define/finding-3.svg";
import finding4Icon from "../../assets/images/mellemrum/define/finding-4.svg";
import finding5Icon from "../../assets/images/mellemrum/define/finding-5.svg";

/* develop */
/* 1. optimaztion */
import registrationBeforeAndAfter from "../../assets/images/mellemrum/develop/registration-before-and-after.png";
import registrationAfterList from "../../assets/images/mellemrum/develop/registration-after-list.png";
import registrationAfterSupabase from "../../assets/images/mellemrum/develop/registration-after-supabase.png";

import registrationImportCode from "../../assets/images/mellemrum/develop/registration-import-code.png";
import registrationSubmitCode from "../../assets/images/mellemrum/develop/registration-submit-code.png";
import registrationServiceCode from "../../assets/images/mellemrum/develop/registration-service-code.png";

/* 2. optimaztion */
import feedbackBefore from "../../assets/images/mellemrum/develop/feedback-before.png";
import feedbackEmptyFields from "../../assets/images/mellemrum/develop/feedback-empty-fields.png";
import feedbackMissingName from "../../assets/images/mellemrum/develop/feedback-missing-name.png";
import feedbackInvalidEmail from "../../assets/images/mellemrum/develop/feedback-invalid-email.png";
import feedbackSuccess from "../../assets/images/mellemrum/develop/feedback-success.png";

import feedbackValidationCode from "../../assets/images/mellemrum/develop/feedback-validation-code.png";
import feedbackAlertCode from "../../assets/images/mellemrum/develop/feedback-alert-code.png";
import feedbackSuccessCode from "../../assets/images/mellemrum/develop/feedback-success-code.png";

/* 3. optimaztion */
import errorCode from "../../assets/images/mellemrum/develop/error-code.png";
import errorForm from "../../assets/images/mellemrum/develop/error-form.png";
import errorSuccess from "../../assets/images/mellemrum/develop/error-success.png";
import errorMessage from "../../assets/images/mellemrum/develop/error-message.png";

import errorResponseCode from "../../assets/images/mellemrum/develop/error-response-code.png";
import errorHandlingCode from "../../assets/images/mellemrum/develop/error-handling-code.png";
import errorAlertCode from "../../assets/images/mellemrum/develop/error-alert-code.png";

/* 4. optimaztion */

import duplicateBefore from "../../assets/images/mellemrum/develop/duplicate-before.png";
import duplicateExistingList from "../../assets/images/mellemrum/develop/duplicate-existing-list.png";
import duplicateExistingWarning from "../../assets/images/mellemrum/develop/duplicate-existing-warning.png";
import duplicateDifferentList from "../../assets/images/mellemrum/develop/duplicate-different-list.png";
import duplicateDifferentSuccess from "../../assets/images/mellemrum/develop/duplicate-different-success.png";
import duplicateDoubleClickList from "../../assets/images/mellemrum/develop/duplicate-double-click-list.png";
import duplicateDoubleClickForm from "../../assets/images/mellemrum/develop/duplicate-double-click-form.png";

import duplicateCheckCode from "../../assets/images/mellemrum/develop/duplicate-check-code.png";
import duplicateSubmitCode from "../../assets/images/mellemrum/develop/duplicate-submit-code.png";
import duplicateButtonCode from "../../assets/images/mellemrum/develop/duplicate-button-code.png";

/* 5. optimaztion */
import loadingNetworkTest from "../../assets/images/mellemrum/develop/loading-network-test.png";
import loadingBefore from "../../assets/images/mellemrum/develop/loading-before.mp4";
import loadingAfter from "../../assets/images/mellemrum/develop/loading-after.mp4";

import loadingStateCode from "../../assets/images/mellemrum/develop/loading-state-code.png";
import loadingHomeCode from "../../assets/images/mellemrum/develop/loading-home-code.png";
import loadingEventCode from "../../assets/images/mellemrum/develop/loading-event-code.png";
import loadingRegistrationsCode from "../../assets/images/mellemrum/develop/loading-registrations-code.png";

/* Deliver */
import finalSolutionVideo from "../../assets/images/mellemrum/deliver/final-solution.mov";

const mellemrum = {
  slug: "mellemrum",
  project: "Mellemrum",

  number: "04",
  title: "Mellemrum.",
  summary:
    "A local event platform for cultural experiences in Aarhus, optimized through code to improve usability, functionality, and performance.",
  heroImage: mellemrumImage,

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
      value: "Individual project",
    },
    {
      label: "My role",
      value: "UX/UI Designer & Frontend Developer",
    },
    {
      label: "Design tools",
      value: "Figma, VS Code, GitHub",
    },
    {
      label: "Technologies",
      value: "React, JavaScript, CSS, Supabase",
    },
    {
      label: "Methods",
      value: "Code audit, functional testing, accessibility checks, Lighthouse",
    },
  ],

  process: [
    {
      title: "Discover",
      items: [
        "Code & UX audit",
        "Lighthouse analysis",
        "Issues & opportunities",
      ],
    },
    {
      title: "Define",
      items: [
        "Key challenges",
        "Prioritized improvements",
        "Technical requirements",
      ],
    },
    {
      title: "Develop",
      items: [
        "Registration flow",
        "Feedback & error handling",
        "Loading & UI states",
        "Testing & verification",
      ],
    },
    {
      title: "Deliver",
      items: [
        "Final optimized solution",
        "Deployed application",
        "Impact & reflection",
      ],
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Mellemrum was an existing React-based event platform for discovering and registering for local events in Aarhus. The solution had opportunities for improvement in usability, functionality, performance and code maintainability.",
      ],
      conclusion:
        "My task was to identify and implement improvements to the existing solution through code.",
    },

    researchApproach: {
      title: "Optimization approach",
      description:
        "I evaluated the existing solution across UX, code structure, data model and performance. Through a code and UX audit, Lighthouse testing and functional testing, I identified and prioritized improvements based on their impact.",
    },

    codeAudit: {
      title: "Code & UX audit",
      description:
        "I reviewed the solution across six technical and UX-related areas, documenting each finding based on its impact, potential solution, priority and method of verification.",

      auditLink:
        "https://www.figma.com/board/OJ5aIcl4a0RyCxsXuBujL6/Case-1---mellemrum---Teknisk-Audit?node-id=0-1&t=R1LryffcZx7penoZ-1",

      items: [
        {
          title: "Structure & naming",
          description: "Project structure, components and naming",
        },
        {
          title: "Data & Supabase",
          description: "Data structure, relations and API calls",
        },
        {
          title: "Registration flow",
          description: "Registration and organizer functionality",
        },
        {
          title: "Robustness & feedback",
          description: "Loading, errors, validation and feedback",
        },
        {
          title: "Accessibility & UI",
          description: "Keyboard use, focus, semantics and consistency",
        },
        {
          title: "Performance",
          description: "Images, loading and general performance opportunities",
        },
      ],
    },
  },

  define: {
    title: "Define",

    findings: {
      title: "From findings to priorities",
      description:
        "I evaluated 34 findings based on their impact on usability, functionality and the core user flows. Each finding was rated on a scale from 1-5, helping me identify the most critical issues and prioritize improvements.The findings highlighted below were all rated 5/5 (high priority).",

      stats: [
        {
          icon: participantsIcon,
          value: "6 areas reviewed",
        },
        {
          icon: amountIcon,
          value: "34 findings",
        },
        {
          icon: prioritizedIcon,
          value: "Priority scale 1–5",
        },
      ],

      items: [
        {
          icon: finding1Icon,
          title: "Finding 1 - Registration data was not persisted",
          priority: "5/5 - HIGH PRIORITY",
          description: "Data was only logged to the console.",
        },
        {
          icon: finding2Icon,
          title: "Finding 2 - Missing validation and feedback",
          priority: "5/5 - HIGH PRIORITY",
          description:
            "Users received no validation messages or confirmation after submitting the form.",
        },
        {
          icon: finding3Icon,
          title: "Finding 3 - Failed requests could appear successful",
          priority: "5/5 - HIGH PRIORITY",
          description: "Request failures were not detected.",
        },
        {
          icon: finding4Icon,
          title: "Finding 4 - Duplicate registrations were possible",
          priority: "5/5 - HIGH PRIORITY",
          description: "The same email could register the same event twice.",
        },
        {
          icon: finding5Icon,
          title: "Finding 5 - Missing loading feedback",
          priority: "5/5 - HIGH PRIORITY",
          description: "Pages appeared empty while fetching data.",
        },
      ],
    },

    optimizationAreas: {
      title: "Selected optimization areas",
      description: "The findings were grouped into three optimization areas.",

      items: [
        {
          title: "01 - Registration flow",
          description: "Data persistence and duplicate prevention.",
        },
        {
          title: "02 - Feedback & error handling",
          description: "Validation, success and error feedback.",
        },
        {
          title: "03 - Loading & UI states",
          description: "Feedback while data is being fetched.",
        },
      ],
    },

    optimizationGoal: {
      title: "Optimization goal",
      description:
        "How might I turn the existing React prototype into a more robust and reliable solution with a functional registration flow and clear feedback throughout the user journey?",
    },
  },

  develop: {
    designProcess: {
      title: "Improvements",

      intro:
        "Based on the prioritized findings, I implemented the improvements iteratively in separate feature branches. Each change was tested and verified before being merged, allowing me to improve the solution without losing sight of the existing user flows.",

      items: [
        {
          title: "Improving the registration flow",
          layout: "comparison",
          description:
            "The original form only logged the submitted data to the console. I connected the form to Supabase through a dedicated service function, allowing registrations to be persisted in Supabase.",

          before: {
            title: "Registration data was only logged to the console",
            images: [
              {
                title: "Eventpage",
                image: registrationBeforeAndAfter,
              },
            ],
          },

          after: {
            title:
              "Registrations are now stored in Supabase and displayed on the registrations page",
            images: [
              {
                title: "Eventpage",
                image: registrationBeforeAndAfter,
              },
              {
                title: "Registrationspage",
                image: registrationAfterList,
              },
              {
                title: "Supabase",
                image: registrationAfterSupabase,
              },
            ],
          },

          code: {
            snippets: [
              {
                title: "EventPage.jsx",
                images: [
                  {
                    description:
                      "Importing the createRegistration() function from the registration service.",
                    image: registrationImportCode,
                  },
                  {
                    description:
                      "Replacing console logging with a call to createRegistration() to save the submitted data.",
                    image: registrationSubmitCode,
                  },
                ],
              },
              {
                title: "Registrations.js",
                images: [
                  {
                    description:
                      "A POST request sends the registration data to Supabase as JSON.",
                    image: registrationServiceCode,
                  },
                ],
              },
            ],
          },
        },

        {
          title: "Improving registration validation and feedback",
          layout: "scroll",
          description:
            "The original registration flow lacked form validation and visible feedback, leaving users unsure whether their registration was successful or if something went wrong. I implemented input validation, clear error messages and a success state to guide users through the registration process.",

          before: feedbackBefore,
          beforeDescription: "No validation or feedback",

          after: {
            title: "Validation, warnings and success feedback",
            slides: [
              {
                title: "Empty fields",
                image: feedbackEmptyFields,
              },
              {
                title: "Missing name",
                image: feedbackMissingName,
              },
              {
                title: "Invalid email",
                image: feedbackInvalidEmail,
              },
              {
                title: "Successful registration",
                image: feedbackSuccess,
              },
            ],
          },
          code: {
            snippets: [
              {
                title: "EventPage.jsx",
                images: [
                  {
                    description:
                      "Checks required fields and email format before submitting.",
                    image: feedbackValidationCode,
                  },
                  {
                    description:
                      "Displays clear validation messages using an accessible alert when the form contains missing or invalid information.",
                    image: feedbackAlertCode,
                  },
                  {
                    description:
                      "Displays a success message and resets the form after a successful registration.",
                    image: feedbackSuccessCode,
                  },
                ],
              },
            ],
          },
        },

        {
          title: "Registration error handling",
          layout: "comparison",
          description:
            "The registration flow could display a success message even when Supabase rejected the request. I improved the error handling to ensure failed registrations display a clear error message instead of a false confirmation.",

          before: {
            title: "A failed registration could still appear successful",
            images: [
              {
                title: "Testing with an invalid Supabase endpoint",
                image: errorCode,
              },
              {
                title: "Form submitted",
                image: errorForm,
              },
              {
                title: "False success confirmation",
                image: errorSuccess,
              },
            ],
          },

          after: {
            title: "Failed requests now show an error",
            images: [
              {
                title: "Testing with an invalid Supabase endpoint",
                image: errorCode,
              },
              {
                title: "Form submitted",
                image: errorForm,
              },
              {
                title: "Clear error message",
                image: errorMessage,
              },
            ],
          },
          code: {
            snippets: [
              {
                title: "Registrations.js",
                images: [
                  {
                    description:
                      "Checks the response and throws an error if saving fails.",
                    image: errorResponseCode,
                  },
                ],
              },
              {
                title: "EventPage.jsx",
                images: [
                  {
                    description:
                      "Catches failed requests and sets an error message instead of showing success.",
                    image: errorHandlingCode,
                  },
                  {
                    description:
                      "Displays the error message beside the form using an accessible alert.",
                    image: errorAlertCode,
                  },
                ],
              },
            ],
          },
        },

        {
          title: "Preventing duplicate registrations",
          layout: "scroll",
          description:
            "Previously, the same email could register for an event multiple times, creating duplicate registrations. I implemented a check to prevent duplicates while allowing users to register for different events. I also prevented repeated submissions from double-clicking the registration button.",

          before: duplicateBefore,
          beforeDescription: "The same user could register twice",

          after: {
            title: "Duplicate registrations are prevented",
            slides: [
              {
                title: "Existing registration detected",
                images: [duplicateExistingList, duplicateExistingWarning],
              },
              {
                title: "The same email can register for different events",
                images: [duplicateDifferentList, duplicateDifferentSuccess],
              },
              {
                title: "Double-click submission prevented",
                images: [duplicateDoubleClickList, duplicateDoubleClickForm],
              },
            ],
          },
          code: {
            snippets: [
              {
                title: "Registrations.js",
                images: [
                  {
                    description:
                      "Checks Supabase for an existing registration with the same email and event.",
                    image: duplicateCheckCode,
                  },
                ],
              },
              {
                title: "EventPage.jsx",
                images: [
                  {
                    description:
                      "Stops the submission and shows a warning if the user is already registered.",
                    image: duplicateSubmitCode,
                  },
                  {
                    description:
                      "Disables the submit button while saving to prevent repeated submissions.",
                    image: duplicateButtonCode,
                  },
                ],
              },
            ],
          },
        },

        {
          title: "Reusable loading state",
          layout: "comparison",
          description:
            "Pages could appear empty while fetching data, leaving users unsure if content was loading. I created a reusable loading component to provide clear visual feedback across multiple pages.",

          before: {
            title: "No feedback while data was loading",
            images: [
              {
                title: "Tested with 3G network throttling",
                image: loadingNetworkTest,
              },
              {
                title: "Tested across Home, Event and Registrations pages",
                video: loadingBefore,
              },
            ],
          },

          after: {
            title: "Clear feedback while data is loading",
            images: [
              {
                title: "Tested with 3G network throttling",
                image: loadingNetworkTest,
              },
              {
                title: "Tested across Home, Event and Registrations pages",
                video: loadingAfter,
              },
            ],
          },

          code: {
            snippets: [
              {
                title: "LoadingState.jsx",
                images: [
                  {
                    description:
                      "Creates a reusable Lottie loading state that appears after a short delay.",
                    image: loadingStateCode,
                  },
                ],
              },
              {
                title: "HomePage.jsx",
                images: [
                  {
                    description:
                      "Displays the loading state while events are being fetched.",
                    image: loadingHomeCode,
                  },
                ],
              },
              {
                title: "EventPage.jsx",
                images: [
                  {
                    description:
                      "Displays the loading state while event details are being fetched.",
                    image: loadingEventCode,
                  },
                ],
              },
              {
                title: "RegistrationsPage.jsx",
                images: [
                  {
                    description:
                      "Reuses the loading component while fetching registrations.",
                    image: loadingRegistrationsCode,
                  },
                ],
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
      "The optimized React application includes clearer feedback, more reliable registration handling and reusable components.",

    projectDeliver: {
      title: "Final optimized solution",
      description:
        "The final programmed solution brings together the implemented improvements, creating a more functional, reliable and user-friendly event platform. All improvements were retested in the deployed solution to verify that they worked as intended.",
      video: finalSolutionVideo,
      link: "https://carolineclorius.github.io/Optimize-mellemrum/",
      githubLink: "https://github.com/carolineclorius/Optimize-mellemrum",

      impactTitle: "Impact & reflection",
      impactDescription:
        "Clearer feedback and more reliable registrations improve the user experience, while preventing duplicates gives organizers a more accurate overview. Reusable components also make the platform easier to maintain.",

      reflection: [
        "I learned how prioritizing improvements can create more value than trying to fix everything at once.",
        "Working with data structure, validation and error handling showed me how technical improvements contribute to a more reliable user experience.",
        "Functional testing helped me verify that the improvements worked as intended. As a next step, I would conduct usability tests to evaluate the experience with actual users.",
      ],
    },
  },
};

export default mellemrum;
