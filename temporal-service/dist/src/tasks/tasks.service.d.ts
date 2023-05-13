import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';
export declare class TasksService {
    private repository;
    constructor(repository: TasksRepository);
    create(params: {
        createTaskDto: CreateTaskDto;
    }): Promise<void>;
    findAll(): Promise<Task[]>;
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
