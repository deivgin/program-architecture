import { Project } from "../model/project";

const API_URL = "http://localhost:3001/project";

export const getProjects = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getProject = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createProject = async (project: Project) => {
  return await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
};

export const updateProject = async (id: string, project: Project) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
};

export const deleteProject = async (id: string) => {
  return await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
