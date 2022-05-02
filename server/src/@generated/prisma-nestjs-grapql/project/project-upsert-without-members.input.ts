import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutMembersInput } from './project-update-without-members.input';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';

@InputType()
export class ProjectUpsertWithoutMembersInput {

    @Field(() => ProjectUpdateWithoutMembersInput, {nullable:false})
    update!: ProjectUpdateWithoutMembersInput;

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:false})
    create!: ProjectCreateWithoutMembersInput;
}
