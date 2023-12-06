import apiCall from "./controler";

const login = async (details) => {
    try {
        const url = `loginRoute/Login`;
        const loginRequest = await apiCall.postURL(url,details);
        return loginRequest;
    } catch (error) {
        console.error('An error occurred while loggin in:', error);
        throw error;
    }
};


export default {
    login,
}