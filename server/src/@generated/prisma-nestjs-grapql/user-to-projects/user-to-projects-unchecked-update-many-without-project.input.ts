import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateWithoutProjectInput } from './user-to-projects-create-without-project.input';
import { UserToProjectsCreateOrConnectWithoutProjectInput } from './user-to-projects-create-or-connect-without-project.input';
import { UserToProjectsUpsertWithWhereUniqueWithoutProjectInput } from './user-to-projects-upsert-with-where-unique-without-project.input';
import { UserToProjectsCreateManyProjectInputEnvelope } from './user-to-projects-create-many-project-input-envelope.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsUpdateWithWhereUniqueWithoutProjectInput } from './user-to-projects-update-with-where-unique-without-project.input';
import { UserToProjectsUpdateManyWithWhereWithoutProjectInput } from './user-to-projects-update-many-with-where-without-project.input';
import { UserToProjectsScalarWhereInput } from './user-to-projects-scalar-where.input';

@InputType()
export class UserToProjectsUncheckedUpdateManyWithoutProjectInput {

    @Field(() => [UserToProjectsCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserToProjectsCreateWithoutProjectInput>;

    @Field(() => [UserToProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserToProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => [UserToProjectsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    upsert?: Array<UserToProjectsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => UserToProjectsCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserToProjectsCreateManyProjectInputEnvelope;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    set?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    delete?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    update?: Array<UserToProjectsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [UserToProjectsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    updateMany?: Array<UserToProjectsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [UserToProjectsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserToProjectsScalarWhereInput>;
}
