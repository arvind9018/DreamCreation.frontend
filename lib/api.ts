const API = process.env.NEXT_PUBLIC_API_URL;

export async function api(endpoint: string, options: any = {}) {
  const res = await fetch(`${API}${endpoint}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return res.json();
}
