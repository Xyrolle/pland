import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProjectsCreateManyInput } from './user-projects-create-many.input';

@ArgsType()
export class CreateManyUserProjectsArgs {

    @Field(() => [UserProjectsCreateManyInput], {nullable:false})
    data!: Array<UserProjectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
