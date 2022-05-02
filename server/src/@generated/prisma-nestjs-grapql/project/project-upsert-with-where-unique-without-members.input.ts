import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutMembersInput } from './project-update-without-members.input';
import { ProjectCreateWithoutMembersInput } from './project-create-without-members.input';

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutMembersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutMembersInput, {nullable:false})
    update!: ProjectUpdateWithoutMembersInput;

    @Field(() => ProjectCreateWithoutMembersInput, {nullable:false})
    create!: ProjectCreateWithoutMembersInput;
}
