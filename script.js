const projects = [
  {
    name: "AI Backend Internship Project",
    category: "AI & Search",
    summary: "A FastAPI service bringing together recommendation logic, text embeddings and webhook-based event handling.",
    tags: ["FastAPI", "Recommendations", "Embeddings"],
    site: "https://afzu01.github.io/AI-Backened-Internship-Project/ai-project/",
    repo: "https://github.com/Afzu01/AI-Backened-Internship-Project",
    backend: "backend.html#ai-backened-internship-project"
  },
  {
    name: "Workflow Orchestrator API",
    category: "Backend",
    summary: "An event-driven workflow API for creating events, tracking lifecycle states and viewing operational summaries.",
    tags: ["FastAPI", "SQLite", "Workflow"],
    site: "https://afzu01.github.io/Workflow-Orchestrator-API/",
    repo: "https://github.com/Afzu01/Workflow-Orchestrator-API",
    backend: "backend.html#workflow-orchestrator-api"
  },
  {
    name: "Semantic FAQ Retriever",
    category: "AI & Search",
    summary: "A lightweight semantic retrieval system that ranks FAQ answers using TF-IDF vectorization and cosine similarity.",
    tags: ["NLP", "scikit-learn", "Search"],
    site: "https://afzu01.github.io/Semantic-FAQ-Retriever/",
    repo: "https://github.com/Afzu01/Semantic-FAQ-Retriever",
    backend: "backend.html#semantic-faq-retriever"
  },
  {
    name: "Student Deadline Guardian",
    category: "Automation",
    summary: "A student planning tool that scores deadlines by urgency and produces a structured weekly digest.",
    tags: ["FastAPI", "CSV", "Productivity"],
    site: "https://afzu01.github.io/Student-Deadline-Guardian/",
    repo: "https://github.com/Afzu01/Student-Deadline-Guardian",
    backend: "backend.html#student-deadline-guardian"
  },
  {
    name: "LocalBiz LeadFlow Assistant",
    category: "Automation",
    summary: "A lead intake workflow that receives webhook events, detects intent, assigns scores and tracks follow-up stages.",
    tags: ["FastAPI", "Automation", "SQLite"],
    site: "https://afzu01.github.io/LocalBiz-LeadFlow-Assistant/",
    repo: "https://github.com/Afzu01/LocalBiz-LeadFlow-Assistant",
    backend: "backend.html#localbiz-leadflow-assistant"
  },
  {
    name: "Campus Helpdesk Search",
    category: "AI & Search",
    summary: "A campus FAQ search interface with ranked semantic matches and confidence-based result filtering.",
    tags: ["FAQ", "Semantic Search", "FastAPI"],
    site: "https://afzu01.github.io/Campus-Helpdesk-Search/",
    repo: "https://github.com/Afzu01/Campus-Helpdesk-Search",
    backend: "backend.html#campus-helpdesk-search"
  }
];

const grid = document.getElementById("projectGrid");
const count = document.getElementById("projectCount");
const filters = document.querySelectorAll(".filter");

function renderProjects(category = "All") {
  const visible = category === "All" ? projects : projects.filter(project => project.category === category);
  count.textContent = String(visible.length).padStart(2, "0");
  grid.innerHTML = "";

  if (!visible.length) {
    grid.innerHTML = '<p class="empty-state">No projects in this category yet.</p>';
    return;
  }

  visible.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = `${index * 65}ms`;
    const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
    card.innerHTML = `
      <div class="card-topline"><span>PROJECT / ${String(projects.indexOf(project) + 1).padStart(2, "0")}</span><span class="card-symbol">✳</span></div>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="tag-list">${tags}</div>
      <div class="card-links">
        <a href="${project.site}" target="_blank" rel="noopener noreferrer">Project page ↗</a>
        <a href="${project.repo}" target="_blank" rel="noopener noreferrer">Source code ↗</a>
        <a href="${project.backend}">Technical notes ↗</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

renderProjects();