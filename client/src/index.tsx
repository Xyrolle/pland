import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';

const apolloClient = new ApolloClient({
	uri: 'http://localhost:3003/graphql/',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={apolloClient}>
		<App />
	</ApolloProvider>,
	document.getElementById('root'),
);
