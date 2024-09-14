import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/createProject.dto';
import { UpdateProjectDto } from './dto/updateProject.dto';
import { Project } from './interface/project.interface';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  @HttpCode(204)
  create(@Body() createProjectBody: CreateProjectDto) {
    this.projectService.create(createProjectBody);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Project {
    console.log('id', id);
    return { id: id, name: `Project ${2}` };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    console.log('updateProjectDto', updateProjectDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} project`;
  }
}
