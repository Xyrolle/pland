import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';
import { UserToProjectsOrderByWithRelationInput } from './user-to-projects-order-by-with-relation.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserToProjectsScalarFieldEnum } from './user-to-projects-scalar-field.enum';

@ArgsType()
export class FindFirstUserToProjectsArgs {

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    where?: UserToProjectsWhereInput;

    @Field(() => [UserToProjectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserToProjectsOrderByWithRelationInput>;

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:true})
    cursor?: UserToProjectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserToProjectsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserToProjectsScalarFieldEnum>;
}
