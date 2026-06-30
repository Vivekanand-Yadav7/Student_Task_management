/**
 * Base URL for all API calls.
 * - In dev:        Vite proxy handles "/api/*" → localhost:5000, so BASE = ""
 * - In production: VITE_API_URL must point to the backend, e.g. "https://your-api.railway.app"
 */
const BASE = import.meta.env.VITE_API_URL ?? '';

export function apiUrl(path: string): string {
  // path should start with /api/...
  return `${BASE}${path}`;
}

export function authHeaders(): Record<string, string> {
  const token = localStorage.getItem('token');
  return token
    ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' };
}
