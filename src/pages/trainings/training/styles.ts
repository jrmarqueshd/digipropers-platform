import styled from 'styled-components';
import { styles } from '../../../constants';

export const TrainingContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 88vh;

	.video-container {
		position: relative;
		margin-bottom: 24px;

		iframe {
			aspect-ratio: 16 / 9;
			width: 100%;
		}
	}

	@media screen {
		@media (min-width: 768px) {
			.video-container {
				height: 712px;
				display: flex;
				align-items: center;
				background-color: #222;
				margin-bottom: 56px;

				iframe {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					aspect-ratio: initial;
					height: 712px;
					max-width: 1440px;
				}
			}
		}
	}
`;

export const TrainingContentContainer = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: 16px;
	max-width: 1166px;
	width: 100%;
	margin: 0 auto;
	padding: 0 15px 64px;

	.description {
		max-width: 653px;

		h1 {
			font-family: 'Karla';
			font-size: 24px;
			line-height: 28px;
			color: #ffffff;
			margin-bottom: 8px;
		}

		h2 {
			font-size: 19px;
			line-height: 29px;
			color: rgba(255, 255, 255, 0.8);
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
		@media (min-width: ${styles.medias.md}) {
			flex-direction: row;
			justify-content: space-between;
			padding: 0 0 64px;

			.description {
				h1 {
					margin-bottom: 24px;
				}

				h2 {
					margin-bottom: 54px;
				}
			}

			.progress {
				min-width: 300px;
			}
		}
	}
`;
