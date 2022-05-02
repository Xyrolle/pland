import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProjectsInput } from '../user/user-update-one-required-without-projects.input';
import { ProjectUpdateOneRequiredWithoutMembersInput } from '../project/project-update-one-required-without-members.input';

@InputType()
export class UserProjectsUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutProjectsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProjectsInput;

    @Field(() => ProjectUpdateOneRequiredWithoutMembersInput, {nullable:true})
    project?: ProjectUpdateOneRequiredWithoutMembersInput;
}
