import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProjectsInput } from '../user/user-update-one-required-without-projects.input';

@InputType()
export class UserToProjectsUpdateWithoutProjectInput {

    @Field(() => UserUpdateOneRequiredWithoutProjectsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProjectsInput;
}
