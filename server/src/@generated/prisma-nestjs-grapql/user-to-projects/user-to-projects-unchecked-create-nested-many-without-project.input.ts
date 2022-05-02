import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateWithoutProjectInput } from './user-to-projects-create-without-project.input';
import { UserToProjectsCreateOrConnectWithoutProjectInput } from './user-to-projects-create-or-connect-without-project.input';
import { UserToProjectsCreateManyProjectInputEnvelope } from './user-to-projects-create-many-project-input-envelope.input';
import { UserToProjectsWhereUniqueInput } from './user-to-projects-where-unique.input';

@InputType()
export class UserToProjectsUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [UserToProjectsCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserToProjectsCreateWithoutProjectInput>;

    @Field(() => [UserToProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserToProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => UserToProjectsCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserToProjectsCreateManyProjectInputEnvelope;

    @Field(() => [UserToProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserToProjectsWhereUniqueInput>;
}
