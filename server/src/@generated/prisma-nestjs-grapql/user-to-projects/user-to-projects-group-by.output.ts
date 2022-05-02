import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserToProjectsCountAggregate } from './user-to-projects-count-aggregate.output';
import { UserToProjectsAvgAggregate } from './user-to-projects-avg-aggregate.output';
import { UserToProjectsSumAggregate } from './user-to-projects-sum-aggregate.output';
import { UserToProjectsMinAggregate } from './user-to-projects-min-aggregate.output';
import { UserToProjectsMaxAggregate } from './user-to-projects-max-aggregate.output';

@ObjectType()
export class UserToProjectsGroupBy {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => UserToProjectsCountAggregate, {nullable:true})
    _count?: UserToProjectsCountAggregate;

    @Field(() => UserToProjectsAvgAggregate, {nullable:true})
    _avg?: UserToProjectsAvgAggregate;

    @Field(() => UserToProjectsSumAggregate, {nullable:true})
    _sum?: UserToProjectsSumAggregate;

    @Field(() => UserToProjectsMinAggregate, {nullable:true})
    _min?: UserToProjectsMinAggregate;

    @Field(() => UserToProjectsMaxAggregate, {nullable:true})
    _max?: UserToProjectsMaxAggregate;
}
