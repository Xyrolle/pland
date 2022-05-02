import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserProjectsCountOrderByAggregateInput } from './user-projects-count-order-by-aggregate.input';
import { UserProjectsAvgOrderByAggregateInput } from './user-projects-avg-order-by-aggregate.input';
import { UserProjectsMaxOrderByAggregateInput } from './user-projects-max-order-by-aggregate.input';
import { UserProjectsMinOrderByAggregateInput } from './user-projects-min-order-by-aggregate.input';
import { UserProjectsSumOrderByAggregateInput } from './user-projects-sum-order-by-aggregate.input';

@InputType()
export class UserProjectsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => UserProjectsCountOrderByAggregateInput, {nullable:true})
    _count?: UserProjectsCountOrderByAggregateInput;

    @Field(() => UserProjectsAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserProjectsAvgOrderByAggregateInput;

    @Field(() => UserProjectsMaxOrderByAggregateInput, {nullable:true})
    _max?: UserProjectsMaxOrderByAggregateInput;

    @Field(() => UserProjectsMinOrderByAggregateInput, {nullable:true})
    _min?: UserProjectsMinOrderByAggregateInput;

    @Field(() => UserProjectsSumOrderByAggregateInput, {nullable:true})
    _sum?: UserProjectsSumOrderByAggregateInput;
}
