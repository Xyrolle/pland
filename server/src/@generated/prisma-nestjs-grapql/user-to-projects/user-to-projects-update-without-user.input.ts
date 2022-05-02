import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateOneRequiredWithoutMembersInput } from '../project/project-update-one-required-without-members.input';

@InputType()
export class UserToProjectsUpdateWithoutUserInput {

    @Field(() => ProjectUpdateOneRequiredWithoutMembersInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutMembersInput;
}
