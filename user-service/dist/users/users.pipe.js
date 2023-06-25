"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const zod_validation_error_1 = require("zod-validation-error");
exports.UsersValidationPipe = (0, nestjs_zod_1.createZodValidationPipe)({
    createValidationException: (error) => new common_1.BadRequestException((0, zod_validation_error_1.fromZodError)(error)),
});
//# sourceMappingURL=users.pipe.js.map