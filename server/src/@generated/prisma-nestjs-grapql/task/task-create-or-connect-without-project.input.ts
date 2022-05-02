import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';

@InputType()
export class TaskCreateOrConnectWithoutProjectInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutProjectInput, {nullable:false})
    create!: TaskCreateWithoutProjectInput;
}
