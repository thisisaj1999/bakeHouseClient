import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL 

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/api/users/login`, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}