import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Task } from '../task/task.model';
import { UserProjects } from '../user-projects/user-projects.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;

    @Field(() => [UserProjects], {nullable:true})
    members?: Array<UserProjects>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
