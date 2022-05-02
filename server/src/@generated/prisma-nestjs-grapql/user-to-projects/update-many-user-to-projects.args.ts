import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsUncheckedUpdateManyInput } from './user-to-projects-unchecked-update-many.input';
import { UserToProjectsWhereInput } from './user-to-projects-where.input';

@ArgsType()
export class UpdateManyUserToProjectsArgs {

    @Field(() => UserToProjectsUncheckedUpdateManyInput, {nullable:false})
    data!: UserToProjectsUncheckedUpdateManyInput;

    @Field(() => UserToProjectsWhereInput, {nullable:true})
    where?: UserToProjectsWhereInput;
}
