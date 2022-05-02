import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsUncheckedUpdateManyInput } from './user-projects-unchecked-update-many.input';
import { UserProjectsWhereInput } from './user-projects-where.input';

@ArgsType()
export class UpdateManyUserProjectsArgs {

    @Field(() => UserProjectsUncheckedUpdateManyInput, {nullable:false})
    data!: UserProjectsUncheckedUpdateManyInput;

    @Field(() => UserProjectsWhereInput, {nullable:true})
    where?: UserProjectsWhereInput;
}
