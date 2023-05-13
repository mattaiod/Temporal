import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
export declare class TimeboxsService {
    create(createTimeboxDto: CreateTimeboxDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTimeboxDto: UpdateTimeboxDto): string;
    remove(id: number): string;
}
