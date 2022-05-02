import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutUserProjectsInput } from './project-create-without-user-projects.input';
import { ProjectCreateOrConnectWithoutUserProjectsInput } from './project-create-or-connect-without-user-projects.input';
import { ProjectUpsertWithoutUserProjectsInput } from './project-upsert-without-user-projects.input';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutUserProjectsInput } from './project-update-without-user-projects.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutUserProjectsInput {

    @Field(() => ProjectCreateWithoutUserProjectsInput, {nullable:true})
    create?: ProjectCreateWithoutUserProjectsInput;

    @Field(() => ProjectCreateOrConnectWithoutUserProjectsInput, {nullable:true})
    connectOrCreate?: ProjectCreateOrConnectWithoutUserProjectsInput;

    @Field(() => ProjectUpsertWithoutUserProjectsInput, {nullable:true})
    upsert?: ProjectUpsertWithoutUserProjectsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    connect?: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutUserProjectsInput, {nullable:true})
    update?: ProjectUpdateWithoutUserProjectsInput;
}
