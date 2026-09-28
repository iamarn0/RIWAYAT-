const BASE = import.meta.env.VITE_API_URL || "/api";

export async function postJson(path, body) {
  let response;

  try {
    response = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    const error = new Error("We could not reach the desk. Please try again in a moment.");
    error.fields = {};
    throw error;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || "Something went wrong. Please try again.");
    error.fields = data.errors || {};
    throw error;
  }

  return data;
}
