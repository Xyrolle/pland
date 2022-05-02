import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyProjectInput } from './task-create-many-project.input';

@InputType()
export class TaskCreateManyProjectInputEnvelope {

    @Field(() => [TaskCreateManyProjectInput], {nullable:false})
    data!: Array<TaskCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
