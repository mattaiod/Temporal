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
            name: 'USER_SERVICE',
            transport: Transport.GRPC,
            options: {
                package: 'users',
                protoPath: join( 'src/users/users.proto'),
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
