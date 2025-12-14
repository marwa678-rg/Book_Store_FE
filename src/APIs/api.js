import axios from "axios";
console.log(import.meta.env.VITE_BACKEND_BASE);
export const api = axios.create({
  baseURL:import.meta.env.VITE_BACKEND_BASE,
});