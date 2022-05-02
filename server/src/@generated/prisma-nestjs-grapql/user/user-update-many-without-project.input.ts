import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';
import { UserCreateOrConnectWithoutProjectInput } from './user-create-or-connect-without-project.input';
import { UserUpsertWithWhereUniqueWithoutProjectInput } from './user-upsert-with-where-unique-without-project.input';
import { UserCreateManyProjectInputEnvelope } from './user-create-many-project-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutProjectInput } from './user-update-with-where-unique-without-project.input';
import { UserUpdateManyWithWhereWithoutProjectInput } from './user-update-many-with-where-without-project.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutProjectInput {

    @Field(() => [UserCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserCreateWithoutProjectInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => UserCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserCreateManyProjectInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
