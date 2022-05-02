import { registerEnumType } from '@nestjs/graphql';

export enum UserProjectsScalarFieldEnum {
    userId = "userId",
    projectId = "projectId"
}


registerEnumType(UserProjectsScalarFieldEnum, { name: 'UserProjectsScalarFieldEnum', description: undefined })
