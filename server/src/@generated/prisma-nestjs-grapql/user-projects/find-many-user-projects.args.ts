import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereInput } from './user-projects-where.input';
import { UserProjectsOrderByWithRelationInput } from './user-projects-order-by-with-relation.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProjectsScalarFieldEnum } from './user-projects-scalar-field.enum';

@ArgsType()
export class FindManyUserProjectsArgs {

    @Field(() => UserProjectsWhereInput, {nullable:true})
    where?: UserProjectsWhereInput;

    @Field(() => [UserProjectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProjectsOrderByWithRelationInput>;

    @Field(() => UserProjectsWhereUniqueInput, {nullable:true})
    cursor?: UserProjectsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserProjectsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserProjectsScalarFieldEnum>;
}
