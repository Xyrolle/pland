import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserToProjectsUserIdProjectIdCompoundUniqueInput } from './user-to-projects-user-id-project-id-compound-unique.input';

@InputType()
export class UserToProjectsWhereUniqueInput {

    @Field(() => UserToProjectsUserIdProjectIdCompoundUniqueInput, {nullable:true})
    userId_projectId?: UserToProjectsUserIdProjectIdCompoundUniqueInput;
}
