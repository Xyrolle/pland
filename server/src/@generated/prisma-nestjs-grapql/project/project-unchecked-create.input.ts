import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TaskUncheckedCreateNestedManyWithoutProjectInput } from '../task/task-unchecked-create-nested-many-without-project.input';
import { UserProjectsUncheckedCreateNestedManyWithoutProjectInput } from '../user-projects/user-projects-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => TaskUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => UserProjectsUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    members?: UserProjectsUncheckedCreateNestedManyWithoutProjectInput;
}
