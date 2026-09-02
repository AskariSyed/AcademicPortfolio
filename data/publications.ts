export interface Publication {
  slug: string;
  title: string;
  year: number;
  authors: string[];
  status: string;
  researchAreas: string[];
  problem: string;
  researchQuestion: string;
  approach: string;
  methodologyPipeline: string[];
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
    slug: "traffic-sign-classification-snow-degraded",
    title: "Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions",
    year: 2026,
    authors: ["Muhammad Hassan Askari", "Muhammad Shareef"],
    status: "Manuscript in Preparation",
    researchAreas: [
      "Computer Vision",
      "Robust Recognition",
      "Environmental Domain Shift",
      "Deep Learning",
    ],
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
    resultsNote:
      "Early experimental evaluation indicates that the proposed multi-stage approach can substantially improve traffic-sign recognition under snow-degraded conditions. The experimental analysis is still being refined as part of the manuscript preparation process intended for submission to MDPI Sensors.",
    links: {
      // Intentionally omitting unreleased links to strictly adhere to research credibility
    },
  },
];
