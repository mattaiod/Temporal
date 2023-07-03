import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";
import { UsersModule } from './users/users.module';


@Module({
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
    }),
    UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

