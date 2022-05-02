import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => User, {nullable:false})
    createdBy?: User;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
