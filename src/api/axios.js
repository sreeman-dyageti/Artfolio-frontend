import axios from "axios";
import {
    getAccessToken,
    setAccessToken,
    clearAccessToken,
} from "../auth/tokenStore";

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

let refreshPromise = null;

api.interceptors.request.use((config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status !== 401 ||
            originalRequest?._retry ||
            originalRequest?.url === "/auth/refresh"
        ) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            if (!refreshPromise) {
                refreshPromise = api
                    .post("/auth/refresh")
                    .then((response) => {
                        const newAccessToken =
                            response.data.data.accessToken;

                        setAccessToken(newAccessToken);

                        return newAccessToken;
                    })
                    .finally(() => {
                        refreshPromise = null;
                    });
            }

            const newAccessToken = await refreshPromise;

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;

            return api(originalRequest);
        } catch (refreshError) {
            clearAccessToken();

            return Promise.reject(refreshError);
        }
    }
);

export default api;