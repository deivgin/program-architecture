export type ProjectStatus = "open" | "inProgress" | "done";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  description?: string;
  dueDate?: string;
};
