import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';
import { ProjectCreateOrConnectWithoutMembersInput } from './project-create-or-connect-without-members.input';
import { ProjectUpsertWithoutMembersInput } from './project-upsert-without-members.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutMembersInput } from './project-update-without-members.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutMembersInput {

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:true})
    create?: ProjectCreateWithoutMembersInput;

    @Field(() => ProjectCreateOrConnectWithoutMembersInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput;

    @Field(() => ProjectUpsertWithoutMembersInput, {nullable:true})
    upsert?: ProjectUpsertWithoutMembersInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutMembersInput, {nullable:true})
    update?: ProjectUpdateWithoutMembersInput;
}
