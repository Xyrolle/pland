import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUserProjectsInput } from './user-create-without-user-projects.input';

@InputType()
export class UserCreateOrConnectWithoutUserProjectsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserProjectsInput, {nullable:false})
    create!: UserCreateWithoutUserProjectsInput;
}
