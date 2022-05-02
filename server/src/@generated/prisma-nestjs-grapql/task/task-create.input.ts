import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTasksInput } from '../user/user-create-nested-one-without-tasks.input';
import { ProjectCreateNestedOneWithoutTasksInput } from '../project/project-create-nested-one-without-tasks.input';

@InputType()
export class TaskCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedOneWithoutTasksInput, {nullable:false})
    createdBy!: UserCreateNestedOneWithoutTasksInput;

    @Field(() => ProjectCreateNestedOneWithoutTasksInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutTasksInput;
}
