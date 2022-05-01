import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { TasksService } from './tasks.service';

@Resolver('Task')
export class TasksResolver {
	constructor(private readonly tasksService: TasksService) {}

	@Mutation('createTask')
	create(@Args('createTaskInput') createTaskInput: Prisma.TaskCreateInput) {
		return this.tasksService.create(createTaskInput);
	}

	@Query('tasks')
	findAll(@Args('userId') userId?: number) {
		return this.tasksService.findAll(userId);
	}

	@Query('task')
	findOne(@Args('id') id: number) {
		return this.tasksService.findOne(id);
	}

	@Mutation('updateTask')
	update(
		@Args('updateTaskInput')
		updateTaskInput: Prisma.TaskMinAggregateOutputType,
	) {
		return this.tasksService.update(updateTaskInput.id, updateTaskInput);
	}

	@Mutation('removeTask')
	remove(@Args('id') id: number) {
		return this.tasksService.remove(id);
	}
}
