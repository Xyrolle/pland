import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutTaskInput } from './project-create-without-task.input';
import { ProjectCreateOrConnectWithoutTaskInput } from './project-create-or-connect-without-task.input';
import { ProjectUpsertWithoutTaskInput } from './project-upsert-without-task.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutTaskInput } from './project-update-without-task.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutTaskInput {

    @Field(() => ProjectCreateWithoutTaskInput, {nullable:true})
    create?: ProjectCreateWithoutTaskInput;

    @Field(() => ProjectCreateOrConnectWithoutTaskInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutTaskInput;

    @Field(() => ProjectUpsertWithoutTaskInput, {nullable:true})
    upsert?: ProjectUpsertWithoutTaskInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutTaskInput, {nullable:true})
    update?: ProjectUpdateWithoutTaskInput;
}
