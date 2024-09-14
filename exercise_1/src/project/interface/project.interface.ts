export type ProjectStatus = 'open' | 'inProgress' | 'done';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  description?: string;
  dueDate?: Date;
}
