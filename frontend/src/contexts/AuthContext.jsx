import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
        const storedUsername = localStorage.getItem('username') || '';

        setIsAuthenticated(storedAuth);
        setUsername(storedUsername);
    }, []);

    const login = (user) => {
        setIsAuthenticated(true);
        setUsername(user);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', user);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
