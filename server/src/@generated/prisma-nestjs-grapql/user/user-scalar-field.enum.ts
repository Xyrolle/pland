import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
	id = 'id',
	name = 'name',
	surname = 'surname',
	username = 'username',
	email = 'email',
	password = 'password',
	createdAt = 'createdAt',
}

registerEnumType(UserScalarFieldEnum, {
	name: 'UserScalarFieldEnum',
	description: undefined,
});
