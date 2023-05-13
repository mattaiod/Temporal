"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeboxDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_timebox_dto_1 = require("./create-timebox.dto");
class UpdateTimeboxDto extends (0, mapped_types_1.PartialType)(create_timebox_dto_1.CreateTimeboxDto) {
}
exports.UpdateTimeboxDto = UpdateTimeboxDto;
//# sourceMappingURL=update-timebox.dto.js.map