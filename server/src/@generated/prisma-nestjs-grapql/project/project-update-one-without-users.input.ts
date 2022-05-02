import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';
import { ProjectCreateOrConnectWithoutUsersInput } from './project-create-or-connect-without-users.input';
import { ProjectUpsertWithoutUsersInput } from './project-upsert-without-users.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutUsersInput } from './project-update-without-users.input';

@InputType()
export class ProjectUpdateOneWithoutUsersInput {

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:true})
    create?: ProjectCreateWithoutUsersInput;

    @Field(() => ProjectCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput;

    @Field(() => ProjectUpsertWithoutUsersInput, {nullable:true})
    upsert?: ProjectUpsertWithoutUsersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutUsersInput, {nullable:true})
    update?: ProjectUpdateWithoutUsersInput;
}
