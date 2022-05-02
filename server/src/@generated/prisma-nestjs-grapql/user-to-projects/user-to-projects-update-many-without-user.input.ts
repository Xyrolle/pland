import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateWithoutUserInput } from './user-to-projects-create-without-user.input';
import { UserToProjectsCreateOrConnectWithoutUserInput } from './user-to-projects-create-or-connect-without-user.input';
import { UserToProjectsUpsertWithWhereUniqueWithoutUserInput } from './user-to-projects-upsert-with-where-unique-without-user.input';
import { UserToProjectsCreateManyUserInputEnvelope } from './user-to-projects-create-many-user-input-envelope.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsUpdateWithWhereUniqueWithoutUserInput } from './user-to-projects-update-with-where-unique-without-user.input';
import { UserToProjectsUpdateManyWithWhereWithoutUserInput } from './user-to-projects-update-many-with-where-without-user.input';
import { UserToProjectsScalarWhereInput } from './user-to-projects-scalar-where.input';

@InputType()
export class UserToProjectsUpdateManyWithoutUserInput {

    @Field(() => [UserToProjectsCreateWithoutUserInput], {nullable:true})
    create?: Array<UserToProjectsCreateWithoutUserInput>;

    @Field(() => [UserToProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserToProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => [UserToProjectsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UserToProjectsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserToProjectsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserToProjectsCreateManyUserInputEnvelope;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    set?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    delete?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserToProjectsWhereUniqueInput>;

    @Field(() => [UserToProjectsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UserToProjectsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserToProjectsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UserToProjectsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserToProjectsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserToProjectsScalarWhereInput>;
}
