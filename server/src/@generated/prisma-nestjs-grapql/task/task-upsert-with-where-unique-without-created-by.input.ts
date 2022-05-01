import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithoutCreatedByInput } from './task-update-without-created-by.input';
import { TaskCreateWithoutCreatedByInput } from './task-create-without-created-by.input';

@InputType()
export class TaskUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskUpdateWithoutCreatedByInput, {nullable:false})
    update!: TaskUpdateWithoutCreatedByInput;

    @Field(() => TaskCreateWithoutCreatedByInput, {nullable:false})
    create!: TaskCreateWithoutCreatedByInput;
}
