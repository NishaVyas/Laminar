import { useState, useEffect } from "react";
import { API_BASE_URL, getImageUrl } from "../config/api";

/**
 * Custom hook to fetch data from API with fallback to default data
 * @param {string} endpoint - API endpoint (e.g., "/api/home?type=banner")
 * @param {any} fallbackData - Default data to use if API fails
 * @param {function} transformFn - Optional function to transform API response
 * @returns {{ data: any, loading: boolean, error: string|null }}
 */
export function useApiData(endpoint, fallbackData, transformFn = null) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        // Apply transformation if provided
        const transformedData = transformFn ? transformFn(result) : result;

        // Only update if we got actual data
        if (transformedData && (Array.isArray(transformedData) ? transformedData.length > 0 : Object.keys(transformedData).length > 0)) {
          setData(transformedData);
        }

        setError(null);
      } catch (err) {
        console.warn(`API fetch failed for ${endpoint}:`, err.message);
        setError(err.message);
        // Keep fallback data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

/**
 * Transform API banner data to match frontend structure
 */
export function transformBanners(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  // Filter out items without valid images and map to frontend structure
  const validBanners = apiData
    .filter(item => !!item.imageUrl)
    .map(item => ({
      image: getImageUrl(item.imageUrl),
      title: item.title || "",
      desc: item.description || "",
    }));

  return validBanners.length > 0 ? validBanners : null;
}

/**
 * Transform API product data to match frontend structure
 */
export function transformProducts(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    title: item.title || "",
    desc: item.description || "",
    image: getImageUrl(item.imageUrl),
    link: item.link || "#",
  }));
}

/**
 * Transform API stats data to match frontend structure
 */
export function transformStats(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    icon: getImageUrl(item.imageUrl),
    value: item.value || "",
    label: item.label || "",
  }));
}

/**
 * Transform API about data to match frontend structure
 */
export function transformAbout(apiData) {
  if (!apiData) return null;

  return {
    title: apiData.title || "About Us",
    description: apiData.description || "",
    link: apiData.link || "/contact-us",
  };
}

/**
 * Transform API story data to match frontend structure
 */
export function transformStory(apiData) {
  if (!apiData || (Array.isArray(apiData) && apiData.length === 0)) return null;

  // If it's an array, get the last item (most recently added)
  // API returns items sorted by createdAt ascending, so last = newest
  const item = Array.isArray(apiData) ? apiData[apiData.length - 1] : apiData;
  if (!item) return null;

  return {
    title: item.title || "Our Story",
    description: item.description || "",
    videoUrl: getImageUrl(item.videoUrl),
    link: item.link || "/about-us",
  };
}

/**
 * Transform API operations/manufacturing data
 */
export function transformOperations(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    title: item.title || "",
    description: item.description || "",
    img: getImageUrl(item.imageUrl),
  }));
}

/**
 * Transform API industries data
 */
export function transformIndustries(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    title: item.title || item.name || "",
    desc: item.description || "",
    image: getImageUrl(item.imageUrl || item.image),
    name: item.title || item.name || "",
  }));
}

/**
 * Transform API accreditations data
 * Accreditation items have a clients array with logos
 */
export function transformAccreditations(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  // Collect all client logos from all accreditation items
  const allAccreditations = [];

  apiData.forEach(item => {
    // Check if item has clients array (new format from admin)
    if (item.clients && Array.isArray(item.clients)) {
      item.clients.forEach(client => {
        if (client.logoUrl || client.name) {
          allAccreditations.push({
            title: client.name || "",
            image: getImageUrl(client.logoUrl),
          });
        }
      });
    } else if (item.imageUrl) {
      // Fallback: direct imageUrl on item (old format)
      allAccreditations.push({
        title: item.title || "",
        image: getImageUrl(item.imageUrl),
      });
    }
  });

  return allAccreditations.length > 0 ? allAccreditations : null;
}

/**
 * Transform API clients data
 */
export function transformClients(apiData) {
  // Handle both single object and array
  const clientData = Array.isArray(apiData) ? apiData[0] : apiData;
  if (!clientData || !clientData.clients) return null;

  return clientData.clients.map(client => ({
    src: getImageUrl(client.logoUrl),
    alt: client.name || "Client",
  }));
}

/**
 * Transform API events data
 */
export function transformEvents(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    image: getImageUrl(item.imageUrl || item.image),
    title: item.title || "",
    description: item.description || "",
    details: item.details || "",
    date: item.date || "",
  }));
}

/**
 * Transform API choose us data (manufacturing)
 */
export function transformChooseUs(apiData) {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    title: item.title || "",
    description: item.description || "",
    image: getImageUrl(item.imageUrl),
  }));
}

export { getImageUrl };
