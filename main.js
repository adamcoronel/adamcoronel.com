//
// Adam Coronel - Portfolio JS
// Renders projects from data/projects.js
// Handles expand toggles, scroll reveal, mobile nav
//

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initScrollReveal();
    initMobileNav();
});

// Project rendering

function renderProjects() {
    const container = document.getElementById("projects-list");
    if (!container) return;

    projects.forEach((p) => {
        const card = createProjectCard(p);
        container.appendChild(card);
    });
}

function createProjectCard(p) {
    const article = document.createElement("article");
    article.className = "project-card reveal";
    article.setAttribute("aria-label", p.title);

    const githubLink = p.github
        ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-icon-link" aria-label="View ${p.title} on GitHub">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
       </a>`
        : "";

    const demoLink = p.demo
        ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project-icon-link" aria-label="View live demo of ${p.title}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
       </a>`
        : "";

    const stackTags = p.stack
        .map((s) => `<span class="stack-tag">${s}</span>`)
        .join("");

    article.innerHTML = `
    <div class="project-card-top" role="button" tabindex="0" aria-expanded="false" aria-controls="writeup-${p.id}">
      <div class="project-meta">
        <div class="project-title-row">
          <span class="project-title">${p.title}</span>
          <span class="project-type">${p.type}</span>
        </div>
        <p class="project-summary">${p.summary}</p>
        <div class="project-stack">${stackTags}</div>
      </div>
      <div class="project-actions">
        ${githubLink}
        ${demoLink}
      </div>
    </div>
    <button class="expand-btn" aria-expanded="false" aria-controls="writeup-${p.id}">
      <span class="expand-arrow">▸</span>
      <span class="expand-label">See full writeup</span>
    </button>
    <div class="project-writeup" id="writeup-${p.id}" aria-hidden="true">
      <div class="writeup-grid">
        <span class="writeup-label">Problem</span>
        <span class="writeup-val">${p.problem}</span>
        <span class="writeup-label">What I built</span>
        <span class="writeup-val">${p.built}</span>
        <span class="writeup-label">Reflection</span>
        <span class="writeup-val reflection">${p.reflection}</span>
      </div>
    </div>
  `;

    // Expand toggle — both the top panel and the button trigger it
    const topPanel = article.querySelector(".project-card-top");
    const expandBtn = article.querySelector(".expand-btn");
    const writeup = article.querySelector(".project-writeup");
    const label = article.querySelector(".expand-label");

    function toggle() {
        const isOpen = writeup.classList.contains("open");
        writeup.classList.toggle("open", !isOpen);
        expandBtn.classList.toggle("open", !isOpen);
        expandBtn.setAttribute("aria-expanded", String(!isOpen));
        topPanel.setAttribute("aria-expanded", String(!isOpen));
        writeup.setAttribute("aria-hidden", String(isOpen));
        label.textContent = isOpen ? "See full writeup" : "Collapse writeup";
    }

    expandBtn.addEventListener("click", toggle);

    // Keyboard support for the card top
    topPanel.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    });

    return article;
}

// Scroll reveal

function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
}

// Mobile nav

function initMobileNav() {
    const btn = document.getElementById("nav-menu-btn");
    const links = document.getElementById("nav-links");
    if (!btn || !links) return;

    btn.addEventListener("click", () => {
        const isOpen = links.classList.toggle("mobile-open");
        btn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on link click
    links.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            links.classList.remove("mobile-open");
            btn.setAttribute("aria-expanded", "false");
        });
    });
}
