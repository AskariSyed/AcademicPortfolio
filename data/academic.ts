export interface EducationRecord {
  degree: string;
  institution: string;
  campus: string;
  period: string;
  cgpa: string;
  totalCgpa: string;
  credits: number;
  highlight: string;
}

export interface LanguageProficiency {
  test: string;
  overallScore: string;
  cefrLevel: string;
  components: {
    writing: string;
    reading?: string;
    speaking?: string;
    listening?: string;
  };
}

export interface AcademicCourse {
  semester?: string;
  code?: string;
  title: string;
  credits?: number;
  category: string;
}

export interface CourseGroup {
  category: string;
  description: string;
  courses: AcademicCourse[];
}

export interface TeachingExperience {
  role: string;
  course: string;
  duration: string;
  semestersCount?: number;
  description: string;
  institution: string;
}

export const EDUCATION: EducationRecord = {
  degree: "Bachelor of Science in Computer Science",
  institution: "COMSATS University Islamabad",
  campus: "Wah Campus",
  period: "2022–2026",
  cgpa: "3.65",
  totalCgpa: "4.00",
  credits: 133,
  highlight:
    "Rigorous undergraduate training across artificial intelligence, algorithms, software engineering, and systems architectures.",
};

export const IELTS_RECORD: LanguageProficiency = {
  test: "IELTS Academic",
  overallScore: "7.0",
  cefrLevel: "C1",
  components: {
    writing: "6.5",
  },
};

export const COURSE_GROUPS: CourseGroup[] = [
  {
    category: "Computing Foundations",
    description:
      "Core paradigms of computer science, programming architectures, and low-level digital logic.",
    courses: [
      { code: "CSC101", title: "Introduction to ICT", credits: 3, category: "Computing Foundations" },
      { code: "CSC103", title: "Programming Fundamentals", credits: 4, category: "Computing Foundations" },
      { code: "CSC270", title: "Object Oriented Programming", credits: 4, category: "Computing Foundations" },
      { code: "CSC102", title: "Discrete Structures", credits: 3, category: "Computing Foundations" },
      { code: "EEE241", title: "Digital Logic Design", credits: 3, category: "Computing Foundations" },
      { code: "CSC325", title: "Computer Organization & Assembly Language", credits: 3, category: "Computing Foundations" },
    ],
  },
  {
    category: "Algorithms & AI",
    description:
      "Algorithmic complexity, formal language theory, and foundational artificial intelligence principles.",
    courses: [
      { code: "CSC211", title: "Data Structures and Algorithms", credits: 4, category: "Algorithms & AI" },
      { code: "CSC301", title: "Design and Analysis of Algorithms", credits: 3, category: "Algorithms & AI" },
      { code: "CSC462", title: "Artificial Intelligence", credits: 4, category: "Algorithms & AI" },
      { code: "CSC312", title: "Theory of Automata", credits: 3, category: "Algorithms & AI" },
      { code: "CSC441", title: "Theory of Programming Languages", credits: 4, category: "Algorithms & AI" },
    ],
  },
  {
    category: "Software & Systems",
    description:
      "Enterprise software design, database engines, distributed processing, networking, security, and compilers.",
    courses: [
      { code: "CSC315", title: "Software Engineering Concepts", credits: 4, category: "Software & Systems" },
      { code: "CSC350", title: "Database Systems", credits: 4, category: "Software & Systems" },
      { code: "CSC340", title: "Computer Networks", credits: 3, category: "Software & Systems" },
      { title: "Principles of Operating Systems", category: "Software & Systems" },
      { code: "CSC499", title: "Compiler Construction", credits: 4, category: "Software & Systems" },
      { code: "CSC334", title: "Parallel and Distributed Computing", credits: 3, category: "Software & Systems" },
      { code: "CSC336", title: "Web Technologies", credits: 3, category: "Software & Systems" },
      { code: "CSC303", title: "Mobile Application Development", credits: 3, category: "Software & Systems" },
      { code: "CSC432", title: "Information Security", credits: 3, category: "Software & Systems" },
      { title: "DevOps for Cloud Computing", credits: 3, category: "Software & Systems" },
    ],
  },
  {
    category: "Mathematics & Quantitative Foundations",
    description:
      "Calculus, linear algebra, probability, and physics providing mathematical rigor for computational modeling.",
    courses: [
      { code: "CSC410", title: "Calculus and Analytic Geometry", credits: 3, category: "Mathematics & Quantitative Foundations" },
      { code: "MTH105", title: "Multivariable Calculus", credits: 3, category: "Mathematics & Quantitative Foundations" },
      { code: "CSC412", title: "Linear Algebra", credits: 3, category: "Mathematics & Quantitative Foundations" },
      { code: "MTH375", title: "Statistics and Probability Theory", credits: 3, category: "Mathematics & Quantitative Foundations" },
      { code: "PHY121", title: "Applied Physics for Engineers", credits: 4, category: "Mathematics & Quantitative Foundations" },
    ],
  },
  {
    category: "Professional & Supporting Studies",
    description:
      "Technical reporting, communication, ethics, management, and capstone senior design projects.",
    courses: [
      { code: "CSC498", title: "Professional Practices", credits: 3, category: "Professional & Supporting Studies" },
      { title: "Senior Design Project I", category: "Professional & Supporting Studies" },
      { title: "Senior Design Project II", credits: 4, category: "Professional & Supporting Studies" },
      { code: "CSC418", title: "Topics in Computer Science I", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM103", title: "Communication Skills", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM102", title: "Report Writing Skills", credits: 3, category: "Professional & Supporting Studies" },
      { code: "MGT101", title: "Introduction to Management", credits: 3, category: "Professional & Supporting Studies" },
      { code: "MGT350", title: "Human Resource Management", credits: 3, category: "Professional & Supporting Studies" },
      { code: "CSC323", title: "Financial Accounting", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM430", title: "French", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM100", title: "English Comprehension and Composition", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM110", title: "Islamic Studies", credits: 3, category: "Professional & Supporting Studies" },
      { code: "HUM111", title: "Pakistan Studies", credits: 3, category: "Professional & Supporting Studies" },
    ],
  },
];

export const SELECTED_COURSEWORK: AcademicCourse[] = COURSE_GROUPS.flatMap(
  (group) => group.courses
);

export const RESEARCH_INTERESTS: string[] = [
  "Computer Vision",
  "Robust Machine Learning",
  "Deep Learning",
  "Domain Adaptation",
  "Domain Generalization",
  "Few-Shot Learning",
  "Multimodal AI",
  "Vision-Language Models",
  "Visual Reliability & Uncertainty Modeling",
];

export const TEACHING_EXPERIENCE: TeachingExperience[] = [
  {
    role: "Teaching Assistant",
    course: "Artificial Intelligence (CSC462)",
    duration: "Spring 2026",
    semestersCount: 1,
    institution: "COMSATS University Islamabad — Wah Campus",
    description:
      "Served as a Teaching Assistant for Artificial Intelligence (CSC462) during Spring 2026, supporting assessment activities, student viva examinations, academic queries, and maintenance of assessment records.",
  },
  {
    role: "Teaching Assistant",
    course: "Data Structures & Algorithms",
    duration: "3 Semesters (Spring 2025 – Spring 2026)",
    semestersCount: 3,
    institution: "COMSATS University Islamabad — Wah Campus",
    description:
      "Served as a Teaching Assistant across multiple semesters, supporting quizzes, assignments, examinations, student viva sessions, academic queries, and assessment administration.",
  },
  {
    role: "Teaching Assistant",
    course: "Pattern Recognition",
    duration: "2 Semesters (Spring 2025 – Spring 2026)",
    semestersCount: 2,
    institution: "COMSATS University Islamabad — Wah Campus",
    description:
      "Served as a Teaching Assistant, supporting assessment activities, student academic queries, viva sessions, and course-related academic administration.",
  },
  {
    role: "Teaching Assistant",
    course: "Compiler Construction",
    duration: "1 Semester (Spring 2025 – Spring 2026)",
    semestersCount: 1,
    institution: "COMSATS University Islamabad — Wah Campus",
    description:
      "Served as a Teaching Assistant, assisting with quizzes, assignments, examinations, viva sessions, student queries, and assessment administration.",
  },
];

export const RESEARCH_TOOLKIT = {
  research: [
    "Computer Vision",
    "Deep Learning",
    "Robust Machine Learning",
    "Domain Adaptation",
    "Domain Generalization",
    "Few-Shot Learning",
    "Multimodal Learning",
    "Vision-Language Models",
    "Uncertainty Modeling",
  ],
  tools: [
    "Python",
    "PyTorch",
    "OpenCV",
    "NumPy",
    "Pandas",
    "CUDA",
    "Jupyter",
    "Git",
  ],
  engineering: [
    "C#",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "FastAPI",
    "SQL Server",
    "PostgreSQL",
    "Docker",
    "Flutter",
  ],
};
