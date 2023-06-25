import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {PrismaClient} from "@prisma/client";
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";


@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient],
  imports: [
      PinoLoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          singleLine: true
        }
      }
    }
  })]
})
export class UsersModule {}