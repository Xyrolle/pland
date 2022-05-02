import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithoutUserInput } from './user-projects-update-without-user.input';
import { UserProjectsCreateWithoutUserInput } from './user-projects-create-without-user.input';

@InputType()
export class UserProjectsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsUpdateWithoutUserInput, {nullable:false})
    update!: UserProjectsUpdateWithoutUserInput;

    @Field(() => UserProjectsCreateWithoutUserInput, {nullable:false})
    create!: UserProjectsCreateWithoutUserInput;
}
