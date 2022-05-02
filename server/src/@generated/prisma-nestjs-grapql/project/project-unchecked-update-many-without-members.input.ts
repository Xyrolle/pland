import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';
import { ProjectCreateOrConnectWithoutMembersInput } from './project-create-or-connect-without-members.input';
import { ProjectUpsertWithWhereUniqueWithoutMembersInput } from './project-upsert-with-where-unique-without-members.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithWhereUniqueWithoutMembersInput } from './project-update-with-where-unique-without-members.input';
import { ProjectUpdateManyWithWhereWithoutMembersInput } from './project-update-many-with-where-without-members.input';
import { ProjectScalarWhereInput } from './project-scalar-where.input';

@InputType()
export class ProjectUncheckedUpdateManyWithoutMembersInput {

    @Field(() => [ProjectCreateWithoutMembersInput], {nullable:true})
    create?: Array<ProjectCreateWithoutMembersInput>;

    @Field(() => [ProjectCreateOrConnectWithoutMembersInput], {nullable:true})
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutMembersInput>;

    @Field(() => [ProjectUpsertWithWhereUniqueWithoutMembersInput], {nullable:true})
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutMembersInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    set?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    disconnect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    delete?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    connect?: Array<ProjectWhereUniqueInput>;

    @Field(() => [ProjectUpdateWithWhereUniqueWithoutMembersInput], {nullable:true})
    update?: Array<ProjectUpdateWithWhereUniqueWithoutMembersInput>;

    @Field(() => [ProjectUpdateManyWithWhereWithoutMembersInput], {nullable:true})
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutMembersInput>;

    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    deleteMany?: Array<ProjectScalarWhereInput>;
}
