import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
})
export class AppModule {}
