const fs = require('fs');
const path = require('path');

// Simple valid standalone PDF generator for Academic CV
function generateAcademicCVPdf() {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length 1200 >>
stream
BT
/F1 20 Tf
50 740 Td
(MUHAMMAD HASSAN ASKARI - ACADEMIC CV) Tj
/F2 10 Tf
0 -20 Td
(Computer Vision | Robust Machine Learning | Domain Adaptation | Multimodal AI) Tj
0 -14 Td
(Email: askari.syed04@gmail.com | GitHub: github.com/AskariSyed | LinkedIn: linkedin.com/in/syed-hassan-askari) Tj
0 -25 Td
/F1 12 Tf
(ACADEMIC BACKGROUND) Tj
/F2 10 Tf
0 -16 Td
(BS in Computer Science - COMSATS University Islamabad, Wah Campus (2022-2026)) Tj
0 -14 Td
(CGPA: 3.65 / 4.00 | Total Completed Credits: 133) Tj
0 -14 Td
(IELTS Academic: 7.0 Overall (CEFR C1, Writing 6.5)) Tj
0 -25 Td
/F1 12 Tf
(RESEARCH FOCUS & CORE STATEMENTS) Tj
/F2 10 Tf
0 -16 Td
(Primary Statement: Reliable Visual Intelligence Under Environmental Domain Shift) Tj
0 -14 Td
(Core Interest: Visual reliability under uncertainty, degradation, and continuous domain shift.) Tj
0 -25 Td
/F1 12 Tf
(PUBLICATIONS & MANUSCRIPTS) Tj
/F2 10 Tf
0 -16 Td
(Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions) Tj
0 -14 Td
(Authors: Muhammad Hassan Askari, Muhammad Shareef | Status: Revised manuscript / under consideration) Tj
0 -25 Td
/F1 12 Tf
(TEACHING & ACADEMIC EXPERIENCE) Tj
/F2 10 Tf
0 -16 Td
(- Teaching Assistant: Artificial Intelligence (Spring 2026)) Tj
0 -14 Td
(- Teaching Assistant: Data Structures & Algorithms (3 Semesters)) Tj
0 -14 Td
(- Teaching Assistant: Compiler Construction (1 Semester)) Tj
0 -14 Td
(- Teaching Assistant: Programming Fundamentals / Practice (2 Semesters)) Tj
0 -25 Td
/F1 12 Tf
(TECHNICAL TOOLKIT) Tj
/F2 10 Tf
0 -16 Td
(Research: Computer Vision, Deep Learning, Robust ML, Domain Adaptation, Few-Shot Learning, VLMs) Tj
0 -14 Td
(Tools: Python, PyTorch, OpenCV, NumPy, Pandas, CUDA, Git, Jupyter) Tj
0 -14 Td
(Systems: C#, ASP.NET Core, FastAPI, PostgreSQL, React, TypeScript) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000001500 00000 n 
0000001577 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1650
%%EOF
`;

  const targetPath = path.join(__dirname, '..', 'public', 'cv', 'Muhammad-Hassan-Askari-Academic-CV.pdf');
  fs.writeFileSync(targetPath, content.trim(), 'binary');
  console.log('Successfully generated valid PDF Academic CV at:', targetPath);
}

generateAcademicCVPdf();
