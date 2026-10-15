import mellemrumImage from "../../assets/images/mellemrum.svg";

/* define */
import participantsIcon from "../../assets/images/shared/participants.svg";
import amountIcon from "../../assets/images/shared/amount.svg";
import prioritizedIcon from "../../assets/images/shared/prioritized.svg";

import finding1Icon from "../../assets/images/mellemrum/define/finding-1.svg";
import finding2Icon from "../../assets/images/mellemrum/define/finding-2.svg";
import finding3Icon from "../../assets/images/mellemrum/define/finding-3.svg";
import finding4Icon from "../../assets/images/mellemrum/define/finding-4.svg";

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

/* Deliver */
import finalSolutionVideo from "../../assets/images/mellemrum/deliver/final-solution.mov";

const mellemrum = {
  slug: "mellemrum",
  hideProcessVisuals: true,
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
      value: "UX/UI Designer and Frontend Developer",
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
      value: "Code and UX Audit, Functional Testing and Lighthouse",
    },
  ],

  discover: {
    problem: {
      title: "Problem and context",
      paragraphs: [
        "Mellemrum is a React-based event platform for discovering and registering for local events in Aarhus.",
      ],
      conclusion:
        "My task was to improve its usability, functionality, performance and code maintainability.",
    },

    researchApproach: {
      title: "Optimization approach",
      description:
        "I conducted a code and UX audit, Lighthouse analysis and functional testing to prioritize improvements in UX, code, data and performance.",
    },

    codeAudit: {
      title: "Code & UX audit",
      description:
        "I documented findings across six areas, including their impact, priority, potential solutions and verification methods.",

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
      description: "Five of the most critical findings are highlighted below.",

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
      ],
    },
  },

  develop: {
    designProcess: {
      title: "Improvements",

      intro:
        "I implemented and tested the prioritized improvements in separate feature branches before merging.",

      items: [
        {
          title: "Improving the registration flow",
          layout: "comparison",
          description:
            "Previously, registrations were only logged to the console. I connected the form to Supabase through a service function to persist registration data.",

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
            "I added form validation, error messages and success feedback to make the registration process clearer.",

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
            "I improved error handling to prevent false success confirmations when Supabase requests fail.",

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
            "I prevented duplicate registrations for the same email and event, as well as repeated submissions from double-clicking.",

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
      ],
    },
  },

  deliver: {
    title: "Deliver",
    description:
      "The optimized solution was retested in deployment to verify the implemented improvements.",

    projectDeliver: {
      title: "Final optimized solution",
      description:
        "All improvements were retested in the deployed solution to verify their functionality.",
      video: finalSolutionVideo,
      link: "https://carolineclorius.github.io/Optimize-mellemrum/",
      githubLink: "https://github.com/carolineclorius/Optimize-mellemrum",
    },
    reflection: [
      "Reliable registrations and clearer feedback improved usability and made sign-ups more dependable for users and organizers. Reusable components improved maintainability. I learned to prioritize high-impact improvements and build more reliable solutions. Functional testing verified the changes, but usability testing would be the next step.",
    ],
  },
};

export default mellemrum;
