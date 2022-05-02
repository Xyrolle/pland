import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutTasksInput } from '../project/project-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateWithoutCreatedByInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ProjectCreateNestedOneWithoutTasksInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutTasksInput;
}
