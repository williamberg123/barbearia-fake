import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

export const BarberInfoContainer = styled.div`
	font-family: 'Goldman', cursive;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 50px 20px;
	flex-wrap: wrap;
`;

export const BarberInfo = styled.div`
	display: flex;
	flex-direction: column;
	animation: emergeleft 1s ease;

	& span {
		margin-bottom: 20px;
	}

	& span.barber-name {
		max-width: 400px;
		color: ${({ theme }) => theme.colors.red};
		font-weight: bold;
		font-size: 2rem;

		& > img {
			display: inline;
			width: 40px;
			height: 40px;
			margin-bottom: -10px;
		}
	}

	& span.barber-hour {
		font-size: 1.3rem;
		color: #828282;
	}

	@keyframes emergeleft {
		0% {
			transform: translateX(-50px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}

	@media (max-width: 1039px) {
		& span.barber-name {
			max-width: 100%;
		}
	}
`;

export const BarberFigure = styled.figure`
	max-width: 600px;
	animation: emerge 1s ease;

	& > img {
		width: 100%;
		border-radius: 10px;
	}

	@keyframes emerge {
		0% {
			transform: translateX(50px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}
`;

export const SocialMediasContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;
`;

export const SocialMedia = styled.a`
	display: flex;
	align-items: center;
	font-weight: bold;
	margin: 20px 0;
	text-decoration: none;
	color: black;

	& > img {
		width: 50px;
		height: 50px;
		margin-right: 20px;
	}
`;
