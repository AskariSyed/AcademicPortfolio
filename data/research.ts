export interface ResearchFocusCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
}

export interface ResearchJourneyStep {
  step: number;
  stageNumber: string;
  period: string;
  title: string;
  tag: string;
  narrative: string;
  bridge?: string;
  badgeVariant?: "neutral" | "amber" | "blue" | "indigo" | "emerald";
  highlightMetric?: string;
  description?: string;
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

export interface ResearchHierarchy {
  primary: {
    title: string;
    description: string;
    topics: string[];
  }[];
  secondary: {
    title: string;
    description: string;
    topics: string[];
  }[];
  emerging: {
    title: string;
    description: string;
    topics: string[];
  }[];
}

export const RESEARCH_IDENTITY = {
  name: "Muhammad Hassan Askari",
  title: "Computer Science Graduate | AI/ML Research",
  researchFields: "Robust Computer Vision · Distribution Shift · Few-Shot Adaptation · Multimodal AI",
  primaryStatement: "Reliable Computer Vision Under Distribution Shift",
  headline: "I study how visual AI systems can remain reliable when data distributions change, visual evidence is degraded, or target-domain supervision is limited.",
  supportingStatement: "My work investigates visual recognition under environmental degradation and adaptation to unseen visual distributions, with an emerging trajectory toward uncertainty-aware multimodal models and reliable visual reasoning.",
  trajectory: [
    "Software Engineering",
    "Research Exposure",
    "Computer Vision",
    "Environmental Domain Shift",
    "Robust Machine Learning",
    "Few-Shot Adaptation",
    "Reliable Visual AI",
    "Multimodal / Vision-Language Research",
  ],
  institution: "COMSATS University Islamabad — Wah Campus",
  degree: "BS Computer Science",
  period: "2022–2026",
  cgpa: "3.65 / 4.00",
  credits: "133 Credits Completed",
  ielts: "7.0 Overall (CEFR C1)",
  currentObjective: "Seeking funded graduate research opportunities (MRes / MPhil / PhD) in computer vision, domain adaptation, and reliable visual intelligence.",
  fundingObjective: "Seeking funded graduate research opportunities in reliable computer vision and distribution shift.",
  email: "askari.syed04@gmail.com",
  github: "https://github.com/AskariSyed",
  linkedin: "https://www.linkedin.com/in/syed-hassan-askari/",
  preferredDomain: "https://research-with-askari.vercel.app",
};

export const RESEARCH_FOCUS_CARDS: ResearchFocusCard[] = [
  {
    id: "robust-cv",
    title: "Robust Computer Vision",
    tagline: "Environmental degradation & corrupted inputs",
    description: "Investigating how visual recognition systems maintain predictive stability when physical corruptions such as snow, atmospheric scattering, blur, and occlusion attenuate discriminative evidence.",
    topics: ["Environmental Degradation", "Visual Robustness", "Corrupted Inputs"],
  },
  {
    id: "domain-adaptation",
    title: "Distribution Shift & Adaptation",
    tagline: "Out-of-distribution shift & limited supervision",
    description: "Developing empirical protocols and parameter-efficient strategies that adapt visual models to unseen visual distributions using minimal target-domain support examples.",
    topics: ["Domain Adaptation", "Domain Generalization", "Few-Shot Adaptation"],
  },
  {
    id: "multimodal-ai",
    title: "Reliable Multimodal AI",
    tagline: "Cross-modal reasoning & evidence evaluation",
    description: "Exploring prospective mechanisms for vision-language models to evaluate visual evidence integrity dynamically, mitigating hallucination when sensory data becomes ambiguous.",
    topics: ["Vision-Language Models", "Uncertainty-Aware Reasoning", "Reliable Evidence"],
  },
];

export const RESEARCH_HIERARCHY: ResearchHierarchy = {
  primary: [
    {
      title: "Robust Computer Vision",
      description: "Recognition under corrupted inputs, environmental degradation, and adverse weather conditions.",
      topics: ["Adverse Weather", "Image Restoration Coordination", "Feature Recovery"],
    },
    {
      title: "Distribution Shift & Domain Adaptation",
      description: "Evaluating models on out-of-distribution target domains and designing robust generalization protocols.",
      topics: ["Leave-Generator-Out", "Unseen Domains", "Domain Shift"],
    },
    {
      title: "Few-Shot Learning / Adaptation",
      description: "Investigating parameter-efficient adaptation to unseen distributions with minimal target-domain supervisory support.",
      topics: ["Support Sets", "Classifier Tuning", "Representation Adaptation"],
    },
  ],
  secondary: [
    {
      title: "Multimodal AI / Vision-Language Models",
      description: "Investigating how models integrate visual and linguistic evidence when sensory inputs are degraded.",
      topics: ["Cross-Modal Attention", "Visual Grounding", "Multimodal Reliability"],
    },
    {
      title: "Uncertainty-Aware Visual Reasoning",
      description: "Estimating spatial and epistemic confidence scores to identify when perceptual inputs cannot be trusted.",
      topics: ["Confidence Calibration", "Failure Detection", "Evidence Gating"],
    },
  ],
  emerging: [
    {
      title: "RAG Reliability / Adversarial Retrieval",
      description: "Examining retrieval corruption, prompt manipulation, and evidence grounding in language-model pipelines.",
      topics: ["Untrusted Context", "Dense Retrieval Verification", "Grounded Reasoning"],
    },
  ],
};

export const RESEARCH_JOURNEY_TEXT =
  "My trajectory into research began with practical software engineering, followed by faculty mentorship that introduced me to academic inquiry. Encountering a rejected initial conference submission, conducting extensive reviewer-driven revision, and expanding from physical sensory degradation to generator distribution shifts crystallized my research trajectory: How can visual AI systems remain reliable when deployed under changing, degraded, or out-of-distribution evidence?";

export const RESEARCH_JOURNEY_STEPS: ResearchJourneyStep[] = [
  {
    step: 1,
    stageNumber: "01",
    period: "Undergraduate Beginning",
    title: "Software Engineering Foundations",
    tag: "Engineering Discipline",
    badgeVariant: "neutral",
    narrative:
      "I began my Computer Science degree with a focus on software development, building full-stack applications, relational database schemas, and distributed backends. Developing production systems gave me strong code literacy, debugging persistence, and appreciation for system-level constraints.",
    bridge:
      "Engineering foundations provided implementation discipline, while faculty mentorship opened the door to open-ended inquiry.",
    description:
      "Initial background focused on software development and systems engineering before transitioning into empirical research.",
  },
  {
    step: 2,
    stageNumber: "02",
    period: "Faculty Mentorship",
    title: "Research Exposure & Mentorship",
    tag: "Academic Inquiry",
    badgeVariant: "blue",
    narrative:
      "A faculty mentor encouraged me to explore academic research. Stepping beyond predetermined software specifications, I began reading literature in autonomous perception and formulating hypotheses on computer vision under adverse weather.",
    bridge:
      "That encouragement led directly to my first empirical formulation in robust computer vision.",
    description:
      "Encouraged by faculty mentorship to transition from structured coding to hypothesis-driven research.",
  },
  {
    step: 3,
    stageNumber: "03",
    period: "Initial Formulation",
    title: "Traffic Sign Classification Under Snow",
    tag: "Environmental Domain Shift",
    badgeVariant: "neutral",
    narrative:
      "My first major research project investigated autonomous perception under severe snow degradation. In winter conditions, camera sensors suffer from uneven occlusions, contrast loss, and obscured discriminative geometry. I formulated an initial multi-stage pipeline and submitted the study to FIT 2025.",
    bridge:
      "The submission entered formal academic peer review.",
    description:
      "Authored first manuscript on traffic sign classification under snow degradation and submitted to FIT 2025.",
  },
  {
    step: 4,
    stageNumber: "04",
    period: "FIT 2025 Peer Review",
    title: "Peer-Review Feedback & Rejection",
    tag: "Constructive Criticism",
    badgeVariant: "amber",
    narrative:
      "The manuscript was rejected at FIT 2025. The reviewers provided incisive critique, highlighting gaps in baseline comparisons, ablation depth, and the need for stronger methodological justification. Rather than abandoning the problem, I treated the peer-review feedback as a diagnostic blueprint to elevate the rigor of the work.",
    bridge:
      "Peer review prompted a comprehensive methodological overhaul.",
    description:
      "Manuscript rejected at FIT 2025; deconstructed reviewer criticism to identify fundamental methodological limitations.",
  },
  {
    step: 5,
    stageNumber: "05",
    period: "Methodological Revision",
    title: "Systematic Methodological Revision",
    tag: "Empirical Rigor",
    badgeVariant: "neutral",
    narrative:
      "I systematically redesigned the investigation: transitioning from a naive sequential pipeline to a task-aware multi-stage framework, isolating restoration-classification trade-offs, expanding baseline comparisons, and measuring feature recovery before the final classification head.",
    bridge:
      "Revised experimental design produced substantially stronger quantitative evidence.",
    description:
      "Re-engineered the framework with task-aware coordination, expanded baselines, and comprehensive ablations.",
  },
  {
    step: 6,
    stageNumber: "06",
    period: "Empirical Maturation",
    title: "Quantitative Validation & Continued Preparation",
    tag: "Manuscript Revision",
    badgeVariant: "emerald",
    highlightMetric: "EfficientNet-B2: 68.02% → 87.34%",
    narrative:
      "Under severe snow conditions, classification accuracy on EfficientNet-B2 improved from 68.02% to 87.34% through task-aware multi-stage processing. This experience solidified my dedication to empirical research and demonstrated the value of persevering through rigorous peer review. The manuscript is now in preparation for submission to MDPI Sensors.",
    bridge:
      "Investigating environmental corruption led naturally to studying another form of distribution shift.",
    description:
      "Quantitative accuracy improved from 68.02% to 87.34%; manuscript currently undergoing refinement for MDPI Sensors.",
  },
  {
    step: 7,
    stageNumber: "07",
    period: "Distribution Shift Expansion",
    title: "Generator Distribution Shift & Few-Shot Adaptation",
    tag: "Leave-Generator-Out",
    badgeVariant: "indigo",
    highlightMetric: "11,000 Images · 50 Experimental Runs",
    narrative:
      "In synthetic media forensics, detectors trained on known image generators degrade sharply when encountering unseen architectures. I designed a controlled leave-generator-out evaluation across 11,000 images, auditing for leakage and evaluating few-shot adaptation strategies across 5 shot levels and 5 random seeds to investigate adaptation under generator shift.",
    bridge:
      "The intellectual link: both domains examine predictive reliability when input evidence diverges from training distributions.",
    description:
      "Formulated few-shot adaptation study for AI-generated image detection under unseen generator distribution shift.",
  },
  {
    step: 8,
    stageNumber: "08",
    period: "Broader Perspective",
    title: "Reliable Reasoning Under Distribution Shift",
    tag: "Research Trajectory",
    badgeVariant: "blue",
    narrative:
      "Across both projects, a central intellectual question emerged: How can intelligent systems remain reliable when the evidence distribution changes? While environmental weather corruption (optical noise and occlusion) and generator distribution shift (unseen synthetic artifacts) involve distinct technical mechanisms, both expose the fragility of models when test distributions shift away from training distributions.",
    bridge:
      "This perspective informs my graduate research trajectory in reliable computer vision and multimodal AI.",
    description:
      "Connected environmental domain shift and generator distribution shift into a coherent research trajectory on visual reliability.",
  },
];

export const RESEARCH_JOURNEY_CLOSING = {
  quote:
    "My research trajectory developed through experimentation, peer-review critique, methodological revision, and an increasing focus on how visual models behave when test distributions diverge from training conditions.",
  coreQuestion:
    "How can visual AI systems maintain reliable predictions when operating under distribution shift, degraded evidence, or limited target-domain supervision?",
  unifyingInsight:
    "In traffic sign recognition, visual evidence is physically degraded by snow. In AI-generated image detection, visual artifacts shift due to unseen generative models. While technically distinct, both problems reveal how distribution shifts compromise model reliability and motivate robust adaptation mechanisms.",
  currentFocusAreas: [
    "Robust Computer Vision",
    "Environmental Domain Shift",
    "Domain Adaptation",
    "Few-Shot Learning",
    "Visual Reliability",
    "Uncertainty-Aware Reasoning",
    "Multimodal AI",
  ],
};

export const RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    number: "01",
    question: "How can visual models estimate and maintain reliable predictions under environmental degradation?",
    context: "Investigating spatial reliability and feature recovery when severe environmental corruptions—such as snow, scattering, and contrast loss—obscure discriminative visual evidence.",
  },
  {
    number: "02",
    question: "How can models adapt to unseen visual distributions using limited target-domain supervision?",
    context: "Investigating parameter-efficient adaptation strategies and leave-generator-out protocols that adapt representations when models encounter out-of-distribution targets without full retraining.",
  },
  {
    number: "03",
    question: "How can multimodal models recognize when available visual evidence is insufficient for reliable reasoning?",
    context: "Exploring uncertainty-aware cross-modal reasoning to detect when visual tokens lack semantic integrity, preventing overconfident hallucinations in vision-language architectures.",
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

