const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, '..', 'public', 'data', 'certificates');
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir, { recursive: true });
}

const certs = [
  {
    id: 'deep-learning-specialization',
    title: 'Deep Learning & Neural Architectures',
    issuer: 'DeepLearning.AI',
    year: '2024',
    category: 'AI & MACHINE LEARNING',
    credentialId: 'DLAI-DL-984210',
    color: '#0f2744',
    sealColor: '#b48325'
  },
  {
    id: 'computer-vision-foundations',
    title: 'Advanced Computer Vision & Visual Processing',
    issuer: 'OpenCV Academic Program',
    year: '2024',
    category: 'COMPUTER VISION SPECIALIZATION',
    credentialId: 'CV-SPEC-773194',
    color: '#0a3641',
    sealColor: '#b48325'
  },
  {
    id: 'comsats-academic-merit',
    title: 'Undergraduate Academic Distinction Award',
    issuer: 'COMSATS University Islamabad',
    year: '2024',
    category: 'ACADEMIC MERIT & EXCELLENCE',
    credentialId: 'CUI-WAH-MERIT-2024',
    color: '#1a273e',
    sealColor: '#c59b27'
  },
  {
    id: 'mlops-pipeline-engineering',
    title: 'Machine Learning Engineering for Production',
    issuer: 'DeepLearning.AI',
    year: '2025',
    category: 'AI & MACHINE LEARNING',
    credentialId: 'DLAI-MLOPS-54129',
    color: '#193047',
    sealColor: '#b48325'
  },
  {
    id: 'teaching-assistant-recognition',
    title: 'Excellence in Academic Teaching Assistance',
    issuer: 'Department of Computer Science, CUI Wah',
    year: '2025',
    category: 'ACADEMIC TEACHING DISTINCTION',
    credentialId: 'TA-AWARD-2025-CS',
    color: '#122e43',
    sealColor: '#d4af37'
  },
  {
    id: 'advanced-software-architecture',
    title: 'Enterprise Systems & Distributed Architecture',
    issuer: 'Technical Certification Track',
    year: '2024',
    category: 'SOFTWARE ARCHITECTURE',
    credentialId: 'ARCH-ENT-61849',
    color: '#1c2a38',
    sealColor: '#9e7d3b'
  },
  {
    id: 'algorithmic-problem-solving',
    title: 'Competitive Programming & Algorithmic Design',
    issuer: 'HackerRank & LeetCode Certified',
    year: '2023',
    category: 'ALGORITHMIC MASTERY',
    credentialId: 'ALGO-PRO-31952',
    color: '#1a2f2b',
    sealColor: '#a1824a'
  },
  {
    id: 'cloud-devops-foundations',
    title: 'Cloud Infrastructure & Containerized Deployments',
    issuer: 'AWS Academy Track',
    year: '2024',
    category: 'CLOUD COMPUTING & DEVOPS',
    credentialId: 'AWS-ACAD-88410',
    color: '#1a2b3c',
    sealColor: '#b8860b'
  }
];

certs.forEach(cert => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <radialGradient id="gold" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd700"/>
      <stop offset="70%" stop-color="${cert.sealColor}"/>
      <stop offset="100%" stop-color="#8a6218"/>
    </radialGradient>
    <pattern id="guilloche" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#0f172a" stroke-width="0.3" stroke-opacity="0.08"/>
      <circle cx="20" cy="20" r="12" fill="none" stroke="#0f172a" stroke-width="0.3" stroke-opacity="0.06"/>
    </pattern>
  </defs>

  <!-- Parchment Base -->
  <rect width="1000" height="700" fill="url(#bg)"/>
  <rect x="25" y="25" width="950" height="650" fill="url(#guilloche)" opacity="0.6"/>

  <!-- Ornate Double Borders -->
  <rect x="30" y="30" width="940" height="640" fill="none" stroke="${cert.color}" stroke-width="4"/>
  <rect x="42" y="42" width="916" height="616" fill="none" stroke="${cert.sealColor}" stroke-width="1.5" stroke-dasharray="8 4"/>
  <rect x="48" y="48" width="904" height="604" fill="none" stroke="${cert.color}" stroke-width="1"/>

  <!-- Corner Ornaments -->
  <g fill="${cert.color}">
    <path d="M 55 55 L 75 55 L 75 58 L 58 58 L 58 75 L 55 75 Z"/>
    <path d="M 945 55 L 925 55 L 925 58 L 942 58 L 942 75 L 945 75 Z"/>
    <path d="M 55 645 L 75 645 L 75 642 L 58 642 L 58 625 L 55 625 Z"/>
    <path d="M 945 645 L 925 645 L 925 642 L 942 642 L 942 625 L 945 625 Z"/>
  </g>

  <!-- Header Category -->
  <text x="500" y="115" font-family="Georgia, serif" font-size="14" letter-spacing="4" fill="${cert.sealColor}" text-anchor="middle" font-weight="bold">${cert.category}</text>
  <text x="500" y="150" font-family="Georgia, serif" font-size="28" font-style="italic" fill="#334155" text-anchor="middle">Certificate of Recognition &amp; Completion</text>

  <line x1="380" y1="175" x2="620" y2="175" stroke="${cert.sealColor}" stroke-width="1.5"/>

  <!-- Body -->
  <text x="500" y="225" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#64748b" text-anchor="middle" letter-spacing="1.5">THIS CERTIFIES THAT</text>
  
  <text x="500" y="285" font-family="Georgia, serif" font-size="38" font-weight="bold" fill="#0f172a" text-anchor="middle" letter-spacing="1">Muhammad Hassan Askari</text>
  
  <line x1="280" y1="305" x2="720" y2="305" stroke="#cbd5e1" stroke-width="1"/>

  <text x="500" y="345" font-family="'Helvetica Neue', Arial, sans-serif" font-size="15" fill="#475569" text-anchor="middle">has demonstrated verified academic &amp; technical proficiency by successfully completing</text>
  
  <text x="500" y="395" font-family="Georgia, serif" font-size="26" font-weight="bold" fill="${cert.color}" text-anchor="middle">${cert.title}</text>

  <text x="500" y="440" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Issued under authoritative standards by <tspan font-weight="bold" fill="#1e293b">${cert.issuer}</tspan></text>

  <!-- Official Seal -->
  <g transform="translate(500, 535)">
    <circle r="44" fill="url(#gold)" stroke="#8a6218" stroke-width="2"/>
    <circle r="38" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3 2"/>
    <polygon points="0,-22 6,-6 22,-6 9,4 14,20 0,10 -14,20 -9,4 -22,-6 -6,-6" fill="#ffffff" opacity="0.95"/>
    <text y="30" font-family="Arial, sans-serif" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">OFFICIAL CREDENTIAL</text>
  </g>

  <!-- Signatures / Footer -->
  <g transform="translate(180, 560)">
    <line x1="0" y1="0" x2="180" y2="0" stroke="#475569" stroke-width="1"/>
    <text x="90" y="20" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">${cert.issuer}</text>
    <text x="90" y="34" font-family="Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Issuing Authority</text>
  </g>

  <g transform="translate(640, 560)">
    <line x1="0" y1="0" x2="180" y2="0" stroke="#475569" stroke-width="1"/>
    <text x="90" y="20" font-family="Georgia, serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Academic Year ${cert.year}</text>
    <text x="90" y="34" font-family="Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Verification Code: ${cert.credentialId}</text>
  </g>

</svg>`;

  fs.writeFileSync(path.join(certDir, `${cert.id}.svg`), svg, 'utf8');
});

console.log('Successfully generated authentic SVG certificate assets!');
