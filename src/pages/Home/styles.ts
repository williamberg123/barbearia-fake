import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1440px;
	display: flex;
	flex-direction: column;
`;

export const BarberInfo = styled.div``;

export const SocialMediasContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SocialMedia = styled.span`
	display: flex;
	align-items: center;
	font-weight: bold;

	& > img {
		width: 50px;
		height: 50px;
		margin-right: 20px;
	}
`;
