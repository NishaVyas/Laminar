// API Configuration for Frontend
// Change this to your production URL when deploying

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5009";

// Helper function to get full image URL
export const getImageUrl = (path) => {
  if (!path) return null;
  // If it's already a full URL, return as-is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // If it's an uploaded file from backend
  if (path.startsWith("/uploads/")) {
    return `${API_BASE_URL}${path}`;
  }
  // For local assets, return as-is (will be handled by Vite)
  return path;
};

// API endpoints
export const API = {
  home: `${API_BASE_URL}/api/home`,
  events: `${API_BASE_URL}/api/events`,
  industries: `${API_BASE_URL}/api/industry`,
  products: `${API_BASE_URL}/api/product`,
  productDetails: `${API_BASE_URL}/api/product-details`,
  contact: `${API_BASE_URL}/api/contact`,
};
