import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTaskInput } from './user-create-without-task.input';
import { UserCreateOrConnectWithoutTaskInput } from './user-create-or-connect-without-task.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTaskInput {

    @Field(() => UserCreateWithoutTaskInput, {nullable:true})
    create?: UserCreateWithoutTaskInput;

    @Field(() => UserCreateOrConnectWithoutTaskInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
