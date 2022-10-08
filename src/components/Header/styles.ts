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
`;
