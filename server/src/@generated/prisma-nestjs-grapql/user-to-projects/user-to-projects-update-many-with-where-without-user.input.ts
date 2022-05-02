import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsScalarWhereInput } from './user-to-projects-scalar-where.input';
import { UserToProjectsUncheckedUpdateManyWithoutProjectsInput } from './user-to-projects-unchecked-update-many-without-projects.input';

@InputType()
export class UserToProjectsUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserToProjectsScalarWhereInput, {nullable:false})
    where!: UserToProjectsScalarWhereInput;

    @Field(() => UserToProjectsUncheckedUpdateManyWithoutProjectsInput, {nullable:false})
    data!: UserToProjectsUncheckedUpdateManyWithoutProjectsInput;
}
