import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTaskInput } from './user-create-without-task.input';
import { UserCreateOrConnectWithoutTaskInput } from './user-create-or-connect-without-task.input';
import { UserUpsertWithoutTaskInput } from './user-upsert-without-task.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTaskInput } from './user-update-without-task.input';

@InputType()
export class UserUpdateOneRequiredWithoutTaskInput {

    @Field(() => UserCreateWithoutTaskInput, {nullable:true})
    create?: UserCreateWithoutTaskInput;

    @Field(() => UserCreateOrConnectWithoutTaskInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput;

    @Field(() => UserUpsertWithoutTaskInput, {nullable:true})
    upsert?: UserUpsertWithoutTaskInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTaskInput, {nullable:true})
    update?: UserUpdateWithoutTaskInput;
}
