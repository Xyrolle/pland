import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCreatedByInput } from './task-create-without-created-by.input';
import { TaskCreateOrConnectWithoutCreatedByInput } from './task-create-or-connect-without-created-by.input';
import { TaskCreateManyCreatedByInputEnvelope } from './task-create-many-created-by-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskCreateNestedManyWithoutCreatedByInput {

    @Field(() => [TaskCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<TaskCreateWithoutCreatedByInput>;

    @Field(() => [TaskCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutCreatedByInput>;

    @Field(() => TaskCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyCreatedByInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;
}
