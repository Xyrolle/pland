import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutProjectInput } from './task-update-without-project.input';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutProjectInput, {nullable:false})
    update!: TaskUpdateWithoutProjectInput;

    @Field(() => TaskCreateWithoutProjectInput, {nullable:false})
    create!: TaskCreateWithoutProjectInput;
}
