/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProjectsService {
	constructor(private prisma: PrismaService) {}

	create(createProjectInput: Prisma.ProjectCreateInput) {
		return this.prisma.project.create({ data: createProjectInput });
	}

	findAll() {
		return this.prisma.project.findMany({
			include: { tasks: true, members: true },
		});
	}

	findOne(id: number) {
		return `This action returns a #${id} project`;
	}

	update(id: number, updateProjectInput: Prisma.ProjectMinAggregateOutputType) {
		return `This action updates a #${id} project`;
	}

	remove(id: number) {
		return `This action removes a #${id} project`;
	}

	async assignUser(projectId: number, userId: number) {
		await this.prisma.userProjects.create({
			data: {
				project: {
					connect: {
						id: projectId
					},
				},
				user: {
					connect: {
						id: userId
					},
				},
			},
		});

		return projectId;
	}
}
