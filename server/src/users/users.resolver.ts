import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

import { UpdateUserInput } from './dto/update-user.input';
import { UserCreateInput } from '../@generated/prisma-nestjs-grapql/user/user-create.input';

@Resolver('User')
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation('createUser')
	create(@Args('createUserInput') createUserInput: UserCreateInput) {
		return this.usersService.create(createUserInput);
	}

	@Query('users')
	findAll() {
		return this.usersService.findAll();
	}

	@Query('user')
	findOne(@Args('id') id: number) {
		return this.usersService.findOne({ id });
	}

	@Query('userProjects')
	userProjects(@Args('userId') userId: number) {
		return this.usersService.userProjects(userId);
	}

	@Mutation('updateUser')
	update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
		return this.usersService.update(updateUserInput.id, updateUserInput);
	}

	@Mutation('removeUser')
	remove(@Args('id') id: number) {
		return this.usersService.remove(id);
	}
}
