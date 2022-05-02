import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TasksService {
	constructor(private prisma: PrismaService) {}

	create(createTaskInput: Prisma.TaskCreateInput) {
		return this.prisma.task.create({
			data: createTaskInput,
		});
	}

	async findAll(userId?: number) {
		return this.prisma.task.findMany({
			where: {
				createdById: userId,
			},
			include: { createdBy: true },
		});
	}

	findOne(id: number) {
		return `This action returns a #${id} task`;
	}

	update(id: number, updateTaskInput: Prisma.TaskMinAggregateOutputType) {
		return this.prisma.task.update({
			where: {
				id,
			},
			data: updateTaskInput,
		});
	}

	remove(id: number) {
		return `This action removes a #${id} task`;
	}
}
