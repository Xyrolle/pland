import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { ProjectsService } from './projects.service';

@Resolver('Project')
export class ProjectsResolver {
	constructor(private readonly projectsService: ProjectsService) { }

	@Mutation('createProject')
	create(
		@Args('createProjectInput')
		createProjectInput: Prisma.ProjectCreateInput,
	) {
		return this.projectsService.create(createProjectInput);
	}

	@Query('projects')
	findAll() {
		return this.projectsService.findAll();
	}

	@Query('project')
	findOne(@Args('id') id: number) {
		return this.projectsService.findOne(id);
	}

	@Mutation('updateProject')
	update(
		@Args('updateProjectInput')
		updateProjectInput: Prisma.ProjectMinAggregateOutputType,
	) {
		return this.projectsService.update(
			updateProjectInput.id,
			updateProjectInput,
		);
	}

	@Mutation('assignUser')
	assignUser(
		@Args('projectId') projectId: number,
		@Args('userId') userId: number,
	) {
		return this.projectsService.assignUser(projectId, userId);
	}

	@Mutation('removeProject')
	remove(@Args('id') id: number) {
		return this.projectsService.remove(id);
	}
}
