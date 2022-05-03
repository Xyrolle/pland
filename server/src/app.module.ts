import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLDateTime } from 'graphql-iso-date';

import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { ApolloError } from 'apollo-server-express';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			resolvers: { DateTime: GraphQLDateTime },
			context: ({ req, res }) => {
				return {
					req,
					res,
				};
			},
			formatError: (error: ApolloError) => {
				const { message, statusCode } = error.extensions.response;

				return {
					message,
					statusCode,
				};
			},
		}),
		UsersModule,
		TasksModule,
		ProjectsModule,
		AuthModule,
	],
})
export class AppModule { }
