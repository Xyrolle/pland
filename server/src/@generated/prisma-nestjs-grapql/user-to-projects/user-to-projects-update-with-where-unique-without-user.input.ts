import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsUpdateWithoutUserInput } from './user-to-projects-update-without-user.input';

@InputType()
export class UserToProjectsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsUpdateWithoutUserInput, {nullable:false})
    data!: UserToProjectsUpdateWithoutUserInput;
}
