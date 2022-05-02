import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskInput } from './project-create-without-task.input';
import { ProjectCreateOrConnectWithoutTaskInput } from './project-create-or-connect-without-task.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutTaskInput {

    @Field(() => ProjectCreateWithoutTaskInput, {nullable:true})
    create?: ProjectCreateWithoutTaskInput;

    @Field(() => ProjectCreateOrConnectWithoutTaskInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutTaskInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;
}
