import { CreateTaskDto } from "src/tasks/dto/create-task.dto";
export declare class CreateTimeslotDto {
    startAt: Date;
    duration: Date;
    task: CreateTaskDto | null;
}
