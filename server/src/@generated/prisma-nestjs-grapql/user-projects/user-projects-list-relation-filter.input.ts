import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereInput } from './user-projects-where.input';

@InputType()
export class UserProjectsListRelationFilter {

    @Field(() => UserProjectsWhereInput, {nullable:true})
    every?: UserProjectsWhereInput;

    @Field(() => UserProjectsWhereInput, {nullable:true})
    some?: UserProjectsWhereInput;

    @Field(() => UserProjectsWhereInput, {nullable:true})
    none?: UserProjectsWhereInput;
}
