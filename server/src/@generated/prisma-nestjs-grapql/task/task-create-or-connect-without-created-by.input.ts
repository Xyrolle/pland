import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskCreateWithoutCreatedByInput } from './task-create-without-created-by.input';

@InputType()
export class TaskCreateOrConnectWithoutCreatedByInput {

    @Field(() => TaskWhereUniqueInput, {nullable:false})
    where!: TaskWhereUniqueInput;

    @Field(() => TaskCreateWithoutCreatedByInput, {nullable:false})
    create!: TaskCreateWithoutCreatedByInput;
}
