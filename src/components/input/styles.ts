import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ errorMessage?: boolean; disabled?: boolean }>`
	position: relative;
	width: 100%;
	margin-bottom: 30px;

	& > *:not(label) {
		width: 100%;
	}

	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.6;
			cursor: not-allowed;
		`}

	${({ errorMessage }) =>
		errorMessage &&
		css`
			margin-bottom: 16px;

			outline-color: #ce3439 !important;

			.error-message {
				color: #ce3439;
				font-size: 14px;
				line-height: 14px;
				margin-top: 5px;
			}
		`}

	label {
		position: absolute;
		top: -17px;
		left: 22px;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #e7eef0;
		opacity: 0.7;
		padding: 8px;
		background: #151718;
		z-index: 1;
	}

	input {
		opacity: 0.6;
		border: 1px solid #e7eef0;
		border-radius: 4px;
		padding: 13px 30px;
		font-size: 17px;
		line-height: 17px;
		color: #e7eef0;
		box-sizing: border-box;
		background-color: transparent;

		${({ errorMessage }) =>
			errorMessage &&
			css`
				border-color: #ce3439;
			`}

		&::placeholder {
			color: #e7eef0;
			opacity: 0.2;
		}
	}
`;
