import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutProjectsInput } from './user-create-without-projects.input';
import { UserCreateOrConnectWithoutProjectsInput } from './user-create-or-connect-without-projects.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutProjectsInput {

    @Field(() => [UserCreateWithoutProjectsInput], {nullable:true})
    create?: Array<UserCreateWithoutProjectsInput>;

    @Field(() => [UserCreateOrConnectWithoutProjectsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutProjectsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
