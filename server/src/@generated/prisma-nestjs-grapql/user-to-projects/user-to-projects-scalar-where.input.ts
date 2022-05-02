import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class UserToProjectsScalarWhereInput {

    @Field(() => [UserToProjectsScalarWhereInput], {nullable:true})
    AND?: Array<UserToProjectsScalarWhereInput>;

    @Field(() => [UserToProjectsScalarWhereInput], {nullable:true})
    OR?: Array<UserToProjectsScalarWhereInput>;

    @Field(() => [UserToProjectsScalarWhereInput], {nullable:true})
    NOT?: Array<UserToProjectsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;
}
