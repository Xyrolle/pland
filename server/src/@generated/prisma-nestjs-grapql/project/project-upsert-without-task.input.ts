import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutTaskInput } from './project-update-without-task.input';
import { ProjectCreateWithoutTaskInput } from './project-create-without-task.input';

@InputType()
export class ProjectUpsertWithoutTaskInput {

    @Field(() => ProjectUpdateWithoutTaskInput, {nullable:false})
    update!: ProjectUpdateWithoutTaskInput;

    @Field(() => ProjectCreateWithoutTaskInput, {nullable:false})
    create!: ProjectCreateWithoutTaskInput;
}
