import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsUpdateInput } from './user-projects-update.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';

@ArgsType()
export class UpdateOneUserProjectsArgs {

    @Field(() => UserProjectsUpdateInput, {nullable:false})
    data!: UserProjectsUpdateInput;

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;
}
