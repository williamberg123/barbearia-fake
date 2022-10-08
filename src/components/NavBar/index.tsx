import { Link } from 'react-router-dom';
import { Nav, Navigation } from './styles';

export default function NavBar() {
	return (
		<Nav>
			<Navigation>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/agendamento">Agendamento</Link>
				</li>

				<li>
					<Link to="/servicos">Serviços</Link>
				</li>
			</Navigation>
		</Nav>
	);
}
