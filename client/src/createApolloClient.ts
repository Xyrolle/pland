import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { GraphQLErrors } from '@apollo/client/errors';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';

import browserHistory from './browserHistory';
import { RoutePath } from './constants';

const retryLink = new RetryLink({
	attempts: {
		max: 3,
		// retryIf: (error, _operation) => {
		// 	console.log(error, _operation);
		// 	return !!error
		// }
		retryIf: (error) => !!error && (error as any).statusCode !== 401 && (error as any).statusCode !== 403
	},
	delay: {
		initial: 300,
	},
});

const httpLink = createHttpLink({
	uri: 'http://localhost:3003/graphql/',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('access_token');

	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

interface GraphQLErrorsWithStatusCode extends GraphQLErrors {
	statusCode: number
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach((error) => {
			const statusCode = (error as unknown as GraphQLErrorsWithStatusCode).statusCode;
			if (statusCode === 401) {
				browserHistory.push(RoutePath.login);
			}
		});
	}

	console.log(networkError, 'networkError')
});

const link = from([retryLink, authLink, errorLink, httpLink]);

export const createApolloClient = () => {
	return new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});
}
