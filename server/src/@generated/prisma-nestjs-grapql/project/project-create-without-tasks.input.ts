import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateNestedManyWithoutProjectInput } from '../user-projects/user-projects-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutTasksInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserProjectsCreateNestedManyWithoutProjectInput, {nullable:true})
    members?: UserProjectsCreateNestedManyWithoutProjectInput;
}
