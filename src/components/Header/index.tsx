import Logo from '../Logo';
import NavBar from '../NavBar';
import { Container } from './styles';

export default function Header() {
	return (
		<Container>
			<Logo />
			<NavBar />
		</Container>
	);
}
