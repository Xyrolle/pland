import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserToProjectsCountOrderByAggregateInput } from './user-to-projects-count-order-by-aggregate.input';
import { UserToProjectsAvgOrderByAggregateInput } from './user-to-projects-avg-order-by-aggregate.input';
import { UserToProjectsMaxOrderByAggregateInput } from './user-to-projects-max-order-by-aggregate.input';
import { UserToProjectsMinOrderByAggregateInput } from './user-to-projects-min-order-by-aggregate.input';
import { UserToProjectsSumOrderByAggregateInput } from './user-to-projects-sum-order-by-aggregate.input';

@InputType()
export class UserToProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => UserToProjectsCountOrderByAggregateInput, {nullable:true})
    _count?: UserToProjectsCountOrderByAggregateInput;

    @Field(() => UserToProjectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserToProjectsAvgOrderByAggregateInput;

    @Field(() => UserToProjectsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserToProjectsMaxOrderByAggregateInput;

    @Field(() => UserToProjectsMinOrderByAggregateInput, {nullable:true})
    _min?: UserToProjectsMinOrderByAggregateInput;

    @Field(() => UserToProjectsSumOrderByAggregateInput, {nullable:true})
    _sum?: UserToProjectsSumOrderByAggregateInput;
}
