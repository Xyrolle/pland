import { useState } from 'react';
import { TextInput, Checkbox, Button, Group, Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { ApolloError, gql, useMutation } from '@apollo/client';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useUserContext } from './Context';

import { RoutePath } from './constants';
import { isAuthenticated } from './isAuthenticated';

const LOGIN = gql`
	mutation login($loginUserInput: LoginUserInput!) {
		login(loginUserInput: $loginUserInput) {
			access_token
			user {
				username
				id
			}
		}
	}
`;

interface FormValues {
	username: string;
	password: string;
	termsOfService: boolean;
}

const Login = () => {
	const { signIn } = useUserContext();

	if (isAuthenticated()) {
		return <Navigate to={RoutePath.projects} replace />;
	}

	const form = useForm({
		initialValues: {
			username: '',
			password: '',
			termsOfService: false,
		},

		validate: {
			username: (value) => (value.length >= 3 ? null : 'Username must be at least 3 characters long'),
		},
	});

	const navigate = useNavigate();
	const location = useLocation();

	const [login, { data, loading, error }] = useMutation(LOGIN, {
		onError: (error: ApolloError) => console.log('error', error),
		onCompleted: ({ login: { user, access_token } }) => {
			signIn(user, access_token);
			navigate((location?.state as any)?.from.pathname ?? '/')
		}
	});

	const handleSubmit = ({ username, password }: FormValues) => {
		login({ variables: { loginUserInput: { username, password } } });
	};

	return (
		<div className="login-form">
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
					<TextInput
						required
						label="Username"
						placeholder="username"
						autoComplete="username"
						{...form.getInputProps('username')}
					/>
					<PasswordInput
						required
						label="Password"
						placeholder="Password"
						autoComplete="current-password"
						{...form.getInputProps('password')}
					/>
					<Checkbox
						required
						mt="md"
						label="I agree to sell my privacy"
						{...form.getInputProps('termsOfService', { type: 'checkbox' })}
					/>

					<Group position="right" mt="md">
						<Button type="submit">Submit</Button>
					</Group>
				</form>
			</Box>
		</div>
	);
};

export default Login;
