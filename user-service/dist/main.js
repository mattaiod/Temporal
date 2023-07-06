"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const users_pipe_1 = require("./users/users.pipe");
const nestjs_pino_1 = require("nestjs-pino");
const path_1 = require("path");
const tracing_1 = require("./tracing");
async function bootstrap() {
    tracing_1.otelSDK.start();
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            package: "users",
            protoPath: (0, path_1.join)(__dirname.concat("/users/users.proto")),
            url: "0.0.0.0:3000",
        },
    });
    app.useGlobalPipes(new users_pipe_1.UsersValidationPipe());
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map