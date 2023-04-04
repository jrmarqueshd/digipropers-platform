import styled from 'styled-components';
import { styles } from '../../constants';

export const DashboardContainer = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 16px;
	color: #ffffff;
	width: 100%;
	max-width: 1166px;
	margin: 0 auto 64px;

	h1 {
		font-weight: 700;
		font-size: 32px;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	h2 {
		font-weight: 200;
		font-size: 22px;
		line-height: 37px;
		opacity: 0.8;
	}

	.menu-items {
		display: flex;
		justify-content: center;
		gap: 24px;
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
			gap: 32px;

			h1 {
				line-height: 53px;
			}

			.menu-items {
				.card {
					max-width: 273px;
				}
			}
		}
	}
`;

export const DashboardCardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 35px 24px 31px;
	height: 100%;

	h3 {
		font-weight: 600;
		font-size: 18px;
		line-height: 30px;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	img {
		height: auto;
		max-width: 183px;
	}
`;
