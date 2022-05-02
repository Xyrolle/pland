import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutProjectInput } from './user-update-without-project.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutProjectInput, {nullable:false})
    data!: UserUpdateWithoutProjectInput;
}
