import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BASE_URL;

const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/user/login`, userData);
  console.log(response.data);
  return response.data;
};

const logout = async () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
    toast.success("Logout Successfully!!!");
  }else{
    toast.warning("No user logged in.")
  }
};

const getProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios.get(`${API_URL}/user/myProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const authAPI = { loginUser, getProfile, logout };

export default authAPI;
