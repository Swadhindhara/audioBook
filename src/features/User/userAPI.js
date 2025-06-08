import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL;

const getProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.get(`${API_URL}/user/myProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const updateProfile = async (userData) => {
  const token = JSON.parse(localStorage.getItem("token"));
    try {
        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/user/profile`, userData,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
    } catch (error) {
        return error.message;
    }
}


const userAPI = { getProfile, updateProfile };
export default userAPI;