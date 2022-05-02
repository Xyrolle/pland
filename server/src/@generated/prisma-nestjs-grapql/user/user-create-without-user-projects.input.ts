import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { TaskCreateNestedManyWithoutCreatedByInput } from '../task/task-create-nested-many-without-created-by.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserCreateWithoutUserProjectsInput {

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

    @Field(() => TaskCreateNestedManyWithoutCreatedByInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutCreatedByInput;

    @Field(() => Int, {nullable:true})
    projectId?: number;
}
