import { CreateTaskDto } from "src/tasks/dto/create-task.dto";

export class CreateTimeboxDto {
    title: string;
    tasks: CreateTaskDto[]
}
