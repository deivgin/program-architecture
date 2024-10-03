import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateProjectDto {
  @ApiProperty({
    description: "The name of the project",
    example: "Project 1",
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "The description of the project",
    example: "Project 1 description",
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: "The due date of the project",
    example: "2021-08-01",
  })
  @IsOptional()
  dueDate: string;
}
