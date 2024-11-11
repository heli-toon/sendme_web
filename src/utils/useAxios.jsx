import axios from 'axios';
import dayjs from 'dayjs';
import jwt_decode from 'jwt-decode';
import { useContext, useRef } from 'react';
import AuthContext from '../context/AuthContext';

const baseURL = 'http://127.0.0.1:8000/api';

const useAxios = () => {
    const { authTokens, setUser, setAuthTokens, logoutUser } = useContext(AuthContext);
    const refreshTokenCall = useRef(null);

    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${authTokens?.access}` },
    });

    axiosInstance.interceptors.request.use(async req => {
        if (!authTokens) return req;

        const user = jwt_decode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        if (!refreshTokenCall.current) {
            refreshTokenCall.current = axios.post(`${baseURL}/token/refresh/`, {
                refresh: authTokens.refresh,
            }).catch((error) => {
                if (error.response && error.response.status === 400) {
                    logoutUser(); // Log out the user
                }
                throw error;
            });
        }
        try {
            const response = await refreshTokenCall.current;
            localStorage.setItem('authTokens', JSON.stringify(response.data));
            setAuthTokens(response.data);
            setUser(jwt_decode(response.data.access));
            req.headers.Authorization = `Bearer ${response.data.access}`;
        } catch (error) {
            console.error('Error refreshing token:', error);
        } finally {
            refreshTokenCall.current = null; // Reset after attempt
        }

        return req;
    }, error => {
        if (error.response.status === 401) {
            logoutUser(); // Log out if unauthorized
        }
        return Promise.reject(error);
    });

    return axiosInstance;
};

export default useAxios;