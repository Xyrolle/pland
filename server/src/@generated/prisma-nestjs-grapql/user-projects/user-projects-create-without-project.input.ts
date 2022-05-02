import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProjectsInput } from '../user/user-create-nested-one-without-projects.input';

@InputType()
export class UserProjectsCreateWithoutProjectInput {

    @Field(() => UserCreateNestedOneWithoutProjectsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProjectsInput;
}
