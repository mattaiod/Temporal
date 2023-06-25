import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices'
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";
import {join} from 'path';
@Module({
  imports: [
      ClientsModule.register([
          {
              name: 'user-service',
              transport: Transport.GRPC,
              options: {
                  package: 'users',
                  protoPath: join(__dirname, 'users/users.proto'),
                  url: "user-service:3000"
              }

              // name: 'USER_SERVICE',
              // transport: Transport.TCP,
              // options:{
              //     host: 'user-service',
              // }
          },
      ]),
      PinoLoggerModule.forRoot({
          pinoHttp: {
              transport: {
                  target: 'pino-pretty',
                  options: {
                      singleLine: true
                  }
              }
          }
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
