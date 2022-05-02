import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsScalarWhereInput } from './user-projects-scalar-where.input';
import { UserProjectsUncheckedUpdateManyWithoutProjectsInput } from './user-projects-unchecked-update-many-without-projects.input';

@InputType()
export class UserProjectsUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserProjectsScalarWhereInput, {nullable:false})
    where!: UserProjectsScalarWhereInput;

    @Field(() => UserProjectsUncheckedUpdateManyWithoutProjectsInput, {nullable:false})
    data!: UserProjectsUncheckedUpdateManyWithoutProjectsInput;
}
