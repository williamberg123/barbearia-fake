import styled from 'styled-components';

export const Nav = styled.nav`
	font-family: 'Georama', sans-serif;
`;

export const Navigation = styled.ul`
	list-style: none;
	display: flex;

	& li {
		margin-right: 20px;
	}

	& a {
		color: white;
		text-decoration: none;
		padding: 10px 20px;
		font-weight: 500;
	}

	& a:hover {
		border-bottom: 1px solid white;
		transition: 0.3s;
	}
`;
