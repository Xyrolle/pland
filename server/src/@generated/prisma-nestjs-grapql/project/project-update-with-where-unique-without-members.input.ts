import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateWithoutMembersInput } from './project-update-without-members.input';

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutMembersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectUpdateWithoutMembersInput, {nullable:false})
    data!: ProjectUpdateWithoutMembersInput;
}
