import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsUpdateWithoutProjectInput } from './user-to-projects-update-without-project.input';

@InputType()
export class UserToProjectsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsUpdateWithoutProjectInput, {nullable:false})
    data!: UserToProjectsUpdateWithoutProjectInput;
}
