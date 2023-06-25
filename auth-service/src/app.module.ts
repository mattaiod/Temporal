import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";


@Module({
  imports: [AuthModule,
    PinoLoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true
          }
        }
      }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
