import { registerEnumType } from '@nestjs/graphql';

export enum UserToProjectsScalarFieldEnum {
    userId = "userId",
    projectId = "projectId"
}


registerEnumType(UserToProjectsScalarFieldEnum, { name: 'UserToProjectsScalarFieldEnum', description: undefined })
