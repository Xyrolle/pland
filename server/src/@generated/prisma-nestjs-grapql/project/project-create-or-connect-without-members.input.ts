import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';

@InputType()
export class ProjectCreateOrConnectWithoutMembersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:false})
    create!: ProjectCreateWithoutMembersInput;
}
