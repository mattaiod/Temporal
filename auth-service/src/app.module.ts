import {LoggerModule as PinoLoggerModule} from "nestjs-pino";
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import {PassportModule} from "@nestjs/passport";
import { RefreshTokensModule } from './refresh-tokens/refresh-tokens.module';
import {JwtService} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true
      }),
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
    PassportModule.register({defaultStrategy: 'jwt'}),
    UsersModule,
    RefreshTokensModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
