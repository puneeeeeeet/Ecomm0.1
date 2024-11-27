import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001", // Backend server URL
  withCredentials: true, // To send cookies for authentication
});

export default api;
