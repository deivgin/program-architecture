import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Project } from './interface/project.interface';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';

@Injectable()
export class ProjectService {
  private readonly projects: Array<Project> = [
    {
      id: '1',
      status: 'open',
      name: 'Project 1',
      description: 'Project 1 description',
      dueDate: new Date().toDateString(),
    },
    {
      id: '2',
      status: 'open',
      name: 'Project 2',
      description: 'Project 2 description',
      dueDate: new Date().toDateString(),
    },
    {
      id: '3',
      status: 'open',
      name: 'Project 3',
      description: 'Project 3 description',
      dueDate: new Date().toDateString(),
    },
  ];

  create(projectDto: CreateProjectDto) {
    const project: Project = {
      id: Math.random().toString(36).substring(7),
      status: 'open',
      name: projectDto.name,
      description: projectDto.description,
      dueDate: projectDto.dueDate,
    };

    this.projects.push(project);

    return project;
  }

  findAll() {
    return this.projects;
  }

  findOne(id: string) {
    return this.projects.find((project) => project.id === id) ?? null;
  }

  update(id: string, projectDto: UpdateProjectDto) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );

    if (projectIndex === -1) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    this.projects[projectIndex] = {
      ...this.projects[projectIndex],
      ...projectDto,
    };
  }

  delete(id: string) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === id,
    );

    if (projectIndex === -1) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    this.projects.splice(projectIndex, 1);
  }
}
