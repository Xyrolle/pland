import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';
import { ProjectCreateOrConnectWithoutUsersInput } from './project-create-or-connect-without-users.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutUsersInput {

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:true})
    create?: ProjectCreateWithoutUsersInput;

    @Field(() => ProjectCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;
}
