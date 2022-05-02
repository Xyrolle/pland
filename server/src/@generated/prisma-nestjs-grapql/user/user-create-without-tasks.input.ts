import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserProjectsCreateNestedManyWithoutUserInput } from '../user-projects/user-projects-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutTasksInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    surname!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserProjectsCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: UserProjectsCreateNestedManyWithoutUserInput;
}
