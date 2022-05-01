import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
	constructor(private prismaClient: PrismaService) {}

	create(createUserInput: CreateUserInput) {
		return 'This action adds a new user';
	}

	findAll() {
		return this.prismaClient.user.findMany();
	}

	findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
		return this.prismaClient.user.findUnique({
			where: { id: userWhereUniqueInput.id },
		});
	}

	update(id: number, updateUserInput: UpdateUserInput) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
