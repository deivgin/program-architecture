import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '../interface/project.interface';
import { IsDateString, IsIn, IsNotEmpty, IsOptional } from 'class-validator';

const projectStatus: ProjectStatus[] = ['open', 'inProgress', 'done'];

export class UpdateProjectDto {
  @ApiProperty({
    description: 'The name of the project',
    example: 'Project 1',
    required: true,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The status of the project',
    example: 'open',
    required: true,
  })
  @IsIn(projectStatus)
  status: ProjectStatus;

  @ApiProperty({
    description: 'The description of the project',
    example: 'Project 1 description',
    required: false,
  })
  @IsNotEmpty()
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'The due date of the project',
    example: '2021-08-01',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  dueDate: string;
}
