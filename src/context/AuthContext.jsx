import { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem('authTokens')
            ? JSON.parse(localStorage.getItem('authTokens'))
            : null
    );
    const [user, setUser] = useState(() =>
        localStorage.getItem('authTokens')
            ? jwt_decode(localStorage.getItem('authTokens'))
            : null
    );
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.status === 200) {
                setAuthTokens(data);
                const decodedUser = jwt_decode(data.access);
                setUser(decodedUser);
                localStorage.setItem('authTokens', JSON.stringify(data));
                navigate('/');
                swal.fire({
                    title: 'Login Successful',
                    icon: 'success',
                    toast: true,
                    timer: 6000,
                    position: 'bottom-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            } else {
                handleLoginError(response, data);
            }
        } catch (error) {
            console.error('Login error:', error);
            swal.fire({
                title: 'Login failed',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const registerUser = async (email, password, password2) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, password2 })
            });

            const data = await response.json();

            if (response.status === 201) {
                const { tokens } = data;
                setAuthTokens(tokens);
                const decodedUser = jwt_decode(tokens.access);
                setUser(decodedUser);
                localStorage.setItem('authTokens', JSON.stringify(tokens));
                navigate('/');
                swal.fire({
                    title: 'Registration Successful! Logged in automatically.',
                    icon: 'success',
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
            } else {
                handleRegistrationError(response, data);
            }
        } catch (error) {
            console.error('Registration error:', error);
            swal.fire({
                title: 'Registration failed',
                text: 'An unexpected error occurred. Please try again later.',
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
            });
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
        swal.fire({
            title: 'You have been logged out...',
            icon: 'success',
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
    };

    const handleLoginError = (response, data) => {
        console.error('Login failed with status:', response.status, data);
        swal.fire({
            title: 'Username or password is incorrect',
            icon: 'error',
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
    };

    const handleRegistrationError = (response, data) => {
        console.error('Registration failed with status:', response.status, data);
        swal.fire({
            title: `Something went wrong\nError Code: ${response.status}`,
            text: `Details: ${JSON.stringify(data)}`,
            icon: 'error',
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
        });
    };

    useEffect(() => {
        if (authTokens) {
            const decodedUser = jwt_decode(authTokens.access);
            setUser(decodedUser);
        }
        setLoading(false);
    }, [authTokens]);    

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
