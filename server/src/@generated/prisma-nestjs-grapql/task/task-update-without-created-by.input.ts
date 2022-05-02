import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProjectUpdateOneRequiredWithoutTasksInput } from '../project/project-update-one-required-without-tasks.input';

@InputType()
export class TaskUpdateWithoutCreatedByInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutTasksInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutTasksInput;
}
