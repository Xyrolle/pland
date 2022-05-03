import { Injectable } from '@nestjs/common';
import { User } from '../@generated/prisma-nestjs-grapql/user/user.model';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
	constructor(
		private userService: UsersService,
		private jwtService: JwtService,
	) {}

	async validateUser(username: string, password: string) {
		const user = await this.userService.findOne({ username });

		if (!user) {
			return null;
		}

		const valid = await bcrypt.compare(password, user.password);

		if (user && valid) {
			const { password: _password, ...result } = user;
			return result;
		}

		return null;
	}

	login(user: User) {
		return {
			access_token: this.jwtService.sign({
				username: user.username,
				sub: user.id,
			}),
			user,
		};
	}

	async signup(createUserInput: Prisma.UserCreateInput) {
		const password = await bcrypt.hash(createUserInput.password, 10);
		return this.userService.create({ ...createUserInput, password });
	}
}
