import axios from "axios";

const API_URl = import.meta.env.VITE_BASE_URL;

const getCategories = async () => {
    const response = await axios.get(`${API_URl}/category`);
    // console.log(response.data);
    return response.data;
}


const categoryAPI = {getCategories};
export default categoryAPI;