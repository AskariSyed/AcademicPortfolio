# Muhammad Hassan Askari — Academic Research Portfolio

Academic and research portfolio of **Muhammad Hassan Askari**, a Computer Science graduate focused on Computer Vision, Robust Machine Learning, Domain Adaptation, Few-Shot Learning, and Multimodal AI.

* **Production URL:** [https://research.askarisyed.com](https://research.askarisyed.com)  
* **Academic Background:** BS in Computer Science, COMSATS University Islamabad, Wah Campus  
* **Degree Period:** 2022–2026 (133 Credits Completed) · CGPA: 3.65 / 4.00 · IELTS Academic: 7.0 (CEFR C1)

---

## Research Focus

My academic and experimental work centers on developing reliable visual intelligence capable of operating under distribution shifts, physical corruptions, and limited supervision:

* **Computer Vision**
* **Robust Machine Learning**
* **Domain Adaptation & Domain Generalization**
* **Few-Shot Learning**
* **Multimodal AI & Vision-Language Models**
* **Visual Reliability & Uncertainty Modeling**

### Research Trajectory

```text
Snow-Degraded Traffic Signs
           ↓
Robust Visual Recognition
           ↓
Environmental Domain Shift
           ↓
Few-Shot Adaptation
           ↓
Visual Reliability
           ↓
Multimodal AI
```

The portfolio focuses on developing reliable intelligent systems when visual evidence becomes degraded, incomplete, uncertain, or distributionally shifted. By analyzing degradation mechanics—from atmospheric corruptions in adverse weather to distribution shifts across generative synthesis pipelines—this research explores how feature recovery, adaptation protocols, and uncertainty awareness can restore predictive reliability in downstream vision models.

---

## Featured Research

### 1. Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions
* **Status:** `Manuscript in Preparation` *(Intended for future submission to MDPI Sensors)*
* **Category:** Computer Vision · Robust Recognition · Environmental Domain Shift
* **Overview:** An ongoing study of robust traffic sign recognition under snow-degraded visual conditions, investigating a multi-stage approach combining controlled environmental degradation, image restoration, and deep-learning-based classification to study how recognition behavior changes when visual evidence becomes partially obscured.
* **Public Boundary:** High-level problem formulation and methodology are documented publicly. Unpublished abstract text, exact experimental percentages, confusion matrices, and private manuscript files remain confidential.

### 2. Few-Shot Adaptation for AI-Generated Image Detection under Unseen Generator Distribution Shift
* **Status:** `Experimental Validation & Statistical Analysis Ongoing`
* **Category:** Few-Shot Learning · Generative AI Detection · Distribution Shift
* **Overview:** An experimental study investigating whether an AI-generated image detector trained on several generation sources can adapt to an unseen generator using only a small number of labeled examples under a leave-generator-out evaluation protocol.
* **Public Boundary:** The research repository is currently private. Source code, notebooks, dataset splits, and raw experimental logs are not publicly hosted.

### 3. Decentralized Greedy Scheduling for Interview Allocation at Job Fairs
* **Status:** `Initial Research Phase`
* **Category:** Algorithms · Combinatorial Optimization · Resource Allocation
* **Overview:** An ongoing algorithmic investigation of priority-based interview scheduling for job fairs, examining two-sided temporal constraints, conflict-jumping greedy search heuristics, computational complexity, buffer duration effects, and allocation fairness.

---

## Academic Background

* **Degree:** Bachelor of Science in Computer Science
* **Institution:** COMSATS University Islamabad — Wah Campus (2022–2026)
* **Academic Standing:** Graduated · 133 Credits Completed
* **CGPA:** 3.65 / 4.00
* **English Proficiency:** IELTS Academic — Overall Band 7.0 (CEFR C1)

---

## Teaching & Academic Experience

* **Position:** Teaching Assistant
* **Institution:** Department of Computer Science, COMSATS University Islamabad — Wah Campus
* **Period:** February 2025 – June 2026
* **Courses Served:**
  * **Data Structures & Algorithms** (3 Semesters, Spring 2025 – Spring 2026)
  * **Pattern Recognition** (2 Semesters, Spring 2025 – Spring 2026)
  * **Compiler Construction** (1 Semester, Spring 2025 – Spring 2026)
  * **Artificial Intelligence / CSC462** (1 Semester, Spring 2026)
* **Officially Verified Responsibilities:**
  * Assisted instructors with the preparation, administration, evaluation, and marking of quizzes, assignments, and examinations.
  * Conducted and assisted with student viva examinations.
  * Supported instructors in managing and coordinating course assessment activities.
  * Assisted students with academic queries and provided clarification regarding course-related tasks.
  * Maintained and organized assessment records and marks.
  * Carried out administrative and academic tasks required for effective course administration.

*(All teaching assistant descriptions adhere strictly to official university certificates; inferred technical claims or unverified responsibilities are excluded.)*

---

## Professional Experience

* **Pakistan Telecommunication Authority (PTA)** — ICT Intern *(July 2025 – September 2025)*
  * ASP.NET Web API, relational database modeling, REST API integration, and Flutter mobile interfaces.
* **HBL Microfinance Bank Ltd.** — Software Quality Assurance Intern *(July 2024 – September 2024)*
  * Functional, regression, and non-functional testing within an Agile QA environment; defect lifecycle tracking; VBA/Excel test automation.

---

## Website Sections

| Section | Route | Purpose |
| :--- | :--- | :--- |
| **Research** | `/research` | Research agenda, core theoretical inquiries, visual uncertainty modeling, and conceptual future pipelines. |
| **Publications** | `/publications` | Peer-reviewed manuscripts in preparation and active conceptual research directions. |
| **Projects** | `/projects` | Dedicated academic laboratory case studies and empirical algorithmic projects. |
| **Experience** | `/experience` | Certificate-backed teaching assistant timeline, technical internships, and progression continuum. |
| **Certificates** | `/certificates` | Framed physical office gallery wall with verified authentic academic awards and competition credentials. |
| **About** | `/about` | Formal undergraduate degree details, coursework breakdown, and research toolkit. |
| **Academic CV** | `/cv` | Direct PDF download and embedded viewer for prospective graduate evaluators. |
| **Contact** | `/contact` | Direct academic correspondence channels and verified professional profiles. |

---

## Design Philosophy

The website intentionally adopts a **research-first academic aesthetic** tailored for academic evaluators, admissions committees, and potential research mentors:

* **Scholarly Focus:** Primary emphasis on problem formulations, formal research questions, methodology flowcharts, and research evolution.
* **Typographic Hierarchy:** Clean editorial pairing using Inter for interfaces and Newsreader serif for quotations and paper summaries.
* **Restrained Visual Language:** Subdued palette (academic navy, crisp slate, subtle borders) avoiding flashy commercial SaaS tropes.
* **Progressive Disclosure:** High-level conceptual diagrams and summaries with optional expanding details.

---

## Research Integrity & Privacy

* **Public Disclosures:** Public case studies provide high-level conceptual overviews of ongoing research problems, theoretical questions, and overall architectures.
* **Unpublished Material:** Exact unpublished numerical metrics, complete manuscript texts, draft abstracts, benchmark spreadsheets, and private source repositories are intentionally omitted.
* **Conservative Status Labels:** Project maturity statuses (`Manuscript in Preparation`, `Experimental Validation Ongoing`, `Initial Research Phase`) accurately state the current stage of investigation without overclaiming publication or acceptance.

---

## Repository Structure

```text
.
├── app/                                    # Next.js App Router routes
│   ├── layout.tsx                          # Root layout, fonts, and JSON-LD schema
│   ├── page.tsx                            # Portfolio homepage
│   ├── globals.css                         # Global CSS tokens and print styles
│   ├── robots.ts                           # Dynamic robots.txt metadata route
│   ├── sitemap.ts                          # Dynamic XML sitemap generator
│   ├── about/page.tsx                      # Academic background and coursework
│   ├── certificates/page.tsx               # Framed gallery wall of credentials
│   ├── contact/page.tsx                    # Academic inquiry channels
│   ├── cv/page.tsx                         # Embedded PDF viewer and CV actions
│   ├── experience/page.tsx                 # Academic & professional experience
│   ├── projects/
│   │   ├── page.tsx                        # Research & engineering project catalog
│   │   └── [slug]/page.tsx                 # Dynamic project case study router
│   ├── publications/
│   │   ├── page.tsx                        # Scholarly manuscripts & directions
│   │   └── [slug]/page.tsx                 # Detailed publication records
│   └── research/page.tsx                   # Research agenda and theoretical focus
├── components/                             # Modular UI and case study components
│   ├── about/                              # Academic background & teaching components
│   ├── certificates/                       # Gallery wall, frames, and lightbox modal
│   ├── contact/                            # Direct email and inquiry forms
│   ├── experience/                         # Experience cards, timeline, and progression
│   ├── hero/                               # Academic hero section and scientific figure
│   ├── layout/                             # Navbar, footer, and section containers
│   ├── navigation/                         # Responsive navigation bar
│   ├── projects/                           # Dedicated laboratory case study components
│   ├── publications/                       # Publication cards and status badges
│   ├── research/                           # Research focus, journey, and inquiry cards
│   └── ui/                                 # Shared icons and accessible UI utilities
├── data/                                   # Central TypeScript data architecture
│   ├── academic.ts                         # Degree, courses, and verified TA records
│   ├── certificates.ts                     # Authentic verified certificate objects
│   ├── experience.ts                       # Structured career and academic roles
│   ├── projects.ts                         # Research case study content and metadata
│   ├── publications.ts                     # Manuscript records and target venues
│   └── research.ts                         # Research identity and focus areas
├── public/                                 # Public static assets
│   ├── cv/                                 # Downloadable Academic CV PDF
│   └── data/certificates/                  # High-resolution certificate previews and PDFs
├── package.json                            # Scripts and dependency specifications
├── postcss.config.mjs                      # PostCSS pipeline configuration
├── tailwind.config.ts                      # Custom theme and typography extensions
├── tsconfig.json                           # TypeScript compiler configuration
└── README.md                               # Project documentation
```

---

## Adding New Content

The portfolio is driven by a schema-backed TypeScript data layer under `data/`:

### Adding a Research Project
1. Open `data/projects.ts` and append a new `Project` definition.
2. Define core fields: `slug`, `title`, `year`, `status`, `tags`, and high-level `summary`.
3. If creating a dedicated case study, add a corresponding typed case study sub-object and component under `components/projects/`.
4. Ensure no unpublished numbers, abstracts, or private repository URLs are included.
5. Verify build integrity via `npm run lint` and `npm run build`.

### Adding Experience
1. Open `data/experience.ts` and add an `Experience` object.
2. Specify verified role, institution, period, and exact responsibilities.
3. Apply the **No Fabrication Principle**: Never infer teaching or technical responsibilities from course or job titles.

---

## Technology Stack

* **Framework:** Next.js 15.1 (App Router, React Server Components, Static Site Generation)
* **Library:** React 19.0
* **Language:** TypeScript 5.7
* **Styling:** Tailwind CSS 3.4
* **Icons:** Lucide React
* **Animation:** Framer Motion (subtle micro-interactions with reduced-motion support)

---

## Local Development

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Run static type and ESLint checks
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

The development server runs at `http://localhost:3000`.

---

## Production Build & Deployment

The portfolio is pre-rendered as a static bundle through Next.js SSG:

```bash
npm run build
```

* **Target Production Domain:** `https://research.askarisyed.com`
* **Hosting:** Compatible with Vercel, Cloudflare Pages, AWS Amplify, or any standard Node.js/static edge environment.
* **Environment Variables:** No environment variables are required for the current public portfolio configuration.

---

## Accessibility & Responsive Design

* **Semantic Structure:** Native HTML5 semantic landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
* **Keyboard Accessibility:** All interactive elements, filter tabs, modal dialogs, and disclosure controls support full keyboard navigation.
* **Contrast & Legibility:** Text color tokens calibrated against light/card backgrounds to exceed WCAG AA contrast standards.
* **Reduced Motion:** Interactive transitions respect system-level `prefers-reduced-motion` settings.
* **Responsive Layouts:** Multi-column desktop views transition into natural linear flows on tablet and mobile viewports.

---

## SEO & Discoverability

* **Dynamic Metadata:** Custom page titles and OpenGraph tags generated across all static and dynamic project routes.
* **Structured Data:** JSON-LD schema (`ProfilePage`, `Person`, `ScholarlyArticle`) configured in `app/layout.tsx`.
* **Search Routing:** Native `robots.ts` and `sitemap.ts` endpoints automatically served at `/robots.txt` and `/sitemap.xml`.

---

## Research Portfolio Philosophy

> This portfolio separates professional software engineering experience from my developing academic research identity. Software engineering provides the implementation foundation, while the research portfolio emphasizes research questions, methodology, experimental reasoning, and future research directions.

---

## Author

**Muhammad Hassan Askari**  
Computer Science Graduate · AI & Computer Vision Researcher  
*Research Interests:* Computer Vision · Robust ML · Domain Adaptation · Few-Shot Learning · Multimodal AI

* **Website:** [https://research-with-askari.vercel.app](https://research-with-askari.vercel.app)  
* **GitHub:** [https://github.com/AskariSyed](https://github.com/AskariSyed)  
* **LinkedIn:** [https://www.linkedin.com/in/syed-hassan-askari/](https://www.linkedin.com/in/syed-hassan-askari/)  
* **Email:** [askari.syed04@gmail.com](mailto:askari.syed04@gmail.com)

---

## License

License: Not currently specified. *(Research materials, manuscripts, and private repositories remain proprietary.)*
