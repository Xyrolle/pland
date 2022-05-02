import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsCreateInput } from './user-projects-create.input';
import { UserProjectsUpdateInput } from './user-projects-update.input';

@ArgsType()
export class UpsertOneUserProjectsArgs {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsCreateInput, {nullable:false})
    create!: UserProjectsCreateInput;

    @Field(() => UserProjectsUpdateInput, {nullable:false})
    update!: UserProjectsUpdateInput;
}
