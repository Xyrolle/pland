import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUserProjectsInput } from './project-create-without-user-projects.input';
import { ProjectCreateOrConnectWithoutUserProjectsInput } from './project-create-or-connect-without-user-projects.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutUserProjectsInput {

    @Field(() => ProjectCreateWithoutUserProjectsInput, {nullable:true})
    create?: ProjectCreateWithoutUserProjectsInput;

    @Field(() => ProjectCreateOrConnectWithoutUserProjectsInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutUserProjectsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;
}
