import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';
import { UserCreateOrConnectWithoutProjectsInput } from './user-create-or-connect-without-projects.input';
import { UserUpsertWithWhereUniqueWithoutProjectsInput } from './user-upsert-with-where-unique-without-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutProjectsInput } from './user-update-with-where-unique-without-projects.input';
import { UserUpdateManyWithWhereWithoutProjectsInput } from './user-update-many-with-where-without-projects.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutProjectsInput {

    @Field(() => [UserCreateWithoutProjectsInput], {nullable:true})
    create?: Array<UserCreateWithoutProjectsInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutProjectsInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutProjectsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutProjectsInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutProjectsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutProjectsInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutProjectsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
