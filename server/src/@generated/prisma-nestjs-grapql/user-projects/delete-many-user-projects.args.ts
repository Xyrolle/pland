import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsWhereInput } from './user-projects-where.input';

@ArgsType()
export class DeleteManyUserProjectsArgs {

    @Field(() => UserProjectsWhereInput, {nullable:true})
    where?: UserProjectsWhereInput;
}
