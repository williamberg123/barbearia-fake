import { useContext, useEffect } from 'react';
import { BarberFigure, BarberInfo, BarberInfoContainer, Container, SocialMedia, SocialMediasContainer } from './styles';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import barberPole from '../../assets/barber.png';
import barberImage from '../../assets/barber-image.png';
import { AppContext } from '../../contexts/AppProvider';
import { AppContextType } from '../../@types/appContext';

export default function Home() {
	const { changePage } = useContext(AppContext) as AppContextType;

	useEffect(() => {
		changePage('home');
	}, []);

	return (
		<Container>
			<BarberInfoContainer>
				<BarberInfo>
					<span className="barber-name">
						BARBEARIA BERG CORTES
						<img src={barberPole} alt="Barber pole" />
					</span>

					<span className="barber-hour">
						Seg à sáb - 8 às 12h e <br />
						14:30 às 18h
					</span>
				</BarberInfo>
				<BarberFigure>
					<img src={barberImage} alt="Barber" />
				</BarberFigure>
			</BarberInfoContainer>

			<SocialMediasContainer>
				<SocialMedia rel="noreferrer" target="_blank" href="https://www.instagram.com/devberg_">
					<img src={instagramIcon} alt="Instagram Icon" />
					@berg_du_corte
				</SocialMedia>

				<SocialMedia>
					<img src={whatsappIcon} alt="Whatsapp Icon" />
					(88) 99999-9999
				</SocialMedia>
			</SocialMediasContainer>
		</Container>
	);
}
