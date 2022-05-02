import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProjectsInput } from './user-update-without-projects.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProjectsInput, {nullable:false})
    data!: UserUpdateWithoutProjectsInput;
}
