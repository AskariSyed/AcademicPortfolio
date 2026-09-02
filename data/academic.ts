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
  highlight: "Strong academic standing with focused concentration in Artificial Intelligence, Machine Learning, and Computer Vision.",
};

export const IELTS_RECORD: LanguageProficiency = {
  test: "IELTS Academic",
  overallScore: "7.0",
  cefrLevel: "C1",
  components: {
    writing: "6.5",
  },
};

export const SELECTED_COURSEWORK = [
  { code: "CS-411", name: "Artificial Intelligence", category: "Core AI", description: "Search algorithms, probabilistic reasoning, reinforcement learning fundamentals." },
  { code: "CS-422", name: "Machine Learning", category: "Core AI", description: "Supervised & unsupervised learning, kernel methods, neural architectures." },
  { code: "CS-483", name: "Computer Vision", category: "Specialization", description: "Image filtering, feature descriptors, segmentation, deep visual recognition backbones." },
  { code: "CS-201", name: "Data Structures & Algorithms", category: "Foundations", description: "Asymptotic analysis, trees, graphs, dynamic programming, algorithmic complexity." },
  { code: "CS-315", name: "Software Engineering", category: "Engineering", description: "System architecture, design patterns, lifecycle models, verification." },
  { code: "CS-334", name: "Compiler Construction", category: "Systems", description: "Lexical analysis, parsing algorithms, intermediate representations, code generation." },
  { code: "CS-362", name: "Information Security", category: "Security", description: "Cryptographic primitives, network protocols, threat modeling, integrity verification." },
  { code: "CS-328", name: "Web Technologies", category: "Systems", description: "Client-server architecture, modern web frameworks, asynchronous networking." },
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
    "PostgreSQL",
  ],
};
