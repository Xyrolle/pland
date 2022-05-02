import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserToProjectsCreateManyInput } from './user-to-projects-create-many.input';

@ArgsType()
export class CreateManyUserToProjectsArgs {

    @Field(() => [UserToProjectsCreateManyInput], {nullable:false})
    data!: Array<UserToProjectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
