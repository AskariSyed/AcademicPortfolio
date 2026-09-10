export interface Publication {
  slug: string;
  title: string;
  year: number;
  authors: string[];
  status: "Submitted Manuscript" | "Manuscript in Preparation" | string;
  stage: "submitted" | "in_preparation";
  venue?: string;
  targetVenue?: string;
  researchAreas: string[];
  description: string;
  problem: string;
  researchQuestion: string;
  approach: string;
  methodologyPipeline: string[];
  projectSlug: string;
  resultsNote?: string;
  links?: {
    paper?: string;
    code?: string;
    dataset?: string;
    poster?: string;
  };
}

export const PUBLICATIONS: Publication[] = [
  {
    slug: "decentralized-greedy-interview-scheduling",
    title: "Decentralized Greedy Scheduling for Interview Allocation at Job Fairs",
    year: 2026,
    authors: [
      "Muhammad Hassan Askari",
      "Sulimana Huma",
      "Shumaim Zafar",
      "Ashfaq Ahmed",
      "Dr. Khalid Iqbal",
      "Dr. Muhammad Bilal",
    ],
    status: "Submitted Manuscript",
    stage: "submitted",
    venue: "HITE 2026",
    researchAreas: [
      "Algorithms & Optimization",
      "Combinatorial Scheduling",
      "Resource Allocation",
      "Systems Concurrency",
    ],
    description:
      "A research investigation into constrained interview scheduling, greedy allocation, fairness, and concurrency-aware validation for high-throughput job-fair environments.",
    problem:
      "Allocating interviews at job fairs requires resolving constrained student and company schedules under coupled availability and temporal constraints.",
    researchQuestion:
      "How can interview scheduling under coupled two-sided availability, temporal constraints, fairness requirements, and concurrent requests be formulated and solved efficiently within a high-throughput job-fair environment?",
    approach:
      "A greedy scheduling strategy combined with conflict-handling mechanisms and database-level validation to support concurrent execution.",
    methodologyPipeline: [
      "Research Problem",
      "Scheduling Strategy",
      "Empirical Evaluation",
    ],
    projectSlug: "decentralized-greedy-interview-scheduling",
    resultsNote:
      "Detailed datasets, configurations, numerical results, and statistical analyses remain private while the manuscript is under review.",
    links: {
      // Unpublished manuscript under peer review; implementation maintained in private repository
    },
  },
  {
    slug: "traffic-sign-classification-snow-degraded",
    title: "Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions",
    year: 2026,
    authors: ["Muhammad Hassan Askari", "Muhammad Shareef", "Marwa Khanam"],
    status: "Manuscript in Preparation",
    stage: "in_preparation",
    targetVenue: "MDPI Sensors",
    researchAreas: [
      "Computer Vision",
      "Robust Recognition",
      "Environmental Domain Shift",
      "Deep Learning",
    ],
    description:
      "A study of robust traffic sign classification under snow-degraded visual conditions, investigating a task-aware multi-stage framework combining controlled environmental degradation, image restoration, and downstream classification.",
    problem:
      "Severe snow degradation introduces visual occlusions, scattering, and contrast attenuation, obscuring discriminative fine-grained sign features and creating an acute distribution shift.",
    researchQuestion:
      "How can a recognition system maintain reliable classification when environmental degradation progressively removes useful visual information?",
    approach:
      "A task-aware multi-stage framework designed to coordinate deep image restoration with robust classification, recovering discriminative evidence prior to final category prediction.",
    methodologyPipeline: [
      "Snow-Degraded Image",
      "Data Preparation",
      "Image Restoration",
      "Feature Recovery",
      "Traffic Sign Classification",
      "Predicted Sign Class",
    ],
    projectSlug: "task-aware-traffic-sign-classification",
    resultsNote:
      "Early experimental evaluation indicates that the proposed multi-stage approach can substantially improve traffic-sign recognition under snow-degraded conditions. The experimental analysis is currently being refined as part of manuscript preparation, with future submission planned for MDPI Sensors.",
    links: {
      // Intentionally omitting unreleased links to strictly adhere to research credibility
    },
  },
];
