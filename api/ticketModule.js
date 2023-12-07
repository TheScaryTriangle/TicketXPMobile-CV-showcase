import apiCall from "./controler";

const buyTicket = async () => {
    try {
        const url = `ticketRoute/GetUserTickets`;
        const ticketRequest = await apiCall.getURL(url);
        return ticketRequest;
    } catch (error) {
        console.error('An error occurred while getting ticket details:', error);
        throw error;
    }
};

const getUserTickets = async () => {
    try {
        const url = `ticketRoute/GetUserTickets`;
        const ticketRequest = await apiCall.getURL(url);
        return ticketRequest;
    } catch (error) {
        console.error('An error occurred while getting ticket details:', error);
        throw error;
    }
};

export default {
    buyTicket,
    getUserTickets
}