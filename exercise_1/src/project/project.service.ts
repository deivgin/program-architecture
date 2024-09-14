import { Injectable } from '@nestjs/common';
import { Project } from './interface/project.interface';
import { CreateProjectDto } from './dto/createProject.dto';

@Injectable()
export class ProjectService {
  private readonly projects: Array<Project> = [];

  create(projectDto: CreateProjectDto) {
    const project: Project = {
      id: Math.random().toString(36).substring(7),
      name: projectDto.name,
    };

    this.projects.push(project);
  }

  findAll() {
    return this.projects;
  }
}
