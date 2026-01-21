import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8120/auth"        // 👈 local
      : "https://noteapp-6-mqwv.onrender.com/auth", // 👈 render
  withCredentials: true,
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const getMe = () => API.get("/me");
export const logoutUser = () => API.post("/logout");

module.exports = router;