import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectCreateWithoutUsersInput } from './project-create-without-users.input';

@InputType()
export class ProjectCreateOrConnectWithoutUsersInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    where!: ProjectWhereUniqueInput;

    @Field(() => ProjectCreateWithoutUsersInput, {nullable:false})
    create!: ProjectCreateWithoutUsersInput;
}
