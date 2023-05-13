import { TimeslotsService } from './timeslots.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
export declare class TimeslotsController {
    private readonly timeslotsService;
    constructor(timeslotsService: TimeslotsService);
    create(createTimeslotDto: CreateTimeslotDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTimeslotDto: UpdateTimeslotDto): string;
    remove(id: string): string;
}
