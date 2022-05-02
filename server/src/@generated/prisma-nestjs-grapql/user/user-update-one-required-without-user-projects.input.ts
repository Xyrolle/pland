import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserProjectsInput } from './user-create-without-user-projects.input';
import { UserCreateOrConnectWithoutUserProjectsInput } from './user-create-or-connect-without-user-projects.input';
import { UserUpsertWithoutUserProjectsInput } from './user-upsert-without-user-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserProjectsInput } from './user-update-without-user-projects.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserProjectsInput {

    @Field(() => UserCreateWithoutUserProjectsInput, {nullable:true})
    create?: UserCreateWithoutUserProjectsInput;

    @Field(() => UserCreateOrConnectWithoutUserProjectsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUserProjectsInput;

    @Field(() => UserUpsertWithoutUserProjectsInput, {nullable:true})
    upsert?: UserUpsertWithoutUserProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserProjectsInput, {nullable:true})
    update?: UserUpdateWithoutUserProjectsInput;
}
