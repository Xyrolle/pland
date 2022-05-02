import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class UserProjectsScalarWhereWithAggregatesInput {

    @Field(() => [UserProjectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [UserProjectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserProjectsScalarWhereWithAggregatesInput>;

    @Field(() => [UserProjectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserProjectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;
}
