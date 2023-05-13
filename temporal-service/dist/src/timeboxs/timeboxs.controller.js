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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeboxsController = void 0;
const common_1 = require("@nestjs/common");
const timeboxs_service_1 = require("./timeboxs.service");
const create_timebox_dto_1 = require("./dto/create-timebox.dto");
const update_timebox_dto_1 = require("./dto/update-timebox.dto");
let TimeboxsController = class TimeboxsController {
    constructor(timeboxsService) {
        this.timeboxsService = timeboxsService;
    }
    create(createTimeboxDto) {
        return this.timeboxsService.create(createTimeboxDto);
    }
    findAll() {
        return this.timeboxsService.findAll();
    }
    findOne(id) {
        return this.timeboxsService.findOne(+id);
    }
    update(id, updateTimeboxDto) {
        return this.timeboxsService.update(+id, updateTimeboxDto);
    }
    remove(id) {
        return this.timeboxsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_timebox_dto_1.CreateTimeboxDto]),
    __metadata("design:returntype", void 0)
], TimeboxsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimeboxsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeboxsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_timebox_dto_1.UpdateTimeboxDto]),
    __metadata("design:returntype", void 0)
], TimeboxsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeboxsController.prototype, "remove", null);
TimeboxsController = __decorate([
    (0, common_1.Controller)('timeboxs'),
    __metadata("design:paramtypes", [timeboxs_service_1.TimeboxsService])
], TimeboxsController);
exports.TimeboxsController = TimeboxsController;
//# sourceMappingURL=timeboxs.controller.js.map