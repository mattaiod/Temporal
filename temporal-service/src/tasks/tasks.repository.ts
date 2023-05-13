import { Injectable } from "@nestjs/common";
import { Prisma, Task } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class TasksRepository{
    constructor(private prisma: PrismaService) {}

    async createTask(params: {data: Prisma.TaskCreateInput}): Promise<Task> 
    {
        const { data } = params;
        return this.prisma.task.create({ data })
    }

    async getTasks(): Promise<Task[]> 
    {
        return this.prisma.task.findMany();
    }
}