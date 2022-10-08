import { Container } from './styles';
import barberPole from '../../assets/barber.png';

export default function Logo() {
	return (
		<Container>
			BERG<span className="red">CORTES</span>
			<img src={barberPole} alt="barber pole" />
		</Container>
	);
}
