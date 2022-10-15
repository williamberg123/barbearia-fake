import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.blue};
	color: white;
	font-weight: bold;
	border-radius: 50%;
	position: absolute;
	right: 20px;
	top: calc(50% - 20px);
	text-align: center;
`;
