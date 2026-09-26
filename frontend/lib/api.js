// frontend/lib/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://ai-scam-analyzer-nc6l.onrender.com";

export async function analyzeThreat(payload) {
  const response = await fetch(`${API_BASE_URL}/api/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze threat telemetry");
  }

  return await response.json();
}