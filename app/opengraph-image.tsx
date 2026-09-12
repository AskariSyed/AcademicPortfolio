import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Muhammad Hassan Askari | AI/ML Research & Computer Vision";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1e293b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "rgba(30, 58, 138, 0.5)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              fontSize: "18px",
              color: "#38bdf8",
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#38bdf8" }} />
            <span>Academic Research Portfolio</span>
          </div>

          <div
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            COMSATS University Islamabad
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Muhammad Hassan Askari
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#38bdf8",
              fontFamily: "monospace",
              fontWeight: 600,
            }}
          >
            Computer Science Graduate · AI/ML Researcher
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "#e2e8f0",
              fontWeight: 600,
              maxWidth: "950px",
              lineHeight: 1.35,
              marginTop: "12px",
              paddingLeft: "20px",
              borderLeft: "4px solid #38bdf8",
            }}
          >
            Reliable Computer Vision Under Distribution Shift
          </div>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#cbd5e1",
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "#38bdf8" }}>✓</span> BS Computer Science (2022–2026)
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#cbd5e1",
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "#38bdf8" }}>✓</span> CGPA: 3.65 / 4.00
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              color: "#cbd5e1",
              fontFamily: "monospace",
            }}
          >
            <span style={{ color: "#38bdf8" }}>✓</span> IELTS: 7.0 (C1 CEFR)
          </div>

          <div
            style={{
              marginLeft: "auto",
              fontSize: "16px",
              color: "#94a3b8",
              fontFamily: "monospace",
            }}
          >
            research-with-askari.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
