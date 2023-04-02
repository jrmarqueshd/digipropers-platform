import styled from 'styled-components';

export const TrainingContainer = styled.div`
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
