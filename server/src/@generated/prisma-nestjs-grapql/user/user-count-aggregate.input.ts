import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {
	@Field(() => Boolean, { nullable: true })
	id?: true;

	@Field(() => Boolean, { nullable: true })
	name?: true;

	@Field(() => Boolean, { nullable: true })
	surname?: true;

	@Field(() => Boolean, { nullable: true })
	username?: true;

	@Field(() => Boolean, { nullable: true })
	email?: true;

	@Field(() => Boolean, { nullable: true })
	password?: true;

	@Field(() => Boolean, { nullable: true })
	createdAt?: true;

	@Field(() => Boolean, { nullable: true })
	_all?: true;
}