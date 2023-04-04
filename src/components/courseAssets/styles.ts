import styled from 'styled-components';
import { styles } from '../../constants';

export const CourseAssetsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: #fff;
	gap: 20px;
	padding-bottom: 60px;
	margin-top: auto;

	.actions-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 24px;

		a {
			display: flex;
			align-items: center;
			gap: 14px;
			border: 1px solid transparent;
			padding: 16px 15px;
			min-width: 132px;
			background-color: rgba(255, 255, 255, 0.08);
			border-radius: 5px;
			text-align: center;
			transition: all 300ms ease-in-out;
			color: rgba(255, 255, 255, 0.75);

			img {
				opacity: 0.75;
				transition: all 300ms ease-in-out;
			}

			&:hover {
				color: rgba(255, 255, 255, 1);
				img {
					opacity: 1;
				}
			}
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			gap: 41px;

			.actions-container {
				a {
					gap: 24px;
				}
			}
		}
	}
`;
