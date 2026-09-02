export interface SchedulingCaseStudy {
  subtitle: string;
  researchStatusStatement: string;
  researchQuestion: string;
  twoSidedConstraints: {
    title: string;
    description: string;
  }[];
  motivation: string;
  greedyAlgorithm: {
    overview: string;
    pipelineSteps: {
      step: string;
      title: string;
      description: string;
    }[];
    priorityRuleNote: string;
    conflictJumpingNote: string;
  };
  formalModel: {
    definitions: { symbol: string; meaning: string }[];
    constraints: { id: string; name: string; formula: string; explanation: string }[];
  };
  complexityAnalysis: {
    sorting: string;
    conflictChecking: string;
    searchBound: string;
    worstCaseBound: string;
    empiricalFit: string;
    distinctionNote: string;
  };
  empiricalEvaluation: {
    overview: string;
    scenarioType: "Synthetic Scheduling Scenarios";
    testedRequestRange: string;
    observedLogLogExponent: string;
    investigatedFactors: string[];
    preliminaryNotice: string;
  };
  bufferExperiment: {
    baselineBuffer: string;
    testedRange: string;
    observations: { bufferSeconds: number; successRate: number }[];
    analysis: string;
  };
  fairnessAnalysis: {
    currentRuleDescription: string;
    observations: string[];
    futurePolicies: string[];
  };
  concurrencyModel: {
    problemStatement: string;
    pipeline: string[];
    mechanism: string;
    guaranteeNote: string;
  };
  walkInSupport: {
    description: string;
    prerequisites: string[];
  };
  realWorldConnection: {
    narrative: string;
    originSystem: string;
    evolutionSteps: string[];
  };
  futureDirections: string[];
  limitations: string[];
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

export interface Project {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  category:
  | "Primary Research"
  | "Research Project"
  | "Research"
  | "Algorithms & Optimization"
  | "Applied Systems"
  | "Computer Vision · Robust Recognition";
  isResearch: boolean;
  status?: string;
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
      "An ongoing study of robust traffic sign recognition under snow-degraded visual conditions using a multi-stage restoration and classification approach.",
    description:
      "An ongoing study of robust traffic sign classification under snow-degraded visual conditions. The research investigates a task-aware multi-stage approach that combines controlled environmental degradation, image restoration, and deep-learning-based classification to study how recognition performance changes when visual evidence becomes partially obscured or degraded.",
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
      authors: ["Muhammad Hassan Askari", "Muhammad Shareef"],
      institution: "COMSATS University Islamabad",
      manuscriptStatusStatement:
        "The manuscript is currently being refined, including methodological and experimental analysis. The work is intended for future submission to MDPI Sensors.",
      intendedVenue: "MDPI Sensors (In Preparation)",
      publicDescription:
        "An ongoing study of robust traffic sign classification under snow-degraded visual conditions. The research investigates a task-aware multi-stage approach that combines controlled environmental degradation, image restoration, and deep-learning-based classification to study how recognition performance changes when visual evidence becomes partially obscured or degraded.",
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
          "The research investigates whether a task-aware, multi-stage processing pipeline can recover discriminative evidence prior to classification, improving recognition robustness when snow severely corrupts input imagery.",
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
          "Exact quantitative benchmark tables, confusion matrices, and ablation statistics will be disclosed upon formal peer-reviewed publication in MDPI Sensors.",
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
          "The research originated as an initial study submitted to FIT 2025. Following constructive reviewer feedback, the investigation underwent systematic methodological revision—transitioning from a basic two-step pipeline to a task-aware formulation with expanded experimental validation, currently being finalized for submission to MDPI Sensors.",
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
          "This research forms an integral pillar of my broader scholarly identity: Reliable Visual Intelligence Under Environmental Domain Shift. It investigates how visual AI systems preserve decision reliability when real-world deployment conditions diverge from clean training distributions.",
        trajectory: [
          "Snow-Degraded Traffic Signs",
          "Robust Visual Recognition",
          "Environmental Domain Shift",
          "Few-Shot Adaptation",
          "Visual Reliability",
          "Multimodal AI",
        ],
        conceptualSymmetry:
          "Environmental domain shift in adverse weather conceptually mirrors unseen generator distribution shift in synthetic image detection—both demand robust representations invariant to out-of-distribution visual noise.",
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
        "Demonstrates foundational rigor in computer vision, domain shift analysis, and deep learning pipelines—positioning well for prospective graduate inquiries in robust visual perception, autonomous driving, and resilient AI systems.",
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
      "AI-generated image synthesis systems evolve rapidly. When detectors encounter imagery produced by previously unobserved generative architectures, standard deep classifiers experience acute performance degradation. This research case study formulates detection under unseen generators as a distribution-shift challenge and investigates whether few-shot adaptation mechanisms can restore classification reliability with minimal target-domain supervisory support.",
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
    year: 2026,
    date: "2026",
    category: "Algorithms & Optimization",
    isResearch: true,
    status: "Initial Research Phase",
    repositoryVisibility: "private",
    repositoryUrl: undefined,
    featured: true,
    tags: [
      "Algorithms",
      "Scheduling",
      "Optimization",
      "Greedy Algorithms",
      "Fairness",
      "Concurrency",
      "Software Systems",
    ],
    summary:
      "An ongoing study of greedy scheduling, conflict-aware temporal allocation, fairness, and transactional revalidation for interview assignment in job fairs.",
    description:
      "Interview allocation at a large-scale job fair presents a complex two-sided scheduling challenge where multiple companies and students share constrained temporal resources. This research models the problem under coupled availability, non-overlapping intervals, lunch restrictions, and mandatory buffers, investigating an efficient conflict-jumping greedy heuristic paired with database-level transactional revalidation.",
    keyContributions: [
      "Two-sided scheduling formalization with joint temporal and buffer constraints",
      "Conflict-jumping heuristic preventing fine-grained minute-by-minute search stalls",
      "Empirical evaluation of buffer duration impact on overall allocation fraction",
      "Transaction-based optimistic revalidation mitigating concurrent scheduling races",
    ],
    technologies: ["C# / .NET", "Algorithm Design", "Synthetic Simulation", "Complexity Analysis", "Relational Concurrency"],
    schedulingCaseStudy: {
      subtitle: "Algorithm Design, Complexity, and Empirical Evaluation",
      researchStatusStatement:
        "This project is currently in the early stages of research and empirical validation. The scheduling formulation, greedy heuristic, complexity analysis, simulation methodology, and evaluation framework are being refined.",
      researchQuestion:
        "How can interview requests be efficiently allocated across shared student and company resources while respecting temporal constraints, fairness considerations, and concurrent scheduling requests?",
      twoSidedConstraints: [
        {
          title: "Two-Sided Assignment",
          description: "Companies need to interview multiple students, and students may be accepted by multiple companies.",
        },
        {
          title: "Simultaneous Exclusion",
          description: "Neither a student nor a company can participate in more than one interview simultaneously.",
        },
        {
          title: "Fixed Durations & Boundaries",
          description: "Interviews possess fixed durations and must fit strictly within declared operating hours.",
        },
        {
          title: "Mandatory Breaks",
          description: "Interviews cannot overlap designated shared event lunch breaks.",
        },
        {
          title: "Temporal Buffers",
          description: "A non-zero temporal buffer is required between consecutive interviews for transition and setup.",
        },
        {
          title: "Concurrent Dispatch",
          description: "Multiple company representatives may trigger automated scheduling concurrently in a decentralized system.",
        },
      ],
      motivation:
        "Interview scheduling at a job fair is fundamentally distinct from ordinary single-resource slot assignment. Every scheduling decision simultaneously ties up two distinct entities: a specific student and a company recruitment team. Because in-demand students receive multiple interview acceptances and companies maintain long queues of candidates, scheduling decisions exert cascading ripple effects. The scheduler must continuously balance student availability, company availability, hard temporal boundaries, and candidate processing order.",
      greedyAlgorithm: {
        overview:
          "The core scheduler employs a decentralized first-fit greedy heuristic augmented with conflict-jumping to rapidly determine earliest feasible time slots without fine-grained time-stepped scanning.",
        pipelineSteps: [
          {
            step: "01",
            title: "Accepted Requests Ingestion",
            description: "Collects pending accepted interview requests waiting to be scheduled for the calling company.",
          },
          {
            step: "02",
            title: "Priority Ordering",
            description: "Sorts candidate requests using a heuristic priority rule based on the candidate student's existing interview commitments.",
          },
          {
            step: "03",
            title: "First-Fit Search",
            description: "Iterates sequentially from the configured event start time to locate the earliest mutually open slot.",
          },
          {
            step: "04",
            title: "Conflict Detection",
            description: "Checks whether candidate intervals clash with company bookings, student bookings, lunch windows, or boundary limits.",
          },
          {
            step: "05",
            title: "Conflict Jumping",
            description: "When an overlap occurs, the search pointer jumps directly to the conclusion of the blocking interview plus required buffer.",
          },
          {
            step: "06",
            title: "Candidate Assignment",
            description: "Constructs an in-memory provisional schedule reservation for the current request.",
          },
          {
            step: "07",
            title: "Local Busy-List Update",
            description: "Immediately updates in-memory availability structures to prevent subsequent requests within the batch from self-conflicting.",
          },
          {
            step: "08",
            title: "Database Revalidation",
            description: "Opens an isolated database transaction, queries the latest persisted state, and verifies zero inter-company collision.",
          },
          {
            step: "09",
            title: "Commit / Rollback",
            description: "Commits allocations if all constraints remain unviolated; otherwise triggers transactional rollback and retry.",
          },
        ],
        priorityRuleNote:
          "Requests are ordered according to the number of interviews already scheduled for each student (students with more existing commitments processed first). This serves as an empirical heuristic priority rule rather than an optimality guarantee.",
        conflictJumpingNote:
          "Rather than advancing minute-by-minute through occupied periods, the search pointer advances directly to max(end_time + buffer) of detected conflicts. This eliminates thousands of redundant validity evaluations.",
      },
      formalModel: {
        definitions: [
          { symbol: "C", meaning: "Set of participating companies: {c_1, c_2, ..., c_m}" },
          { symbol: "S", meaning: "Set of eligible students: {s_1, s_2, ..., s_n}" },
          { symbol: "(c, s)", meaning: "Accepted interview request between company c and student s" },
          { symbol: "d_c", meaning: "Fixed interview duration configured for company c" },
          { symbol: "t_{c,s}", meaning: "Assigned starting timestamp for interview (c, s)" },
          { symbol: "β", meaning: "Mandatory transition buffer duration between consecutive interviews" },
          { symbol: "I_{c,s}", meaning: "Occupied temporal interval: [t_{c,s}, t_{c,s} + d_c)" },
          { symbol: "[T_{start}, T_{end}]", meaning: "Permissible daily operating window for interview sessions" },
          { symbol: "[T_{L,start}, T_{L,end}]", meaning: "Restricted mid-day lunch break window" },
        ],
        constraints: [
          {
            id: "F1",
            name: "Temporal Operating Feasibility",
            formula: "T_{start} \\le t_{c,s} \\quad \\wedge \\quad t_{c,s} + d_c \\le T_{end} \\quad \\wedge \\quad I_{c,s} \\cap [T_{L,start}, T_{L,end}] = \\emptyset",
            explanation: "Every scheduled session must execute entirely within operating hours and strictly avoid the lunch hiatus.",
          },
          {
            id: "F2",
            name: "Company Non-Overlap Constraint",
            formula: "\\forall s' \\ne s: \\quad [t_{c,s}, t_{c,s} + d_c + \\beta) \\cap [t_{c,s'}, t_{c,s'} + d_c + \\beta) = \\emptyset",
            explanation: "A single company recruitment team cannot conduct concurrent sessions, with buffer β enforced between bookings.",
          },
          {
            id: "F3",
            name: "Student Non-Overlap Constraint",
            formula: "\\forall c' \\ne c: \\quad [t_{c,s}, t_{c,s} + d_c + \\beta) \\cap [t_{c',s}, t_{c',s} + d_{c'} + \\beta) = \\emptyset",
            explanation: "A student cannot participate in multiple simultaneous interviews across distinct company recruitment teams.",
          },
        ],
      },
      complexityAnalysis: {
        sorting: "O(R \\log R) where R represents the count of candidate requests in the scheduling batch.",
        conflictChecking: "O(k_c + k_s) per evaluation step, where k_c and k_s are relevant company and student reservations.",
        searchBound: "Constant upper bound of 5,000 search iterations per candidate request enforced in the software implementation.",
        worstCaseBound: "O(R \\log R + 5000R(k_c + k_s)) under enforced iteration bounds.",
        empiricalFit: "Empirical log-log regression across simulated workloads yields a scaling exponent of approximately 1.08.",
        distinctionNote:
          "Important methodological note: The empirical scaling exponent near 1.08 observed in synthetic testing is an empirical observation of typical performance, not a mathematical proof of near-linear theoretical worst-case complexity.",
      },
      empiricalEvaluation: {
        overview:
          "Because operational job-fair scheduling execution logs are not publicly standardized or available, the current empirical evaluation relies on parametric synthetic scheduling scenarios.",
        scenarioType: "Synthetic Scheduling Scenarios",
        testedRequestRange: "32 to 1,454 synthetic requests across diverse student acceptance distributions",
        observedLogLogExponent: "1.08",
        investigatedFactors: [
          "Request volume scaling and computational throughput",
          "Scheduling contention and two-sided bottleneck emergence",
          "Company invocation order sensitivity",
          "Buffer duration variation (0 to 600 seconds)",
          "Priority ordering effects on throughput vs. fairness",
          "Overall scheduling success fraction under peak loads",
        ],
        preliminaryNotice:
          "All quantitative outcomes represent preliminary simulation findings from ongoing doctoral preparation research and are subject to expanded benchmark verification.",
      },
      bufferExperiment: {
        baselineBuffer: "90 seconds (system default transition allowance)",
        testedRange: "0 seconds to 600 seconds (10-minute maximum)",
        observations: [
          { bufferSeconds: 0, successRate: 76.0 },
          { bufferSeconds: 90, successRate: 71.4 },
          { bufferSeconds: 180, successRate: 66.8 },
          { bufferSeconds: 300, successRate: 61.2 },
          { bufferSeconds: 600, successRate: 53.8 },
        ],
        analysis:
          "Increasing the inter-interview buffer β noticeably contracts total scheduling capacity, reducing scheduling fraction from ~76.0% (β=0s) to ~53.8% (β=600s). The 90-second configuration represents an operational compromise between student physical movement across booths and aggregate scheduling density.",
      },
      fairnessAnalysis: {
        currentRuleDescription:
          "The current priority heuristic prioritizes requests for students who already possess higher scheduled interview counts, attempting to pack dense schedules efficiently.",
        observations: [
          "Preliminary simulations indicate the heuristic does not necessarily increase aggregate event-wide scheduling capacity.",
          "Processing order shifts significantly, often consolidating slots among already in-demand candidates.",
          "Early observations suggest the current rule may inadvertently reduce fairness for candidates with fewer total interview invitations.",
        ],
        futurePolicies: [
          "Students with fewer existing opportunities processed first (max-min equity)",
          "Guaranteed minimum interview quota allocation",
          "Fairness-aware multi-criteria ranking functions",
          "Dynamic opportunity-weighted priority queues",
          "Fairness-capacity Pareto frontier analysis",
        ],
      },
      concurrencyModel: {
        problemStatement:
          "In a decentralized event where multiple company booth managers click 'Generate Schedule' concurrently, independently calculated in-memory schedules can race for identical open student slots.",
        pipeline: [
          "Generate candidate schedule in memory using local snapshot",
          "Open isolated database transaction with read consistency",
          "Fetch persisted ground-truth intervals for target students & company",
          "Perform strict database-level conflict re-verification",
          "If conflict detected: Rollback transaction & signal retry required",
          "If valid: Persist allocated records & commit atomic transaction",
        ],
        mechanism: "Optimistic Transactional Revalidation",
        guaranteeNote:
          "This approach provides a robust atomic safety net preventing double-booking without requiring global pessimistic locking across the entire student body during heuristic search.",
      },
      walkInSupport: {
        description:
          "The underlying job-fair scheduling architecture additionally accommodates spontaneous on-site walk-in candidates without perturbing already locked interview commitments.",
        prerequisites: [
          "Company booth recruitment team must be logged in and currently present",
          "Current system clock must fall strictly within the active designated walk-in window",
          "Walk-in intake mode must be explicitly toggled active by company recruiters",
          "Candidate student must hold verified registration within the institutional portal",
        ],
      },
      realWorldConnection: {
        narrative:
          "This algorithmic research originated directly from engineering challenges encountered while designing and deploying the enterprise CUI Wah Job Fair Portal. Real-world observations of recruiter delays, double-booking contention, and student queueing motivated the formulation of formal scheduling models, conflict-jumping heuristics, and concurrency validation.",
        originSystem: "CUI Wah Job Fair Portal",
        evolutionSteps: [
          "Operational Job Fair Observations",
          "Two-Sided Constraint Formalization",
          "Mathematical Problem Modeling",
          "Greedy Heuristic Formulation",
          "Conflict-Jumping Search Optimization",
          "Synthetic Simulation & Scaling Analysis",
          "Database Transactional Revalidation",
          "Integrated Production-Ready Scheduling Engine",
        ],
      },
      futureDirections: [
        "Formulation of multi-objective fairness-aware scheduling priority rules",
        "Empirical benchmarking against alternative greedy heuristics (e.g., Shortest Processing Time, Slack Time)",
        "Investigation of local search and metaheuristic approaches (Simulated Annealing, Tabu Search)",
        "Exact Integer Linear Programming (ILP) formulations for small-to-medium problem instances",
        "Bipartite matching and network flow reductions for constrained sub-problems",
        "Maximum-flow formulations with non-uniform time slot capacities",
        "Scaling evaluations on ultra-large synthetic workloads (10,000+ requests)",
        "Acquisition and benchmarking against anonymized real-world job fair event logs",
        "Rigorous statistical hypothesis testing and variance analysis across random request graphs",
        "Distributed consensus protocols and formal concurrency throughput bounds",
        "Pareto-optimal frontier analysis balancing total event capacity against candidate fairness",
      ],
      limitations: [
        "Experimental evaluations currently rely exclusively on synthetic scenarios; real-world event logs are not yet available.",
        "Greedy heuristics make locally optimal decisions and do not guarantee global optimality or maximum possible matching.",
        "Company call order introduces scheduling path dependency, where earlier callers secure preferable time slots.",
        "The current priority heuristic requires further investigation regarding its fairness impact on low-frequency interviewees.",
        "The implemented 5,000-iteration search ceiling may theoretically truncate search in extreme hyper-dense edge scenarios.",
        "Optimistic transaction revalidation eliminates silent collisions but requires conflicting companies to retry scheduling.",
        "Statistical tests and effect-size analyses are currently in preliminary development.",
        "Formal mathematical proofs of approximation ratios under two-sided buffer constraints remain an open inquiry.",
      ],
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
];
