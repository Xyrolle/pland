import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutProjectInput } from './task-update-without-project.input';

@InputType()
export class TaskUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutProjectInput, {nullable:false})
    data!: TaskUpdateWithoutProjectInput;
}
