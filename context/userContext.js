import React, { createContext, useState, useContext } from 'react';

// Create a context for the user
export const UserContext = createContext();

// Create a provider for the user context
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Initial user state

    // Function to set user details
    const setUserDetails = (userData) => {
        setUser(userData);
    };

    // Function to clear user details (logout)
    const clearUserDetails = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUserDetails, clearUserDetails }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to consume the user context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
