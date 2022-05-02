import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutTasksInput } from './project-update-without-tasks.input';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';

@InputType()
export class ProjectUpsertWithoutTasksInput {

    @Field(() => ProjectUpdateWithoutTasksInput, {nullable:false})
    update!: ProjectUpdateWithoutTasksInput;

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:false})
    create!: ProjectCreateWithoutTasksInput;
}
