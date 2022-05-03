import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { User } from '../@generated/prisma-nestjs-grapql/user/user.model';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
import { LoginResponse } from './dto/login.response';
import { GqlAuthGuard } from './gql-auth.guard';

@Resolver()
export class AuthResolver {
	constructor(private authService: AuthService) { }

	@Mutation(() => LoginResponse)
	@UseGuards(GqlAuthGuard)
	login(
		@Args('loginUserInput') loginUserInput: LoginUserInput,
		@Context() context,
	) {
		const res = this.authService.login(context.user);
		console.log(res, 'is the res');
		return res;
	}

	@Mutation(() => User)
	signup(@Args('createUserInput') createUserInput: Prisma.UserCreateInput) {
		return this.authService.signup(createUserInput);
	}
}
