import { Container, SocialMedia, SocialMediasContainer } from './styles';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';

export default function Home() {
	return (
		<Container>
			<h1>Home</h1>
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
