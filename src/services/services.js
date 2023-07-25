import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL 

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/api/users/login`, data);
        return {
            data : response?.data,
            status : response?.status
        };
    } catch (error) {
        const statusCode = error?.response?.status;
        const errorMessage = error?.response?.data?.error || error?.response?.data?.message || `Request failed with status code ${statusCode}`;

        return {
            data: errorMessage,
            status : statusCode
        };
    }
}