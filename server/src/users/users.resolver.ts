import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

import { Prisma } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver('User')
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query('users')
	findAll() {
		return this.usersService.findAll();
	}

	@Query('user')
	findOne(@Args('id') id: number) {
		return this.usersService.findOne({ id });
	}

	@Query('userProjects')
	@UseGuards(JwtAuthGuard)
	userProjects(@Args('userId') userId: number) {
		return this.usersService.userProjects(userId);
	}

	@Mutation('updateUser')
	update(
		@Args('updateUserInput')
		updateUserInput: Prisma.UserMinAggregateOutputType,
	) {
		return this.usersService.update(updateUserInput.id, updateUserInput);
	}

	@Mutation('removeUser')
	remove(@Args('id') id: number) {
		return this.usersService.remove(id);
	}
}
