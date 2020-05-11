import axios from "axios";

const baseURL = "http://localhost:3000/auth";

const authService = axios.create({
  baseURL,
  withCredentials: true,
});

export const signup = (userData) => {
  return authService.post("/signup", userData);
};
export const login = (userData) => {
  return authService.post("/login", userData);
};
export const logout = () => {
  return authService.get("/logout");
};
export const currentUser = () => {
  return authService.get("/currentUser");
};
