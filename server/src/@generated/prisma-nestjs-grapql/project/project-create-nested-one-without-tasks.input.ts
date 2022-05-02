import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';
import { ProjectCreateOrConnectWithoutTasksInput } from './project-create-or-connect-without-tasks.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutTasksInput {

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:true})
    create?: ProjectCreateWithoutTasksInput;

    @Field(() => ProjectCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;
}
