import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserProjectsUpdateManyWithoutProjectInput } from '../user-projects/user-projects-update-many-without-project.input';

@InputType()
export class ProjectUpdateWithoutTasksInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserProjectsUpdateManyWithoutProjectInput, {nullable:true})
    members?: UserProjectsUpdateManyWithoutProjectInput;
}
