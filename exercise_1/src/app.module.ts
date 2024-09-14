import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProjectModule } from './project/project.module';
import { MethodMiddleware } from './middleware/method.middleware';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MethodMiddleware).forRoutes('*');
  }
}
