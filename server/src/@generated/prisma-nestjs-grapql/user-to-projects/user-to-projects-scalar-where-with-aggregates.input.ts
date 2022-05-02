import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class UserToProjectsScalarWhereWithAggregatesInput {

    @Field(() => [UserToProjectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserToProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [UserToProjectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserToProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [UserToProjectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserToProjectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;
}
