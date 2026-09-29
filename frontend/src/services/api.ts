import axios from 'axios';

const envBackendUrl =
  typeof globalThis !== 'undefined'
    ? (globalThis as unknown as { process?: { env?: Record<string, string> } }).process?.env?.BACKEND_URL
    : undefined;

const baseURL =
  import.meta.env.VITE_API_URL ??
  (typeof window !== 'undefined'
    ? '/api'
    : envBackendUrl
      ? `${envBackendUrl}/api`
      : 'http://localhost:4000/api');

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
