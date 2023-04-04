import styled, { css } from 'styled-components';
import { styles } from '../../constants';

export const BpDashboardContainer = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;
	color: #ffffff;
	width: 100%;
	max-width: 1166px;
	margin: 0 auto 64px;

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			h1 {
				line-height: 53px;
			}
		}
	}
`;

export const BpBotCard = styled.div<{ premium?: boolean; disabled?: boolean }>`
	border-radius: 6px;
	background: rgba(${({ premium }) => (premium ? '158, 108, 11, 0.5' : '23, 158, 11, 0.5')});
	transition: all 300ms ease-in-out;
	padding: 9px 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	width: 100%;
	max-width: 642px;
	position: relative;

	h3 {
		font-weight: 400;
		font-size: 16px;
		line-height: 27px;
		color: rgba(255, 255, 255, 0.95);
	}

	span {
		font-weight: 300;
		font-size: 14px;
		line-height: 23px;
		letter-spacing: -0.02em;
		color: rgba(255, 255, 255, 0.75);
	}

	.lock-icon {
		position: absolute;
		right: 24px;
		height: auto;
		width: 27px;
	}

	${({ disabled, premium }) =>
		disabled &&
		css`
			background: rgba(${premium ? '158, 108, 11, 0.11' : '23, 158, 11, 0.11'}) !important;
			cursor: not-allowed;
		`}

	&:hover {
		background: rgba(${({ premium }) => (premium ? '158, 108, 11, 0.8' : '23, 158, 11, 0.8')});
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			padding: 9px 32px;

			.lock-icon {
				right: 32px;
			}
		}
	}
`;
