import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsCreateInput } from './user-projects-create.input';

@ArgsType()
export class CreateOneUserProjectsArgs {

    @Field(() => UserProjectsCreateInput, {nullable:false})
    data!: UserProjectsCreateInput;
}
