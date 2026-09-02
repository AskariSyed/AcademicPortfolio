export type CertificateType = "pdf" | "image";

export type CertificateCategory =
  | "All"
  | "Academic"
  | "Competitions"
  | "Professional Development"
  | "Software Engineering";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CertificateCategory;
  file: string; // Preview image path (.png or .svg)
  pdfUrl?: string; // Direct original PDF link
  verificationUrl?: string; // Online verification link if available
  type: CertificateType;
  description: string;
  featured: boolean;
  frameStyle?: {
    rotationDeg?: number; // Pre-calculated deterministic tilt angle (-3 to +3)
    frameColor?: "dark-oak" | "sleek-black" | "brushed-silver" | "academic-navy";
    matting?: "cream" | "white" | "stone";
    aspect?: "landscape" | "portrait";
  };
}

export const CERTIFICATE_CATEGORIES: CertificateCategory[] = [
  "All",
  "Academic",
  "Competitions",
  "Professional Development",
  "Software Engineering",
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "comsats-academic-merit",
    title: "Merit Certificate — Second Position (4.00/4.00 SGPA)",
    issuer: "COMSATS University Islamabad, Wah Campus",
    year: "2026",
    category: "Academic",
    file: "/data/certificates/merit-certificate.png",
    pdfUrl: "/data/certificates/Merit Certificate.pdf",
    type: "image",
    description:
      "Awarded to Muhammad Hassan Askari in recognition of securing Second Position with a perfect 4.00/4.00 SGPA in the Bachelor of Science in Computer Science Examination (Sr. No. CU/WAH/26/2823).",
    featured: true,
    frameStyle: {
      rotationDeg: -1.8,
      frameColor: "academic-navy",
      matting: "cream",
      aspect: "portrait",
    },
  },
  {
    id: "visio-spark-2025",
    title: "VisioSpark 2025 — Mobile Application Development Competition",
    issuer: "COMSATS University Islamabad (IEEE / ACM / ASME)",
    year: "2025",
    category: "Competitions",
    file: "/data/certificates/visio-spark-participation.png",
    pdfUrl: "/data/certificates/Visio Spark Participation.pdf",
    type: "image",
    description:
      "Certificate of Participation presented to Muhammad Hassan Askari for competing in the Mobile Application Development Competition at the 21st Episode of VisioSpark (November 29, 2025).",
    featured: true,
    frameStyle: {
      rotationDeg: 2.2,
      frameColor: "dark-oak",
      matting: "white",
      aspect: "landscape",
    },
  },
  {
    id: "student-week-organizer",
    title: "Certificate of Organizer — Student Week",
    issuer: "COMSATS University Islamabad, Directorate of Student Affairs",
    year: "2025",
    category: "Professional Development",
    file: "/data/certificates/student-week-organizer.png",
    pdfUrl: "/data/certificates/Student Week Organizer Certificate.pdf",
    type: "image",
    description:
      "Awarded in recognition of active organizational leadership and event management for Student Week, presented by the Directorate of Student Affairs at COMSATS Wah Campus.",
    featured: true,
    frameStyle: {
      rotationDeg: -1.4,
      frameColor: "sleek-black",
      matting: "stone",
      aspect: "landscape",
    },
  },
  {
    id: "google-cybersecurity-coursera",
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    year: "2023",
    category: "Professional Development",
    file: "/data/certificates/google-cybersecurity-coursera.png",
    pdfUrl: "/data/certificates/CYber Coursera PXQV5TNBQ5WK.pdf",
    verificationUrl: "https://coursera.org/verify/professional-cert/PXQV5TNBQ5WK",
    type: "image",
    description:
      "Comprehensive 8-course professional credential spanning network security, Linux, SQL, SIEM tools, intrusion detection systems, Python automation, and vulnerability assessment (Credential ID: PXQV5TNBQ5WK).",
    featured: true,
    frameStyle: {
      rotationDeg: 1.6,
      frameColor: "brushed-silver",
      matting: "cream",
      aspect: "landscape",
    },
  },
  {
    id: "sqa-automation-coursera",
    title: "Software QA & Test Automation Engineering Specialization",
    issuer: "Coursera / Industry Experts",
    year: "2026",
    category: "Software Engineering",
    file: "/data/certificates/sqa-automation-coursera.png",
    pdfUrl: "/data/certificates/SQA Coursera 8803BXRLBAE1.pdf",
    verificationUrl: "https://coursera.org/verify/specialization/8803BXRLBAE1",
    type: "image",
    description:
      "Rigorous 5-course specialization covering Selenium web automation, Cypress test architectures, JMeter performance testing, xUnit frameworks, and Postman API validation (Credential ID: 8803BXRLBAE1).",
    featured: true,
    frameStyle: {
      rotationDeg: -2.3,
      frameColor: "sleek-black",
      matting: "white",
      aspect: "landscape",
    },
  },
  {
    id: "ssbs-experience",
    title: "Leadership & Experience Certificate — Student Startup Business Society (SSBS)",
    issuer: "COMSATS University Islamabad, Wah Campus",
    year: "2026",
    category: "Professional Development",
    file: "/data/certificates/ssbs-experience.png",
    pdfUrl: "/data/certificates/SSBS EXPERIENCE_Hassan.pdf",
    type: "image",
    description:
      "Awarded in recognition of dedicated service across three leadership tenures at the Student Startup Business Society (SSBS): Member of Operations (Sep 2024 – Apr 2025), Head of Operations (May 2025 – Feb 2026), and Senior Advisor (Feb 2026 – Jun 2026), endorsed by the Career Development Center.",
    featured: true,
    frameStyle: {
      rotationDeg: 1.8,
      frameColor: "dark-oak",
      matting: "cream",
      aspect: "portrait",
    },
  },
  {
    id: "open-house-job-fair-2026",
    title: "Certificate of Appreciation — Open House & Job Fair Spring 2026",
    issuer: "COMSATS University Islamabad, Wah Campus",
    year: "2026",
    category: "Academic",
    file: "/data/certificates/openhouse-certificate.png",
    pdfUrl: "/data/certificates/OpenHouse Certificate.pdf",
    type: "image",
    description:
      "Presented to Muhammad Hassan Askari in recognition of active participation and support in Open House & Job Fair Spring 2026 at COMSATS University Islamabad, Wah Campus, endorsed by Campus Director Prof. Dr. Muhammad Junaid Mughal (T.I.).",
    featured: true,
    frameStyle: {
      rotationDeg: -1.5,
      frameColor: "brushed-silver",
      matting: "white",
      aspect: "landscape",
    },
  },
];
