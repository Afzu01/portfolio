# Afzal Hussain — Portfolio

> Curious by nature. Engineering by choice.

A personal portfolio showcasing my work across **applied AI, data, backend engineering, search and automation**. Built with plain HTML, CSS and JavaScript, with no framework or build step.

<p align="center">
  <a href="https://afzu01.github.io/portfolio/"><strong>View Live Portfolio ↗</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/Afzu01"><strong>GitHub Profile ↗</strong></a>
</p>

---

## About

I'm an undergraduate pursuing a **BSc (Hons) in Data Science & AI at IIT Guwahati**. I enjoy exploring how intelligent applications, data and software systems fit together.

My current priorities are strengthening my fundamentals, building practical projects and learning to design reliable, useful systems.

**Areas I'm exploring**
- Applied AI and machine learning
- Data engineering and information retrieval
- Backend systems and APIs
- Workflow automation
- Hardware–software integration

## Selected projects

The portfolio currently features six projects:

| Project | Focus | Technologies |
|---|---|---|
| [AI Backend Internship Project](https://github.com/Afzu01/AI-Backened-Internship-Project) | Recommendations, embeddings and event handling | FastAPI |
| [Workflow Orchestrator API](https://github.com/Afzu01/Workflow-Orchestrator-API) | Event-driven workflow lifecycle and summaries | FastAPI, SQLite |
| [Semantic FAQ Retriever](https://github.com/Afzu01/Semantic-FAQ-Retriever) | Semantic FAQ retrieval and ranking | scikit-learn, TF-IDF |
| [Student Deadline Guardian](https://github.com/Afzu01/Student-Deadline-Guardian) | Deadline prioritisation and weekly digests | FastAPI, CSV |
| [LocalBiz LeadFlow Assistant](https://github.com/Afzu01/LocalBiz-LeadFlow-Assistant) | Lead intake, scoring and follow-up workflow | FastAPI, SQLite |
| [Campus Helpdesk Search](https://github.com/Afzu01/Campus-Helpdesk-Search) | Campus FAQ search and ranked results | Semantic Search, FastAPI |

Visit the [live portfolio](https://afzu01.github.io/portfolio/) for project pages and technical notes.

## Run locally

No dependencies or package installation are required.

1. Clone this repository:
   ```bash
   git clone https://github.com/Afzu01/portfolio.git
   cd portfolio
   ```
2. Open `index.html` in your browser.

   Alternatively, start a local static server:
   ```bash
   python -m http.server 8000
   ```
   Then visit [http://localhost:8000](http://localhost:8000).

## Deploy with GitHub Pages

This repository is configured as a static-site project and can be hosted for free with GitHub Pages.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**.
4. Save and wait for GitHub Pages to publish the site.

Because this repository is named `portfolio`, its expected project-site URL is:

**https://afzu01.github.io/portfolio/**

For a personal site at `https://afzu01.github.io/`, the repository must instead be named `Afzu01.github.io` (GitHub Pages repository naming is case-insensitive).

## Project structure

```text
portfolio/
├── index.html      # Main portfolio page
├── backend.html    # Technical notes for the projects
├── styles.css      # Layout, typography and responsive styling
├── script.js       # Project data, cards and category filters
├── ai-project/     # Supporting project page/assets
└── README.md       # Project documentation
```

## Updating the portfolio

- **Add or edit a project:** update the `projects` array in `script.js`.
- **Change the design:** edit `styles.css`.
- **Edit page content or navigation:** update `index.html`.
- **Update technical notes:** edit `backend.html`.
- Keep project repository and live-site URLs accurate when names or deployments change.

---

<p align="center">
  Made with curiosity and plain HTML, CSS & JavaScript.
  <br />
  <strong>Afzal Hussain</strong> · <a href="https://github.com/Afzu01">GitHub</a>
</p>
