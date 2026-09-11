import { ImageResponse } from "next/og";

export const alt = "Fabio Brizotti | Desenvolvedor Full Stack & IA";
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
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#38bdf8",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Portfólio Profissional
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Fabio Brizotti
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#94a3b8",
            maxWidth: "900px",
            lineHeight: 1.4,
          }}
        >
          Desenvolvedor Full Stack &amp; Especialista em Inteligência Artificial
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              padding: "10px 24px",
              borderRadius: "9999px",
              background: "#1e293b",
              color: "#38bdf8",
              fontSize: 20,
              fontWeight: 600,
              border: "1px solid #334155",
            }}
          >
            Next.js &bull; TypeScript &bull; Python &bull; IA
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
