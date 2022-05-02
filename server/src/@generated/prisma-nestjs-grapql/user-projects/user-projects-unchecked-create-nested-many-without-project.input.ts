import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateWithoutProjectInput } from './user-projects-create-without-project.input';
import { UserProjectsCreateOrConnectWithoutProjectInput } from './user-projects-create-or-connect-without-project.input';
import { UserProjectsCreateManyProjectInputEnvelope } from './user-projects-create-many-project-input-envelope.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';

@InputType()
export class UserProjectsUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [UserProjectsCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserProjectsCreateWithoutProjectInput>;

    @Field(() => [UserProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => UserProjectsCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserProjectsCreateManyProjectInputEnvelope;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserProjectsWhereUniqueInput>;
}
