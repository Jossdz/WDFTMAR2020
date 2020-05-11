import axios from "axios";

const baseURL = "http://localhost:3000/projects";

const projectsService = axios.create({
  baseURL,
  withCredentials: true,
});

export const createProject = (project) => {
  return projectsService.post("/", project);
};
export const getAllProjects = () => {
  return projectsService.get("/");
};
export const getProject = (projectId) => {
  return projectsService.get(`/${projectId}`);
};
export const editProject = (projectId, projectEdited) => {
  return projectsService.put(`/${projectId}`, projectEdited);
};
export const deleteProject = (projectId) => {
  return projectsService.delete(`/${projectId}`);
};
