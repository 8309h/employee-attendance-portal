import axios from "axios";

const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers.Authorization = token;
      return config;
});

api.interceptors.response.use(
      (res) => res,
      (err) => {
            if (err.response?.status === 401) {
                  alert("Session expired. Please login again.");

                  localStorage.removeItem("token");
                  window.location.href = "/login";
            }
            return Promise.reject(err);
      }
);

export default api;