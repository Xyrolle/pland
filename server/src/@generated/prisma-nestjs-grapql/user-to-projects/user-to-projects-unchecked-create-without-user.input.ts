import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserToProjectsUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    projectId!: number;
}
