import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateManyUserInput } from './user-to-projects-create-many-user.input';

@InputType()
export class UserToProjectsCreateManyUserInputEnvelope {

    @Field(() => [UserToProjectsCreateManyUserInput], {nullable:false})
    data!: Array<UserToProjectsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
