import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsCreateWithoutUserInput } from './user-projects-create-without-user.input';

@InputType()
export class UserProjectsCreateOrConnectWithoutUserInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsCreateWithoutUserInput, {nullable:false})
    create!: UserProjectsCreateWithoutUserInput;
}
