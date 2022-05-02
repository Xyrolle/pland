import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsCreateInput } from './user-to-projects-create.input';

@ArgsType()
export class CreateOneUserToProjectsArgs {

    @Field(() => UserToProjectsCreateInput, {nullable:false})
    data!: UserToProjectsCreateInput;
}
