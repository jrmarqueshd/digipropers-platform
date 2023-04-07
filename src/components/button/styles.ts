import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button<{ dynamicColor?: string; secondary?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	font-weight: 400;
	font-size: 15.1168px;
	line-height: 1;
	text-align: center;
	color: #121212;
	background: #ffffff;
	border: 0;
	box-shadow: 0px 5.33533px 27.5659px rgba(255, 255, 255, 0.16);
	border-radius: 3.55689px;
	cursor: pointer;
	transition: all 100ms ease-in-out;

	&:active {
		opacity: 0.8;
	}

	${({ dynamicColor }) =>
		dynamicColor &&
		css`
			background: ${dynamicColor};
		`}

	${({ secondary }) =>
		secondary &&
		css`
			background: transparent;
			border: 1px solid #ffffff;
			border-radius: 4px;
			color: #ffffff;
		`}
`;
