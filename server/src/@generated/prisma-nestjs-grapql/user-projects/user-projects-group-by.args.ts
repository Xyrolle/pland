import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereInput } from './user-projects-where.input';
import { UserProjectsOrderByWithAggregationInput } from './user-projects-order-by-with-aggregation.input';
import { UserProjectsScalarFieldEnum } from './user-projects-scalar-field.enum';
import { UserProjectsScalarWhereWithAggregatesInput } from './user-projects-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserProjectsCountAggregateInput } from './user-projects-count-aggregate.input';
import { UserProjectsAvgAggregateInput } from './user-projects-avg-aggregate.input';
import { UserProjectsSumAggregateInput } from './user-projects-sum-aggregate.input';
import { UserProjectsMinAggregateInput } from './user-projects-min-aggregate.input';
import { UserProjectsMaxAggregateInput } from './user-projects-max-aggregate.input';

@ArgsType()
export class UserProjectsGroupByArgs {

    @Field(() => UserProjectsWhereInput, {nullable:true})
    where?: UserProjectsWhereInput;

    @Field(() => [UserProjectsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserProjectsOrderByWithAggregationInput>;

    @Field(() => [UserProjectsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserProjectsScalarFieldEnum>;

    @Field(() => UserProjectsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserProjectsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserProjectsCountAggregateInput, {nullable:true})
    _count?: UserProjectsCountAggregateInput;

    @Field(() => UserProjectsAvgAggregateInput, {nullable:true})
    _avg?: UserProjectsAvgAggregateInput;

    @Field(() => UserProjectsSumAggregateInput, {nullable:true})
    _sum?: UserProjectsSumAggregateInput;

    @Field(() => UserProjectsMinAggregateInput, {nullable:true})
    _min?: UserProjectsMinAggregateInput;

    @Field(() => UserProjectsMaxAggregateInput, {nullable:true})
    _max?: UserProjectsMaxAggregateInput;
}
