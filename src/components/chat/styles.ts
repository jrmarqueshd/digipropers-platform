import styled from 'styled-components';
import { styles } from '../../constants';
import { css } from '@emotion/react';

export const ChatContainer = styled.div`
	background: #212121;
	border-radius: 5.44928px;
	padding: 17px 0 13px;
	width: 100%;

	h3 {
		font-weight: 700;
		font-size: 19.0725px;
		line-height: 22px;
		color: #ffffff;
		text-align: center;
		display: block;
		padding-bottom: 11px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		text-transform: uppercase;
	}

	@media screen {
		@media (min-width: ${styles.medias.xl}) {
			width: 368px;
		}
	}
`;

export const ChatMessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 17px;
	padding: 30px 18px;
	max-height: 470px;
	overflow-y: auto;

	@media screen {
		@media (min-width: ${styles.medias.xl}) {
			height: 430px;
		}
	}
`;

export const ChatMessageItem = styled.div`
	display: flex;
	gap: 12px;
	position: relative;

	.profile-img {
		width: 40px;
		height: 40px;
		display: block;
		border-radius: 100%;
		margin-top: 7px;
	}

	.chat-arrow {
		width: 0;
		height: 0;
		border-right: 8px solid #333333; // width
		border-top: 8px solid transparent; // height
		border-bottom: 8px solid transparent; // height
		position: absolute;
		top: 19px;
		left: 45px;
	}

	.message {
		border-radius: 6.60364px;
		background: #333333;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		min-height: 60px;

		.message-title,
		.message-content {
			padding: 8px 11px;
			font-weight: 400;
		}

		.message-title {
			font-size: 9.90545px;
			padding-top: 0;
			padding-bottom: 0;
			line-height: 16px;
			color: #fff;
			background: #474747;
		}

		.message-content {
			font-size: 11.5564px;
			line-height: 19px;
			color: #ffffff;
			padding-right: 20px;
		}
	}

	&.fixed {
		position: sticky;
		top: -30px;
		left: 0px;
		right: 0px;
		z-index: 10;
		margin-left: -18px;
		margin-right: -18px;

		.message {
			gap: 0;
			min-height: 40px;
			width: 100%;
			padding-right: 15px;
		}

		.pin {
			position: absolute;
			right: 15px;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`;

export const ChatFormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px 12px 0;
	border-top: 1px solid rgba(255, 255, 255, 0.1);

	input {
		background: #333333;
		border-radius: 5.44928px;
		border: none;
		padding: 7px 12px;
		font-weight: 400;
		font-size: 11.54px;
		color: #fff;
		width: 100%;
		box-sizing: border-box;

		&::placeholder {
			font-weight: 400;
			font-size: 11.54px;
			line-height: 19px;
			color: #e7eef0;
			opacity: 0.2;
		}

		&:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 17px;
		background-color: transparent;
		border: none;
		transition: all 100ms ease-in-out;
		cursor: pointer;

		&:active {
			opacity: 0.8;
		}

		&:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}
	}
`;
