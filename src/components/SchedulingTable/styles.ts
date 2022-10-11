import styled from 'styled-components';

export const Table = styled.table`
	width: 900px;
	margin: auto;
	border-radius: 10px;
	border-collapse: collapse;

	& tr td:nth-last-child(2) {
		font-weight: bold;
	}

	& td, & th {
		padding: 15px;
		border: 1px solid transparent;
		border-bottom: 1px solid #9e9e9e;
		text-align: center;
	}

	& td.free-time {
		color: #00bc2f;
	}

	& td.closed-time {
		color: ${({ theme }) => theme.colors.red};
	}

	& th {
		text-transform: uppercase;
	}

	@media (max-width: 900px) {
		width: 100%;
	}
`;
