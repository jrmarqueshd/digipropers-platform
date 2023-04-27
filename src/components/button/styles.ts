import styled, { css } from 'styled-components';
import { ButtonProps } from './interfaces';

export const ButtonContainer = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding-left: 15px;
	padding-right: 15px;

	--size: 15px;
	padding-top: var(--size);
	padding-bottom: var(--size);

	${({ size }) =>
		size === 'small' &&
		css`
			--size: 7.5px;
		`}

	${({ size }) =>
		size === 'smaller' &&
		css`
			--size: 2.5px;
		`}

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

	${({ loading }) =>
		loading &&
		css`
			cursor: wait;
			color: transparent;

			.loading {
				position: absolute;
			}
		`}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.6 !important;
			cursor: not-allowed;
		`}

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
