import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';
import { UserCreateOrConnectWithoutProjectInput } from './user-create-or-connect-without-project.input';
import { UserCreateManyProjectInputEnvelope } from './user-create-many-project-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutProjectInput {

    @Field(() => [UserCreateWithoutProjectInput], {nullable:true})
    create?: Array<UserCreateWithoutProjectInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectInput>;

    @Field(() => UserCreateManyProjectInputEnvelope, {nullable:true})
    createMany?: UserCreateManyProjectInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
