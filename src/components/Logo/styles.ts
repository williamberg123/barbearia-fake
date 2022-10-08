import styled from 'styled-components';

export const Container = styled.div`
	font-weight: bold;
	display: flex;
	align-items: center;
	font-family: 'Goldman', cursive;
	color: white;
	text-shadow: 2px 2px 8px #222;

	& span.red {
		color: ${({ theme }) => theme.colors.red};
	}

	& > img {
		width: 25px;
		height: 25px;
	}
`;
