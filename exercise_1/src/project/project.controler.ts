import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  HttpCode,
  Redirect,
  UsePipes,
} from '@nestjs/common';
import { CreateProjectDto, CreateProjectSchema } from './dto/createProject.dto';
import { UpdateProjectDto, UpdateProjectSchema } from './dto/updateProject.dto';
import { ProjectService } from './project.service';
import { ZodValidationPipe } from 'src/pipe/validation.pipe';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  @HttpCode(204)
  @Redirect('http://localhost:3000', 301)
  @UsePipes(new ZodValidationPipe(CreateProjectSchema))
  create(@Body() createProjectBody: CreateProjectDto) {
    this.projectService.create(createProjectBody);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Put(':id')
  @Redirect('http://localhost:3000', 301)
  @UsePipes(new ZodValidationPipe(UpdateProjectSchema))
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  @Redirect('http://localhost:3000', 301)
  remove(@Param('id') id: string) {
    this.projectService.delete(id);
  }
}
