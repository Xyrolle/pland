import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateManyCreatedByInput } from './task-create-many-created-by.input';

@InputType()
export class TaskCreateManyCreatedByInputEnvelope {

    @Field(() => [TaskCreateManyCreatedByInput], {nullable:false})
    data!: Array<TaskCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
