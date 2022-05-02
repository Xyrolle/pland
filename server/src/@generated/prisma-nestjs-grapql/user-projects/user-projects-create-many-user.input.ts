import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserProjectsCreateManyUserInput {

    @Field(() => Int, {nullable:false})
    projectId!: number;
}
