import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateWithoutProjectInput } from './task-create-without-project.input';
import { TaskCreateOrConnectWithoutProjectInput } from './task-create-or-connect-without-project.input';
import { TaskCreateManyProjectInputEnvelope } from './task-create-many-project-input-envelope.input';
import { TaskWhereUniqueInput } from './task-where-unique.input';

@InputType()
export class TaskUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [TaskCreateWithoutProjectInput], {nullable:true})
    create?: Array<TaskCreateWithoutProjectInput>;

    @Field(() => [TaskCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<TaskCreateOrConnectWithoutProjectInput>;

    @Field(() => TaskCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: TaskCreateManyProjectInputEnvelope;

    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    connect?: Array<TaskWhereUniqueInput>;
}
