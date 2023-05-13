"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const create_timebox_dto_1 = require("../../timeboxs/dto/create-timebox.dto");
const create_timeslot_dto_1 = require("../../timeslots/dto/create-timeslot.dto");
class CreateTaskDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "priority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => create_timeslot_dto_1.CreateTimeslotDto }),
    __metadata("design:type", void 0)
], CreateTaskDto.prototype, "timeslot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => create_timebox_dto_1.CreateTimeboxDto }),
    __metadata("design:type", void 0)
], CreateTaskDto.prototype, "timebox", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], CreateTaskDto.prototype, "updatedAt", void 0);
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map