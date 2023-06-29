import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_EVENTS_API_BASE_URL}/api`,
  // baseURL: `${import.meta.env.VITE_LOCAL_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    console.error(response);

    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
    } else if (response.status === 404) {
      // Show not found error
    }

    throw error;
  }
);

export default axiosClient;
