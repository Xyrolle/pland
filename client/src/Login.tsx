import { useContext, useState } from 'react';
import { ApolloError, gql, useMutation } from '@apollo/client';
import browserHistory from './browserHistory';
import { useUserContext } from './Context';
import { RoutePath } from './constants';

const LOGIN = gql`
	mutation login($loginUserInput: LoginUserInput!) {
		login(loginUserInput: $loginUserInput) {
			access_token
			user {
				username
			}
		}
	}
`;

const Login = () => {
	const { signIn } = useUserContext()

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [login, { data, loading, error }] = useMutation(LOGIN, {
		onError: (error: ApolloError) => console.log('error', error),
		onCompleted: ({ login: { user, access_token } }) => {
			signIn(user, access_token);
			browserHistory.push(RoutePath.projects);
		}
	});

	const handleSubmit = async () => {
		login({ variables: { loginUserInput: { username, password } } });
	};

	return (
		<>
			<input type="text" onChange={(e) => setUsername(e.target.value)} />
			<input type="password" onChange={(e) => setPassword(e.target.value)} />
			<button onClick={handleSubmit}>login</button>
			{error && <div>input valid username and password</div>}
		</>
	);
};

export default Login;
