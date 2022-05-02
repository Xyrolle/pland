import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsScalarWhereInput } from './user-to-projects-scalar-where.input';
import { UserToProjectsUncheckedUpdateManyWithoutMembersInput } from './user-to-projects-unchecked-update-many-without-members.input';

@InputType()
export class UserToProjectsUpdateManyWithWhereWithoutProjectInput {

    @Field(() => UserToProjectsScalarWhereInput, {nullable:false})
    where!: UserToProjectsScalarWhereInput;

    @Field(() => UserToProjectsUncheckedUpdateManyWithoutMembersInput, {nullable:false})
    data!: UserToProjectsUncheckedUpdateManyWithoutMembersInput;
}
