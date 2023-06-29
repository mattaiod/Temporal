import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";
import { UsersModule } from './users/users.module';
import {UsersService} from "./users/users.service";


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
