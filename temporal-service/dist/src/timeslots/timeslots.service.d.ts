import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { UpdateTimeslotDto } from './dto/update-timeslot.dto';
export declare class TimeslotsService {
    create(createTimeslotDto: CreateTimeslotDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTimeslotDto: UpdateTimeslotDto): string;
    remove(id: number): string;
}
