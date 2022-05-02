import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateWithoutUserInput } from './user-projects-create-without-user.input';
import { UserProjectsCreateOrConnectWithoutUserInput } from './user-projects-create-or-connect-without-user.input';
import { UserProjectsUpsertWithWhereUniqueWithoutUserInput } from './user-projects-upsert-with-where-unique-without-user.input';
import { UserProjectsCreateManyUserInputEnvelope } from './user-projects-create-many-user-input-envelope.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithWhereUniqueWithoutUserInput } from './user-projects-update-with-where-unique-without-user.input';
import { UserProjectsUpdateManyWithWhereWithoutUserInput } from './user-projects-update-many-with-where-without-user.input';
import { UserProjectsScalarWhereInput } from './user-projects-scalar-where.input';

@InputType()
export class UserProjectsUncheckedUpdateManyWithoutUserInput {

    @Field(() => [UserProjectsCreateWithoutUserInput], {nullable:true})
    create?: Array<UserProjectsCreateWithoutUserInput>;

    @Field(() => [UserProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => [UserProjectsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UserProjectsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserProjectsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserProjectsCreateManyUserInputEnvelope;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    set?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    delete?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UserProjectsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserProjectsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UserProjectsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserProjectsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserProjectsScalarWhereInput>;
}
