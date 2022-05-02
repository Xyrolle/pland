import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class UserProjectsScalarWhereInput {

    @Field(() => [UserProjectsScalarWhereInput], {nullable:true})
    AND?: Array<UserProjectsScalarWhereInput>;

    @Field(() => [UserProjectsScalarWhereInput], {nullable:true})
    OR?: Array<UserProjectsScalarWhereInput>;

    @Field(() => [UserProjectsScalarWhereInput], {nullable:true})
    NOT?: Array<UserProjectsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;
}
