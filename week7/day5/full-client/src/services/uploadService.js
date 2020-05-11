import axios from "axios";

const baseURL = "http://localhost:3000/upload";

const uploadService = axios.create({
  baseURL,
  withCredentials: true,
});

export const uploadPhoto = (photo) => {
  return uploadService.post("/", photo);
};
