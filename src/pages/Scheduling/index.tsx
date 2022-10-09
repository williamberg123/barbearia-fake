import { useContext, useEffect } from 'react';
import { AppContextType } from '../../@types/appContext';
import { AppContext } from '../../contexts/AppProvider';
import { Container } from './styles';

export default function Scheduling() {
	const { changePage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		changePage('schedule');
	}, []);

	return (
		<Container>
			<h1>Scheduling</h1>
		</Container>
	);
}
