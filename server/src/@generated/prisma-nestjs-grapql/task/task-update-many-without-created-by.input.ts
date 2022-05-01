import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutCreatedByInput } from './task-create-without-created-by.input';
import { TaskCreateOrConnectWithoutCreatedByInput } from './task-create-or-connect-without-created-by.input';
import { TaskUpsertWithWhereUniqueWithoutCreatedByInput } from './task-upsert-with-where-unique-without-created-by.input';
import { TaskCreateManyCreatedByInputEnvelope } from './task-create-many-created-by-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutCreatedByInput } from './task-update-with-where-unique-without-created-by.input';
import { TaskUpdateManyWithWhereWithoutCreatedByInput } from './task-update-many-with-where-without-created-by.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutCreatedByInput {

    @Field(() => [TaskCreateWithoutCreatedByInput], {nullable:true})
    create?: Array<TaskCreateWithoutCreatedByInput>;

    @Field(() => [TaskCreateOrConnectWithoutCreatedByInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => TaskCreateManyCreatedByInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyCreatedByInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    update?: Array<TaskUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    updateMany?: Array<TaskUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskScalarWhereInput>;
}
