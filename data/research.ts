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
  "My path toward research began unexpectedly. Entering my computer science degree with aspirations firmly rooted in software development, an encouraging faculty mentor introduced me to academic inquiry. What followed—a rejected first manuscript, intensive reviewer-driven revision, empirical persistence, and a transition into retrieval vulnerabilities—permanently shaped my intellectual journey. Today, my research converges around a singular foundational question: How should an intelligent system behave when the evidence it receives cannot be completely trusted?";

export const RESEARCH_JOURNEY_STEPS: ResearchJourneyStep[] = [
  {
    step: 1,
    stageNumber: "01",
    period: "Undergraduate Beginning",
    title: "Software Developer at Heart",
    tag: "Engineering Roots",
    badgeVariant: "neutral",
    narrative:
      "When I began my Bachelor of Science in Computer Science at COMSATS University Islamabad, my ambition was firmly set on becoming a software developer. I enjoyed building full-stack applications, exploring new technologies, and turning ideas into working systems. Academic research was not part of my plan—I perceived it as an intimidating, highly abstract domain and lacked confidence that I possessed the theoretical foundation or skills to become a researcher.",
    bridge:
      "Building software provided strong engineering discipline, but my trajectory soon encountered an unexpected catalyst.",
    description:
      "Original aspirations focused strictly on software engineering and system development, with academic research outside initial expectations.",
  },
  {
    step: 2,
    stageNumber: "02",
    period: "Faculty Mentorship",
    title: "An Unexpected Beginning in Research",
    tag: "Faculty Encouragement",
    badgeVariant: "blue",
    narrative:
      "During my undergraduate studies, a faculty mentor noticed my work and encouraged me to get involved in research and give it a try. Research had been entirely outside my plans, but this encouragement became a defining turning point. Stepping beyond predetermined software specifications, I decided to test whether I could formulate hypotheses, navigate open-ended ambiguity, and investigate an unsolved technical problem.",
    bridge:
      "That encouragement led directly to my first empirical formulation in autonomous computer vision.",
    description:
      "Encouraged by a faculty mentor to step into research, shifting from structured coding to open-ended inquiry.",
  },
  {
    step: 3,
    stageNumber: "03",
    period: "Initial Formulation",
    title: "My First Research Problem",
    tag: "Computer Vision",
    badgeVariant: "neutral",
    narrative:
      "My first major research initiative investigated autonomous vehicle perception: traffic sign classification under heavy snow degradation. In severe winter conditions, camera sensors suffer from uneven whiteout occlusions, drastic contrast loss, and obscured discriminative geometry. I formulated an initial multi-stage classification pipeline, prepared benchmark datasets, authored my first manuscript titled “Multi-Stage Traffic Sign Classification Under Heavy Snow”, and submitted it to FIT 2025.",
    bridge:
      "With the submission complete, I awaited the peer review process with eager anticipation.",
    description:
      "Formulated first manuscript on traffic sign classification under heavy snow and submitted to FIT 2025.",
  },
  {
    step: 4,
    stageNumber: "04",
    period: "FIT 2025 Submission",
    title: "The Rejection",
    tag: "Peer Review Milestone",
    badgeVariant: "amber",
    narrative:
      "The manuscript was rejected. It was a disheartening moment and my first direct encounter with the uncompromising rigor of academic peer review. The reviewers highlighted critical gaps in experimental depth, baseline comparisons, and methodological justification. For an early-career researcher, a rejection can easily prompt abandonment, but this outcome forced me to pause and fundamentally re-evaluate how I understood scientific inquiry.",
    bridge:
      "Rather than abandoning the problem, I chose to treat the critique as a diagnostic blueprint.",
    description:
      "First manuscript rejected at FIT 2025, confronting the demanding rigor of academic peer review.",
  },
  {
    step: 5,
    stageNumber: "05",
    period: "Methodological Realignment",
    title: "Learning to Research Through Feedback",
    tag: "Critical Evaluation",
    badgeVariant: "neutral",
    narrative:
      "Rather than shelving the project, I systematically deconstructed the reviewer comments, examining every identified vulnerability. My initial understanding of research had been naive: I had assumed research was mainly about having a novel idea and getting it published. Through peer criticism, I learned that genuine research demands questioning one's own assumptions, uncovering subtle baseline biases, analyzing why specific samples fail, and designing rigorous additional experiments to isolate root causes.",
    bridge:
      "This intellectual shift prompted a comprehensive overhaul of the methodology and experimental protocol.",
    description:
      "Transformed rejection into a learning milestone: questioning assumptions, examining failure modes, and refining experimental rigor.",
  },
  {
    step: 6,
    stageNumber: "06",
    period: "Empirical Maturation",
    title: "Discovering That I Enjoy Research",
    tag: "Persistence & Validation",
    badgeVariant: "emerald",
    highlightMetric: "EfficientNet-B2: 68.02% → 87.34%",
    narrative:
      "The work evolved into “Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions”. I expanded dataset preparation, introduced task-aware stage disentanglement, and conducted extensive ablation studies. Top-1 classification accuracy on EfficientNet-B2 improved from 68.02% to 87.34% under severe snow conditions. The revised manuscript is now in its final stages before submission to MDPI Sensors. Far beyond the numerical gain, persisting through critique and revision made me realize that I genuinely enjoy the scientific research process.",
    bridge:
      "Having tackled physical sensory corruption in vision, my curiosity broadened toward language and retrieval architectures.",
    description:
      "Substantial methodological revision improved classification accuracy from 68.02% to 87.34%; discovered genuine passion for research.",
  },
  {
    step: 7,
    stageNumber: "07",
    period: "Cross-Modal Expansion",
    title: "From Vision to Language Models",
    tag: "Generative Systems & RAG",
    badgeVariant: "neutral",
    narrative:
      "My research interests expanded toward Large Language Models and Retrieval-Augmented Generation (RAG). Bridging software engineering with applied machine learning, I built an AI Email Copilot that utilized dense semantic search to query past correspondence archives and generate context-aware draft responses. While building and benchmarking the system, my interest shifted from simply making an AI pipeline work to investigating the reliability of the retrieved knowledge grounding the model.",
    bridge:
      "A foundational security vulnerability emerged: what happens when retrieved knowledge is untrusted?",
    description:
      "Explored LLMs and RAG via an AI Email Copilot; focus shifted from generative fluency to knowledge retrieval integrity.",
  },
  {
    step: 8,
    stageNumber: "08",
    period: "AI Safety & Security",
    title: "The Question of Trust",
    tag: "Adversarial Vulnerability",
    badgeVariant: "amber",
    narrative:
      "I observed that a RAG architecture can generate articulate, highly persuasive responses even when the retrieved context is inaccurate, contradictory, or maliciously injected. This led directly into critical questions of Prompt Injection, Adversarial Retrieval, Knowledge Manipulation, and Retrieval Reliability. When an intelligent system lacks the capability to verify whether retrieved knowledge is authentic, its downstream decision-making cannot be trusted.",
    bridge:
      "At this juncture, the fundamental connection between vision and language snapped into focus.",
    description:
      "Investigated prompt injection, adversarial retrieval manipulation, and the critical danger of untrusted retrieved context.",
  },
  {
    step: 9,
    stageNumber: "09",
    period: "Unified Research Agenda",
    title: "A Broader Direction: Reliable & Trustworthy AI",
    tag: "Foundational Convergence",
    badgeVariant: "indigo",
    narrative:
      "My trajectory from computer vision to language models revealed a singular underlying intellectual problem: How should an intelligent system behave when the evidence it receives cannot be completely trusted? In the traffic sign project, visual evidence was physically degraded by heavy snow. In RAG systems, textual evidence is vulnerable to malicious manipulation or noise. These are distinct technical domains, but they share the exact same core challenge. Today, my research direction is dedicated to Reliable and Trustworthy AI—encompassing distribution shift, domain adaptation, few-shot learning, visual uncertainty, and adversarial robustness.",
    bridge:
      "This unified focus drives my ongoing academic preparation and graduate research outlook.",
    description:
      "Synthesized visual degradation and adversarial retrieval into a unified research agenda on Reliable & Trustworthy AI.",
  },
];

export const RESEARCH_JOURNEY_CLOSING = {
  quote:
    "I did not begin my degree with a plan to become a researcher. That direction emerged through experimentation, rejection, revision, and increasingly difficult questions about how intelligent systems behave when their inputs cannot be fully trusted.",
  coreQuestion:
    "How should an intelligent system behave when the evidence it receives cannot be completely trusted?",
  unifyingInsight:
    "In traffic sign recognition, the visual evidence is corrupted by severe snow. In retrieval-augmented systems, the textual evidence is compromised by manipulation or noise. Addressing both challenges demands intelligent systems that can evaluate evidence reliability before committing to a decision.",
  currentFocusAreas: [
    "Robust Computer Vision",
    "Distribution Shift",
    "Domain Adaptation",
    "Few-Shot Learning",
    "Visual Reliability",
    "Uncertainty Estimation",
    "Adversarial Robustness",
    "RAG Security",
    "Trustworthy AI",
    "Multimodal AI",
  ],
};

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

