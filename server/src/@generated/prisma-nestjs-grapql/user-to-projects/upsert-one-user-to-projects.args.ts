import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';
import { UserToProjectsCreateInput } from './user-to-projects-create.input';
import { UserToProjectsUpdateInput } from './user-to-projects-update.input';

@ArgsType()
export class UpsertOneUserToProjectsArgs {

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;

    @Field(() => UserToProjectsCreateInput, {nullable:false})
    create!: UserToProjectsCreateInput;

    @Field(() => UserToProjectsUpdateInput, {nullable:false})
    update!: UserToProjectsUpdateInput;
}
