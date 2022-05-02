import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	create(createUserInput: Prisma.UserCreateInput) {
		return this.prisma.user.create({
			data: createUserInput,
		});
	}

	findAll() {
		return this.prisma.user.findMany();
	}

	findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
		return this.prisma.user.findUnique({
			where: { id: userWhereUniqueInput.id },
		});
	}

	userProjects(userId: number) {
		return this.prisma.userProjects.findMany({
			where: {
				userId,
			},
			include: {
				project: {
					include: {
						tasks: true,
						members: true,
					},
				},
			},
		});
	}

	update(id: number, updateUserInput: UpdateUserInput) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
