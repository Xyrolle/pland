import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsScalarWhereInput } from './user-projects-scalar-where.input';
import { UserProjectsUncheckedUpdateManyWithoutMembersInput } from './user-projects-unchecked-update-many-without-members.input';

@InputType()
export class UserProjectsUpdateManyWithWhereWithoutProjectInput {

    @Field(() => UserProjectsScalarWhereInput, {nullable:false})
    where!: UserProjectsScalarWhereInput;

    @Field(() => UserProjectsUncheckedUpdateManyWithoutMembersInput, {nullable:false})
    data!: UserProjectsUncheckedUpdateManyWithoutMembersInput;
}
