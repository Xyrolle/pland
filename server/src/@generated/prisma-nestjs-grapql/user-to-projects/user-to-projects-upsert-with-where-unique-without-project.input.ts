import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsUpdateWithoutProjectInput } from './user-to-projects-update-without-project.input';
import { UserToProjectsCreateWithoutProjectInput } from './user-to-projects-create-without-project.input';

@InputType()
export class UserToProjectsUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsUpdateWithoutProjectInput, {nullable:false})
    update!: UserToProjectsUpdateWithoutProjectInput;

    @Field(() => UserToProjectsCreateWithoutProjectInput, {nullable:false})
    create!: UserToProjectsCreateWithoutProjectInput;
}
