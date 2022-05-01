import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
	constructor(private prismaClient: PrismaService) {}

	create(createUserInput: Prisma.UserCreateInput) {
		return this.prismaClient.user.create({
			data: createUserInput,
		});
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
