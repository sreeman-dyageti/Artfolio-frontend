import { createContext, useContext, useEffect, useState } from "react";
import { login as loginRequest, logout as logoutRequest,
    refreshAccessToken,
    getCurrentUser, } from "../api/auth";
import { setAccessToken, clearAccessToken,} from "../auth/tokenStore";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const restoreSession = async () => {
        try {
            const response = await refreshAccessToken();

            const accessToken = response.data.data.accessToken;

            setAccessToken(accessToken);

            const userResponse = await getCurrentUser();

            setUser(userResponse.data.data.user);
        } catch {
            clearAccessToken();
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        restoreSession();
    }, []);

    const login = async (credentials) => {
        const response = await loginRequest(credentials);

        const { accessToken, user } = response.data.data;

        setAccessToken(accessToken);
        setUser(user);

        return user;
    };

    const logout = async () => {
        try {
            await logoutRequest();
        } finally {
            clearAccessToken();
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};