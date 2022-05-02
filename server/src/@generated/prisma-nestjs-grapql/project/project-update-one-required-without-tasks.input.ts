import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTasksInput } from './project-create-without-tasks.input';
import { ProjectCreateOrConnectWithoutTasksInput } from './project-create-or-connect-without-tasks.input';
import { ProjectUpsertWithoutTasksInput } from './project-upsert-without-tasks.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutTasksInput } from './project-update-without-tasks.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutTasksInput {

    @Field(() => ProjectCreateWithoutTasksInput, {nullable:true})
    create?: ProjectCreateWithoutTasksInput;

    @Field(() => ProjectCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput;

    @Field(() => ProjectUpsertWithoutTasksInput, {nullable:true})
    upsert?: ProjectUpsertWithoutTasksInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTasksInput, {nullable:true})
    update?: ProjectUpdateWithoutTasksInput;
}
