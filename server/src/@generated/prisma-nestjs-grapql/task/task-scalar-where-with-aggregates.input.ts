import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class TaskScalarWhereWithAggregatesInput {

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    createdById?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;
}
