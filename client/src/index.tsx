import ReactDOM from 'react-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import browserHistory from './browserHistory';
import { createApolloClient } from './createApolloClient';

import UserContextProvider from './Context';

import App from './App';

const client = createApolloClient();

ReactDOM.render(
	<ApolloProvider client={client}>
		<HistoryRouter history={browserHistory}>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</HistoryRouter>
	</ApolloProvider>,
	document.getElementById('root'),
);
