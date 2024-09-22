import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  Redirect,
  UsePipes,
  Res,
} from '@nestjs/common';
import { CreateProjectDto, CreateProjectSchema } from './dto/createProject.dto';
import { UpdateProjectDto, UpdateProjectSchema } from './dto/updateProject.dto';
import { ProjectService } from './project.service';
import { ZodValidationPipe } from 'src/pipe/validation.pipe';
import { Response } from 'express';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
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
