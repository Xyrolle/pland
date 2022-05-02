import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsWhereUniqueInput } from './user-projects-where-unique.input';
import { UserProjectsUpdateWithoutProjectInput } from './user-projects-update-without-project.input';
import { UserProjectsCreateWithoutProjectInput } from './user-projects-create-without-project.input';

@InputType()
export class UserProjectsUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => UserProjectsWhereUniqueInput, {nullable:false})
    where!: UserProjectsWhereUniqueInput;

    @Field(() => UserProjectsUpdateWithoutProjectInput, {nullable:false})
    update!: UserProjectsUpdateWithoutProjectInput;

    @Field(() => UserProjectsCreateWithoutProjectInput, {nullable:false})
    create!: UserProjectsCreateWithoutProjectInput;
}
