import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const getPageData = async(id) => {
    const response = await axios.get(`${API_URL}/pages/${id}`);
    return response.data;
} 


const pageAPI = {getPageData};
export default pageAPI;