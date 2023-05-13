import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<void>;
    findAll(): Promise<import(".prisma/client").Task[]>;
    findOne(id: string): string;
    update(id: string, updateTaskDto: UpdateTaskDto): string;
    remove(id: string): string;
}
