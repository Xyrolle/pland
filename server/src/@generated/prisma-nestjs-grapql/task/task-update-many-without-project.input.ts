import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';
import { TaskCreateOrConnectWithoutProjectInput } from './task-create-or-connect-without-project.input';
import { TaskUpsertWithWhereUniqueWithoutProjectInput } from './task-upsert-with-where-unique-without-project.input';
import { TaskCreateManyProjectInputEnvelope } from './task-create-many-project-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';
import { TaskUpdateWithWhereUniqueWithoutProjectInput } from './task-update-with-where-unique-without-project.input';
import { TaskUpdateManyWithWhereWithoutProjectInput } from './task-update-many-with-where-without-project.input';
import { TaskScalarWhereInput } from './task-scalar-where.input';

@InputType()
export class TaskUpdateManyWithoutProjectInput {

    @Field(() => [TaskCreateWithoutProjectInput], {nullable:true})
    create?: Array<TaskCreateWithoutProjectInput>;

    @Field(() => [TaskCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutProjectInput>;

    @Field(() => [TaskUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => TaskCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyProjectInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    set?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    disconnect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    delete?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;

    @Field(() => [TaskUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    update?: Array<TaskUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [TaskUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    updateMany?: Array<TaskUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [TaskScalarWhereInput], {nullable:true})
    deleteMany?: Array<TaskScalarWhereInput>;
}
