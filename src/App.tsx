import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Routes from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
			</ThemeProvider>
			<GlobalStyles />
		</BrowserRouter>
	);
}
