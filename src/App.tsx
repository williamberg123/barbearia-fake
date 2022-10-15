import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { AppProvider } from './contexts/AppProvider';
import { AuthContext, AuthContextType } from './contexts/AuthProvider';
import SchedulingPageProvider from './contexts/SchedulingPageProvider';
import Routes from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	const { user } = useContext(AuthContext) as AuthContextType;

	return (
		<BrowserRouter>
			<AppProvider>
				<SchedulingPageProvider>
					<ThemeProvider theme={theme}>
						{
							!!user && <Header />
						}
						<Routes />
					</ThemeProvider>
					<GlobalStyles />
				</SchedulingPageProvider>
			</AppProvider>
		</BrowserRouter>
	);
}
