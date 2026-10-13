
"use strict";

// Mobile navigation
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        navLinks.classList.add("open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
        document.body.classList.add("menu-open");
    }
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        closeMenu();
    }
});

// Case study content
// Replace these illustrative drafts with your actual project details.
const caseStudies = {
    api: {
        category: "API INTEGRATION",
        title: "Third-party API integration",
        summary:
            "Integrating an external service into a Laravel application requires more than sending an HTTP request. The application must handle input validation, authentication, failures, and responses consistently.",
        sections: [
            {
                heading: "The problem",
                body:
                    "Describe the real integration you worked on, what the application needed from the external service, and what made the task challenging."
            },
            {
                heading: "My approach",
                bullets: [
                    "Explain how the application communicates with the external API.",
                    "Describe how you validate input and process responses.",
                    "Explain how you handle errors, timeouts, or unsuccessful requests.",
                    "Describe how you tested the integration."
                ]
            },
            {
                heading: "The outcome",
                body:
                    "Document the actual functionality delivered and how you verified it. Include measurable results only when you have evidence."
            },
            {
                heading: "What I learned",
                body:
                    "Describe one technical decision or lesson that helped you make the integration more reliable or maintainable."
            }
        ]
    },

    caching: {
        category: "PERFORMANCE & DEBUGGING",
        title: "Application caching and reliability",
        summary:
            "Caching can improve response times, but incorrect cache behavior can also cause stale responses or unexpected failures. Diagnosing these problems requires understanding the request lifecycle.",
        sections: [
            {
                heading: "The problem",
                body:
                    "Describe the actual caching issue, its symptoms, and the circumstances in which it occurred."
            },
            {
                heading: "Investigation",
                bullets: [
                    "Explain how you reproduced the problem.",
                    "Describe which parts of the request and caching flow you inspected.",
                    "Explain how you distinguished the root cause from other possible causes."
                ]
            },
            {
                heading: "The solution",
                body:
                    "Document the change you actually implemented, or clearly state if your involvement was limited to investigation and diagnosis."
            },
            {
                heading: "Verification",
                body:
                    "Explain which routes, cache states, or request scenarios you tested and what the tests demonstrated."
            }
        ]
    },

    architecture: {
        category: "BACKEND ENGINEERING",
        title: "Backend architecture and maintainability",
        summary:
            "Backend code becomes harder to change when validation, business logic, database operations, and response formatting are unnecessarily coupled.",
        sections: [
            {
                heading: "The challenge",
                body:
                    "Describe a real example in which an existing Laravel implementation was difficult to extend, test, or maintain."
            },
            {
                heading: "Technical decisions",
                bullets: [
                    "Explain how responsibilities were organized.",
                    "Describe your use of Laravel's service container or dependency injection, if applicable.",
                    "Explain how validation and database operations were handled.",
                    "Describe any trade-offs in the approach you chose."
                ]
            },
            {
                heading: "The result",
                body:
                    "State the actual improvement you achieved. If you cannot measure it, describe the verified functional or maintenance benefit without inventing numbers."
            },
            {
                heading: "Key takeaway",
                body:
                    "Explain how the experience influenced your approach to writing maintainable backend code."
            }
        ]
    }
};

// Safely create text elements instead of injecting HTML from strings.
function createTextElement(tag, text, className = "") {
    const element = document.createElement(tag);
    element.textContent = text;

    if (className) {
        element.className = className;
    }

    return element;
}

function renderCaseStudy(key) {
    const study = caseStudies[key];

    if (!study) {
        return;
    }

    const dialog = document.querySelector("#case-dialog");
    const content = document.querySelector("#dialog-content");

    content.replaceChildren();

    content.appendChild(
        createTextElement("p", study.category, "eyebrow")
    );

    content.appendChild(
        createTextElement("h2", study.title)
    );

    content.appendChild(
        createTextElement("p", study.summary)
    );

    study.sections.forEach((section) => {
        content.appendChild(
            createTextElement("h3", section.heading)
        );

        if (section.body) {
            content.appendChild(
                createTextElement("p", section.body)
            );
        }

        if (section.bullets) {
            const list = document.createElement("ul");

            section.bullets.forEach((bullet) => {
                list.appendChild(createTextElement("li", bullet));
            });

            content.appendChild(list);
        }
    });

    if (!dialog.open) {
        dialog.showModal();
    }
}

// Open case study dialogs
document.querySelectorAll(".case-link").forEach((button) => {
    button.addEventListener("click", () => {
        renderCaseStudy(button.dataset.case);
    });
});

// Close the case study dialog
const caseDialog = document.querySelector("#case-dialog");
const dialogClose = document.querySelector("#dialog-close");

dialogClose.addEventListener("click", () => {
    caseDialog.close();
});

// Close when clicking outside the dialog content
caseDialog.addEventListener("click", (event) => {
    if (event.target === caseDialog) {
        caseDialog.close();
    }
});

// Update footer year
document.querySelector("#current-year").textContent =
    new Date().getFullYear();