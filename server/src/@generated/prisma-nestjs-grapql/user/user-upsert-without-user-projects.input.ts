import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserProjectsInput } from './user-update-without-user-projects.input';
import { UserCreateWithoutUserProjectsInput } from './user-create-without-user-projects.input';

@InputType()
export class UserUpsertWithoutUserProjectsInput {

    @Field(() => UserUpdateWithoutUserProjectsInput, {nullable:false})
    update!: UserUpdateWithoutUserProjectsInput;

    @Field(() => UserCreateWithoutUserProjectsInput, {nullable:false})
    create!: UserCreateWithoutUserProjectsInput;
}
