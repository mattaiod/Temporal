import { Module } from '@nestjs/common';
import { TimeboxsService } from './timeboxs.service';
import { TimeboxsController } from './timeboxs.controller';

@Module({
  controllers: [TimeboxsController],
  providers: [TimeboxsService]
})
export class TimeboxsModule {}
