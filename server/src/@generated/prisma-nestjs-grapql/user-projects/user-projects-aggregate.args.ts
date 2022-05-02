import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereInput } from './user-projects-where.input';
import { UserProjectsOrderByWithRelationInput } from './user-projects-order-by-with-relation.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserProjectsCountAggregateInput } from './user-projects-count-aggregate.input';
import { UserProjectsAvgAggregateInput } from './user-projects-avg-aggregate.input';
import { UserProjectsSumAggregateInput } from './user-projects-sum-aggregate.input';
import { UserProjectsMinAggregateInput } from './user-projects-min-aggregate.input';
import { UserProjectsMaxAggregateInput } from './user-projects-max-aggregate.input';

@ArgsType()
export class UserProjectsAggregateArgs {

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
