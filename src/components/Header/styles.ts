import styled, { css } from 'styled-components';

export const Container = styled.header`
	${({ theme }) => css`
		background-image: linear-gradient(to right, ${theme.colors.red}, ${theme.colors.blue}, ${theme.colors.red});
	`}

	max-width: 1440px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	position: relative;
	margin: 0 auto;

	& > svg {
		width: 30px;
		height: 30px;
		color: white;
	}

	& a.page {
		border-bottom: 2px solid white;
	}

	@media (max-width: 800px) {
		justify-content: space-between;
	}
`;
