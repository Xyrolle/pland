import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserProjectsInput } from './user-create-without-user-projects.input';
import { UserCreateOrConnectWithoutUserProjectsInput } from './user-create-or-connect-without-user-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserProjectsInput {

    @Field(() => UserCreateWithoutUserProjectsInput, {nullable:true})
    create?: UserCreateWithoutUserProjectsInput;

    @Field(() => UserCreateOrConnectWithoutUserProjectsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUserProjectsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
