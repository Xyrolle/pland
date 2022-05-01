import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
	usersData = [{ id: 0, name: 'hello' }];

	@Query()
	users() {
		return this.usersData;
	}

	@Mutation()
	createUser(@Args('name') name: string) {
		const id = this.usersData.length;
		const user = { id, name };

		this.usersData.push(user);

		return user;
	}
}
