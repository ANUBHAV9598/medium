import axios from "axios";

const instance = axios.create({
    baseURL: "https://backend.anubhavpandya99.workers.dev/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// Attach Authorization header if token exists
instance.interceptors.request.use((config) => {
    try {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers = config.headers ?? {};
            (config.headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
        }
    } catch (_) {
        // ignore storage access errors
    }
    return config;
});

export default instance;
