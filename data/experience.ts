export type ExperienceType = "Academic" | "Internship";

export type ExperienceRelevance =
  | "Strong Academic Relevance"
  | "Strong Technical Relevance"
  | "Software Engineering Relevance";

export interface Experience {
  id: string;
  role: string;
  organization: string;
  department?: string;
  location?: string;
  startDate: string;
  endDate: string;
  period: string;
  type: ExperienceType;
  relevanceBadge: ExperienceRelevance;
  description?: string;
  bullets: string[];
  technologies?: string[];
  courses?: string[];
  researchRelevance?: string;
  certificateVerified?: boolean;
  featured?: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "teaching-assistant-comsats",
    role: "Teaching Assistant",
    organization: "COMSATS University Islamabad, Wah Campus",
    department: "Department of Computer Science",
    location: "Wah Cantt, Pakistan",
    startDate: "2025-02",
    endDate: "2026-06",
    period: "February 2025 – June 2026",
    type: "Academic",
    relevanceBadge: "Strong Academic Relevance",
    certificateVerified: true,
    description:
      "Teaching Assistant across four undergraduate Computer Science courses, supporting instructors with assessment, student academic assistance, viva examinations, and course administration across Spring 2025–Spring 2026.",
    courses: [
      "Data Structures & Algorithms",
      "Pattern Recognition",
      "Compiler Construction",
      "Artificial Intelligence (CSC462)",
    ],
    technologies: [
      "Data Structures & Algorithms",
      "Pattern Recognition",
      "Compiler Construction",
      "Artificial Intelligence",
    ],
    bullets: [
      "Assisted with the preparation and administration of quizzes, assignments, and examinations.",
      "Evaluated and marked quizzes, assignments, and examinations.",
      "Conducted and assisted with student viva examinations.",
      "Supported instructors in managing and coordinating assessment activities.",
      "Assisted students with academic queries and provided clarification regarding course-related tasks.",
      "Maintained and organized assessment records and marks.",
      "Assisted with other academic and administrative tasks related to the courses as assigned by instructors.",
    ],
    researchRelevance:
      "Teaching Assistant service across core computer science and AI disciplines, providing foundational exposure to university-level academic instruction, student mentoring, assessment coordination, and academic administration.",
    featured: true,
  },
  {
    id: "ict-intern-pta",
    role: "ICT Intern",
    organization: "Pakistan Telecommunication Authority (PTA)",
    department: "Information & Communications Technology Directorate",
    location: "Islamabad, Pakistan",
    startDate: "2025-07",
    endDate: "2025-09",
    period: "July 2025 – September 2025",
    type: "Internship",
    relevanceBadge: "Strong Technical Relevance",
    description:
      "Backend API architecture, normalized relational database design, and mobile client integration for internal regulatory workflows.",
    technologies: [
      "ASP.NET",
      "ASP.NET Web API",
      "REST APIs",
      "Relational Databases",
      "Database Design",
      "Flutter",
      "Dart",
      "Backend Development",
    ],
    bullets: [
      "Developed ASP.NET Web API backend services for an E-Diary system, digitizing internal documentation workflows.",
      "Designed normalized relational database schemas for efficient data storage and retrieval.",
      "Developed a Flutter-based frontend integrated with REST APIs, delivering a responsive user experience.",
    ],
    researchRelevance:
      "Strengthened experience in backend architecture, database design, API development, and full-stack system integration.",
    featured: true,
  },
  {
    id: "sqa-intern-hbl",
    role: "Software Quality Assurance Intern",
    organization: "HBL Microfinance Bank Ltd.",
    department: "Quality Assurance & Software Testing",
    location: "Islamabad, Pakistan",
    startDate: "2024-07",
    endDate: "2024-09",
    period: "July 2024 – September 2024",
    type: "Internship",
    relevanceBadge: "Software Engineering Relevance",
    description:
      "Manual and automated quality assurance, systematic defect lifecycle management, and test automation for digital banking platforms.",
    technologies: [
      "Software Testing",
      "Functional Testing",
      "Regression Testing",
      "Non-Functional Testing",
      "Agile QA",
      "Test Automation",
      "VBA",
      "Microsoft Excel",
      "Android Testing",
    ],
    bullets: [
      "Performed manual functional, regression, and non-functional testing for web and Android banking applications.",
      "Reported, tracked, and verified software defects using standard Agile QA procedures.",
      "Automated repetitive testing tasks utilizing VBA and Excel, improving overall testing efficiency.",
    ],
    researchRelevance:
      "Developed practical experience in software quality assurance, systematic defect analysis, regression testing, and test automation.",
    featured: true,
  },
];
