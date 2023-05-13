import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ZodValidationPipe } from 'nestjs-zod'
import { APP_PIPE } from '@nestjs/core'
import { TimeslotsModule } from './timeslots/timeslots.module';
import { TimeboxsModule } from './timeboxs/timeboxs.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TasksModule, TimeslotsModule, TimeboxsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_PIPE,
    useClass: ZodValidationPipe,
  }],
})
export class AppModule {}
