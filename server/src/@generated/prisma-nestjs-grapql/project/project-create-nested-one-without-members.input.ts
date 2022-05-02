import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';
import { ProjectCreateOrConnectWithoutMembersInput } from './project-create-or-connect-without-members.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutMembersInput {

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:true})
    create?: ProjectCreateWithoutMembersInput;

    @Field(() => ProjectCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;
}
