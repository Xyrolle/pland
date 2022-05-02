import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskUncheckedCreateNestedManyWithoutCreatedByInput } from '../task/task-unchecked-create-nested-many-without-created-by.input';
import { UserProjectsUncheckedCreateNestedManyWithoutUserInput } from '../user-projects/user-projects-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => TaskUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => UserProjectsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    projects?: UserProjectsUncheckedCreateNestedManyWithoutUserInput;
}
