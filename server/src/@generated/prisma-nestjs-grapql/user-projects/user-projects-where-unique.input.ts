import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsUserIdProjectIdCompoundUniqueInput } from './user-projects-user-id-project-id-compound-unique.input';

@InputType()
export class UserProjectsWhereUniqueInput {

    @Field(() => UserProjectsUserIdProjectIdCompoundUniqueInput, {nullable:true})
    userId_projectId?: UserProjectsUserIdProjectIdCompoundUniqueInput;
}
