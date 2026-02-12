// If we are in production (deployed), use the live backend URL.
// If we are local, use localhost.
const isProduction = import.meta.env.PROD;

// WE WILL PASTE THE RENDER URL HERE LATER
export const API_URL = isProduction 
  ? "https://your-backend-app-name.onrender.com" 
  : "http://localhost:5000";