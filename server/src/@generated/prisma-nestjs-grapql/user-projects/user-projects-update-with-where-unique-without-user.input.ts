import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithoutUserInput } from './user-projects-update-without-user.input';

@InputType()
export class UserProjectsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsUpdateWithoutUserInput, {nullable:false})
    data!: UserProjectsUpdateWithoutUserInput;
}
