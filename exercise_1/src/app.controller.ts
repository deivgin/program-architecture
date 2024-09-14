import { Controller, Get, Render, Param } from '@nestjs/common';
import { ProjectService } from './project/project.service';

@Controller()
export class AppController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Render('index')
  root() {
    return { projects: this.projectService.findAll() };
  }

  @Get('create')
  @Render('create')
  create() {
    return {};
  }

  @Get('edit/:id')
  @Render('edit')
  edit(@Param('id') id: string) {
    return { project: this.projectService.findOne(id) };
  }
}
