// API Configuration with fallback support
export const getApiUrl = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  // Always use REACT_APP_BACKEND_URL from environment
  if (!backendUrl || backendUrl.trim() === '') {
    console.warn('REACT_APP_BACKEND_URL not set, falling back to localhost');
    return 'http://localhost:8001';
  }
  
  return backendUrl;
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  OWNER: '/api/owner', 
  COMPANY: '/api/company',
  EMPLOYEES: '/api/employees',
  TIME: '/api/time'
};

// Create a configured API base URL
export const API_BASE_URL = getApiUrl();