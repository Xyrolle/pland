import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { createApolloClient } from './createApolloClient';

import UserContextProvider from './Context';

import App from './App';

const client = createApolloClient();

ReactDOM.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</BrowserRouter>
	</ApolloProvider>,
	document.getElementById('root'),
);
