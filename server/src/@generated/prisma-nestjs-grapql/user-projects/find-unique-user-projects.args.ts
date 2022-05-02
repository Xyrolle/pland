import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';

@ArgsType()
export class FindUniqueUserProjectsArgs {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;
}
