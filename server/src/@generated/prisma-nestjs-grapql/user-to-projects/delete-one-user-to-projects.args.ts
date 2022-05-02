import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';

@ArgsType()
export class DeleteOneUserToProjectsArgs {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;
}
