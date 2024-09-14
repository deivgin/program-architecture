import { Injectable } from '@nestjs/common';
import { Project } from './interface/project.interface';
import { CreateProjectDto } from './dto/createProject.dto';

@Injectable()
export class ProjectService {
  private readonly projects: Array<Project> = [];

  create(projectDto: CreateProjectDto) {
    const project: Project = {
      id: Math.random().toString(36).substring(7),
      status: 'open',
      name: projectDto.name,
      description: projectDto.description,
      dueDate: projectDto.dueDate,
    };

    this.projects.push(project);
  }

  findAll() {
    return this.projects;
  }

  findOne(id: string) {
    return this.projects.find((project) => project.id === id) ?? null;
  }

  update(id: string, projectDto: CreateProjectDto) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );

    this.projects[projectIndex] = {
      ...this.projects[projectIndex],
      ...projectDto,
    };
  }

  delete(id: string) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );
    this.projects.splice(projectIndex, 1);
  }
}
