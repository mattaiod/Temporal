"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeslotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_timeslot_dto_1 = require("./create-timeslot.dto");
class UpdateTimeslotDto extends (0, mapped_types_1.PartialType)(create_timeslot_dto_1.CreateTimeslotDto) {
}
exports.UpdateTimeslotDto = UpdateTimeslotDto;
//# sourceMappingURL=update-timeslot.dto.js.map