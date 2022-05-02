import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';
import { UserToProjectsOrderByWithAggregationInput } from './user-to-projects-order-by-with-aggregation.input';
import { UserToProjectsScalarFieldEnum } from './user-to-projects-scalar-field.enum';
import { UserToProjectsScalarWhereWithAggregatesInput } from './user-to-projects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserToProjectsCountAggregateInput } from './user-to-projects-count-aggregate.input';
import { UserToProjectsAvgAggregateInput } from './user-to-projects-avg-aggregate.input';
import { UserToProjectsSumAggregateInput } from './user-to-projects-sum-aggregate.input';
import { UserToProjectsMinAggregateInput } from './user-to-projects-min-aggregate.input';
import { UserToProjectsMaxAggregateInput } from './user-to-projects-max-aggregate.input';

@ArgsType()
export class UserToProjectsGroupByArgs {

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    where?: UserToProjectsWhereInput;

    @Field(() => [UserToProjectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserToProjectsOrderByWithAggregationInput>;

    @Field(() => [UserToProjectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserToProjectsScalarFieldEnum>;

    @Field(() => UserToProjectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserToProjectsScalarWhereWithAggregatesInput;

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
