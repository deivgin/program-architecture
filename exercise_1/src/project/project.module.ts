import { Module } from '@nestjs/common';
import { ProjectController } from './project.controler';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
