import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutProjectInput } from './user-create-without-project.input';

@InputType()
export class UserCreateOrConnectWithoutProjectInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutProjectInput, {nullable:false})
    create!: UserCreateWithoutProjectInput;
}
