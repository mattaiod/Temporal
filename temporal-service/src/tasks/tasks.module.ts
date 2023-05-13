import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TasksRepository } from './tasks.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
  imports: [PrismaModule],
  exports: [TasksService]
})
export class TasksModule {}
