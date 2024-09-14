import { ProjectStatus } from '../interface/project.interface';

export class UpdateProjectDto {
  name: string;
  status: ProjectStatus;
  description?: string;
  dueDate?: Date;
}
