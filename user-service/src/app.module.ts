import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {LoggerModule as PinoLoggerModule} from "nestjs-pino/LoggerModule";

@Module({
  imports: [
    UsersModule,
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
export class AppModule {}
