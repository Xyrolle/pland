import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTaskInput } from './user-update-without-task.input';
import { UserCreateWithoutTaskInput } from './user-create-without-task.input';

@InputType()
export class UserUpsertWithoutTaskInput {

    @Field(() => UserUpdateWithoutTaskInput, {nullable:false})
    update!: UserUpdateWithoutTaskInput;

    @Field(() => UserCreateWithoutTaskInput, {nullable:false})
    create!: UserCreateWithoutTaskInput;
}
