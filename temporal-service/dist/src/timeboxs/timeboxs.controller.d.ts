import { TimeboxsService } from './timeboxs.service';
import { CreateTimeboxDto } from './dto/create-timebox.dto';
import { UpdateTimeboxDto } from './dto/update-timebox.dto';
export declare class TimeboxsController {
    private readonly timeboxsService;
    constructor(timeboxsService: TimeboxsService);
    create(createTimeboxDto: CreateTimeboxDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTimeboxDto: UpdateTimeboxDto): string;
    remove(id: string): string;
}
