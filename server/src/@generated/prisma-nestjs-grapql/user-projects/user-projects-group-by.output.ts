import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserProjectsCountAggregate } from './user-projects-count-aggregate.output';
import { UserProjectsAvgAggregate } from './user-projects-avg-aggregate.output';
import { UserProjectsSumAggregate } from './user-projects-sum-aggregate.output';
import { UserProjectsMinAggregate } from './user-projects-min-aggregate.output';
import { UserProjectsMaxAggregate } from './user-projects-max-aggregate.output';

@ObjectType()
export class UserProjectsGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => UserProjectsCountAggregate, {nullable:true})
    _count?: UserProjectsCountAggregate;

    @Field(() => UserProjectsAvgAggregate, {nullable:true})
    _avg?: UserProjectsAvgAggregate;

    @Field(() => UserProjectsSumAggregate, {nullable:true})
    _sum?: UserProjectsSumAggregate;

    @Field(() => UserProjectsMinAggregate, {nullable:true})
    _min?: UserProjectsMinAggregate;

    @Field(() => UserProjectsMaxAggregate, {nullable:true})
    _max?: UserProjectsMaxAggregate;
}
