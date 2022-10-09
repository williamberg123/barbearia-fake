import styled from 'styled-components';

export const Nav = styled.nav`
	font-family: 'Georama', sans-serif;
	width: 100%;
	position: absolute;
	bottom: -1px;
	left: 0;
	z-index: 5;
`;

export const Navigation = styled.ul`
	width: 100%;
	height: calc(100vh - 80px);
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.red};
	position: absolute;

	& li {
		margin: 20px 0;
	}

	& a {
		color: white;
		text-decoration: none;
		padding: 20px;
		font-weight: 500;
		font-size: 1.3rem;
	}

	& a:hover {
		border-bottom: 1px solid white;
		transition: 0.3s;
	}
`;
