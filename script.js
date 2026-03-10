const projects = [
  {
    name: "AI Backened Internship Project",
    summary: "Recommendation, embeddings, and webhook-powered backend with an interactive demo UI.",
    tags: ["FastAPI", "Recommendations", "Embeddings"],
    site: "https://afzu01.github.io/AI-Backened-Internship-Project/ai-project/",
    repo: "https://github.com/Afzu01/AI-Backened-Internship-Project",
    workflow: [
      "Input product context and user constraints",
      "Generate recommendation candidates and embeddings",
      "Trigger automation through webhook events"
    ]
  },
  {
    name: "Workflow Orchestrator API",
    summary: "Operational event lifecycle API with status tracking and dashboard-style frontend.",
    tags: ["FastAPI", "SQLite", "Workflow"],
    site: "https://afzu01.github.io/Workflow-Orchestrator-API/",
    repo: "https://github.com/Afzu01/Workflow-Orchestrator-API",
    workflow: [
      "Create event with owner and priority",
      "Move through status lifecycle states",
      "Track summaries on dashboard"
    ]
  },
  {
    name: "Semantic FAQ Retriever",
    summary: "Semantic search over FAQ data using vectorized text retrieval and scoring.",
    tags: ["NLP", "scikit-learn", "Search"],
    site: "https://afzu01.github.io/Semantic-FAQ-Retriever/",
    repo: "https://github.com/Afzu01/Semantic-FAQ-Retriever",
    workflow: [
      "Embed FAQ text corpus",
      "Match user query by similarity ranking",
      "Return top answers with confidence"
    ]
  },
  {
    name: "Student Deadline Guardian",
    summary: "Deadline planning app with priority logic, digest generation, and clean planning UI.",
    tags: ["FastAPI", "CSV", "Productivity"],
    site: "https://afzu01.github.io/Student-Deadline-Guardian/",
    repo: "https://github.com/Afzu01/Student-Deadline-Guardian",
    workflow: [
      "Capture deadline and impact",
      "Calculate urgency and sort priorities",
      "Generate weekly digest checklist"
    ]
  },
  {
    name: "LocalBiz LeadFlow Assistant",
    summary: "Webhook lead intake, auto intent detection, and follow-up pipeline management.",
    tags: ["Leads", "Automation", "CRM"],
    site: "https://afzu01.github.io/LocalBiz-LeadFlow-Assistant/",
    repo: "https://github.com/Afzu01/LocalBiz-LeadFlow-Assistant",
    workflow: [
      "Ingest lead from webhook source",
      "Classify intent and assign lead score",
      "Update follow-up stage to close"
    ]
  },
  {
    name: "Campus Helpdesk Search",
    summary: "Campus support search layer with ranked semantic results and confidence filtering.",
    tags: ["FAQ", "Semantic", "Student Support"],
    site: "https://afzu01.github.io/Campus-Helpdesk-Search/",
    repo: "https://github.com/Afzu01/Campus-Helpdesk-Search",
    workflow: [
      "Index helpdesk FAQs",
      "Search by semantic query matching",
      "Return ranked guidance by department"
    ]
  }
];

const grid = document.getElementById("projectGrid");

projects.forEach((project, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.style.animation = `fadeInUp 550ms ease ${i * 90}ms both`;

  const badges = project.tags.map((tag) => `<span class="badge">${tag}</span>`).join("");
  const workflow = project.workflow.map((step, idx) => `<li>${idx + 1}. ${step}</li>`).join("");

  card.innerHTML = `
    <h3>${project.name}</h3>
    <div class="badges">${badges}</div>
    <p>${project.summary}</p>
    <ul class="workflow-list">${workflow}</ul>
    <div class="card-links">
      <a target="_blank" rel="noopener noreferrer" href="${project.site}">Website</a>
      <a target="_blank" rel="noopener noreferrer" href="${project.repo}#readme">README</a>
    </div>
  `;

  grid.appendChild(card);
});

const style = document.createElement("style");
style.textContent = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
document.head.appendChild(style);
