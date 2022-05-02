import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsCreateWithoutUserInput } from './user-to-projects-create-without-user.input';

@InputType()
export class UserToProjectsCreateOrConnectWithoutUserInput {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsCreateWithoutUserInput, {nullable:false})
    create!: UserToProjectsCreateWithoutUserInput;
}
