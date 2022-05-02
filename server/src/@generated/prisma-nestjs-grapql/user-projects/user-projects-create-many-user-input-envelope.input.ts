import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateManyUserInput } from './user-projects-create-many-user.input';

@InputType()
export class UserProjectsCreateManyUserInputEnvelope {

    @Field(() => [UserProjectsCreateManyUserInput], {nullable:false})
    data!: Array<UserProjectsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
