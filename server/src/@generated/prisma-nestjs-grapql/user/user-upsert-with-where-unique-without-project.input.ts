import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProjectInput } from './user-update-without-project.input';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProjectInput, {nullable:false})
    update!: UserUpdateWithoutProjectInput;

    @Field(() => UserCreateWithoutProjectInput, {nullable:false})
    create!: UserCreateWithoutProjectInput;
}
