import styled from 'styled-components';
import { styles } from '../../constants';

export const B3DashboardContainer = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;
	color: #ffffff;
	width: 100%;
	max-width: ${styles.containerWidth};
	margin: 0 auto 64px;

	.menu-items {
		display: flex;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
		width: 100%;

		.card {
			width: 100%;
			max-width: 330px;
			height: 493px;
		}
	}

	@media screen {
		@media (min-width: ${styles.medias.md}) {
			h1 {
				line-height: 53px;
			}

			.menu-items {
				.card {
					max-width: 223px;
				}
			}
		}
	}
`;

export const B3DashboardCardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 35px 24px 31px;
	height: 100%;

	h2,
	h3 {
		font-weight: 600;
		font-size: 18px;
		line-height: 30px;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	h2 {
		font-size: 20.72px;
		line-height: 26px;
	}

	img {
		height: auto;
		max-width: 183px;
	}
`;
