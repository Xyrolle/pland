import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

import { RoutePath, ColorSchemeValue } from './constants';

import ProtectedRoute from './ProtectedRoute';

import './styles.less';

const ProjectListAsync = lazy(() => import('./ProjectList'));
const LoginAsync = lazy(() => import('./Login'));
const NavbarAsync = lazy(() => import('./Navbar'));

const App = () => {
	const themePreference = (localStorage.getItem('theme') as ColorSchemeValue);
	const theme = Object.values(ColorSchemeValue).includes(themePreference) ? themePreference : ColorSchemeValue.light;

	const [colorScheme, setColorScheme] = useState<ColorScheme>(theme);
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === ColorSchemeValue.dark ? ColorSchemeValue.light : ColorSchemeValue.dark));

	return (
		<>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{ colorScheme }} withGlobalStyles
					withNormalizeCSS>
					<Suspense fallback={<p>Loading</p>}>
						<Routes>
							<Route path={RoutePath.projects} element={
								<ProtectedRoute>
									<ProjectListAsync />
								</ProtectedRoute>
							} />
							<Route path={RoutePath.login} element={<LoginAsync />} />
							<Route path="*" element={<p>There's nothing here: 404!</p>} />
						</Routes>
					</Suspense>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default App;
