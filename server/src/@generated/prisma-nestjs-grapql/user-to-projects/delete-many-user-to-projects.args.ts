import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';

@ArgsType()
export class DeleteManyUserToProjectsArgs {

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    where?: UserToProjectsWhereInput;
}
