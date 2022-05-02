import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsUpdateInput } from './user-to-projects-update.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';

@ArgsType()
export class UpdateOneUserToProjectsArgs {

    @Field(() => UserToProjectsUpdateInput, {nullable:false})
    data!: UserToProjectsUpdateInput;

    @Field(() => UserToProjectsWhereUniqueInput, {nullable:false})
    where!: UserToProjectsWhereUniqueInput;
}
