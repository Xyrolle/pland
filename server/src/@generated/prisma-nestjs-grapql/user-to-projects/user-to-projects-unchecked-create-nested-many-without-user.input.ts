import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateWithoutUserInput } from './user-to-projects-create-without-user.input';
import { UserToProjectsCreateOrConnectWithoutUserInput } from './user-to-projects-create-or-connect-without-user.input';
import { UserToProjectsCreateManyUserInputEnvelope } from './user-to-projects-create-many-user-input-envelope.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';

@InputType()
export class UserToProjectsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserToProjectsCreateWithoutUserInput], {nullable:true})
    create?: Array<UserToProjectsCreateWithoutUserInput>;

    @Field(() => [UserToProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserToProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => UserToProjectsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserToProjectsCreateManyUserInputEnvelope;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserToProjectsWhereUniqueInput>;
}
