
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
        title: "Escrow.com Domain Purchase Integration",

        summary:
            "Integrated Escrow.com's transaction API into a Laravel-based domain marketplace to support domain purchases through Escrow's payment wizard. The implementation involved API authentication, transaction payload construction, checkout workflows, order management, domain reservation, and handling unsuccessful API responses.",

        sections: [
            {
                heading: "The problem",
                body:
                    "The application needed to connect its domain-purchasing workflow with Escrow.com so buyers could proceed through a third-party payment wizard. The integration required the Laravel application to prepare transaction details, communicate with the external API, associate transactions with internal orders, and handle failures without losing track of the purchase state."
            },
            {
                heading: "My approach",
                bullets: [
                    "Integrated the Escrow.com transaction API using Laravel's HTTP client and configured API credentials through application settings.",
                    "Implemented a checkout workflow that creates a pending order and reserves the selected domain before initiating the external transaction.",
                    "Used database transactions and row-level locking to protect domain availability during checkout and reduce the risk of concurrent purchases.",
                    "Constructed the transaction payload with buyer and seller information, domain details, transaction references, inspection-period settings, and return URLs.",
                    "Investigated API authentication failures and validation errors involving transaction parties, required fields, reference formats, and item descriptions.",
                    "Handled unsuccessful API responses with structured error handling and logging to support troubleshooting.",
                    "Connected the external transaction flow with internal order records so the application could associate the checkout process with the relevant purchase."
                ]
            },
            {
                heading: "The outcome",
                body:
                    "Developed the Laravel-side integration for initiating Escrow.com domain-purchase transactions and connecting the checkout workflow with internal order and domain records. API testing exposed authentication and payload-validation issues that could be investigated and corrected during integration. Final transaction completion and end-to-end payment success should be documented only after they have been verified."
            },
            {
                heading: "What I learned",
                body:
                    "Third-party integrations require more than a successful HTTP request. Authentication, API-specific validation rules, transaction state, database consistency, and error logging all need to be considered together. I also learned the importance of distinguishing successful transaction creation from a completed payment."
            }
        ]
    },

    caching: {
        category: "PERFORMANCE & DEBUGGING",
        title: "Laravel Upgrade and Page-Cache Debugging",

        summary:
            "Worked on upgrading Laravel applications while addressing compatibility concerns, testing existing functionality, and investigating intermittent 404 responses and caching failures. The work required checking application behavior during framework changes and identifying issues that could affect production reliability.",

        sections: [
            {
                heading: "The problem",
                body:
                    "During Laravel upgrade and maintenance work, the application required compatibility testing and regression checks. An intermittent issue involving the page-cache package produced unexpected 404 responses or cache-related failures. Because the issue was not consistently reproducible, it required investigation rather than assuming that every failure had the same cause."
            },
            {
                heading: "Investigation",
                bullets: [
                    "Reviewed application behavior during the Laravel upgrade and identified areas requiring compatibility and regression testing.",
                    "Investigated intermittent 404 responses associated with the page-caching functionality.",
                    "Considered the relationship between incoming requests, cached responses, route resolution, and the application's normal request lifecycle.",
                    "Distinguished the observed symptoms from a confirmed root cause rather than attributing every 404 response to caching without evidence.",
                    "Performed testing to identify affected request scenarios and assess whether the behavior persisted under different conditions."
                ]
            },
            {
                heading: "The solution",
                body:
                    "The documented work includes investigating the page-cache failures and testing application behavior during the Laravel upgrade. A definitive root cause and permanent fix should be added once confirmed. This keeps the case study technically accurate instead of presenting an unresolved debugging task as a completed fix."
            },
            {
                heading: "Verification",
                body:
                    "The relevant verification work includes checking affected routes, reproducing the intermittent behavior where possible, and running regression tests against the upgraded application. Final verification should establish whether the affected routes return the expected responses with caching enabled and disabled, and whether the issue remains resolved across repeated requests."
            },
            {
                heading: "Key takeaway",
                body:
                    "Framework upgrades involve more than updating dependencies. Existing packages, caching behavior, route handling, and production request flows must also be tested. Intermittent failures require a reproducible test case and evidence of the root cause before a fix can be considered complete."
            }
        ]
    },

    architecture: {
        category: "BACKEND ENGINEERING",
        title: "Laravel Admin Panels and Role-Based Access Control",

        summary:
            "Developed and maintained Laravel application features, including responsive administration and user panels with role-based access control. The work involved implementing backend functionality, managing database interactions, maintaining application security, and supporting reliable day-to-day application operations.",

        sections: [
            {
                heading: "The challenge",
                body:
                    "The application needed separate administration and user-facing interfaces, with access to functionality controlled according to user roles. The backend had to support these interfaces while maintaining appropriate access restrictions, consistent data handling, and a maintainable Laravel implementation."
            },
            {
                heading: "Technical implementation",
                bullets: [
                    "Developed and maintained Laravel backend functionality supporting administration and user-facing panels.",
                    "Implemented role-based access control so access to protected application functionality could be managed according to user roles.",
                    "Worked with MySQL queries and database operations, including query optimization where needed.",
                    "Integrated Google reCAPTCHA to add an additional layer of protection to applicable application forms.",
                    "Applied Laravel conventions to organize application functionality and support ongoing maintenance.",
                    "Supported deployment activities, end-to-end testing, and production bug fixes to verify that changes behaved as expected."
                ]
            },
            {
                heading: "The result",
                body:
                    "Contributed to Laravel applications with responsive administration and user interfaces, role-based access control, security integrations, and ongoing backend maintenance. The work also included database optimization and deployment testing. Quantifiable improvements in query speed, response time, or security outcomes should be included only where supporting measurements are available."
            },
            {
                heading: "Engineering considerations",
                body:
                    "The experience reinforced the importance of enforcing permissions on the backend rather than relying on interface visibility alone. It also highlighted the need to consider database efficiency, security, regression testing, and maintainability when adding functionality to an existing application."
            },
            {
                heading: "Key takeaway",
                body:
                    "Reliable backend engineering involves balancing feature delivery with access control, database performance, application security, and maintainability. Testing and production troubleshooting are essential parts of that work, not tasks that end when the code compiles."
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