import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutTaskInput } from './user-create-without-task.input';

@InputType()
export class UserCreateOrConnectWithoutTaskInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutTaskInput, {nullable:false})
    create!: UserCreateWithoutTaskInput;
}
