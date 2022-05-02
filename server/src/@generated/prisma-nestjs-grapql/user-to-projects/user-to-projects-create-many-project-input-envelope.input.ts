import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsCreateManyProjectInput } from './user-to-projects-create-many-project.input';

@InputType()
export class UserToProjectsCreateManyProjectInputEnvelope {

    @Field(() => [UserToProjectsCreateManyProjectInput], {nullable:false})
    data!: Array<UserToProjectsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
