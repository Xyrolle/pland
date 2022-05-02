import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';
import { ProjectCreateOrConnectWithoutMembersInput } from './project-create-or-connect-without-members.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedManyWithoutMembersInput {

    @Field(() => [ProjectCreateWithoutMembersInput], {nullable:true})
    create?: Array<ProjectCreateWithoutMembersInput>;

    @Field(() => [ProjectCreateOrConnectWithoutMembersInput], {nullable:true})
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutMembersInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    connect?: Array<ProjectWhereUniqueInput>;
}
