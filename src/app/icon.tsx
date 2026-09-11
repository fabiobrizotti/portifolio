import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#38bdf8",
          fontWeight: 800,
          borderRadius: "20%",
          border: "1px solid #38bdf8",
        }}
      >
        FB
      </div>
    ),
    {
      ...size,
    }
  );
}
