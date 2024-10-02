const API_URL = "http://localhost:3001";

export const getProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
};

export const getProject = async (id: string) => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  return response.json();
};
