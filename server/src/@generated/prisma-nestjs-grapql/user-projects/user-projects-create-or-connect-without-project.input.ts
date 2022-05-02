import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsCreateWithoutProjectInput } from './user-projects-create-without-project.input';

@InputType()
export class UserProjectsCreateOrConnectWithoutProjectInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsCreateWithoutProjectInput, {nullable:false})
    create!: UserProjectsCreateWithoutProjectInput;
}
