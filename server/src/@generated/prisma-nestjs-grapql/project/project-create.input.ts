import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TaskCreateNestedManyWithoutProjectInput } from '../task/task-create-nested-many-without-project.input';
import { UserProjectsCreateNestedManyWithoutProjectInput } from '../user-projects/user-projects-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TaskCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskCreateNestedManyWithoutProjectInput;

    @Field(() => UserProjectsCreateNestedManyWithoutProjectInput, {nullable:true})
    members?: UserProjectsCreateNestedManyWithoutProjectInput;
}
