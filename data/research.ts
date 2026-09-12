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

export const WHAT_I_AM_LOOKING_FOR = {
  statement:
    "I am currently looking to start my research career in Computer Science. I am open to research opportunities across areas such as Artificial Intelligence, Machine Learning, Data Science, Computer Vision, Software Engineering, Algorithms, and related fields. I am particularly interested in working in environments where I can learn from experienced researchers, contribute to ongoing work, and develop further as a researcher.",
  targetRoles: [
    "Graduate Research (MRes / MPhil / PhD)",
    "Research Assistantships & Lab Openings",
    "Collaborative Research Projects",
  ],
  openAreas: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Software Engineering",
    "Algorithms & Optimization",
    "Reliable / Trustworthy AI",
  ],
};

export const RESEARCH_IDENTITY = {
  name: "Muhammad Hassan Askari",
  title: "Computer Science Graduate | Aspiring Researcher",
  researchFields: "Artificial Intelligence · Machine Learning · Computer Vision · Data Science · Software Engineering · Algorithms & Optimization",
  primaryStatement: "Computer Science Graduate Exploring Research in AI & Computing",
  headline: "I am a recent Computer Science graduate interested in starting my research career across areas including AI/ML, Computer Vision, Data Science, Software Engineering, and related fields.",
  supportingStatement: "Through undergraduate research and technical projects, I have investigated visual recognition under environmental degradation, few-shot adaptation under generator distribution shift, and algorithmic interview scheduling under coupled constraints.",
  trajectory: [
    "Software Engineering",
    "Research Mentorship",
    "Computer Vision Under Snow",
    "Peer-Review & Revision",
    "Distribution Shift & Few-Shot",
    "Algorithms & Optimization",
    "Broader CS Research",
    "Starting Research Career",
  ],
  institution: "COMSATS University Islamabad — Wah Campus",
  degree: "BS Computer Science",
  period: "2022–2026",
  cgpa: "3.65 / 4.00",
  credits: "133 Credits Completed",
  ielts: "7.0 Overall (CEFR C1)",
  currentObjective: "Looking to start my research career through graduate research opportunities (MRes / MPhil / PhD) or research positions across Computer Science.",
  fundingObjective: "Seeking research opportunities across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
  email: "askari.syed04@gmail.com",
  github: "https://github.com/AskariSyed",
  linkedin: "https://www.linkedin.com/in/syed-hassan-askari/",
  preferredDomain: "https://research-with-askari.vercel.app",
};

export const RESEARCH_FOCUS_CARDS: ResearchFocusCard[] = [
  {
    id: "robust-cv",
    title: "Computer Vision & Robust Recognition",
    tagline: "Environmental degradation & corrupted inputs",
    description: "Investigating how visual recognition systems behave when adverse weather conditions—such as snow, atmospheric scattering, and occlusion—attenuate discriminative visual evidence.",
    topics: ["Undergraduate Research", "Snow Degradation", "Image Restoration", "Feature Recovery"],
  },
  {
    id: "domain-adaptation",
    title: "Distribution Shift & Adaptation",
    tagline: "Out-of-distribution shift & few-shot learning",
    description: "Evaluating model generalization when test distributions diverge from training domains, and experimenting with few-shot adaptation strategies using minimal target-domain supervisory support.",
    topics: ["Leave-Generator-Out", "Few-Shot Adaptation", "Synthetic Image Forensics", "Data Leakage Audits"],
  },
  {
    id: "algorithms-systems",
    title: "Algorithms, Optimization & Systems",
    tagline: "Constrained allocation, scheduling & concurrency",
    description: "Exploring algorithmic formulation, heuristic scheduling, fairness policies, and database concurrency validation originating from real-world software deployment challenges.",
    topics: ["Heuristic Scheduling", "Discrete Optimization", "Concurrency Validation", "Software Systems"],
  },
];

export const RESEARCH_HIERARCHY: ResearchHierarchy = {
  primary: [
    {
      title: "Computer Vision & Robust Recognition",
      description: "Undergraduate empirical research on traffic-sign classification under adverse weather and snow degradation.",
      topics: ["Adverse Weather", "Image Restoration Coordination", "Feature Recovery"],
    },
    {
      title: "Distribution Shift & Adaptation",
      description: "Experimental investigation of few-shot adaptation for AI-generated image detection under unseen generator shift.",
      topics: ["Leave-Generator-Out", "Unseen Domains", "Few-Shot Adaptation"],
    },
    {
      title: "Algorithms & Optimization",
      description: "Heuristic interview scheduling under coupled two-sided availability, temporal constraints, and concurrency validation.",
      topics: ["Discrete Optimization", "Resource Allocation", "System Concurrency"],
    },
  ],
  secondary: [
    {
      title: "Data Science & Empirical Evaluation",
      description: "Designing multi-seed experimental matrices, data leakage audits, and statistical evaluation across research datasets.",
      topics: ["Data Auditing", "Multi-Seed Protocols", "Statistical Analysis"],
    },
    {
      title: "Software Engineering & Systems",
      description: "Architecting full-stack systems, relational database schemas, and high-throughput backend services.",
      topics: ["System Architecture", "Relational Modeling", "Production APIs"],
    },
  ],
  emerging: [
    {
      title: "Reliable / Trustworthy AI",
      description: "Exploring uncertainty-aware reasoning and failure detection when operational evidence is degraded or ambiguous.",
      topics: ["Uncertainty Estimation", "Failure Detection", "Evidence Calibration"],
    },
    {
      title: "Multimodal Perception",
      description: "Studying how vision-language models can evaluate evidence integrity dynamically when sensory inputs are corrupted.",
      topics: ["Vision-Language Models", "Cross-Modal Reasoning", "Multimodal Reliability"],
    },
  ],
};

export const RESEARCH_JOURNEY_TEXT =
  "I initially developed a strong interest in software development and engineering during my bachelor's degree. Through undergraduate projects and research exposure, I gradually became interested in research and began exploring machine learning, computer vision, distribution shift, adaptation, and related areas. Alongside AI research, I also explored algorithms, optimization, and software systems. These experiences have motivated me to pursue research further.";

export const RESEARCH_JOURNEY_STEPS: ResearchJourneyStep[] = [
  {
    step: 1,
    stageNumber: "01",
    period: "Undergraduate Foundation",
    title: "Software Development & Systems",
    tag: "Engineering Discipline",
    badgeVariant: "neutral",
    narrative:
      "I began my Computer Science degree with a strong interest in software development and engineering, building full-stack applications, relational database schemas, and backend services. Working on software systems gave me practical programming fluency, debugging persistence, and an appreciation for system constraints.",
    bridge:
      "Engineering foundations provided implementation discipline, while faculty mentorship opened the door to academic inquiry.",
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
      "Through faculty mentorship, I was encouraged to look beyond fixed software requirements and explore open-ended research questions. I began reading literature in autonomous perception and formulated hypotheses on how computer vision models behave under adverse weather conditions.",
    bridge:
      "That encouragement led directly to my first undergraduate research investigation.",
    description:
      "Encouraged by faculty mentorship to transition from structured coding to hypothesis-driven research.",
  },
  {
    step: 3,
    stageNumber: "03",
    period: "First Research Study",
    title: "Traffic Sign Classification Under Snow",
    tag: "Environmental Degradation",
    badgeVariant: "neutral",
    narrative:
      "My first major research project investigated autonomous perception under severe snow degradation. In winter conditions, camera sensors suffer from uneven occlusions, contrast loss, and obscured geometry. I formulated an initial multi-stage pipeline and submitted the study to FIT 2025.",
    bridge:
      "The submission entered formal academic peer review.",
    description:
      "Authored first manuscript on traffic sign classification under snow degradation and submitted to FIT 2025.",
  },
  {
    step: 4,
    stageNumber: "04",
    period: "FIT 2025 Peer Review",
    title: "Reviewer Feedback & Methodological Lessons",
    tag: "Constructive Criticism",
    badgeVariant: "amber",
    narrative:
      "The initial study underwent peer review at FIT 2025. Reviewers provided constructive critique, identifying gaps in baseline comparisons, ablation depth, and the need for clearer theoretical justification. Rather than being discouraged, I treated this feedback as a valuable roadmap to improve the scientific rigor of the work.",
    bridge:
      "Reviewer feedback motivated a thorough methodological revision.",
    description:
      "Underwent peer review at FIT 2025; analyzed reviewer critique to identify and resolve methodological limitations.",
  },
  {
    step: 5,
    stageNumber: "05",
    period: "Methodological Revision",
    title: "Systematic Revision & Expanded Experiments",
    tag: "Empirical Rigor",
    badgeVariant: "neutral",
    narrative:
      "I systematically redesigned the investigation: transitioning from a naive sequential pipeline to a task-aware multi-stage framework, isolating restoration-classification trade-offs, expanding baseline comparisons, and evaluating feature recovery prior to the final classification head.",
    bridge:
      "Revised experimental design produced substantially stronger quantitative evidence.",
    description:
      "Re-engineered the framework with task-aware coordination, expanded baselines, and comprehensive ablations.",
  },
  {
    step: 6,
    stageNumber: "06",
    period: "Empirical Maturation",
    title: "Quantitative Validation & Manuscript Preparation",
    tag: "Manuscript Revision",
    badgeVariant: "emerald",
    highlightMetric: "EfficientNet-B2: 68.02% → 87.34%",
    narrative:
      "Under severe snow conditions, classification accuracy on EfficientNet-B2 improved from 68.02% to 87.34% through task-aware multi-stage processing. This experience solidified my interest in empirical research and demonstrated the value of persevering through rigorous peer review. The manuscript is now in preparation for submission to MDPI Sensors.",
    bridge:
      "Investigating environmental corruption led naturally to studying another form of distribution shift.",
    description:
      "Quantitative accuracy improved from 68.02% to 87.34%; manuscript currently undergoing refinement for MDPI Sensors.",
  },
  {
    step: 7,
    stageNumber: "07",
    period: "Distribution Shift Exploration",
    title: "AI-Generated Image Detection & Few-Shot Adaptation",
    tag: "Leave-Generator-Out",
    badgeVariant: "indigo",
    highlightMetric: "11,000 Images · 50 Experimental Runs",
    narrative:
      "In synthetic media forensics, detectors trained on known image generators often degrade when encountering unseen architectures. I designed a controlled leave-generator-out evaluation across 11,000 images, audited for data leakage, and evaluated few-shot adaptation strategies across 5 shot levels and 5 random seeds to investigate adaptation under generator shift.",
    bridge:
      "Alongside AI research, I also pursued research problems emerging from real-world software systems.",
    description:
      "Formulated few-shot adaptation study for AI-generated image detection under unseen generator distribution shift.",
  },
  {
    step: 8,
    stageNumber: "08",
    period: "Algorithmic Systems",
    title: "Job Fair Scheduling & Discrete Optimization",
    tag: "Algorithms & Optimization",
    badgeVariant: "neutral",
    narrative:
      "Operational challenges encountered while developing the CUI Wah Job Fair Portal motivated an algorithmic research inquiry. Together with co-authors, I investigated interview scheduling as a constrained two-sided allocation problem, evaluating greedy scheduling heuristics, fairness trade-offs, and database-level concurrency validation.",
    bridge:
      "These varied experiences shaped my broad interest in Computer Science research.",
    description:
      "Submitted manuscript to HITE 2026 on decentralized greedy scheduling for high-throughput interview allocation.",
  },
  {
    step: 9,
    stageNumber: "09",
    period: "Next Step",
    title: "Starting My Research Career",
    tag: "Open to Opportunities",
    badgeVariant: "blue",
    narrative:
      "Having completed my BS in Computer Science with hands-on experience across software engineering, machine learning, computer vision, and algorithms, I am now looking to start my research career. I am eager to join a research group where I can learn from experienced researchers, contribute to ongoing work, and continue developing.",
    bridge:
      "Open to graduate research and research assistantship opportunities across Computer Science.",
    description:
      "Seeking opportunities to join an active research group and grow as a researcher.",
  },
];

export const RESEARCH_JOURNEY_CLOSING = {
  quote:
    "My interest in research developed through hands-on projects, peer-review feedback, methodological revision, and exploring how computational models behave when operational conditions change.",
  coreQuestion:
    "How can computational and visual systems maintain reliability when operating under distribution shifts, degraded evidence, or constrained resources?",
  unifyingInsight:
    "In traffic sign recognition, visual evidence is degraded by physical weather. In synthetic image detection, representations shift due to unseen generative models. In interview scheduling, allocation must handle constrained resources and concurrent requests. Together, these projects reflect my interest in addressing practical and theoretical challenges across Computer Science.",
  currentFocusAreas: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "Software Engineering",
    "Algorithms & Optimization",
    "Reliable / Trustworthy AI",
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

