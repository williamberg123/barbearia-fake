import { BarberFigure, BarberInfo, BarberInfoContainer, Container, SocialMedia, SocialMediasContainer } from './styles';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import barberPole from '../../assets/barber.png';

export default function Home() {
	return (
		<Container>
			<BarberInfoContainer>
				<BarberInfo>
					<span>
						BARBEARIA BERG CORTES
						<img src={barberPole} alt="Barber pole" />
					</span>

					<span>
						Seg à sáb - 8 às 12h e <br />
						14:30 às 18h
					</span>
				</BarberInfo>
				<BarberFigure>

				</BarberFigure>
			</BarberInfoContainer>

			<SocialMediasContainer>
				<SocialMedia>
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
