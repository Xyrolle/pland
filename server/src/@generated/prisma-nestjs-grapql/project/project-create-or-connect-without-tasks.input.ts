import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';

@InputType()
export class ProjectCreateOrConnectWithoutTasksInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:false})
    create!: ProjectCreateWithoutTasksInput;
}
