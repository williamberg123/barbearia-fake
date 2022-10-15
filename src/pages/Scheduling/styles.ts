import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1440px;
	margin: auto;
	font-family: 'Goldman', cursive;

	& > form {
		width: 500px;
		position: fixed;
		top: 100px;
		left: calc(50% - 250px);
		display: flex;
		flex-direction: column;
		z-index: 5;
		background-color: white;
		padding: 20px;
		border-radius: 20px;
		font-weight: 500;

		& h2 {
			text-align: center;
			margin-bottom: 20px;
		}

		& span, & label {
			margin: 10px 0;
			font-size: 1.3rem;
		}

		& label {
			display: flex;
			flex-direction: column;

			& > input {
				padding: 10px;
				margin-top: 10px;
			}
		}

			& button[type="submit"] {
				font-family: 'Goldman', cursive;
				background-color: ${({ theme }) => theme.colors.red};
				color: white;
				border: none;
				padding: 15px;
				margin: 10px 0;
				border-radius: 5px;
				font-weight: bold;
				text-transform: uppercase;
				cursor: pointer;
			}
	}

	& > svg {
		display: flex;
		margin: 30px auto;
	}

	@media (max-width: 600px) {
		& > form {
			width: calc(100% - 40px);
			left: 20px;
		}
	}
`;

export const Title = styled.span`
	max-width: 1000px;
	display: flex;
	font-size: 1.7rem;
	font-weight: bold;
	text-transform: uppercase;
	padding: 20px;
	margin: 30px auto;
`;

export const DarkBackground = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
`;

export const CloseForm = styled.div`
	display: flex;
	width: 50px;
	height: 50px;
	position: fixed;
	top: 40px;
	right: 40px;
	z-index: 5;
	color: #e5e5e5;

	& svg {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 600px) {
		top: 20px;
		right: 20px;
	}
`;
