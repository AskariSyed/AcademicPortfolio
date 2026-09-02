export interface ResearchFocusCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
}

export interface ResearchJourneyStep {
  step: number;
  title: string;
  tag: string;
  description: string;
}

export interface ResearchQuestion {
  number: string;
  question: string;
  context: string;
}

export interface ConceptualPipelineStep {
  id: string;
  title: string;
  description: string;
}

export interface ResearchDirection {
  id: string;
  title: string;
  label: "Concept / Work in Progress";
  summary: string;
  motivation: string;
  keyQuestions: string[];
}

export const RESEARCH_IDENTITY = {
  name: "Muhammad Hassan Askari",
  title: "Early-Career AI & Computer Vision Researcher",
  researchFields: "Computer Vision · Robust Machine Learning · Domain Adaptation · Multimodal AI",
  primaryStatement: "Reliable Visual Intelligence Under Environmental Domain Shift",
  headline: "I study how AI systems can remain reliable when visual evidence becomes uncertain, incomplete, degraded, or distributionally shifted.",
  supportingStatement: "My research interests lie at the intersection of Computer Vision, Robust Machine Learning, Domain Generalization, Domain Adaptation, and Multimodal AI, with a particular focus on reliable visual understanding under challenging real-world conditions.",
  institution: "COMSATS University Islamabad — Wah Campus",
  degree: "BS Computer Science",
  period: "2022–2026",
  cgpa: "3.65 / 4.00",
  credits: "133 Credits",
  ielts: "7.0 Overall (CEFR C1)",
  currentObjective: "Seeking Master's opportunities that align with my research in computer vision, domain adaptation, and reliable visual intelligence.",
  fundingObjective: "Seeking Master's opportunities that align with my research.",
  email: "askari.syed04@gmail.com",
  github: "https://github.com/AskariSyed",
  linkedin: "https://www.linkedin.com/in/syed-hassan-askari/",
  preferredDomain: "https://research.askarisyed.com",
};

export const RESEARCH_FOCUS_CARDS: ResearchFocusCard[] = [
  {
    id: "robust-cv",
    title: "ROBUST COMPUTER VISION",
    tagline: "Perception under severe visual corruption",
    description: "Developing visual recognition systems that remain reliable under snow, fog, rain, low light, blur, noise, and other environmental degradations.",
    topics: ["Robust Recognition", "Image Degradation", "Visual Reliability"],
  },
  {
    id: "domain-adaptation",
    title: "DOMAIN ADAPTATION & GENERALIZATION",
    tagline: "Generalizing across shifted distributions",
    description: "Studying how models can generalize across changing visual distributions and adapt to unseen environments with limited target-domain supervision.",
    topics: ["Domain Generalization", "Domain Adaptation", "Few-Shot Learning"],
  },
  {
    id: "multimodal-ai",
    title: "MULTIMODAL AI",
    tagline: "Cross-modal reasoning with degraded vision",
    description: "Exploring how vision-language models can combine visual and linguistic evidence while recognizing uncertainty and unreliable visual inputs.",
    topics: ["VLMs", "MLLMs", "Cross-Modal Learning"],
  },
  {
    id: "trustworthy-vision",
    title: "TRUSTWORTHY VISUAL INTELLIGENCE",
    tagline: "Epistemic uncertainty & evidence estimation",
    description: "Investigating how AI systems can estimate evidence reliability before making predictions or reasoning over visual inputs.",
    topics: ["Uncertainty", "Evidence Selection", "Reliable AI"],
  },
];

export const RESEARCH_JOURNEY_TEXT =
  "My research journey began with a practical computer vision problem: recognizing traffic signs when severe snow changes the visual appearance of the scene. This led me toward broader questions about robustness, distribution shift, visual uncertainty, evidence reliability, and eventually multimodal reasoning.";

export const RESEARCH_JOURNEY_STEPS: ResearchJourneyStep[] = [
  {
    step: 1,
    title: "Traffic Sign Recognition",
    tag: "Applied Visual Task",
    description: "Investigating safety-critical visual recognition where misclassification leads to catastrophic real-world failures.",
  },
  {
    step: 2,
    title: "Snow Degradation",
    tag: "Environmental Corruption",
    description: "Analyzing non-uniform occlusions, severe contrast loss, and physical snow artifacts on discriminative sign features.",
  },
  {
    step: 3,
    title: "Robust Visual Recognition",
    tag: "Methodological Shift",
    description: "Designing multi-stage representations capable of disentangling signal from severe environmental corruption.",
  },
  {
    step: 4,
    title: "Domain Shift",
    tag: "Distributional Challenge",
    description: "Formulating environmental degradation as a continuous distributional shift between clean benchmarks and physical real-world data.",
  },
  {
    step: 5,
    title: "Visual Uncertainty",
    tag: "Reliability Modeling",
    description: "Studying how models can quantify the trustworthiness of degraded spatial visual regions rather than blindly trusting corrupt inputs.",
  },
  {
    step: 6,
    title: "Multimodal AI",
    tag: "Cross-Modal Synergy",
    description: "Exploring vision-language architectures to integrate linguistic priors when visual sensory channels degrade.",
  },
  {
    step: 7,
    title: "Reliable Vision-Language Models",
    tag: "Long-term Horizon",
    description: "Building trustworthy multimodal agents that selectively weight cross-modal evidence based on estimated channel reliability.",
  },
];

export const RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    number: "01",
    question: "Can a vision model estimate how trustworthy each visual region is under environmental degradation?",
    context: "Investigating spatial reliability maps to weight feature representations based on localized degradation severity.",
  },
  {
    number: "02",
    question: "Can degradation characteristics be incorporated directly into robust visual representation learning?",
    context: "Conditioning deep feature encoders on estimated physical corruption parameters rather than treating degradation as passive noise.",
  },
  {
    number: "03",
    question: "How can models adapt to progressive environmental domain shifts rather than isolated source-target shifts?",
    context: "Formulating weather changes as continuous temporal and physical progressions across non-stationary distributions.",
  },
  {
    number: "04",
    question: "Can vision-language models recognize when visual evidence is insufficient or unreliable?",
    context: "Preventing multimodal hallucinations by enabling foundation models to acknowledge when visual tokens lack semantic integrity.",
  },
  {
    number: "05",
    question: "Can multimodal systems selectively rely on alternative evidence when one visual source becomes unreliable?",
    context: "Dynamic cross-modal fusion that modulates linguistic, depth, or contextual priors dynamically as optical cameras degrade.",
  },
];

export const FUTURE_PIPELINE: ConceptualPipelineStep[] = [
  {
    id: "stage-1",
    title: "Degraded Visual Input",
    description: "Physical real-world scenes subjected to snow, heavy rain, dense fog, or low-illumination noise.",
  },
  {
    id: "stage-2",
    title: "Degradation Estimation",
    description: "Quantifying corruption severity, spatial occlusion density, and spectral distortion signatures.",
  },
  {
    id: "stage-3",
    title: "Reliability Estimation",
    description: "Estimating token-level and patch-level epistemic confidence scores across the feature hierarchy.",
  },
  {
    id: "stage-4",
    title: "Evidence Selection",
    description: "Dynamically filtering out untrustworthy visual tokens while isolating robust invariant cues.",
  },
  {
    id: "stage-5",
    title: "Robust Representation",
    description: "Synthesizing domain-generalized feature embeddings conditioned on verified perceptual evidence.",
  },
  {
    id: "stage-6",
    title: "Multimodal Reasoning",
    description: "Cross-attending selective visual evidence with semantic textual context and structured domain priors.",
  },
  {
    id: "stage-7",
    title: "Reliable Prediction",
    description: "Producing calibrated downstream classifications, detections, and uncertainty-bounded reasoning outputs.",
  },
];

export const FUTURE_DIRECTION_SUMMARY =
  "I am particularly interested in developing systems that do not simply attempt to remove degradation, but explicitly reason about what information remains trustworthy and adapt their perception accordingly.";

export const RESEARCH_DIRECTIONS: ResearchDirection[] = [
  {
    id: "reliability-aware-recognition",
    title: "Reliability-Aware Visual Recognition under Environmental Domain Shift",
    label: "Concept / Work in Progress",
    summary: "Formulating visual degradation as spatially non-uniform uncertainty, enabling classifiers to selectively down-weight compromised image patches in safety-critical robotics and autonomous systems.",
    motivation: "Conventional restoration methods often hallucinate artifacts or introduce latency; our goal is direct uncertainty-conditioned feature extraction.",
    keyQuestions: [
      "How to calibrate patch-level reliability without dense target labels?",
      "Can degradation priors guide invariant representation learning?",
    ],
  },
  {
    id: "uncertainty-aware-multimodal",
    title: "Uncertainty-Aware Multimodal Reasoning under Environmental Domain Shift",
    label: "Concept / Work in Progress",
    summary: "Investigating how vision-language models can prevent hallucinations when visual evidence degrades by dynamically calibrating cross-modal attention toward linguistic or contextual priors.",
    motivation: "Current VLMs overconfidently attend to corrupted visual tokens, leading to catastrophic misinterpretations in adverse weather.",
    keyQuestions: [
      "How can multimodal transformers detect visual evidence breakdown?",
      "What mechanisms facilitate adaptive reliance on complementary modalities?",
    ],
  },
  {
    id: "degradation-aware-evidence-selection",
    title: "Degradation-Aware Visual Evidence Selection for Vision-Language Models",
    label: "Concept / Work in Progress",
    summary: "Developing token gating and sparse evidence selection modules that discard visually compromised tokens prior to LLM reasoning layers.",
    motivation: "By filtering out degraded tokens early, computational efficiency increases while preventing corrupted vision tokens from derailing reasoning trajectories.",
    keyQuestions: [
      "Can we learn differentiable evidence masks directly from degradation distributions?",
      "How does selective token pruning impact zero-shot reasoning capabilities?",
    ],
  },
];

