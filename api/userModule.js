import apiCall from "./controler";

const login = async (details) => {
    try {
        const url = `loginRoute/Login`;
        const loginRequest = await apiCall.postURL(url, details);
        return loginRequest;
    } catch (error) {
        console.error('An error occurred while loggin in:', error);
        throw error;
    }
};

const register = async (details) => {
    try {
        const url = `loginRoute/Register`;
        const registerRequest = await apiCall.postURL(url, details);
        return registerRequest
    } catch (error) {
        console.error('An error occurred while registering in:', error);
        throw error;
    }
}


export default {
    login,
    register,
}