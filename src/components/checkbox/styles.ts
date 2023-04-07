import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.div<{ errorMessage?: boolean; disabled?: boolean }>`
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

			.error-message {
				color: #ce3439;
				font-size: 14px;
				line-height: 14px;
				margin-top: 5px;
			}
		`}

	label {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #e7eef0;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 8px;

		span {
			font-weight: 300;
			opacity: 0.7;
		}
	}

	input {
		background: #ffffff;
		border-radius: 2px;
		width: 14px;
		height: 14px;

		${({ errorMessage }) =>
			errorMessage &&
			css`
				border-color: #ce3439;
			`}
	}
`;
