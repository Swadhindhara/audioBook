import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL;

const getAllProducts = async( filters ={}) => {
    const params = new URLSearchParams();

  if (filters.categoryId) params.append("categoryId", filters.categoryId);
  if (filters.minAge) params.append("minAge", filters.minAge);
  if (filters.maxAge) params.append("maxAge", filters.maxAge);
  if (filters.minPrice) params.append("minPrice", filters.minPrice);
  if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
  if (filters.limit) params.append("limit", filters.limit);
  if (filters.offset) params.append("offset", filters.offset);

  const response = await axios.get(`${API_URL}/product/all?${params.toString()}`);
  return response.data;
}


const productsAPI = { getAllProducts }

export default productsAPI;