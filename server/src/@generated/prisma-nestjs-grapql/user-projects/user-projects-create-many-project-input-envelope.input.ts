import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProjectsCreateManyProjectInput } from './user-projects-create-many-project.input';

@InputType()
export class UserProjectsCreateManyProjectInputEnvelope {

    @Field(() => [UserProjectsCreateManyProjectInput], {nullable:false})
    data!: Array<UserProjectsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
