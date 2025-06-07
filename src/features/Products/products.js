import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL;

const getAllProducts = async() => {
    const response = await axios.get(`${API_URL}/product/all`);
    return response.data;
}


const productsAPI = { getAllProducts }

export default productsAPI;