import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { TaskUncheckedUpdateManyWithoutProjectInput } from '../task/task-unchecked-update-many-without-project.input';
import { UserProjectsUncheckedUpdateManyWithoutProjectInput } from '../user-projects/user-projects-unchecked-update-many-without-project.input';

@InputType()
export class ProjectUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => TaskUncheckedUpdateManyWithoutProjectInput, {nullable:true})
    tasks?: TaskUncheckedUpdateManyWithoutProjectInput;

    @Field(() => UserProjectsUncheckedUpdateManyWithoutProjectInput, {nullable:true})
    members?: UserProjectsUncheckedUpdateManyWithoutProjectInput;
}
