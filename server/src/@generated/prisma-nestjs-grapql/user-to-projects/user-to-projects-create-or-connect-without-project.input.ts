import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsCreateWithoutProjectInput } from './user-to-projects-create-without-project.input';

@InputType()
export class UserToProjectsCreateOrConnectWithoutProjectInput {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsCreateWithoutProjectInput, {nullable:false})
    create!: UserToProjectsCreateWithoutProjectInput;
}
