import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyProjectInput } from './user-create-many-project.input';

@InputType()
export class UserCreateManyProjectInputEnvelope {

    @Field(() => [UserCreateManyProjectInput], {nullable:false})
    data!: Array<UserCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
