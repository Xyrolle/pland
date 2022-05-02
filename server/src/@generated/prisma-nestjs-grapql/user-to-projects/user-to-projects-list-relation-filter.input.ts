import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';

@InputType()
export class UserToProjectsListRelationFilter {

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    every?: UserToProjectsWhereInput;

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    some?: UserToProjectsWhereInput;

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    none?: UserToProjectsWhereInput;
}
