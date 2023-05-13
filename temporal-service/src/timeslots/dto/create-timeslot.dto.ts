import { CreateTaskDto } from "src/tasks/dto/create-task.dto";

export class CreateTimeslotDto {
    startAt: Date;
    duration: Date;
    task: CreateTaskDto|null
}
