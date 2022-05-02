import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutUserProjectsInput } from './project-create-without-user-projects.input';

@InputType()
export class ProjectCreateOrConnectWithoutUserProjectsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutUserProjectsInput, {nullable:false})
    create!: ProjectCreateWithoutUserProjectsInput;
}
