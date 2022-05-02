import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutUserProjectsInput } from './project-update-without-user-projects.input';
import { ProjectCreateWithoutUserProjectsInput } from './project-create-without-user-projects.input';

@InputType()
export class ProjectUpsertWithoutUserProjectsInput {

    @Field(() => ProjectUpdateWithoutUserProjectsInput, {nullable:false})
    update!: ProjectUpdateWithoutUserProjectsInput;

    @Field(() => ProjectCreateWithoutUserProjectsInput, {nullable:false})
    create!: ProjectCreateWithoutUserProjectsInput;
}
