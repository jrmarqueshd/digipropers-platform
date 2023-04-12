import styled from 'styled-components';
import { styles } from '../../constants';

export const LiveContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 88vh;
	width: 100%;
	max-width: ${styles.containerWidth};
	margin: 0 auto;
`;

export const LiveVideoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;

	.video-container {
		width: 100%;

		iframe {
			aspect-ratio: 16 / 9;
			width: 100%;
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			gap: 32px;
		}

		@media (min-width: ${styles.medias.xl}) {
			flex-direction: row;

			.video-container {
				width: 100%;

				iframe {
					aspect-ratio: 16 / 9;
					width: 100%;
					height: 536px;
				}
			}

			.chat-container {
				max-width: 368px;
			}
		}
	}
`;

export const LiveContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-width: ${styles.containerWidth};
	width: 100%;
	margin: 0 auto;
	padding: 0 0 64px;

	.live-assets {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 805.92px;
		margin-bottom: 39px;

		button {
			width: 300px;
		}

		.watchers-amount {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 19px;
			line-height: 29px;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.description {
		max-width: 653px;

		h2 {
			font-size: 19px;
			line-height: 29px;
			color: rgba(255, 255, 255, 0.8);
			font-weight: 300;
			margin-bottom: 26px;
		}

		p {
			color: rgba(255, 255, 255, 0.6);
			white-space: pre-line;
			line-height: 25px;
			font-size: 18px;
			line-height: 25px;
			font-weight: 200;
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.xl}) {
			.live-assets {
				max-width: 766px;
			}
		}
	}
`;
