import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContextType } from '../../@types/appContext';
import { AppContext } from '../../contexts/AppProvider';
import { Nav, Navigation } from './styles';

export default function MobileNavBar({ toggleMenu }: { toggleMenu: () => void }) {
	const { page } = useContext(AppContext) as AppContextType;

	return (
		<Nav>
			<Navigation>
				<li>
					<Link onClick={toggleMenu} className={page === 'home' ? 'page' : ''} to="/">Home</Link>
				</li>

				<li>
					<Link onClick={toggleMenu} className={page === 'schedule' ? 'page' : ''} to="/agendamento">Agendamento</Link>
				</li>

				<li>
					<Link onClick={toggleMenu} className={page === 'services' ? 'page' : ''} to="/servicos">Serviços</Link>
				</li>
			</Navigation>
		</Nav>
	);
}
