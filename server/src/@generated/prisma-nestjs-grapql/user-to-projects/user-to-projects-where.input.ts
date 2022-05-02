import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class UserToProjectsWhereInput {

    @Field(() => [UserToProjectsWhereInput], {nullable:true})
    AND?: Array<UserToProjectsWhereInput>;

    @Field(() => [UserToProjectsWhereInput], {nullable:true})
    OR?: Array<UserToProjectsWhereInput>;

    @Field(() => [UserToProjectsWhereInput], {nullable:true})
    NOT?: Array<UserToProjectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}
