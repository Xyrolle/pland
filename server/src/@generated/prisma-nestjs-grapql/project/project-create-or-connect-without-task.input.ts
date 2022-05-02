import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutTaskInput } from './project-create-without-task.input';

@InputType()
export class ProjectCreateOrConnectWithoutTaskInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutTaskInput, {nullable:false})
    create!: ProjectCreateWithoutTaskInput;
}
