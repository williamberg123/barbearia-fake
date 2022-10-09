import { useContext, useEffect } from 'react';
import { AppContextType } from '../../@types/appContext';
import { AppContext } from '../../contexts/AppProvider';
import { Container } from './styles';

export default function ServicesPage() {
	const { changePage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		changePage('services');
	}, []);

	return (
		<Container>
			<h1>ServicesPage</h1>
		</Container>
	);
}
