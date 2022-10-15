import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../contexts/AuthProvider';
import { Container } from './styles';

export default function Profile() {
	const { user } = useContext(AuthContext) as AuthContextType;
	const firstLetter = user?.email?.[0];

	return (
		<Container>
			{
				!!user && firstLetter
			}
		</Container>
	);
}
