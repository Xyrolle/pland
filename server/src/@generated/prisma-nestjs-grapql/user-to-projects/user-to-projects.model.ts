import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';

@ObjectType()
export class UserToProjects {

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
