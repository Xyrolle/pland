import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateWithoutUserInput } from './user-projects-create-without-user.input';
import { UserProjectsCreateOrConnectWithoutUserInput } from './user-projects-create-or-connect-without-user.input';
import { UserProjectsCreateManyUserInputEnvelope } from './user-projects-create-many-user-input-envelope.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';

@InputType()
export class UserProjectsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserProjectsCreateWithoutUserInput], {nullable:true})
    create?: Array<UserProjectsCreateWithoutUserInput>;

    @Field(() => [UserProjectsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UserProjectsCreateOrConnectWithoutUserInput>;

    @Field(() => UserProjectsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UserProjectsCreateManyUserInputEnvelope;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserProjectsWhereUniqueInput>;
}
