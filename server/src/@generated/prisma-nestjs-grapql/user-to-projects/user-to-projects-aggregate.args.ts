import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';
import { UserToProjectsOrderByWithRelationInput } from './user-to-projects-order-by-with-relation.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserToProjectsCountAggregateInput } from './user-to-projects-count-aggregate.input';
import { UserToProjectsAvgAggregateInput } from './user-to-projects-avg-aggregate.input';
import { UserToProjectsSumAggregateInput } from './user-to-projects-sum-aggregate.input';
import { UserToProjectsMinAggregateInput } from './user-to-projects-min-aggregate.input';
import { UserToProjectsMaxAggregateInput } from './user-to-projects-max-aggregate.input';

@ArgsType()
export class UserToProjectsAggregateArgs {

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

    @Field(() => UserToProjectsCountAggregateInput, {nullable:true})
    _count?: UserToProjectsCountAggregateInput;

    @Field(() => UserToProjectsAvgAggregateInput, {nullable:true})
    _avg?: UserToProjectsAvgAggregateInput;

    @Field(() => UserToProjectsSumAggregateInput, {nullable:true})
    _sum?: UserToProjectsSumAggregateInput;

    @Field(() => UserToProjectsMinAggregateInput, {nullable:true})
    _min?: UserToProjectsMinAggregateInput;

    @Field(() => UserToProjectsMaxAggregateInput, {nullable:true})
    _max?: UserToProjectsMaxAggregateInput;
}
