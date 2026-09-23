export interface SchedulingCaseStudy {
  subtitle: string;
  authors?: string[];
  researchStatusStatement: string;
  submissionVenue?: string;
  submissionStatus?: string;
  venue?: string;
  researchQuestion: string;
  problemSummary: string;
  motivation: string;
  approachSummary: string;
  approachStages: string[];
  priorityPolicyNote: string;
  searchStrategyNote: string;
  formalModelingStatement: string;
  formalModelingNotice: string;
  algorithmicAnalysisStatement: string;
  evaluationStatement: string;
  evaluationStages: string[];
  fairnessStatement: string;
  concurrencyStatement: string;
  operationalStatement: string;
  realWorldNarrative: string;
  originSystem: string;
  evolutionSteps: string[];
  scopeStatement: string;
  futureDirections: string[];
  graduateAlignmentStatement: string;
}

export interface TrafficSignCaseStudy {
  shortTitle: string;
  authors?: string[];
  institution?: string;
  manuscriptStatusStatement: string;
  intendedVenue: string;
  publicDescription: string;
  motivation: {
    overview: string;
    degradationEffects: string[];
    coreInquiry: string;
  };
  trajectoryFlow: string[];
  methodologyPipeline: {
    stage: string;
    title: string;
    description: string;
  }[];
  datasetAndModels: {
    datasetName: string;
    classificationModel: string;
    enhancementModel: string;
    highLevelNote: string;
  };
  preliminaryFindings: {
    badge: string;
    statement: string;
    refinementNote: string;
  };
  researchEvolution: {
    steps: string[];
    narrative: string;
  };
  researchQuestions: string[];
  broaderConnection: {
    narrative: string;
    trajectory: string[];
    conceptualSymmetry: string;
  };
  futureDirections: string[];
  supervisorRelevance: string;
}

export interface LaneGuardBenchmarkRow {
  metric: string;
  yolov8: string;
  yolo26: string;
}

export interface LaneGuardCaseStudy {
  shortTitle: string;
  statusStatement: string;
  githubUrl: string;
  overview: {
    description: string;
    classicalPipeline: string[];
    learnedPipelines: string[];
  };
  keyStats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  dataset: {
    name: string;
    resolution: string;
    totalAnnotatedFrames: number;
    trainFrames: number;
    valFrames: number;
    heldOutTestFrames: number;
    conditions: string;
    derivedCorridorNote: string;
    splitLimitationNote: string;
  };
  models: {
    name: string;
    fusedParams: string;
    gflops: string;
    inputResolution: string;
    epochs: number;
    batchSize: number;
    hardware: string;
    notes?: string;
  }[];
  modelEfficiencyNote: string;
  benchmarkTable: LaneGuardBenchmarkRow[];
  benchmarkProtocolNote: string;
  methodology: {
    scanlineY: number;
    imageCenterX: number;
    boundaryExtraction: string;
    laneCenterCalculation: string;
    fallbackRule: string;
    compositeMetricNote: string;
  };
  qualitativeVisual: {
    imagePath: string;
    caption: string;
    description: string;
  };
  failureModes: {
    classical: string[];
    learned: string[];
  };
  ldws: {
    description: string;
    threshold: string;
    limitations: string[];
  };
  portfolioRole: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  authors?: string[];
  category:
  | "Primary Research"
  | "Research Project"
  | "Research"
  | "Algorithms & Optimization"
  | "Applied Systems"
  | "Applied Computer Vision"
  | "Computer Vision · Robust Recognition";
  isResearch: boolean;
  status?: string;
  submissionVenue?: string;
  submissionStatus?: string;
  venue?: string;
  year?: number;
  date: string;
  tags: string[];
  summary: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  repositoryVisibility?: "private" | "public";
  repositoryUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  results?: string;
  limitations?: string;
  image?: string;
  imageCaption?: string;
  researchRelevance?: string;
  laneGuardCaseStudy?: LaneGuardCaseStudy;
  schedulingCaseStudy?: SchedulingCaseStudy;
  trafficSignCaseStudy?: TrafficSignCaseStudy;
  researchCaseStudy?: {
    researchQuestion: string;
    questionContext: string;
    motivation: string;
    backbone: {
      name: string;
      description: string;
    };
    dataset: {
      total: number;
      sources: {
        source: string;
        images: number;
        type: "Natural Images" | "AI-Generated Images";
        role: "Natural Baseline" | "Training Generator" | "Unseen Generator";
      }[];
    };
    leaveGeneratorOut: {
      trainingGenerators: string[];
      unseenGenerators: string[];
      description: string;
    };
    dataSplit: {
      training: number;
      validation: number;
      unseenTest: number;
      realTest: number;
      adaptationSupport: number;
      total: number;
      description: string;
    };
    fewShotConditions: {
      shotLevels: number[];
      seeds: number[];
      unseenGenerators: string[];
      totalRuns: number;
      description: string;
    };
    adaptationStrategies: {
      id: string;
      title: string;
      description: string;
      visual: string;
    }[];
    evaluationMetrics: {
      primary: string[];
      statistical: string[];
    };
    preliminaryResults: {
      metric: string;
      badge: string;
      columns: string[];
      rows: {
        generator: string;
        scores: number[];
      }[];
      chartNote: string;
    };
    dataIntegrity: {
      duplicatePaths: { total: number; unique: number; duplicated: number };
      trainTestOverlap: { train: number; test: number; overlap: number };
      sampledPathExistence: { checked: number; existing: number };
      auditNote: string;
    };
    validationTimeline: {
      completed: string[];
      inProgress: string[];
    };
    experimentalArtifacts: {
      categories: string[];
      sampleInternalFilenames: string[];
      note: string;
    };
    researchInterpretation: string[];
    broaderConnection: {
      environmentalShift: string;
      generatorShift: string;
      sharedParadigm: string[];
      trajectory: string[];
      narrative: string;
    };
    futureResearchQuestions: string[];
    supervisorRelevance: {
      statement: string;
      connectedFields: string[];
    };
  };
}

export const PROJECTS: Project[] = [
  {
    slug: "task-aware-traffic-sign-classification",
    title: "Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions",
    shortTitle: "Task-Aware Traffic Sign Classification",
    subtitle: "Robust Perception Under Adverse Weather & Environmental Domain Shift",
    authors: ["Muhammad Hassan Askari", "Muhammad Shareef", "Marwa Khanam"],
    category: "Computer Vision · Robust Recognition",
    isResearch: true,
    status: "Manuscript in Preparation",
    year: 2026,
    date: "2025–2026",
    tags: [
      "Computer Vision",
      "Traffic Sign Classification",
      "Robust Machine Learning",
      "Adverse Weather",
      "Image Restoration",
      "Deep Learning",
      "Autonomous Vehicles",
      "Environmental Domain Shift",
    ],
    summary:
      "An undergraduate research project investigating traffic sign recognition under snow degradation using a task-aware multi-stage restoration and classification framework.",
    description:
      "An undergraduate research project investigating robust traffic sign classification under snow-degraded visual conditions. The project examined a task-aware multi-stage approach combining controlled environmental degradation, image restoration, and deep-learning classification to study how recognition behaves when visual evidence is corrupted by adverse weather.",
    keyContributions: [
      "Formulation of adverse snow weather as structured environmental domain shift",
      "Task-aware multi-stage coordination between image enhancement and deep classification",
      "Empirical investigation of feature recoverability prior to categorization heads",
      "Rigorous research evolution from initial findings through revised experimental design",
    ],
    technologies: ["PyTorch", "EfficientNet", "Deep Learning", "Computer Vision", "Adverse Weather"],
    featured: true,
    trafficSignCaseStudy: {
      shortTitle: "Task-Aware Traffic Sign Classification",
      authors: ["Muhammad Hassan Askari", "Muhammad Shareef", "Marwa Khanam"],
      institution: "COMSATS University Islamabad",
      manuscriptStatusStatement:
        "The manuscript is currently being refined, including methodological and experimental analysis, with future submission planned for MDPI Sensors.",
      intendedVenue: "MDPI Sensors (In Preparation)",
      publicDescription:
        "An undergraduate research study of robust traffic sign classification under snow-degraded visual conditions. The project investigated a task-aware multi-stage approach combining controlled environmental degradation, image restoration, and deep-learning-based classification to evaluate how recognition performance changes when visual evidence is degraded.",
      motivation: {
        overview:
          "Reliable traffic-sign recognition is a foundational prerequisite for autonomous vehicles and advanced driver-assistance systems (ADAS). However, real-world deployment in cold-climate regions subjects visual perception systems to acute atmospheric and physical corruptions from falling and accumulated snow.",
        degradationEffects: [
          "Visual occlusion from falling flakes and surface accumulation",
          "Reduced contrast and compressed dynamic range across scenes",
          "Atmospheric scattering and chromatic attenuation",
          "Partial loss of distinctive boundary geometries and glyphs",
          "Degradation of fine-grained discriminative texture details",
        ],
        coreInquiry:
          "The project investigated whether a task-aware, multi-stage processing pipeline can recover discriminative evidence prior to classification, evaluating recognition robustness when snow corrupts input imagery.",
      },
      trajectoryFlow: [
        "Clean Traffic Sign Recognition",
        "Adverse Weather Degradation",
        "Snow-Degraded Visual Evidence",
        "Image Enhancement",
        "Task-Aware Multi-Stage Processing",
        "Robust Traffic Sign Classification",
        "Reliable Visual Intelligence",
      ],
      methodologyPipeline: [
        {
          stage: "01",
          title: "Snow-Degraded Image",
          description: "Input image exhibiting atmospheric scattering, occlusion, and contrast attenuation.",
        },
        {
          stage: "02",
          title: "Data Preparation",
          description: "Standardized spatial normalization and resolution alignment.",
        },
        {
          stage: "03",
          title: "Image Enhancement / Restoration",
          description: "Deep-learning-based restoration targeted at reversing snow-induced corruption.",
        },
        {
          stage: "04",
          title: "Feature Recovery",
          description: "Reconstruction of boundary edges, chromatic contours, and interior symbology.",
        },
        {
          stage: "05",
          title: "Traffic Sign Classification",
          description: "Compound-scaled deep network mapping enhanced representations to class probabilities.",
        },
        {
          stage: "06",
          title: "Predicted Sign Class",
          description: "Robust categorical classification output resilient to adverse domain shift.",
        },
      ],
      datasetAndModels: {
        datasetName: "Belgium Traffic Sign Classification (BTSC)",
        classificationModel: "EfficientNet (e.g., EfficientNet-B2 backbone)",
        enhancementModel: "Deep-Learning-Based Image Restoration (e.g., HDCWNet)",
        highLevelNote:
          "Architectures and benchmarks are treated at a conceptual technology level. Full training hyperparameters, augmentation schedules, loss weightings, and unpublished ablation configurations are preserved as private manuscript assets.",
      },
      preliminaryFindings: {
        badge: "Preliminary Experimental Findings",
        statement:
          "Early experimental evaluation indicates that the proposed multi-stage approach can substantially improve traffic-sign recognition under snow-degraded conditions. The experimental analysis is still being refined as part of the manuscript preparation process.",
        refinementNote:
          "Exact quantitative benchmark tables, confusion matrices, and ablation statistics will be disclosed upon formal peer-reviewed publication.",
      },
      researchEvolution: {
        steps: [
          "Initial Study",
          "FIT 2025 Submission",
          "Reviewer Feedback",
          "Methodological Revision",
          "Task-Aware Reformulation",
          "Expanded Experimental Validation",
          "Manuscript Preparation",
        ],
        narrative:
          "The research originated as an initial study submitted to FIT 2025. Following constructive reviewer feedback, the investigation underwent systematic methodological revision—transitioning from a basic two-step pipeline to a task-aware formulation with expanded experimental validation, with future submission planned for MDPI Sensors.",
      },
      researchQuestions: [
        "How does snow-induced visual degradation affect traffic-sign classification?",
        "Can image enhancement recover useful visual information before classification?",
        "Can a task-aware multi-stage architecture improve robustness under snow-degraded conditions?",
        "How should visual restoration and recognition be coordinated for adverse-weather perception?",
        "How can robust visual recognition be extended to broader environmental domain shifts?",
      ],
      broaderConnection: {
        narrative:
          "This undergraduate research project allowed me to explore how visual AI systems behave when test conditions diverge from clean training distributions, connecting naturally to broader questions of distribution shift across machine learning.",
        trajectory: [
          "Snow-Degraded Traffic Signs",
          "Robust Visual Recognition",
          "Environmental Domain Shift",
          "Few-Shot Adaptation",
          "Visual Reliability",
          "Multimodal AI",
        ],
        conceptualSymmetry:
          "Environmental domain shift in adverse weather conceptually parallels unseen generator distribution shift in synthetic image detection—both examine how models perform when test evidence diverges from training distributions.",
      },
      futureDirections: [
        "Stronger adverse-weather benchmark datasets with multi-level corruption annotations",
        "Real-world snow-degraded traffic-sign imagery captured across diverse geographical climates",
        "Domain generalization techniques invariant to diverse atmospheric conditions",
        "Unsupervised and self-supervised domain adaptation for real-time video streams",
        "Uncertainty-aware recognition quantifying classifier confidence under dense visual noise",
        "Degradation-aware representation learning integrating physical weather models",
        "Robustness evaluation under compound adverse conditions (co-occurring snow, fog, and nighttime lighting)",
        "Multimodal perception fusing vision with radar/LiDAR under severe visual occlusions",
      ],
      supervisorRelevance:
        "Demonstrates foundational training in computer vision, domain shift analysis, and deep learning pipelines—providing strong preparation for prospective graduate research in robust visual perception and resilient AI systems.",
    },
  },
  {
    slug: "fewshot-aigd-shift",
    title: "Few-Shot Adaptation for AI-Generated Image Detection under Unseen Generator Distribution Shift",
    shortTitle: "FewShot-AIGD-Shift",
    category: "Research",
    isResearch: true,
    status: "Experimental Validation Ongoing",
    year: 2026,
    date: "2026",
    repositoryVisibility: "private",
    repositoryUrl: undefined, // Strictly private: never exposed unless explicitly changed to public
    tags: [
      "Computer Vision",
      "Few-Shot Learning",
      "Domain Shift",
      "AI-Generated Image Detection",
      "Model Adaptation",
    ],
    summary:
      "This research project investigates whether a pretrained AI-generated image detector can adapt to previously unseen image generators using only a small number of support examples.",
    description:
      "AI-generated image synthesis systems evolve rapidly. When detectors encounter imagery produced by previously unobserved generative architectures, standard deep classifiers experience performance degradation. This project explores detection under unseen generators as a distribution-shift challenge and investigates whether few-shot adaptation mechanisms can adapt representations with minimal target-domain supervisory support.",
    keyContributions: [
      "Controlled leave-generator-out evaluation protocol isolating unseen generator distribution shift",
      "50-condition experimental matrix across 5 shot levels and 5 random seeds",
      "Ablation comparing classifier-only adaptation versus last-block representation tuning",
      "Comprehensive data-integrity and leakage audit across 11,000 research images",
    ],
    technologies: ["PyTorch", "ResNet-50", "Python", "Scientific Computing", "Statistical Validation"],
    featured: true,
    researchCaseStudy: {
      researchQuestion:
        "Can a detector trained on several image-generation sources be adapted to an unseen generator using only a few labeled examples?",
      questionContext:
        "AI-generated image detectors can perform well on generators represented during training but may experience performance degradation when evaluated on images produced by previously unseen generative models. This project studies whether few-shot adaptation can reduce this distribution-shift problem.",
      motivation:
        "AI-generated image generation systems evolve rapidly. A detector trained on known generators may encounter images produced by generators that were not represented during training. This creates a generator distribution shift. The project therefore investigates whether a model can adapt to a previously unseen generator with only a small support set rather than requiring large-scale retraining.",
      backbone: {
        name: "ResNet-50",
        description:
          "The experimental framework uses ResNet-50 as the detection backbone and evaluates how its performance changes when exposed to previously unseen image-generation sources.",
      },
      dataset: {
        total: 11000,
        sources: [
          { source: "Nature", images: 5000, type: "Natural Images", role: "Natural Baseline" },
          { source: "Midjourney", images: 1500, type: "AI-Generated Images", role: "Unseen Generator" },
          { source: "Wukong", images: 1500, type: "AI-Generated Images", role: "Unseen Generator" },
          { source: "BigGAN", images: 600, type: "AI-Generated Images", role: "Training Generator" },
          { source: "ADM", images: 600, type: "AI-Generated Images", role: "Training Generator" },
          { source: "VQDM", images: 600, type: "AI-Generated Images", role: "Training Generator" },
          { source: "Glide", images: 600, type: "AI-Generated Images", role: "Training Generator" },
          { source: "Stable Diffusion v1.5", images: 600, type: "AI-Generated Images", role: "Training Generator" },
        ],
      },
      leaveGeneratorOut: {
        trainingGenerators: [
          "Nature (Real)",
          "BigGAN",
          "ADM",
          "VQDM",
          "Glide",
          "Stable Diffusion v1.5",
        ],
        unseenGenerators: ["Midjourney", "Wukong"],
        description:
          "Midjourney and Wukong are intentionally excluded from model training and validation. They are treated as unseen generators. This creates a controlled generator distribution shift between training and evaluation.",
      },
      dataSplit: {
        training: 4000,
        validation: 2000,
        unseenTest: 2000,
        realTest: 2000,
        adaptationSupport: 1000,
        total: 11000,
        description:
          "The research split reserves dedicated subsets for base training, in-distribution validation, balanced natural verification, and few-shot adaptation support draws.",
      },
      fewShotConditions: {
        shotLevels: [1, 5, 10, 25, 50],
        seeds: [100, 200, 300, 400, 500],
        unseenGenerators: ["Midjourney", "Wukong"],
        totalRuns: 50,
        description:
          "For each shot level, adaptation is evaluated using five random seeds for each unseen generator: 2 unseen generators × 5 shot levels × 5 random seeds = 50 experimental runs.",
      },
      adaptationStrategies: [
        {
          id: "classifier-only",
          title: "Classifier-Only Adaptation",
          description:
            "The pretrained feature extractor remains fixed while the classification layer is adapted using the few-shot support set.",
          visual: "Frozen Feature Extractor + Adapt Classifier",
        },
        {
          id: "last-block",
          title: "Last-Block Adaptation",
          description:
            "The final convolutional block is also updated during few-shot adaptation, allowing the experiment to investigate whether updating additional representation layers is beneficial when only a very small support set is available.",
          visual: "Adapt Last Convolutional Block + Adapt Classifier",
        },
      ],
      evaluationMetrics: {
        primary: ["Accuracy", "Precision", "Recall", "F1-score", "ROC-AUC"],
        statistical: [
          "Mean",
          "Standard Deviation",
          "95% Confidence Intervals",
          "Hypothesis Tests",
          "Effect Sizes",
          "Per-Class Performance",
          "Confusion Matrices",
          "ROC Analysis",
        ],
      },
      preliminaryResults: {
        metric: "Mean ROC-AUC",
        badge: "Preliminary",
        columns: ["1-shot", "5-shot", "10-shot", "25-shot", "50-shot"],
        rows: [
          {
            generator: "Midjourney",
            scores: [0.9064, 0.9459, 0.9571, 0.9588, 0.9624],
          },
          {
            generator: "Wukong",
            scores: [0.9090, 0.9509, 0.9542, 0.9610, 0.9620],
          },
        ],
        chartNote:
          "The current results indicate increasing ROC-AUC across the evaluated few-shot conditions, particularly at lower support-set sizes. These results remain preliminary pending completion of the remaining baseline and statistical validation work.",
      },
      dataIntegrity: {
        duplicatePaths: { total: 11000, unique: 11000, duplicated: 0 },
        trainTestOverlap: { train: 4000, test: 4000, overlap: 0 },
        sampledPathExistence: { checked: 1000, existing: 1000 },
        auditNote:
          "The research split has been audited for duplicate paths, train/test exact path overlap, and sampled path existence. These reflect basic data-integrity and leakage checks rather than claiming complete elimination of all conceivable leakage forms.",
      },
      validationTimeline: {
        completed: [
          "Research split generated",
          "Leave-generator-out protocol established",
          "Train/test path leakage audit",
          "Duplicate-path audit",
          "Path existence audit",
          "Few-shot experiments",
          "Five random seeds per few-shot condition",
          "Confidence intervals",
          "Adaptation ablation",
          "Statistical artifact generation",
          "Validation manifest",
        ],
        inProgress: [
          "Multi-seed baseline evaluation",
          "Verification of Cohen's d calculations",
          "Multiple-comparison correction",
          "Paired statistical tests for ablation",
          "Baseline vs. few-shot statistical comparison",
          "Per-class metrics",
          "Final ROC analysis",
          "Final paper tables and figures",
        ],
      },
      experimentalArtifacts: {
        categories: [
          "Few-Shot Results",
          "Baseline Results",
          "Ablation Results",
          "Confidence Intervals",
          "Statistical Analysis",
          "Research Split",
          "Training History",
          "Validation Manifest",
          "Figures",
        ],
        sampleInternalFilenames: [
          "resnet50_clean_unseen_fewshot_results.csv",
          "resnet50_clean_fewshot_summary.csv",
          "adaptation_ablation_results.csv",
          "adaptation_ablation_summary.csv",
          "confidence_intervals.csv",
          "research_split_v1.csv",
          "resnet50_training_history.csv",
          "final_validation_manifest.json",
        ],
        note: "Internal experimental artifacts cataloged for manuscript preparation; not downloadable resources.",
      },
      researchInterpretation: [
        "Whether few-shot adaptation improves detection on unseen generators",
        "How performance changes as support examples increase",
        "Whether classifier-only adaptation is sufficient",
        "Whether adapting the final convolutional block provides additional benefit",
        "How robust the observed improvements are across random seeds",
        "Whether statistical evidence supports the observed differences",
      ],
      broaderConnection: {
        environmentalShift: "Traffic sign recognition under snow examines Environmental Domain Shift.",
        generatorShift: "FewShot-AIGD-Shift examines Generator Distribution Shift.",
        sharedParadigm: [
          "Training Distribution",
          "Distribution Shift",
          "Limited / Changed Evidence",
          "Adaptation",
          "Reliable Prediction",
        ],
        trajectory: [
          "Environmental Degradation",
          "Robust Visual Recognition",
          "Distribution Shift",
          "Few-Shot Adaptation",
          "Visual Reliability",
          "Multimodal AI",
        ],
        narrative:
          "Both projects study the identical fundamental question: How can visual AI models adapt their representations when deployed under distribution shifts not encountered during training?",
      },
      futureResearchQuestions: [
        "How can few-shot adaptation become more reliable when the target generator differs substantially from all training distributions?",
        "Can uncertainty estimates identify when an AI-generated image detector is operating outside its learned distribution?",
        "Can adaptation strategies dynamically determine which representation layers should be updated?",
        "Can generator-invariant representations reduce dependence on the specific synthetic sources observed during training?",
        "Can multimodal evidence improve AI-generated image detection when visual artifacts alone become ambiguous?",
      ],
      supervisorRelevance: {
        statement:
          "This project strengthened my interest in learning under distribution shift, especially scenarios where a model encounters conditions that were not represented during training.",
        connectedFields: [
          "Computer Vision",
          "Domain Adaptation",
          "Few-Shot Learning",
          "Robust Machine Learning",
          "AI-Generated Content Detection",
          "Trustworthy AI",
          "Multimodal AI",
          "Distribution Shift",
        ],
      },
    },
  },
  {
    slug: "decentralized-greedy-interview-scheduling",
    title: "Decentralized Greedy Scheduling for Interview Allocation at Job Fairs",
    shortTitle: "Greedy Interview Scheduling",
    subtitle: "Algorithm Design, Complexity, and Empirical Evaluation",
    authors: [
      "Muhammad Hassan Askari",
      "Sulimana Huma",
      "Shumaim Zafar",
      "Ashfaq Ahmed",
      "Dr. Khalid Iqbal",
      "Dr. Muhammad Bilal",
    ],
    year: 2026,
    date: "2026",
    category: "Algorithms & Optimization",
    isResearch: true,
    status: "Submitted Manuscript",
    submissionVenue: "HITE 2026",
    submissionStatus: "Submitted",
    venue: "HITE 2026",
    repositoryVisibility: "private",
    repositoryUrl: undefined,
    featured: true,
    tags: [
      "Algorithm Design",
      "Scheduling",
      "Optimization",
      "Greedy Algorithms",
      "Fairness",
      "Concurrency",
      "Software Systems",
    ],
    summary:
      "A research manuscript submitted to HITE 2026 investigating interview scheduling as a constrained two-sided allocation problem. The study explores greedy scheduling, temporal constraints, fairness considerations, and concurrency-aware validation in the context of high-throughput job-fair interview allocation.",
    description:
      "A research manuscript submitted to HITE 2026 investigating interview scheduling as a constrained two-sided allocation problem. The study explores greedy scheduling, temporal constraints, fairness considerations, and concurrency-aware validation in the context of high-throughput job-fair interview allocation.",
    keyContributions: [
      "Two-sided temporal scheduling formulation under coupled resource constraints",
      "Greedy allocation strategies with search-reduction mechanisms for temporal conflicts",
      "Investigation into scheduling priority policies and candidate fairness",
      "Database-level concurrency validation for reliable high-throughput allocation",
    ],
    technologies: ["Algorithm Design", "Discrete Optimization", "Scheduling Systems", "Relational Concurrency"],
    schedulingCaseStudy: {
      subtitle: "Algorithm Design, Complexity, and Empirical Evaluation",
      authors: [
        "Muhammad Hassan Askari",
        "Sulimana Huma",
        "Shumaim Zafar",
        "Ashfaq Ahmed",
        "Dr. Khalid Iqbal",
        "Dr. Muhammad Bilal",
      ],
      submissionVenue: "HITE 2026",
      submissionStatus: "Submitted",
      venue: "HITE 2026",
      researchStatusStatement:
        "Because this work has been submitted for review, the public portfolio intentionally provides only a high-level overview. Detailed algorithmic formulations, implementation mechanics, experimental configurations, numerical results, and manuscript-specific analyses are withheld until an appropriate publication stage.",
      researchQuestion:
        "How can interview requests be efficiently allocated across shared student and company resources while respecting temporal constraints, fairness considerations, and concurrent scheduling requests?",
      problemSummary:
        "The investigation considers coupled resource availability, temporal conflicts, transition requirements, and concurrent scheduling requests within a high-throughput recruitment setting.",
      motivation:
        "The study models interview allocation as a two-sided temporal scheduling problem in which each assignment simultaneously consumes availability from both a student and a company recruitment team. Because in-demand students receive multiple interview opportunities and companies maintain queues of candidates, scheduling decisions exert cascading ripple effects across the event.",
      approachSummary:
        "The study investigates a greedy scheduling strategy for allocating interview requests under coupled temporal and resource constraints. The approach combines heuristic scheduling decisions with mechanisms intended to account for conflicts and concurrent system state.",
      approachStages: [
        "Research Problem",
        "Scheduling Strategy",
        "Empirical Evaluation",
      ],
      priorityPolicyNote:
        "The study investigates how scheduling priority policies influence allocation efficiency and candidate fairness.",
      searchStrategyNote:
        "The research investigates search strategies intended to reduce unnecessary scheduling exploration when temporal conflicts occur.",
      formalModelingStatement:
        "The study formulates interview allocation as a constrained scheduling problem involving coupled resource availability, temporal feasibility, and fairness considerations.",
      formalModelingNotice:
        "Detailed mathematical formulation withheld during review.",
      algorithmicAnalysisStatement:
        "The manuscript evaluates computational behavior and scheduling performance across controlled workloads. Detailed complexity analysis and empirical scaling results are reserved for the submitted manuscript.",
      evaluationStatement:
        "The study uses controlled experimental scenarios to examine scheduling behavior under varying workload and constraint conditions. Detailed datasets, configurations, numerical results, and statistical analyses remain private while the manuscript is under review.",
      evaluationStages: [
        "Controlled Workloads",
        "Scheduling Evaluation",
        "Comparative Analysis",
      ],
      fairnessStatement:
        "The research considers the relationship between scheduling efficiency and candidate-level fairness, with fairness-aware allocation policies identified as an important direction for continued investigation.",
      concurrencyStatement:
        "The investigation also considers the challenges introduced when multiple scheduling operations occur concurrently and examines database-level validation as part of reliable allocation.",
      operationalStatement:
        "The underlying system also supports operational scenarios beyond pre-scheduled interview allocation.",
      realWorldNarrative:
        "This research originated from engineering challenges encountered while designing and deploying the CUI Wah Job Fair Portal. Operational scheduling challenges motivated a deeper investigation into constrained interview allocation, algorithmic scheduling, fairness, and reliable concurrent execution.",
      originSystem: "CUI Wah Job Fair Portal",
      evolutionSteps: [
        "Operational Problem",
        "Problem Formalization",
        "Algorithmic Investigation",
        "Controlled Evaluation",
        "Research Manuscript",
      ],
      scopeStatement:
        "The current study evaluates a heuristic scheduling approach under controlled experimental conditions. Questions concerning scalability, fairness, optimality, and broader real-world validation remain areas for continued investigation.",
      futureDirections: [
        "Fairness-aware scheduling",
        "Alternative optimization and search strategies",
        "Larger-scale and real-world evaluation",
      ],
      graduateAlignmentStatement:
        "This investigation reflects my interest in algorithm design, optimization, and real-world system modeling under coupled constraints, complementing my empirical work in machine learning and robust visual recognition.",
    },
  },
  {
    slug: "ai-email-copilot",
    title: "AI Email Copilot",
    shortTitle: "Email-Copilot",
    category: "Research Project",
    isResearch: true,
    status: "Completed Prototype",
    year: 2025,
    date: "2024–2025",
    tags: ["RAG", "LLMs", "Information Retrieval", "FastAPI", "PostgreSQL", "pgvector"],
    summary:
      "An AI email assistant exploring retrieval-augmented generation for grounding language-model responses in user-specific information.",
    description:
      "Investigates the mechanics of information grounding in large language models via dense semantic retrieval. The system pairs contextual vector indexing with structured relational memory to synthesize grounded, verifiable draft responses without parametric hallucination.",
    keyContributions: [
      "Dense vector indexing using pgvector over personal communication archives",
      "Prompt orchestration and retrieval-augmented context injection pipeline",
      "Robust asynchronous backend architecture with FastAPI and PostgreSQL",
    ],
    technologies: ["FastAPI", "PostgreSQL", "pgvector", "Python", "LangChain/LlamaIndex", "TypeScript"],
    repositoryVisibility: "public",
    repositoryUrl: "https://github.com/AskariSyed/AI-Email-Copilot",
    githubUrl: "https://github.com/AskariSyed/AI-Email-Copilot",
    featured: true,
  },
  {
    slug: "cui-wah-job-fair-portal",
    title: "CUI Wah Job Fair Portal",
    shortTitle: "Job-Fair-Portal",
    category: "Applied Systems",
    isResearch: false,
    status: "Production Deployment",
    year: 2024,
    date: "2024",
    tags: ["Applied Software Engineering", "Information Systems", "Full-Stack Development"],
    summary:
      "Production-grade enterprise recruitment and student coordination portal designed for COMSATS University Islamabad.",
    description:
      "Demonstrates high-scale systems engineering capabilities. Built to serve hundreds of graduating candidates, recruitment panels, and academic administrators with secure role-based access, real-time interview scheduling, and resilient data storage.",
    keyContributions: [
      "High-throughput RESTful backend built with ASP.NET Core & .NET 8",
      "Relational schema design and indexing in PostgreSQL",
      "Responsive client applications developed in React, TypeScript, and Flutter",
    ],
    technologies: ["ASP.NET Core", ".NET 8", "PostgreSQL", "React", "TypeScript", "Vite", "Flutter"],
    featured: false,
  },
  {
    slug: "laneguard-monocular-lane-perception",
    title: "LaneGuard: Classical CV vs Learned Segmentation for Monocular Lane Perception",
    shortTitle: "LaneGuard: Monocular Lane Perception",
    subtitle: "Comparative Study of Algorithmic Vision vs Lightweight Learned Segmentation",
    category: "Applied Computer Vision",
    isResearch: false,
    status: "Completed Benchmark Study",
    year: 2026,
    date: "2025–2026",
    tags: [
      "Computer Vision",
      "Lane Detection",
      "Segmentation",
      "OpenCV",
      "YOLOv8",
      "YOLO26",
      "TuSimple Benchmark",
      "Applied ML",
    ],
    summary:
      "An applied computer-vision benchmark comparing a deterministic classical lane-detection pipeline with lightweight YOLO-based segmentation models for monocular highway lane perception and heuristic lane-departure warning.",
    description:
      "LaneGuard is an applied computer-vision benchmark comparing a deterministic classical lane-detection pipeline with lightweight learned segmentation models (YOLOv8n-seg and YOLO26n-seg) for monocular highway lane perception and heuristic lane-departure warning. The classical pipeline combines HLS color filtering, Gaussian smoothing, Canny edge detection, trapezoidal ROI masking, Probabilistic Hough transforms, slope filtering, median-based outlier rejection, first-order lane fitting, missing-boundary synthesis, and optional temporal smoothing. The learned pipeline benchmarks YOLOv8n-seg and YOLO26n-seg trained on custom lane-line and derived drivable-area corridor segmentation targets, evaluated under an identical standardized evaluation harness on 2,782 official held-out TuSimple frames.",
    keyContributions: [
      "Implemented a complete deterministic lane-detection pipeline using HLS color filtering, Canny edges, ROI masking, Probabilistic Hough transforms, slope filtering, median outlier rejection, and first-order geometric fitting.",
      "Evaluated lightweight learned segmentation models (YOLOv8n-seg baseline and YOLO26n-seg modern baseline) using custom lane-line and derived drivable-area corridor targets.",
      "Conducted a standardized held-out quantitative benchmark across 2,782 official TuSimple test frames measuring boundary accuracy, lane-center estimation, boundary detection rates, and inference latency.",
      "Empirically analyzed trade-offs and observed failure modes between hand-crafted geometric priors and learned spatial segmentation under highway conditions.",
    ],
    technologies: [
      "OpenCV",
      "Python",
      "NumPy",
      "PyTorch",
      "YOLOv8-Seg",
      "YOLO26n-Seg",
      "TuSimple",
    ],
    repositoryVisibility: "public",
    repositoryUrl: "https://github.com/AskariSyed/Lane_Guard",
    githubUrl: "https://github.com/AskariSyed/Lane_Guard",
    featured: false,
    image: "/images/laneguard-comparison.webp",
    imageCaption:
      "Qualitative comparison across representative TuSimple highway scenes, illustrating differences between the classical edge/geometry pipeline and learned segmentation.",
    results:
      "On the 2,782 held-out official TuSimple test frames evaluated on an NVIDIA Tesla T4 with synchronized CUDA timing, YOLOv8n-seg achieved a boundary MAE of 21.42 px, lane center MAE of 37.62 px, dual-boundary detection rate of 48.6%, and 91.4 FPS (10.95 ms mean latency). YOLO26n-seg achieved 22.44 px boundary MAE, 70.06 px lane center MAE, 16.4% dual-boundary rate, and 69.5 FPS (14.40 ms latency) with 17.5% fewer parameters and 19.5% lower GFLOPs. Differences in lane center error reflect segmentation coverage and single-boundary fallback behavior.",
    limitations:
      "Current limitations include a frame-level training/validation split (which may contain temporally related frames and is not sequence-level leakage-free), derived corridor masks rather than official drivable-area ground truth, heuristic ±80 px image-space LDWS without metric scaling or CAN integration, and the sensitivity of classical CV to image clutter and learned models to missed boundary fallbacks.",
    researchRelevance:
      "This project extends my computer-vision work from image classification toward spatial perception, segmentation, geometric vision, and empirical model comparison.",
    laneGuardCaseStudy: {
      shortTitle: "LaneGuard: Monocular Lane Perception",
      statusStatement: "Applied Computer-Vision Benchmark",
      githubUrl: "https://github.com/AskariSyed/Lane_Guard",
      overview: {
        description:
          "LaneGuard is an applied computer-vision benchmark comparing a deterministic classical lane-detection pipeline with lightweight YOLO-based segmentation models for monocular highway lane perception and heuristic lane-departure warning. The project examines practical trade-offs between hand-crafted geometric assumptions and learned spatial segmentation under clear highway conditions.",
        classicalPipeline: [
          "HLS color filtering",
          "Gaussian smoothing",
          "Canny edge detection",
          "Trapezoidal region of interest (ROI)",
          "Probabilistic Hough transform",
          "Slope filtering and median-based outlier rejection",
          "First-order lane fitting",
          "Missing-boundary synthesis",
          "Optional temporal smoothing",
        ],
        learnedPipelines: [
          "YOLOv8n-seg baseline",
          "YOLO26n-seg modern baseline",
          "Custom lane_line and derived drivable_area segmentation targets",
          "Identical evaluation harness for the learned models",
        ],
      },
      keyStats: [
        {
          label: "Held-Out Test Frames",
          value: "2,782",
          subtext: "Official TuSimple test_label.json benchmark",
        },
        {
          label: "YOLOv8 Boundary MAE",
          value: "21.42 px",
          subtext: "Measured at y = 680 px scanline",
        },
        {
          label: "YOLOv8 Mean Latency",
          value: "10.95 ms",
          subtext: "NVIDIA Tesla T4 (CUDA synchronized)",
        },
        {
          label: "YOLOv8 Throughput",
          value: "91.4 FPS",
          subtext: "640 × 640 network input resolution",
        },
        {
          label: "YOLO26 Parameter Reduction",
          value: "17.5%",
          subtext: "2.69M vs 3.26M fused parameters",
        },
        {
          label: "YOLO26 Compute Reduction",
          value: "19.5%",
          subtext: "9.1 vs 11.3 GFLOPs theoretical complexity",
        },
      ],
      dataset: {
        name: "TuSimple Lane Detection Benchmark",
        resolution: "1280 × 720 forward-facing highway imagery",
        totalAnnotatedFrames: 3626,
        trainFrames: 600,
        valFrames: 150,
        heldOutTestFrames: 2782,
        conditions: "Clear/dry daytime highway driving conditions",
        derivedCorridorNote:
          "The drivable_area segmentation target is a DERIVED corridor mask constructed from TuSimple lane annotations, not official TuSimple drivable-area ground truth.",
        splitLimitationNote:
          "The 600/150 training/validation split is frame-level and can contain temporally related frames from the same sequences, so validation metrics should not be presented as sequence-level leakage-free generalization.",
      },
      models: [
        {
          name: "YOLOv8n-seg",
          fusedParams: "3,258,454",
          gflops: "11.3",
          inputResolution: "640 × 640",
          epochs: 15,
          batchSize: 16,
          hardware: "NVIDIA Tesla T4 evaluation",
          notes: "Established baseline lightweight instance segmentation architecture.",
        },
        {
          name: "YOLO26n-seg",
          fusedParams: "2,689,274",
          gflops: "9.1",
          inputResolution: "640 × 640",
          epochs: 15,
          batchSize: 16,
          hardware: "NVIDIA Tesla T4 evaluation",
          notes: "Modern lightweight segmentation baseline with reduced parameter count and GFLOPs.",
        },
      ],
      modelEfficiencyNote:
        "YOLO26 has approximately 17.5% fewer parameters and 19.5% lower GFLOPs compared to YOLOv8. However, lower computational complexity does not automatically translate into superior task accuracy or empirical throughput under a specific runtime configuration.",
      benchmarkTable: [
        { metric: "Boundary MAE", yolov8: "21.42 px", yolo26: "22.44 px" },
        { metric: "Boundary RMSE", yolov8: "23.39 px", yolo26: "23.59 px" },
        { metric: "Boundary Median AE", yolov8: "21.00 px", yolo26: "22.50 px" },
        { metric: "Lane Center MAE", yolov8: "37.62 px", yolo26: "70.06 px" },
        { metric: "Lane Center RMSE", yolov8: "57.13 px", yolo26: "82.66 px" },
        { metric: "Dual-Boundary Rate", yolov8: "48.6%", yolo26: "16.4%" },
        { metric: "Single-Boundary Rate", yolov8: "44.9%", yolo26: "53.9%" },
        { metric: "Failure Rate", yolov8: "6.58%", yolo26: "29.65%" },
        { metric: "Mean Latency", yolov8: "10.95 ms", yolo26: "14.40 ms" },
        { metric: "P95 Latency", yolov8: "11.93 ms", yolo26: "15.76 ms" },
        { metric: "Throughput", yolov8: "91.4 FPS", yolo26: "69.5 FPS" },
        { metric: "Parameters", yolov8: "3,258,454", yolo26: "2,689,274" },
        { metric: "GFLOPs", yolov8: "11.3", yolo26: "9.1" },
      ],
      benchmarkProtocolNote:
        "Learned-model runtime measurements were obtained on an NVIDIA Tesla T4 with synchronized CUDA timing. These results reflect the empirical outcome of this specific training setup, dataset construction, checkpoint configuration, and evaluation protocol, rather than a universal ranking of the underlying model families.",
      methodology: {
        scanlineY: 680,
        imageCenterX: 640,
        boundaryExtraction:
          "Lane boundaries are extracted from predicted lane-line masks at the horizontal evaluation scanline y = 680 px in 1280 × 720 frames. Boundary localization errors are measured directly in image pixels against ground-truth annotations.",
        laneCenterCalculation:
          "The lane center is computed from the midpoint of the estimated left and right boundaries relative to the vehicle/image center (x = 640 px).",
        fallbackRule:
          "When only one boundary is detected at the scanline, the project employs a fixed ±420 px fallback offset to synthesize the opposing boundary.",
        compositeMetricNote:
          "Because of this fallback mechanism, lane-center error reflects the combined impact of segmentation quality, boundary extraction, and fallback behavior rather than functioning as an isolated segmentation metric.",
      },
      qualitativeVisual: {
        imagePath: "/images/laneguard-comparison.webp",
        caption:
          "Qualitative comparison across representative TuSimple highway scenes, illustrating differences between the classical edge/geometry pipeline and learned segmentation.",
        description:
          "Qualitative comparison illustrating differences between the deterministic classical CV pipeline (with edge-based line fitting) and the learned segmentation masks across curved highway, straight highway, and varied daylight conditions.",
      },
      failureModes: {
        classical: [
          "Sensitivity to road curvature and non-linear geometry under a first-order fitting model",
          "Susceptibility to edge clutter, shadow boundaries, and extraneous road markings",
          "Difficulty detecting lanes when painted markings are worn, faded, or missing",
          "Strong dependence on hand-crafted geometric thresholds and fixed ROI masks",
        ],
        learned: [
          "Missed boundary segmentations on challenging frames or distant lane segments",
          "High single-boundary occurrence triggering the fixed ±420 px fallback",
          "Pronounced lane-center estimation errors when fallback assumptions diverge from actual lane width",
          "Sensitivity to the constrained training regime (600 frames, 15 epochs)",
        ],
      },
      ldws: {
        description:
          "The project estimates lateral image-space offset between the vehicle center (x = 640 px) and estimated lane center and triggers a warning using a project-specific ±80 px threshold.",
        threshold: "±80 px lateral image-space offset",
        limitations: [
          "Image-space pixel heuristic, not calibrated metric lateral distance",
          "Does not compute kinematic time-to-lane-crossing (TLC)",
          "No integration with vehicle CAN bus, steering angle, or speed sensors",
          "Does not claim ISO 17361 compliance",
          "Not a safety-certified ADAS or production autonomous-driving system",
        ],
      },
      portfolioRole:
        "This project extends my computer-vision work from image classification toward spatial perception, segmentation, geometric vision, and empirical model comparison.",
    },
  },
];
