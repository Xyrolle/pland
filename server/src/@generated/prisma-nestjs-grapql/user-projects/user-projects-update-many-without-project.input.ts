import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateWithoutProjectInput } from './user-projects-create-without-project.input';
import { UserProjectsCreateOrConnectWithoutProjectInput } from './user-projects-create-or-connect-without-project.input';
import { UserProjectsUpsertWithWhereUniqueWithoutProjectInput } from './user-projects-upsert-with-where-unique-without-project.input';
import { UserProjectsCreateManyProjectInputEnvelope } from './user-projects-create-many-project-input-envelope.input';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithWhereUniqueWithoutProjectInput } from './user-projects-update-with-where-unique-without-project.input';
import { UserProjectsUpdateManyWithWhereWithoutProjectInput } from './user-projects-update-many-with-where-without-project.input';
import { UserProjectsScalarWhereInput } from './user-projects-scalar-where.input';

@InputType()
export class UserProjectsUpdateManyWithoutProjectInput {

    @Field(() => [UserProjectsCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserProjectsCreateWithoutProjectInput>;

    @Field(() => [UserProjectsCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserProjectsCreateOrConnectWithoutProjectInput>;

    @Field(() => [UserProjectsUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    upsert?: Array<UserProjectsUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => UserProjectsCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserProjectsCreateManyProjectInputEnvelope;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    set?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    delete?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsWhereUniqueInput], {nullable:true})
    connect?: Array<UserProjectsWhereUniqueInput>;

    @Field(() => [UserProjectsUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    update?: Array<UserProjectsUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [UserProjectsUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    updateMany?: Array<UserProjectsUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [UserProjectsScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserProjectsScalarWhereInput>;
}
