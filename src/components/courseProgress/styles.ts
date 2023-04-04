import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { styles } from '../../constants';

export const CourseProgressContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	margin-bottom: 30px;

	.heading {
		display: flex;
		align-items: flex-start;
		gap: 16px;

		.progress-statistics {
			h3 {
				font-size: 17px;
				line-height: 28px;
				color: rgba(255, 255, 255, 0.75);
			}

			span {
				font-size: 16px;
				line-height: 27px;
				color: rgba(255, 255, 255, 0.3);
			}
		}
	}

	.chapters-progress {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		.chapter-item {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			gap: 18px;
			font-size: 17px;
			line-height: 28px;
			color: rgba(255, 255, 255, 0.3);
			position: relative;

			h5,
			h6 {
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			&::before,
			&::after {
				content: '';
				display: block;
			}

			&::before {
				height: 10px;
				width: 10px;
				border-radius: 100%;
				border: 2px solid rgba(255, 255, 255, 0.3);
			}

			&:not(:last-child)::after {
				width: 4px;
				height: 38px;
				background-color: rgba(255, 255, 255, 0.3);
				position: absolute;
				left: 3px;
				top: 19px;
			}

			&.completed,
			&.heading {
				color: #fff;

				&::before {
					border-color: #fff;
					background-color: #fff;
				}
			}

			&.heading {
				font-size: 17px;
				line-height: 28px;
				color: rgba(255, 255, 255, 0.75);
				margin-bottom: 37px;

				&::before {
					height: 17px;
					width: 17px;
					margin-left: -4px;
					margin-right: -4px;
				}

				&::after {
					height: 73px;
					top: 26px;
				}
			}
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			gap: 50px;
		}
	}
`;

export const CourseProgressbar = styled(CircularProgressbar).attrs({
	strokeWidth: 24,
	styles: buildStyles({
		pathColor: `#fff`,
		trailColor: 'rgba(255, 255, 255, 0.17)',
	}),
})`
	width: 24px;
	height: 24px;
	margin-left: -7px;
	margin-right: -7px;
`;
