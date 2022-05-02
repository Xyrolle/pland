import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithoutProjectInput } from './user-projects-update-without-project.input';

@InputType()
export class UserProjectsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsUpdateWithoutProjectInput, {nullable:false})
    data!: UserProjectsUpdateWithoutProjectInput;
}
