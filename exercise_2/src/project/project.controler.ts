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
  Res,
} from '@nestjs/common';
import { CreateProjectDto, CreateProjectSchema } from './dto/createProject.dto';
import { UpdateProjectDto, UpdateProjectSchema } from './dto/updateProject.dto';
import { ProjectService } from './project.service';
import { ZodValidationPipe } from 'src/pipe/validation.pipe';
import { Response } from 'express';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  @HttpCode(204)
  @UsePipes(new ZodValidationPipe(CreateProjectSchema))
  @Redirect('http://localhost:3000', 301)
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
  @UsePipes(new ZodValidationPipe(UpdateProjectSchema))
  update(@Res() res: Response, @Body() updateProjectDto: UpdateProjectDto) {
    this.projectService.update(updateProjectDto);
    res.redirect(`http://localhost:3000/view/${updateProjectDto.id}`);
  }

  @Delete(':id')
  @Redirect('http://localhost:3000', 301)
  remove(@Param('id') id: string) {
    this.projectService.delete(id);
  }
}
