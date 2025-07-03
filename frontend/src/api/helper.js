// API Helper with automatic endpoint detection
class ApiHelper {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BACKEND_URL || '';
    this.endpointTested = false;
  }

  async detectEndpoint() {
    if (this.endpointTested) {
      return this.baseUrl;
    }

    // Use REACT_APP_BACKEND_URL from environment
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (backendUrl && backendUrl.trim() !== '') {
      try {
        const response = await fetch(`${backendUrl}/api/`, {
          method: 'GET',
          timeout: 5000
        });
        
        if (response.ok) {
          this.baseUrl = backendUrl;
          this.endpointTested = true;
          console.log('API endpoint detected:', this.baseUrl);
          return this.baseUrl;
        }
      } catch (error) {
        console.warn(`Failed to connect to ${backendUrl}/api/`, error);
      }
    }

    // Fallback to localhost
    this.baseUrl = 'http://localhost:8001';
    this.endpointTested = true;
    console.warn('Using fallback API endpoint:', this.baseUrl);
    return this.baseUrl;
  }

  async makeRequest(path, options = {}) {
    const baseUrl = await this.detectEndpoint();
    const url = `${baseUrl}${path}`;
    
    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
  }
}

export const apiHelper = new ApiHelper();