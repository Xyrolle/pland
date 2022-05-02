import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProjectsInput } from './user-update-without-projects.input';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProjectsInput, {nullable:false})
    update!: UserUpdateWithoutProjectsInput;

    @Field(() => UserCreateWithoutProjectsInput, {nullable:false})
    create!: UserCreateWithoutProjectsInput;
}
